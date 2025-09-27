  // Seleccionamos el formulario por la etiqueta <form>
      const form = document.querySelector(".login form");

      // Seleccionamos los dos inputs por orden
      const inputs = form.querySelectorAll("input");
      const usuarioInput = inputs[0];
      const claveInput = inputs[1];

      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se recargue la página

        const usuario = usuarioInput.value.trim();
        const clave = claveInput.value.trim();

        if (usuario === "admin" && clave === "1234") {
          window.location.href = "bienvenidad.html";
        } else {
          alert("Usuario o contraseña incorrectos"); // mensaje de error
        }
      });