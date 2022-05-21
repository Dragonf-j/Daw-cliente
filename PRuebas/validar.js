function validad(){
    let regular = new RegExp(/https/);
    let regularnumeros = new RegExp(/[0-9]/);
    let pais = document.getElementByName('pais').value;
    console.log(pais);
    console.log(regular.test(pais));
    if(regularnumeros.test(pais) || regular.test(pais)){
        alert("No puedes introducir nuemeros ni enlaces")
        return false;
    }else{
        alert("Puedes continuar");
    }
    
    
}