        function subir(event) {
          event.preventDefault();
          let formdata=new FormData(document.querySelector("form"));

          
          
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
         document.querySelector("div").innerHTML=JSON.stringify(success); }
         ).catch(
         error => console.log(error)
         );
       }
       function agregar() {
        document.querySelector("fieldset").insertAdjacentHTML("beforeend",
          '<input type="file" name="fichero[]"><br>');
      }
      window.addEventListener("load",()=>{
        document.querySelector("input[type=button]").addEventListener("click",subir);
        document.querySelector("button").addEventListener("click",agregar);
      });