<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class M_semester extends CI_Model{

	private $connectionName;

	public function setConnection($connectionName){
		$this->connectionName = $connectionName;
	}

	public function getConnection(){
		return $this->load->database($this->connectionName, TRUE);
	}

	public function __construct(){
		parent::__construct();
	}

	public function getUUID(){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();
		return $db->query('SELECT get_uuid() AS uuid;')->row()->uuid;
	}

	public function cekSemester($name){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();
		return $db->select('COUNT(*) AS id', FALSE)->from('sys_semester')->where('name', $name)->get()->row()->id;
	}

	public function cekNameID($name, $id){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();
		return $db->select('COUNT(*) AS id', FALSE)->from('sys_semester')->where('name', $name)->where('id_semester !=', $id)->get()->row()->id;
	}

	public function saveConfirm($uuid){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();
		return $db->select('COUNT(*) AS id', FALSE)->from('sys_semester')->where('id_semester', $uuid)->get()->row()->id;
	}

	public function getGridSemester($limit, $offset){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();
		$db->select("sm.id_semester AS id, 
			sm.name AS name, 
			sm.isactive AS isactive, 
			CASE WHEN sm.isactive = 'Y' THEN 1 ELSE 0 END AS isactive", 
			FALSE
		);
		$db->from('sys_semester sm');
		$db->order_by('sm.name');
		$db->limit($offset, $limit);
		$query = $db->get();
		return $query;
	}

	public function countGridSemester(){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();
		$db->select("sm.id_semester AS id, 
			sm.name AS name, 
			sm.isactive AS isactive, 
			CASE WHEN sm.isactive = 'Y' THEN 1 ELSE 0 END AS isactive", 
			FALSE
		);
		$db->from('sys_semester sm');
		$db->order_by('sm.name');
		$query = $db->get();
		return $query;
	}

	public function saveSemester($name, $isactive, $uuid){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();

		$db->set('id_semester', $uuid);
		$db->set('name', $name);
		$db->set('isactive', $isactive);
		$db->set('createdby', $this->session->userdata('id'));
        $db->set('created', date('Y-m-d H:i:s'));
        $db->set('updatedby', $this->session->userdata('id'));
        $db->set('updated', date('Y-m-d H:i:s'));
        $db->insert('sys_semester');
	}

	public function editSemester($name, $isactive, $id){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();

		$data = array(
			'name' 		=> $name,
			'isactive'	=> $isactive,
           	'updated'   => date('Y-m-d H:i:s'),
            'updatedby' => $this->session->userdata('id')
		);
		$db->where('id_semester', $id);
		$db->update('sys_semester', $data);
	}

	public function delSemester($id){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();

		$db->where('id_semester', $id);
		$db->delete('sys_semester');
	}

	public function searchSemester($tahun){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();

		$db->select("sm.id_semester AS id, 
			sm.name AS name, 
			sm.isactive AS isactive, 
			CASE WHEN sm.isactive = 'Y' THEN 1 ELSE 0 END AS isactive", 
			FALSE
		);
		$db->from('sys_semester sm');
		$db->like('LOWER(sm.name)', strtolower($tahun));
		$db->order_by('sm.name');
		$query = $db->get();
		return $query;
	}

}