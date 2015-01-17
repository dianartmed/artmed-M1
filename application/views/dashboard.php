<!DOCTYPE html>
<html>
<head>
<title>.:: Cheers CaRoL ::.</title>
<link rel="shortcut icon" href="<?php echo base_url('assets/favicon.gif') ?>"> 
<link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/proc/extjs/resources/css/ext-all-neptune.css'); ?>">
<link rel="stylesheet" type="text/css" href="<?php echo base_url('assets/proc/css/style.css'); ?>">
<script type="text/javascript" src="<?php echo base_url('assets/proc/extjs/ext-all-debug.js'); ?>"></script>
<script type="text/javascript" src="<?php echo base_url('assets/proc/extjs/ext-theme-neptune.js'); ?>"></script>
<script type="text/javascript">
<?php session_start() ?>
 	var BASE_URL    = "<?php echo base_url(); ?>";
   	var ROOTDIR     = "assets/";
	var NAME    	= "<?php echo $this->session->userdata('name'); ?>";
	var ID    		= "<?php echo $this->session->userdata('id'); ?>";
	<?php echo $previlege; ?>
</script>
</head>
<body>
	<script type="text/javascript" src="<?php echo base_url('assets/app/app.js'); ?>"></script>
</body>
</html>