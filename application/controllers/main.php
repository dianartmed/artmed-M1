<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Main extends CI_Controller{
	
	function __construct(){
		parent::__construct();
		// $this->load->model('user_model');
	}

	public function index(){
		$this->load->view('artlogin');
	}

	public function validasi(){
		$this->form_validation->set_rules('username','Username','trim|required|xss_clean');
		$this->form_validation->set_rules('password', 'Password','trim|required|xss_clean|callback_checkdb');

		if($this->form_validation->run()==FALSE){
			redirect('main'); 
		} else {
			redirect('site/user_area/');
		}
	}

	function checkdb(){
		$this->load->model('user_model');
		$username 	= $this->input->post('username');
		$password 	= $this->input->post('password');
		$result 	= $this->user_model->validasi($username, $password);

		if($result){
			$sess_array = array();
			foreach ($result as $row) {
				$sess_array = array('logged_in' => true, 'id' => $row->id_user, 'name' => $row->name);
				$this->session->set_userdata($sess_array);
			}
			// var_dump($sess_array);
			// exit();
			return TRUE;
		} else {
			$this->form_validation->set_message('checkdb','Invalid Username or Password');
			return FALSE;
		}
	}

	function logout(){
		$this->session->sess_destroy();
		redirect('main'); 
	}
}