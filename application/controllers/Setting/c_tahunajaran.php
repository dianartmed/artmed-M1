<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class C_tahunajaran extends CI_Controller{
	public function __construct(){
		parent::__construct();
		$this->load->model('Setting/m_tahunajaran');
	}

	public function getTahunAjaran(){
		$start 		= ($this->input->post('start',TRUE) ? $this->input->post('start',TRUE) : 0);
		$limit 		= ($this->input->post('limit',TRUE) ? $this->input->post('limit',TRUE) : 20);
		$result 	= $this->m_tahunajaran->getGridTahunAjaran($start, $limit);
		$result1 	= $this->m_tahunajaran->countGridTahunAjaran();
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

	public function delTahunAjaran(){
		$data = json_decode($this->input->post('post'));
		foreach ($data as $row) {
			$this->m_tahunajaran->delTahunAjaran($row->id);
		}

		$this->getTahunAjaran();
	}

	public function saveTahunAjaran(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE):'');
		$isactive1 	= ($this->input->post('isactive', TRUE) ? $this->input->post('isactive', TRUE) : '');
		if($isactive1==TRUE){
			$isactive = 'Y';
		} else {
			$isactive = 'N';
		}

		$uuid 		= $this->m_tahunajaran->getUUID();

		if($name == '' && $name == NULL){
			$success = 0;
		} elseif($this->m_tahunajaran->cekTahunAjaran($name) == 0){
			$this->m_tahunajaran->saveTahunAjaran($name, $isactive, $uuid);
			if($this->m_tahunajaran->saveConfirm($uuid)==0){
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

	public function editTahunAjaran(){
		$id 		= ($this->input->post('id', TRUE) ? $this->input->post('id', TRUE) : '');
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE):'');
	    if($this->input->post('isactive') == 'true') { $isactive = 'Y'; } else { $isactive = 'N'; }

	    if($this->m_tahunajaran->cekNameID($name, $id)==0){
	    	$this->m_tahunajaran->editTahunAjaran($name, $isactive, $id);
	    	$success = 1;
	    } else {
	    	$success = 0;
	    }

	    $data['total'] 		= $success;
	    $data['success']	= TRUE;
	    echo json_encode($data);	
	}

	public function searchTahunAjaran(){
		$tahun 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE):'');
		$result 	= $this->m_tahunajaran->searchTahunAjaran($tahun);
		foreach ($result->result() as $key => $value) {
			$data['data'][] = array(
				'name' => $value->name, 
			);
		}

		$data['success'] = TRUE;
		echo json_encode($data);
	}
}