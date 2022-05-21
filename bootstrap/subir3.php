<?php 

if ($_POST) {
		if ($_FILES['archivo']['error']==0) {
			$antiguo = new SplFileInfo($_FILES["archivo"]["name"]);
			$nuevo=$_POST["nombre"].".".$antiguo->getExtension();
  			move_uploaded_file($_FILES['archivo']['tmp_name'],"subidas/".$nuevo);
  				} 
		echo json_encode($_FILES["archivo"]);
} 