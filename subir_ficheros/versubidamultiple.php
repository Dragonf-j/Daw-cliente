<?php 
$total = count($_FILES['fichero']['name']);

for( $i=0 ; $i < $total ; $i++ ) {

  $tmpFilePath = $_FILES['fichero']['tmp_name'][$i];

  move_uploaded_file($_FILES["fichero"]["tmp_name"][$i],"Subida/".$_FILES["fichero"]["name"][$i]);
}
echo json_encode($_FILES);