function fileValidar(fileInput){
   		 var filePath = fileInput.value;
   		 var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    	if(!allowedExtensions.test(filePath)){
        		alert(`Solo se permiten extensiones: .jpeg/.jpg/.png/.gif \n ${fileInput.value}`);
        		fileInput.value="";
        		return false;
    	}else{
    	return true;
	}
}

function sube(event) {

	if (!document.querySelector("form").checkValidity()) {
		alert("Por favor, seleccione un fichero");
		
	}
	else {
	let formdata=new FormData(document.querySelector("form"));
	
	event.preventDefault();

	fetch('versubidamultiple.php', {
	   method: 'POST',
	   body: formdata
  }).then(
	 response => {console.log(response); 
		 
		 if (response.status==200) return response.json();
		 else return response;
		 }
  
  
  ).then(
	success => { console.log(success);
		alert("Fichero/s subidos correctamente");
		
	}
  ).catch(
	error => console.log(error)
  );
	
  }

}
	
	function validar2(evt) {
			if (evt.target.value && fileValidar(evt.target)) {
				var TmpPath = URL.createObjectURL(evt.target.files[0]);
				document.getElementById('imagePreview').innerHTML += 
				'<figure class="figure"><img width="100" class="img-thumbnail rounded m-1" src="'+TmpPath+'"/><figcaption class="figure-caption text-center">'+evt.target.value.split("\\")[2]+'</figcaption></figure>';
			} 
	}
	 function agregar() {
	 	
  			var tempInput = document.createElement('input');
  			tempInput.type="file";
  			tempInput.name="fichero[]";
  			tempInput.accept="image/*";
			tempInput.className="form-control form-control-sm";
  			tempInput.addEventListener("change", validar2);
 		 	
		document.querySelector("fieldset").insertAdjacentHTML("beforeend",'<div class="mb-1"> <label class="form-label visually-hidden">Elige archivo:</label>');
        document.querySelector("fieldset").insertAdjacentElement("beforeend",tempInput);
		document.querySelector("fieldset").insertAdjacentHTML("beforeend",'</div>');
		
      }
      window.addEventListener("load", ()=>{
      	document.querySelector("button").addEventListener("click", agregar);
		  document.querySelector("#subir").onclick=sube;
      });

