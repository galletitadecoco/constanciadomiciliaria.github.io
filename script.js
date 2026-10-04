// ========================================
// INICIO DE SESIÓN
// ========================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    // Evita que la página se recargue
    event.preventDefault();


    // Obtener los datos escritos
    const usuario = document.getElementById("usuario").value.trim().toLowerCase();

    const password = document.getElementById("password").value.trim();


    // ========================================
    // USUARIOS DE PRUEBA
    // ========================================

    const usuarios = {

        admin: {
            password: "1234",
            pagina: "paginas/administrador.html"
        },

        copaci: {
            password: "1234",
            pagina: "paginas/copaci.html"
        },

        usuario: {
            password: "1234",
            pagina: "paginas/usuario.html"
        }

    };


    // ========================================
    // VALIDAR USUARIO
    // ========================================

    if (
        usuarios[usuario] &&
        usuarios[usuario].password === password
    ) {

        // Guardamos quién inició sesión
        sessionStorage.setItem("usuario", usuario);


        // Enviar al panel correspondiente
        window.location.href = usuarios[usuario].pagina;

    } else {

        // Datos incorrectos
        alert("Usuario o contraseña incorrectos.");

    }

});
