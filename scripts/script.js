function login() {
      const username = document.getElementById("username").value;
      const message = document.getElementById("message");


      const user = "35932";

      if (username === user) {
        message.style.color = "green";
        message.textContent = "Certificado Valido!";
        messageValido();
      }
      else {
        message.style.color = "red";
        message.textContent = "Código do certificado é inválido.";
        messageInvalido();
      }
    function messageValido(){
          swal({
            title: "Certificado Válido",
            text: "Curso: Segurança Digital \n\n Obtido para: Eric Almeida dos Santos \n\n Data da emissão: "});
      }
    }
    function messageInvalido(){
          swal({
            title: "Código do certificado é inválido",
            text: "Documento não encontrado\n\n\n\n\n\n"});
      }
