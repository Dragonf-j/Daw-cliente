<?php 

if ($_FILES) {

		if ($_FILES['archivo']['error']==0) {
			$finfo= new finfo(FILEINFO_MIME);
			$type = $finfo->file($_FILES['archivo']['tmp_name']);
			if (strrpos ( $type , "image" )===0) {
				$ne=explode(".",$_FILES['archivo']['name']);
				$ext=".".$ne[count($ne)-1];
  				if (($ext == ".jpg") or ($ext == ".png") or ($ext == ".gif") or ($ext == ".jpeg")){
  					move_uploaded_file($_FILES['archivo']['tmp_name'],"subidas/".$_POST['nombre'].$ext);
  				} 
  			} 

		}
echo json_encode($_FILES["archivo"]);
}