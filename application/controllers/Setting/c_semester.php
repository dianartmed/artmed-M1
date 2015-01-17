<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class C_semester extends CI_Controller{
	public function __construct(){
		parent::__construct();
		$this->load->model('Setting/m_semester');
	}

	public function getSemester(){
		$start 		= ($this->input->post('start',TRUE) ? $this->input->post('start',TRUE) : 0);
		$limit 		= ($this->input->post('limit',TRUE) ? $this->input->post('limit',TRUE) : 20);
		$result 	= $this->m_semester->getGridSemester($start, $limit);
		$result1 	= $this->m_semester->countGridSemester();
		$count 		= $result1->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]= array(
				'id' 		=> $value->id,
				'name'		=> $value->name,
				'isactive' 	=> $value->isactive
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delSemester(){
		$data = json_decode($this->input->post('post'));
		foreach ($data as $row) {
			$this->m_semester->delSemester($row->id);
		}

		$this->getSemester();
	}

	public function saveSemester(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE):'');
		$isactive1 	= ($this->input->post('isactive', TRUE) ? $this->input->post('isactive', TRUE) : '');
		if($isactive1==TRUE){
			$isactive = 'Y';
		} else {
			$isactive = 'N';
		}

		$uuid 		= $this->m_semester->getUUID();

		if($name == '' && $name == NULL){
			$success = 0;
		} elseif($this->m_semester->cekSemester($name) == 0){
			$this->m_semester->saveSemester($name, $isactive, $uuid);
			if($this->m_semester->saveConfirm($uuid)==0){
				$success = 0;
			} else {
				$success = 1;
			}
		} else {
			$success = 2;
		}

		$data['total'] 		= $success;
		$data['success']	= TRUE;
		echo json_encode($data);
	}

	public function editSemester(){
		$id 		= ($this->input->post('id', TRUE) ? $this->input->post('id', TRUE) : '');
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE):'');
	    if($this->input->post('isactive') == 'true') { $isactive = 'Y'; } else { $isactive = 'N'; }

	    if($this->m_semester->cekNameID($name, $id)==0){
	    	$this->m_semester->editSemester($name, $isactive, $id);
	    	$success = 1;
	    } else {
	    	$success = 0;
	    }

	    $data['total'] 		= $success;
	    $data['success']	= TRUE;
	    echo json_encode($data);	
	}

	public function searchSemester(){
		$tahun 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE):'');
		$result 	= $this->m_semester->searchSemester($tahun);
		foreach ($result->result() as $key => $value) {
			$data['data'][] = array(
				'name' => $value->name, 
			);
		}

		$data['success'] = TRUE;
		echo json_encode($data);
	}
}