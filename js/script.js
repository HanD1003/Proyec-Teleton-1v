// Menú responsive
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Cerrar el menú al hacer clic en un enlace (en móviles)
  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("open");
    }
  });
});

// Validación del formulario de solicitud de empleo
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
      const inputs = form.querySelectorAll("input[required]");
      const errorMessage = document.createElement("p");
      errorMessage.className = "error-message";
      form.appendChild(errorMessage);
  
      form.addEventListener("submit", (event) => {
          event.preventDefault();
          let valid = true;
          inputs.forEach((input) => {
              if (!input.value.trim()) {
                  valid = false;
                  input.classList.add("error");
              } else {
                  input.classList.remove("error");
              }
          });
  
          const fileInput = document.querySelector("#curriculum");
          const file = fileInput.files[0];
          if (fileInput && (!file || file.type !== "application/pdf")) {
              valid = false;
              errorMessage.textContent = "Por favor, sube un archivo PDF válido.";
          } else {
              errorMessage.textContent = "";
          }
  
          if (valid) {
              form.submit();
          }
      });
  
      inputs.forEach((input) => {
          input.addEventListener("input", () => {
              input.classList.remove("error");
          });
      });
  }
});
