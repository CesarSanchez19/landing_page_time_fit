<template>
    <!-- Contenedor principal para la sección de registro -->
    <section id="signin">
        <!-- Contenedor con márgenes superiores -->
        <div class="container mt-5">
            <!-- Título principal (vacío actualmente, se podría agregar texto dinámico o estático) -->
            <h1 class="text-center mb-4"></h1>

            <!-- Fila para organizar contenido en dos columnas -->
            <div class="row">
                <!-- Primera columna: Formulario de registro -->
                <div class="col-12 col-md-6">
                    <!-- Título del formulario -->
                    <h1 class="text-left mb-4">Sign Up</h1>
                    <!-- Mensaje para redirigir a la página de inicio de sesión si ya tiene cuenta -->
                    <div>
                        <p class="question"> Already have an account?
                            <!-- Enlace para navegar a la página de inicio de sesión -->
                            <router-link to="/Login" @click="scrollToSection('login')">Log In here</router-link>
                        </p>
                    </div>
                    <!-- Inicio del formulario -->
                    <form action="#" method="post" @submit.prevent="register">
                        <!-- Campo: Nombre de usuario -->
                        <div class="mb-3">
                            <label for="username" class="form-label">Choose a username</label>
                            <input type="text" class="input-field" v-model="username"
                                placeholder="Write your username here" required>
                        </div>
                        <!-- Campo: Nombre(s) -->
                        <div class="mb-3">
                            <label for="name" class="form-label">First Name(s)</label>
                            <input type="text" class="input-field" v-model="firstname"
                                placeholder="Write your first name here" required>
                        </div>
                        <!-- Campo: Apellido(s) -->
                        <div class="mb-3">
                            <label for="lastname" class="form-label">Last Name(s)</label>
                            <input type="text" class="input-field" v-model="lastname"
                                placeholder="Write your last name here" required>
                        </div>
                        <!-- Campo: Correo electrónico -->
                        <div class="mb-3">
                            <label for="email" class="form-label">Email Address</label>
                            <input type="email" class="input-field" v-model="email"
                                placeholder="Write your email address here" required>
                        </div>
                        <!-- Campo: Contraseña -->
                        <div class="mb-3">
                            <label for="password" class="form-label">Choose a password</label>
                            <input type="password" class="input-field" v-model="password" @input="validatePassword"
                                placeholder="Write your password here" required>
                            <!-- Mensaje de criterios de contraseña -->
                            <p :class="passwordClass">{{ passwordMessage }}</p>
                        </div>
                        <!-- Campo: Confirmar contraseña -->
                        <div class="mb-3">
                            <label for="confirm" class="form-label">Confirm Password</label>
                            <input type="password" class="input-field" v-model="confirm" @input="validatePassword"
                                placeholder="Write your password again" required>
                            <!-- Mensaje dinámico de coincidencia de contraseñas -->
                            <p :class="matchClass">{{ matchMessage }}</p>
                        </div>
                        <!-- Aceptación de términos y condiciones -->
                        <div class="term-container">
                            <input type="checkbox" id="terms" required>
                            <label for="terms" class="term">
                                I accept the
                                <!-- Enlace para navegar a la sección de términos y condiciones -->
                                <router-link to="/Condiction" @click="scrollToSection('condiction')">Terms &
                                    Conditions</router-link>
                            </label>
                        </div>
                        <!-- Botones de acción -->
                        <div class="button-group">
                            <!-- Botón para enviar el formulario -->
                            <button type="submit" class="submit-btn">Sign Up</button>
                            <!-- Separador con texto -->
                            <div class="divider">
                                <hr class="line">
                                <span>Or sign Up with</span>
                                <hr class="line">
                            </div>
                            <!-- Botón para iniciar sesión con Google -->
                            <button @click="signInWithGoogle" type="button" class="google-btn">
                                <font-awesome-icon :icon="['fab', 'google']" class="social-icon" />Sign Up With Google
                            </button>
                            <!-- Botón para iniciar sesión con Microsoft -->
                            <button @click="signInWithGoogle" type="button" class="google-btn">
                                <font-awesome-icon :icon="['fab', 'microsoft']" class="social-icon" />Sign Up With
                                Microsoft
                            </button>
                        </div>
                    </form>
                </div>
                <!-- Segunda columna: Imagen -->
                <div class="col-12 col-md-6">
                    <!-- Imagen ilustrativa para la página de registro -->
                    <img :src="require('@/assets/Sujeto Sign UP.png')" alt="signin person" width="100%" height="auto">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, nextTick } from "vue"; // Importa `ref` para crear variables reactivas y `nextTick` para ejecutar código después de actualizar el DOM
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Importa funciones de autenticación de Firebase
import { useRouter } from "vue-router"; // Importa el router para redirecciones en Vue.js

// Variables reactivas para los campos del formulario
const username = ref(""); // Campo para el nombre de usuario
const firstname = ref(""); // Campo para el primer nombre
const lastname = ref(""); // Campo para el apellido
const email = ref(""); // Campo para el email
const password = ref(""); // Campo para la contraseña
const confirm = ref(""); // Campo para confirmar la contraseña

// Variables reactivas para mensajes y estilos
const passwordMessage = ref(""); // Mensaje sobre los criterios de la contraseña
const passwordClass = ref(""); // Clase CSS para el mensaje de contraseña (ej. éxito o error)
const matchMessage = ref(""); // Mensaje sobre si las contraseñas coinciden
const matchClass = ref(""); // Clase CSS para el mensaje de coincidencia de contraseñas

const router = useRouter(); // Instancia del router para redirecciones en la aplicación

// Método para validar la contraseña
const validatePassword = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Expresión regular para validar contraseñas
    if (password.value === "") { // Si el campo de contraseña está vacío
        passwordMessage.value = ""; // No muestra ningún mensaje
        passwordClass.value = ""; // No aplica ninguna clase
    } else if (regex.test(password.value)) { // Si la contraseña cumple con los criterios
        passwordMessage.value = "Password meets the criteria!"; // Mensaje de éxito
        passwordClass.value = "text-success"; // Clase CSS de éxito
    } else { // Si la contraseña no cumple los criterios
        passwordMessage.value = "Password must be at least 8 characters, including letters, numbers, and symbols."; // Mensaje de error
        passwordClass.value = "text-danger"; // Clase CSS de error
    }

    // Validación de coincidencia de contraseñas
    if (password.value === "" || confirm.value === "") { // Si alguno de los campos está vacío
        matchMessage.value = ""; // No muestra ningún mensaje
        matchClass.value = ""; // No aplica ninguna clase
    } else if (password.value === confirm.value) { // Si las contraseñas coinciden
        matchMessage.value = "Passwords match!"; // Mensaje de éxito
        matchClass.value = "text-success"; // Clase CSS de éxito
    } else { // Si las contraseñas no coinciden
        matchMessage.value = "Passwords do not match!"; // Mensaje de error
        matchClass.value = "text-danger"; // Clase CSS de error
    }
};

// Método para desplazarse a una sección específica de la página
const scrollToSection = (sectionId) => {
    nextTick(() => { // Asegura que el DOM esté completamente actualizado antes de buscar el elemento
        const element = document.getElementById(sectionId); // Busca el elemento por su ID
        if (element) { // Si el elemento existe
            element.scrollIntoView({ behavior: "smooth" }); // Realiza el desplazamiento suave hacia la sección
        }
    });
};

// Método para registrar al usuario
const register = () => {
    // Validar que todos los campos estén completos
    if (!username.value || !firstname.value || !lastname.value || !email.value || !password.value || !confirm.value) {
        alert("Please fill in all fields."); // Muestra alerta si algún campo está vacío
        return; // Detiene la ejecución
    }

    // Validar que las contraseñas coincidan
    if (password.value !== confirm.value) {
        alert("Passwords do not match."); // Alerta si las contraseñas no coinciden
        return; // Detiene la ejecución
    }

    // Validar que el correo tenga un formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos electrónicos
    if (!emailRegex.test(email.value)) {
        alert("Please enter a valid email address."); // Alerta si el correo no es válido
        return; // Detiene la ejecución
    }

    // Registrar al usuario con Firebase
    const auth = getAuth(); // Obtiene una instancia de Firebase Auth
    createUserWithEmailAndPassword(auth, email.value, password.value) // Crea un usuario con email y contraseña
        .then(() => { // Si el registro es exitoso
            alert(`Registration successful! Welcome, ${username.value}!`); // Muestra mensaje de éxito
            router.push("/"); // Redirige a la página principal
        })
        .catch((error) => { // Manejo de errores durante el registro
            console.error("Error during registration:", error.code); // Imprime el código de error en la consola
            if (error.code === "auth/email-already-in-use") { // Si el correo ya está en uso
                alert("This email is already in use."); // Muestra mensaje específico
            } else if (error.code === "auth/weak-password") { // Si la contraseña es débil
                alert("The password is too weak."); // Muestra mensaje específico
            } else { // Cualquier otro error
                alert("An error occurred. Please try again."); // Mensaje genérico
            }
        });
};
</script>

<style scoped>
/* Oculta la imagen en pantallas pequeñas */
@media screen and (max-width: 768px) {
    .col-md-6 img {
        display: none; /* La imagen no se muestra en pantallas pequeñas */
    }
}

/* Estilo para el ícono de Google en el botón al pasar el cursor */
.google-btn:hover .social-icon {
    color: #fff; /* Cambia el color del ícono a blanco */
}

/* Estilo para los íconos sociales */
.social-icon {
    font-size: 1.5rem; /* Tamaño del ícono */
    margin-right: 20px; /* Espaciado a la derecha del ícono */
    color: #F8820B; /* Color inicial del ícono */
    transition: all 0.3s ease; /* Transición suave para los cambios de estilo */
}

/* Estilo del separador entre texto y líneas */
.divider {
    display: flex; /* Flexbox para alinear elementos */
    align-items: center; /* Centra verticalmente los elementos */
    gap: 10px; /* Espacio entre líneas y el texto */
}

/* Estilo para las líneas horizontales del separador */
.line {
    flex-grow: 1; /* Expande la línea para ocupar el espacio disponible */
    border: none; /* Elimina bordes predeterminados */
    height: 4px; /* Grosor de la línea */
    background-color: #F8820B; /* Color naranja de la línea */
    color: #F8820B; /* Color adicional, aunque no afecta <hr> directamente */
}

/* Estilo para el texto del separador */
span {
    color: #F8820B; /* Color naranja */
    font-size: 16px; /* Tamaño del texto */
}

/* Estilo para una línea personalizada */
.linea {
    background: #F8820B; /* Fondo naranja */
}

/* Grupo de botones */
.button-group {
    display: flex; /* Flexbox para organizar botones */
    flex-direction: column; /* Botones apilados verticalmente */
    gap: 1rem; /* Espaciado entre botones */
    margin-top: 1.5rem; /* Margen superior */
    padding-bottom: 50px; /* Espaciado inferior */
}

/* Botón de envío y botones sociales */
.submit-btn,
.google-btn {
    width: 100%; /* Botones ocupan todo el ancho */
    padding: 0.75rem; /* Relleno interno */
    border: none; /* Sin borde */
    border-radius: 4px; /* Bordes redondeados */
    font-size: 1rem; /* Tamaño del texto */
    cursor: pointer; /* Cambia el cursor a pointer */
    transition: background-color 0.3s ease; /* Transición suave en el fondo */
    align-items: center; /* Centra el contenido */
}

/* Estilo del botón de registro */
.submit-btn {
    background: #F8820B; /* Fondo naranja */
    color: rgb(5, 5, 5); /* Texto negro */
    font-size: 16px; /* Tamaño del texto */
    font-weight: bold; /* Texto en negrita */
}

/* Hover en el botón de registro */
.submit-btn:hover {
    background: linear-gradient(#FF4300, #FF6400); /* Degradado de naranja */
    border-color: linear-gradient(#FF4300, #FF6400); /* Sin borde visible */
    color: rgb(255, 255, 255); /* Texto blanco */
}

/* Botón de Google */
.google-btn {
    background-color: transparent; /* Fondo transparente */
    color: #F8820B; /* Texto naranja */
    border: 2px solid #F8820B; /* Borde naranja */
    font-weight: bold; /* Texto en negrita */
}

/* Hover en el botón de Google */
.google-btn:hover {
    border: none; /* Elimina el borde */
    background: linear-gradient(#FF4300, #FF6400); /* Degradado de fondo */
    color: rgb(255, 255, 255); /* Texto blanco */
    border: 2px solid #FF4300; /* Borde naranja fuerte */
}

/* Contenedor para términos y condiciones */
.term-container {
    display: flex; /* Flexbox para alinear el checkbox y el texto */
    align-items: center; /* Centra verticalmente */
    gap: 10px; /* Espaciado entre checkbox y texto */
    margin-top: 10px; /* Margen superior */
    padding-bottom: 20px; /* Espaciado inferior */
}

/* Estilo del texto de términos y condiciones */
.term {
    font-size: 16px; /* Tamaño del texto */
    color: #F8820B; /* Color naranja */
}

/* Estilo para el checkbox */
input[type="checkbox"] {
    accent-color: #FF4300; /* Color del checkbox cuando está seleccionado */
    width: 20px; /* Ancho del checkbox */
    height: 20px; /* Altura del checkbox */
    cursor: pointer; /* Cambia el cursor a pointer */
}

/* Texto para mensajes de éxito */
.text-success {
    color: #51C23A; /* Verde */
    font-weight: bold; /* Negrita */
}

/* Texto para mensajes de error */
.text-danger {
    color: #EB4343; /* Rojo */
    font-weight: bold; /* Negrita */
}

/* Contenedor del formulario */
.form-container {
    background-color: 272829; /* Color de fondo oscuro */
    padding: 30px; /* Relleno interno */
    border-radius: 10px; /* Bordes redondeados */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

/* Estilo del título */
h1 {
    color: #F8820B; /* Color naranja */
    margin-bottom: 30px; /* Margen inferior */
    font-weight: bold; /* Texto en negrita */
    padding-bottom: 12px; /* Espaciado inferior */
    font-size: 56px; /* Tamaño del texto */
}

/* Campos de entrada del formulario */
.input-field {
    width: 100%; /* Ocupa todo el ancho */
    height: 42px; /* Altura del campo */
    padding: 0.75rem; /* Relleno interno */
    border: 1px solid #ddd; /* Borde gris claro */
    border-radius: 5px; /* Bordes redondeados */
    font-size: 1rem; /* Tamaño del texto */
    transition: border-color 0.3s ease; /* Transición suave para el color del borde */
}

/* Estilo del texto de preguntas */
.question {
    color: #F8820B; /* Color naranja */
    font-size: 18px; /* Tamaño del texto */
    font-weight: bold;
}

/* Etiquetas del formulario */
.form-label {
    font-weight: bold; /* Texto en negrita */
    color: #F8820B; /* Color naranja */
    padding-top: 15px; /* Margen superior */
}
</style>

