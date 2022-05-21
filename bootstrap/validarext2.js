function validar() {
  // Obtener nombre de archivo
  let archivo = document.getElementById('archivo').value,
  // Obtener extensión del archivo
      extension = archivo.substring(archivo.lastIndexOf('.'),archivo.length);
  // Si la extensión obtenida no está incluida en la lista de valores
  // del atributo "accept", mostrar un error.
  if(document.getElementById('archivo').getAttribute('accept').split(',').indexOf(extension) < 0) {
    alert('Archivo inválido. No se permite la extensión ' + extension);
  }
}