<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class M_tahunajaran extends CI_Model{

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

	public function cekTahunAjaran($name){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();
		return $db->select('COUNT(*) AS id', FALSE)->from('sys_thajar')->where('name', $name)->get()->row()->id;
	}

	public function cekNameID($name, $id){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();
		return $db->select('COUNT(*) AS id', FALSE)->from('sys_thajar')->where('name', $name)->where('id_thajar !=', $id)->get()->row()->id;
	}

	public function saveConfirm($uuid){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();
		return $db->select('COUNT(*) AS id', FALSE)->from('sys_thajar')->where('id_thajar', $uuid)->get()->row()->id;
	}

	public function getGridTahunAjaran($limit, $offset){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();
		$db->select("th.id_thajar AS id, 
			th.name AS name, 
			th.isactive AS isactive, 
			CASE WHEN th.isactive = 'Y' THEN 1 ELSE 0 END AS isactive", 
			FALSE
		);
		$db->from('sys_thajar th');
		$db->order_by('th.name');
		$db->limit($offset, $limit);
		$query = $db->get();
		return $query;
	}

	public function countGridTahunAjaran(){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();
		$db->select("th.id_thajar AS id, 
			th.name AS name, 
			th.isactive AS isactive, 
			CASE WHEN th.isactive = 'Y' THEN 1 ELSE 0 END AS isactive", 
			FALSE
		);
		$db->from('sys_thajar th');
		$db->order_by('th.name');
		$query = $db->get();
		return $query;
	}

	public function saveTahunAjaran($name, $isactive, $uuid){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();

		$db->set('id_thajar', $uuid);
		$db->set('name', $name);
		$db->set('isactive', $isactive);
		$db->set('createdby', $this->session->userdata('id'));
        $db->set('created', date('Y-m-d H:i:s'));
        $db->set('updatedby', $this->session->userdata('id'));
        $db->set('updated', date('Y-m-d H:i:s'));
        $db->insert('sys_thajar');
	}

	public function editTahunAjaran($name, $isactive, $id){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();

		$data = array(
			'name' 		=> $name,
			'isactive'	=> $isactive,
           	'updated'   => date('Y-m-d H:i:s'),
            'updatedby' => $this->session->userdata('id')
		);
		$db->where('id_thajar', $id);
		$db->update('sys_thajar', $data);
	}

	public function delTahunAjaran($id){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();

		$db->where('id_thajar', $id);
		$db->delete('sys_thajar');
	}

	public function searchTahunAjaran($tahun){
		$this->setConnection('dbrawon');
		$db = $this->getConnection();

		$db->select("th.id_thajar AS id, 
			th.name AS name, 
			th.isactive AS isactive, 
			CASE WHEN th.isactive = 'Y' THEN 1 ELSE 0 END AS isactive", 
			FALSE
		);
		$db->from('sys_thajar th');
		$db->like('LOWER(th.name)', strtolower($tahun));
		$db->order_by('th.name');
		$query = $db->get();
		return $query;
	}

}