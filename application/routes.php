<?php
use TQ\Git\Cli\Binary;
use TQ\Git\Repository\Repository;
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Simply tell Laravel the HTTP verbs and URIs it should respond to. It is a
| breeze to setup your application using Laravel's RESTful routing and it
| is perfectly suited for building large applications and simple APIs.
|
| Let's respond to a simple GET request to http://example.com/hello:
|
|		Route::get('hello', function()
|		{
|			return 'Hello World!';
|		});
|
| You can even respond to more than one URI:
|
|		Route::post(array('hello', 'world'), function()
|		{
|			return 'Hello World!';
|		});
|
| It's easy to allow URI wildcards using (:num) or (:any):
|
|		Route::put('hello/(:any)', function($name)
|		{
|			return "Welcome, $name.";
|		});
|
*/

Route::get('/', array('before' => 'auth', 'as' => 'home', 'do' => function() {
	return View::make('home.index');
}));

Route::get('/ide', array('before' => 'auth', 'as' => 'ide.index', 'do' => function()
{
    return View::make('ide.index');
}));

//User

Route::get('/login', array('as' => 'user.login', function() {
	return View::make('user.login');
}));

Route::post('/login', function() {
    $email = Input::get('email');
    $password = Input::get('password');
    $redirect = Input::get('redirect');

    if ( Auth::attempt( array('username' => $email, 'password' => $password) ) )
    {
        return Redirect::to($redirect);
    }
    else
    {
        return Redirect::to('login')
            ->with('login_errors', true);
    }
});

Route::get('/logout', array('as' => 'user.logout', function() {
    Auth::logout();
    return Redirect::to_route('user.login');
}));

Route::get('/signup', array('as' => 'user.signup', function() {
    if( Auth::guest() ) {
        return View::make('user.signup');
    } else {
        return View::make('user.signedup');
    }
}));

Route::post('/signup', function() {
    return 'TODO! :)';
});

// Project

Route::post('/project', array('before' => 'auth', function() {
    if( Input::has('name') ) {
        $projectName = Input::get('name');
        $projectPath = '../didgeridoo-content/user/' . Auth::user()->username . '/repositories/';

        $repo = Repository::open($projectPath.$projectName, new Binary('/usr/local/git/bin/git'), 0770);
        
        return 'Project ' . $projectName . ' created succesfully!';
    } else {
        return Response::error('400');
    }
}));

Route::get('/project/(:any)/files', array('before' => 'auth', function($projectName) {
    $projectPath = '../didgeridoo-content/user/' . Auth::user()->username . '/repositories/';
    $path = Input::get('directory', '/');
    $fullPath = $projectPath.$projectName.$path;

    $dirHandler = opendir($fullPath);

    $files = array();
    
    $numberOfFiles = 0;
    while( $file = readdir($dirHandler) ) {
        if( $file != '.' && $file != '..' ) {
            $numberOfFiles++;
            
            $files[] = array(
                'title' => $file,
                'key' => is_dir($fullPath.'/'.$file) ? $path.$file.'/' : $path.$file,
                'size' => is_dir($fullPath.'/'.$file) ? 0 : filesize($fullPath.'/'.$file),
                'modified' => filemtime($fullPath.'/'.$file),
                'mimeType' => !is_dir($fullPath.'/'.$file) ? File::mime(File::extension($file)) : null,
                'isFolder' => is_dir($fullPath.'/'.$file),
                'isLazy' => is_dir($fullPath.'/'.$file),
                'addClass' => (substr($file, 0, 1) == '.' ? 'hidden-file' : '') . ' ' . (!is_dir($fullPath.'/'.$file) ? strtolower(File::extension($file)) : ''),
            );
        }
    }

    if( $path == '/' ) {
        $files = array(
            'title' => $projectName,
            'key' => '/'.$projectName.'/',
            'size' => 0,
            'modified' => filemtime($fullPath),
            'expand' => true,
            'isFolder' => true,
            'children' => $files
        );

        $files = array($files);
    }

    closedir($dirHandler);
    
    return json_encode( $files );
}));

Route::get('/project/(:any)/files/(:all)', array('before' => 'auth', function($projectName, $path) {
    $fullPath = '../didgeridoo-content/user/' . Auth::user()->username . '/repositories/'.$projectName.'/'.$path;

    if( file_exists($fullPath) && !is_dir($fullPath) ) {
        return new Response( File::get($fullPath), 200, array('Content-Type' => File::mime( File::extension($fullPath) )) );
    } else {
        return Response::error('500');
    }
}));

Route::put('/project/(:any)/files/(:all)', array('before' => 'auth', function($projectName, $path) {
    $fullPath = '../didgeridoo-content/user/' . Auth::user()->username . '/repositories/'.$projectName.'/'.$path;

    if( !is_dir($fullPath) ) {
        File::put($fullPath, Request::foundation()->getContent());
    } else {
        return Response::error('500');
    }
}));

/*
|--------------------------------------------------------------------------
| Application 404 & 500 Error Handlers
|--------------------------------------------------------------------------
|
| To centralize and simplify 404 handling, Laravel uses an awesome event
| system to retrieve the response. Feel free to modify this function to
| your tastes and the needs of your application.
|
| Similarly, we use an event to handle the display of 500 level errors
| within the application. These errors are fired when there is an
| uncaught exception thrown in the application.
|
*/

Event::listen('404', function()
{
	return Response::error('404');
});

Event::listen('500', function()
{
	return Response::error('500');
});

/*
|--------------------------------------------------------------------------
| Route Filters
|--------------------------------------------------------------------------
|
| Filters provide a convenient method for attaching functionality to your
| routes. The built-in before and after filters are called before and
| after every request to your application, and you may even create
| other filters that can be attached to individual routes.
|
| Let's walk through an example...
|
| First, define a filter:
|
|		Route::filter('filter', function()
|		{
|			return 'Filtered!';
|		});
|
| Next, attach the filter to a route:
|
|		Router::register('GET /', array('before' => 'filter', function()
|		{
|			return 'Hello World!';
|		}));
|
*/

Route::filter('before', function()
{
	// Do stuff before every request to your application...
});

Route::filter('after', function($response)
{
	// Do stuff after every request to your application...
});

Route::filter('csrf', function()
{
	if (Request::forged()) return Response::error('500');
});

Route::filter('auth', function()
{
	if( Auth::guest() ) {
        if( Request::ajax() ) {
            return Response::make('', 401);
        } else {
            return Redirect::to('login');
        }
    }
});