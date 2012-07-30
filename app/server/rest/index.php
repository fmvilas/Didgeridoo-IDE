<?php
	declare(encoding='UTF-8');
	
	//Global namespace
	namespace {
		
		define( __DIDGERIDOO_DIR__, '/didgeridoo/' );
		define( __APP_DIR__, 'app/' );
		
		//REST Server (Slim)
		require 'Slim/Slim.php';
		
		//Mustache Templating System
		require 'Slim/Views/MustacheView.php';
		MustacheView::$mustacheDirectory = __APP_DIR__ . 'server/mustache';
		
		$rest = new Slim(array(
			'view' => 'MustacheView',
			'debug' => true,
			'templates.path' => 'app/server/templates/'
		));
		
		//App Home
		$rest->get('/', function () use ($rest) {
		    $rest->render('index.php');
		});
		
		//User Profile
		$rest->get('/user/:user', function ($userId) use ($rest) {			
		    $rest->render('user/profile.php', array('userId' => $userId));
		});
		
		
		$rest->run();
	}
