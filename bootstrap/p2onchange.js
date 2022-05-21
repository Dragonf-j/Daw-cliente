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

function validar2(evt) {
    if (evt.target.value && fileValidar(evt.target)) {
        var TmpPath = URL.createObjectURL(evt.target.files[0]);
        document.getElementById('imagePreview').innerHTML += '<figure class="figure"><img width="100" class=" rounded m-1" src="'+TmpPath+'"/> <figcaption class="figure-caption text-center">'+ evt.target.value.split("\\")[2]+'</figcaption></figure>';
    } 
}
function agregar() {
 
      var tempInput = document.createElement('input');
      tempInput.type="file";
      tempInput.name="fichero[]";
      tempInput.accept="image/*";
      tempInput.className="form-control form-control-sm";
      tempInput.addEventListener("change", validar2);
      document.querySelector("fieldset").insertAdjacentHTML("beforeend",'<div class="mb-1"><label class="form-label visually-hidden">Elige archivo:</label><input class="form-control form-control-sm" type="file" name="fichero[]" accept=".jpg,.jpeg,.png,.gif"');
      document.querySelector("fieldset").insertAdjacentElement("beforeend",tempInput);
      document.querySelector("fieldset").insertAdjacentElement("beforeend"," </div>");
   
}
window.addEventListener("load", ()=>{
  document.querySelector("button").addEventListener("click", agregar);
});