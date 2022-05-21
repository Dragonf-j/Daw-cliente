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
function validar(evt) {
evt.preventDefault();
document.getElementById('imagePreview').innerHTML="";
document.querySelectorAll("input[type=file]").forEach( function(element, index) {
    
    if (element.value && fileValidar(element)) {
        var TmpPath = URL.createObjectURL(element.files[0]);
        document.getElementById('imagePreview').innerHTML += '<img width="150" src="'+TmpPath+'"/>';
    }

});


}
function agregar() {
document.querySelector("fieldset").insertAdjacentHTML("beforeend",
  '<input type="file" name="fichero[]" accept=".jpg,.jpeg,.png,.gif"><br>');
}