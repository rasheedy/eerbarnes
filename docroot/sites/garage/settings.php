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
    $conf = explode('/', conf_path());
    $site_domain = array_pop($conf);
    newrelic_set_appname("$site_domain;", '', 'true');
}