 
 function principal(){

 var btnEnviar = document.getElementById("enviar");
 btnEnviar.addEventListener("click", function(){

  function nombreForm(){
  	var inputNombre	= document.getElementById("nombre").value;
  	 if(inputNombre.length == 0){
		    alert("Debes ingresar tu nombre");
  	  }else if(/[0-9]/.test(inputNombre)){
		    alert("Debes ingresar solo texto");
  	     }else if(inputNombre.charAt(0) != inputNombre.charAt(0).toLowerCase()){
        alert("Ingresa solo minúsculas por favor");
    }
  }
  nombreForm();

  function emailForm(){
  	var inputEmail = document.getElementById("mail").value;
    var correoValido = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  	 if(inputEmail.length == 0){
		    alert("Debes ingresar tu email");
  	   }else if(!correoValido.test(inputEmail)){
		      alert("Debes ingresar un email válido");
  	     }
  }
  emailForm();

  function asuntoForm(){
    var inputAsunto = document.getElementById("asunto").value;
    if(inputAsunto.length == 0){
      alert("Debes ingresar un asunto");
    }
  }
  asuntoForm();

  function mensajeForm(){
    var inputMensaje = document.getElementById("mensaje").value;
    if (inputMensaje.length == 0){
      alert("Debes ingresar un mensaje");
    } else if (inputMensaje.length >= 100){
        alert("Puedes escribir hasta 100 caracteres");
      }
  }
  mensajeForm();
});
}
principal();


