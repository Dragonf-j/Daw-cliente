<?php 

		for( $i=0 ; $i < count($_FILES['fichero']['name']) ; $i++ ) {

			move_uploaded_file($_FILES["fichero"]["tmp_name"][$i],"subidas/".$_FILES["fichero"]["name"][$i]);
		}

echo json_encode($_FILES);