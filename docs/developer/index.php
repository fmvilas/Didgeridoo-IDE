<?php

	include "header.php";
	
	
	$target = $_GET['target'];
	
	switch($target) {

		case "appStructure":
			include "structure.html";
		break;
		
		case "core":
			include "core.html";
		break;
		
		default:
			include "overview.html";
		break;
		
	}
	
	
	
	include "footer.php";

?>