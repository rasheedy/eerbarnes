<?php

if($_SERVER['SERVER_NAME'] == 'bronxgarage.dev'){
	$databases = array (
	  'default' => 
	  array (
	    'default' => 
	    array (
	      'database' => 'garage',
	      'username' => 'garage',
	      'password' => 'garage',
	      'host' => 'localhost',
	      'port' => '',
	      'driver' => 'mysql',
	      'prefix' => '',
	    ),
	  ),
	);
}







// garage settings file
if (file_exists('/var/www/site-php')) {
  require '/var/www/site-php/eerbarnes/garage-settings.inc';
}
