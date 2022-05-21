<?php 
if ($_FILES) {
   if ($_FILES['fichero']['error']==0) {		
      move_uploaded_file($_FILES["fichero"]["tmp_name"],"subidas/".$_FILES["fichero"]["name"]);
   }
   echo json_encode($_FILES["fichero"]);
}