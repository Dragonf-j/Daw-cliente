 /*Creacion de eleemento select, creamos una variable y con document.createElement ponemos el tipo de elemento que es, luego decimos que lo escriba
         en el html y luego le añadimos la clase, esta funcion se se ejecuta cuando la pagina se carga*/
         window.onload = function añadirElementos(){
   
            var sel1 = document.createElement("select");
           document.body.appendChild(sel1);
            sel1.className+="Sel";
            sel1.id="select1";
                
    
            var sel2 = document.createElement("select");
            document.body.appendChild(sel2);
            sel2.className+="Sel";
            sel2.id="Select2";
    
    
            var bot = document.createElement("button");
            bot.textContent ="Descargar";
            document.body.appendChild(bot)
            bot.className+="Boton";
                
            }
    
            var sele1 = document.getElementById("select1")=  function crearMes(){
               var s1 =  document.getElementById("select1");
               var mes = new Array(
                   "Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre", "Noviembre", "Diciembre"
               );
                mes.forEach((value)=>{
                    var op = `<option >${value}</option>`;
                    s1.innerHTML+=op;
                });
                document.body.insertBefore(s1, document.querySelector("#select1"));
            }
            crearMes();