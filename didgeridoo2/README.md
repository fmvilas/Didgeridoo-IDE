<a href="http://didgeridoo.ftzcollective.com/ide" target="_blank"><img src="https://raw.github.com/fmvilas/Didgeridoo-IDE/master/logo.png"></a>

Didgeridoo is a web-based IDE. It's in an so early stage.

ATTENTION: <a href="http://didgeridoo.ftzcollective.com/ide" target="_blank">This demo</a> is not completely functional. It's a demo of how it can look in a future. Anyway you can create files, open files (from sidebar), save files (with Save As and with / as the root of the project). The WYSIWYG editor can perform some operations:
* Select (click)
* Resize (double-click)
* Edit Text (Enter/Esc)
* Remove (Backspace)

#It's a one man project. COLLABORATION NEEDED!

## Features
Features are incomplete but they got basic functionality.

**Version 0.1**

* Users
	* Login
	* Logout
* Projects
	* New (creates a GIT repository)
* Files
	* New
	* Open (only through Project Explorer)
	* Save
	* Save As
* Main Menu
* Project Explorer
* Document Tabs
	* New
	* Close
	* Close All
	* DnD Reorder
	* Switch between Designer view and Code view in HTML documents
* Designer (not reflecting changes in the code yet)
	* Select element
	* Margin/Padding visualization
	* Delete element
	* Resize element
	* Edit text (press Esc to finish editing)
* Code View

## Project Structure

**Version 0.1**

*[Client]*

* Core
	* Logging
		* didgeridoo.logger.log
		* didgeridoo.logger.info
		* didgeridoo.logger.warn
		* didgeridoo.logger.error
		* didgeridoo.logger.getList
	* Utility functions
		* didgeridoo.utils.assert
		* didgeridoo.utils.loadCSS
	* Exceptions
		* AssertException
	* Libraries
		* didgeridoo.libraries.load
	* Modules
		* didgeridoo.modules.load
		* didgeridoo.modules.list
		* didgeridoo.modules.get
	* Observer / Events
		* didgeridoo.observer.publish
		* didgeridoo.observer.subscribe
		* didgeridoo.observer.unsubscribe
	* Actions
		* didgeridoo.action.register
		* didgeridoo.action.do
		* didgeridoo.action.get
* Libraries
	* RequireJS 2.0.1
		* RequireJS Text Plugin 0.27.0
	* jQuery 1.7.1
	* jQuery UI AMD
	* jQuery Template
	* CodeMirror 3.0
	* Dynatree 1.2.2
	* Twitter Bootstrap
	* Moment
	* autoGrowInput
* Modules
	* Action
		* FileNew
		* FileOpen
		* FileSave
		* FileClose
		* FileCloseAll
		* UserLogout
	* UI
		* Dialog
			* File
				* ProjectNew
				* FileSaveAs
		* CodeView
		* Designer
		* Document
			* BaseDocument
			* BlankDocument
			* HTMLDocument
				* DesignerView
				* CodeView
			* PHPDocument
			* PlainTextDocument
		* Layout
			* North panel
			* Left Sidebar
			* Center panel
		* Main Menu
		* Project Explorer
		* Tools

*[Server]*

Server side is based on Laravel

* Routes
	* GET
		* /
		* /ide
		* /login
		* /logout
		* /signup
		* /project/(:any)/files
		* /project/(:any)/files/(:all)
	* POST
		* /login
		* /signup (referenced but NOT DONE!)
		* /project
	* PUT
		* /project/(:any)/files/(:all)

## Contributing
Contributing is more than welcome, it's needed for that kind of project.

### How to setup your environment for local development:

**0) Required software**

* Unix system (Linux, MacOS X, ...)
* Apache 2.0
* PHP 5.3
* MySQL 5
* Git
* An up-to-date browser (I'm using Chrome)

**1) Add to httpd.conf**

```
NameVirtualHost *:80

 <VirtualHost *:80>
     DocumentRoot "/Users/YOURUSERNAME/www/"
     ServerName localhost
 </VirtualHost>

 <VirtualHost *:80>
     DocumentRoot "/Users/YOURUSERNAME/www/didgeridoo/public"
     ServerName didgeridoo.dev
 </VirtualHost>
```


***********
 IMPORTANT
***********

There cannot be orphan lines such as following:

```
ServerName localhost
DocumentRoot "/Users/YOURUSERNAME/www/"
```

Instead, they must be specified inside another ```<VirtualHost>``` like specified above.


**2) Add to /private/etc/hosts**

127.0.0.1   didgeridoo.dev

**3) Configure database**

Create a MySQL table called 'didgeridoo' and paste the following code:

```sql
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` char(128) NOT NULL,
  `password` char(64) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

INSERT INTO `users` VALUES(1, 'demo', '$2a$08$ZGy0iRm/w9Jl3MQGy3JU/.HfV4XEs8Hv8sfUh2Nh1JaTrtcbikqfi', 'demo@didgeridoo.io');
```

**4) Configure Didgeridoo to connect to the database**

1. Go to /application/config/database.php.
2. Find ```'connections' => array(```. *It is, maybe, at the end of the file*.
3. Change the username and password attributes to match your MySQL user configuration, or create a user called secure_user with 1234 as the password ;) (I know, it's not secure, it's just for development).

**5) Tell Didgeridoo where is your GIT binary**

*If you don't have GIT installed install it before proceeding.*

1. Find your GIT binary file, usually it is at /usr/bin/git or /usr/local/bin/git or /usr/local/git/bin/git...
2. Go to /application/routes.php and find this code:
```
new Binary('/usr/local/git/bin/git'), 0770);
```

3. Replace ```/usr/local/git/bin/git```with the path of your GIT binary

**6) Provide some content**

Create a directory called 'didgeridoo-content'. It must be one level up of the didgeridoo directory. It is, i.e.:

* /Users/YOURUSERNAME/www/didgeridoo/
* /Users/YOURUSERNAME/www/didgeridoo-content/

Inside this directory there must be the following structure:

* /Users/YOURUSERNAME/www/didgeridoo-content/
	* user/
		* demo/
			* repositories/

It means, this is the repositories directory of a 'demo'-called user. You can leave repositories blank, go to Didgeridoo, log in as 'demo' and then create a new project. After creating a new project, a GIT repository is automatically created in this directory, so you can put there as many files as you want.

## License
Licensed under the GPL license.<br />
Copyright (c) 2012 Francisco Méndez Vilas

## Author
Francisco Méndez Vilas <br/>
[www.fmvilas.com](http://www.fmvilas.com) <br/>
[@fmvilas](http://www.twitter.com/fmvilas) <br/>
[fmvilas@gmail.com](mailto:fmvilas@gmail.com)
