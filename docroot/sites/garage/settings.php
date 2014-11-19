<?php

if($_SERVER['SERVER_NAME'] == 'bronxgarage.local'){
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

// new relic site-specific tracking 
if (extension_loaded('newrelic')) {
    $site_domain = array_pop(explode('/', conf_path()));
    newrelic_set_appname("$site_domain;acquia-garage", '', 'true');
}