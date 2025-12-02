document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    const errorEl = document.getElementById("error");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const user = document.getElementById("username").value.trim().toLowerCase();
        const pass = document.getElementById("password").value.trim();

        if (!user || !pass) {
            errorEl.textContent = "Rellena tots els camps";
            return;
        }

        if (pass !== "pirineus") {
            errorEl.textContent = "Contrasenya incorrecta";
            return;
        }

        let ruta = "";
        if (user === "admin") ruta = "admin/dashboard.html";
        else if (user === "profe") ruta = "profe/dashboard.html";
        else if (user === "alumne") ruta = "alumno/dashboard.html";
        else {
            errorEl.textContent = "Usuari incorrecte";
            return;
        }

        localStorage.setItem("edu_role", user);
        window.location.href = ruta;
    });
});
