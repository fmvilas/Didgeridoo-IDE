<?php
	/*
	
	//declare(encoding='UTF-8');
	
	//Global namespace
	namespace {
		
		//REST Server (Slim)
		require 'app/server/rest/Slim.php';
		
		$rest = new Slim();
		
		$rest->map('/', function() {
			echo 'hola';
		})->via('GET, POST');
		
		//$rest->run();
		
		echo 'everything is fine';
		
	}
	*/
	require 'app/server/rest/index.php';
	
?>