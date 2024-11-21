<template>
    <!-- Contenedor principal para la sección de registro -->
    <section id="login">
        <!-- Contenedor con márgenes superiores -->
        <div class="container mt-5">
            <!-- Título principal (vacío actualmente, se podría agregar texto dinámico o estático) -->
            <h1 class="text-center mb-4"></h1>

            <!-- Fila para organizar contenido en dos columnas -->
            <div class="row">
                <div class="col-12 col-md-6">
                    <!-- Imagen ilustrativa para la página de registro -->
                    <img :src="require('@/assets/sujeto login.png')" alt="login" width="100%" height="auto">
                </div>
                <!-- Primera columna: Formulario de registro -->
                <div class="col-12 col-md-6">
                    <!-- Título del formulario -->
                    <h1 class="text-left mb-4">Log In</h1>
                    <!-- Mensaje para redirigir a la página de inicio de sesión si ya tiene cuenta -->
                    <div>

                        <p class="question"> If you don’t have an account.
                            <!-- Enlace para navegar a la página de inicio de sesión -->
                            <router-link to="/SignIn" @click="scrollToSection('signin')">Sign Up here</router-link>
                        </p>
                        <p class="message">
                            Please log in with your account.
                        </p>
                    </div>
                    <!-- Inicio del formulario -->
                    <form action="#" method="post" @submit.prevent="register">
                        <!-- Campo: Correo electrónico -->
                        <div class="mb-3">
                            <label for="email" class="form-label">Email Address</label>
                            <input type="text" placeholder="Enter your email address here" v-model="email"
                                :class="{ 'error': errMsg }" class="input-field" />
                        </div>
                        <!-- Campo: Contraseña -->
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" placeholder="Enter your password here" v-model="password"
                                :class="{ 'error': errMsg }" class="input-field" />
                            <!-- Mensaje de criterios de contraseña -->
                        </div>

                        <div>
                            <p v-if="errMsg" class="error-message">{{ errMsg }}</p>
                        </div>
                        <!-- Botones de acción -->
                        <div class="button-group">
                            <!-- Botón para enviar el formulario -->
                            <button @click="register" :disabled="loading" class="submit-btn">
                                <!-- Texto dinámico que muestra el estado de carga -->
                                {{ loading ? 'Log In...' : 'Log In' }}
                            </button>
                            <!-- Separador con texto -->
                            <div class="divider">
                                <hr class="line">
                                <span>Or log in with</span>
                                <hr class="line">
                            </div>
                            <!-- Botón para iniciar sesión con Google -->
                            <button @click="signInWithGoogle" type="button" class="google-btn">
                                <font-awesome-icon :icon="['fab', 'google']" class="social-icon" />Log In With Google
                            </button>
                            <!-- Botón para iniciar sesión con Microsoft -->
                            <button @click="signInWithGoogle" type="button" class="google-btn">
                                <font-awesome-icon :icon="['fab', 'apple']" class="social-icon" />Log In With Apple
                            </button>
                        </div>
                    </form>
                </div>
                <!-- Segunda columna: Imagen -->

            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, nextTick } from "vue"; // Importa la función ref para manejar estados reactivos
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Importa Firebase Auth
import { useRouter } from "vue-router"; // Importa el enrutador de Vue para redirección

// Estado reactivo para almacenar el email ingresado
const email = ref("");
// Estado reactivo para almacenar la contraseña ingresada
const password = ref("");
// Estado reactivo para almacenar el mensaje de error
const errMsg = ref();
// Estado reactivo para indicar si está en proceso de carga
const loading = ref(false);
// Instancia del enrutador para redirección
const router = useRouter();

const scrollToSection = (sectionId) => {
    nextTick(() => { // Asegura que el DOM esté completamente actualizado antes de buscar el elemento
        const element = document.getElementById(sectionId); // Busca el elemento por su ID
        if (element) { // Si el elemento existe
            element.scrollIntoView({ behavior: "smooth" }); // Realiza el desplazamiento suave hacia la sección
        }
    });
};

// Función para manejar el inicio de sesión
const register = () => {
    const auth = getAuth(); // Obtiene la instancia de autenticación de Firebase
    loading.value = true; // Activa el estado de carga
    // Intenta iniciar sesión con email y contraseña
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            console.log("Successfully signed in!"); // Log de éxito
            router.push("/"); // Redirige al usuario a la página "Feed"
        })
        .catch((error) => {
            console.log(error.code); // Log del código de error
            // Manejo de diferentes tipos de errores
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email"; // Email inválido
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found"; // Usuario no encontrado
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password"; // Contraseña incorrecta
                    break;
                default:
                    errMsg.value = "Email or password was incorrect"; // Error genérico
                    break;
            }
        })
        .finally(() => {
            loading.value = false; // Desactiva el estado de carga
        });
};
</script>

<style scoped>
/* Oculta la imagen en pantallas pequeñas */
@media screen and (max-width: 768px) {
    .col-md-6 img {
        display: none;
        /* La imagen no se muestra en pantallas pequeñas */
    }
}

.message {
    color: #fff;
    font-weight: bold;
    padding-top: 8px;
}

img {
    padding-bottom: 60px;
}

/* Estilo para el ícono de Google en el botón al pasar el cursor */
.google-btn:hover .social-icon {
    color: #fff;
    /* Cambia el color del ícono a blanco */
}

/* Estilo para los íconos sociales */
.social-icon {
    font-size: 1.5rem;
    /* Tamaño del ícono */
    margin-right: 20px;
    /* Espaciado a la derecha del ícono */
    color: #F8820B;
    /* Color inicial del ícono */
    transition: all 0.3s ease;
    /* Transición suave para los cambios de estilo */
}

/* Estilo del separador entre texto y líneas */
.divider {
    display: flex;
    /* Flexbox para alinear elementos */
    align-items: center;
    /* Centra verticalmente los elementos */
    gap: 10px;
    /* Espacio entre líneas y el texto */
}

/* Estilo para las líneas horizontales del separador */
.line {
    flex-grow: 1;
    /* Expande la línea para ocupar el espacio disponible */
    border: none;
    /* Elimina bordes predeterminados */
    height: 4px;
    /* Grosor de la línea */
    background-color: #F8820B;
    /* Color naranja de la línea */
    color: #F8820B;
    /* Color adicional, aunque no afecta <hr> directamente */
}

/* Estilo para el texto del separador */
span {
    color: #F8820B;
    /* Color naranja */
    font-size: 16px;
    /* Tamaño del texto */
}

/* Estilo para una línea personalizada */
.linea {
    background: #F8820B;
    /* Fondo naranja */
}

/* Grupo de botones */
.button-group {
    display: flex;
    /* Flexbox para organizar botones */
    flex-direction: column;
    /* Botones apilados verticalmente */
    gap: 1rem;
    /* Espaciado entre botones */
    margin-top: 1.5rem;
    /* Margen superior */
    padding-bottom: 50px;
    /* Espaciado inferior */
}

/* Botón de envío y botones sociales */
.submit-btn,
.google-btn {
    width: 100%;
    /* Botones ocupan todo el ancho */
    padding: 0.75rem;
    /* Relleno interno */
    border: none;
    /* Sin borde */
    border-radius: 4px;
    /* Bordes redondeados */
    font-size: 1rem;
    /* Tamaño del texto */
    cursor: pointer;
    /* Cambia el cursor a pointer */
    transition: background-color 0.3s ease;
    /* Transición suave en el fondo */
    align-items: center;
    /* Centra el contenido */
}

/* Estilo del botón de registro */
.submit-btn {
    background: #F8820B;
    /* Fondo naranja */
    color: rgb(5, 5, 5);
    /* Texto negro */
    font-size: 16px;
    /* Tamaño del texto */
    font-weight: bold;
    /* Texto en negrita */
}

/* Hover en el botón de registro */
.submit-btn:hover {
    background: linear-gradient(#FF4300, #FF6400);
    /* Degradado de naranja */
    border-color: linear-gradient(#FF4300, #FF6400);
    /* Sin borde visible */
    color: rgb(255, 255, 255);
    /* Texto blanco */
}

/* Botón de Google */
.google-btn {
    background-color: transparent;
    /* Fondo transparente */
    color: #F8820B;
    /* Texto naranja */
    border: 2px solid #F8820B;
    /* Borde naranja */
    font-weight: bold;
    /* Texto en negrita */
}

/* Hover en el botón de Google */
.google-btn:hover {
    border: none;
    /* Elimina el borde */
    background: linear-gradient(#FF4300, #FF6400);
    /* Degradado de fondo */
    color: rgb(255, 255, 255);
    /* Texto blanco */
    border: 2px solid #FF4300;
    /* Borde naranja fuerte */
}

/* Contenedor para términos y condiciones */
.term-container {
    display: flex;
    /* Flexbox para alinear el checkbox y el texto */
    align-items: center;
    /* Centra verticalmente */
    gap: 10px;
    /* Espaciado entre checkbox y texto */
    margin-top: 10px;
    /* Margen superior */
    padding-bottom: 20px;
    /* Espaciado inferior */
}

/* Estilo del texto de términos y condiciones */
.term {
    font-size: 16px;
    /* Tamaño del texto */
    color: #F8820B;
    /* Color naranja */
}

/* Contenedor del formulario */
.form-container {
    background-color: 272829;
    /* Color de fondo oscuro */
    padding: 30px;
    /* Relleno interno */
    border-radius: 10px;
    /* Bordes redondeados */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    /* Sombra suave */
}

/* Estilo del título */
h1 {
    color: #F8820B;
    /* Color naranja */
    margin-bottom: 30px;
    /* Margen inferior */
    font-weight: bold;
    /* Texto en negrita */
    padding-bottom: 12px;
    /* Espaciado inferior */
    font-size: 56px;
    /* Tamaño del texto */
}

/* Campos de entrada del formulario */
.input-field {
    width: 100%;
    /* Ocupa todo el ancho */
    height: 42px;
    /* Altura del campo */
    padding: 0.75rem;
    /* Relleno interno */
    border: 1px solid #ddd;
    /* Borde gris claro */
    border-radius: 5px;
    /* Bordes redondeados */
    font-size: 1rem;
    /* Tamaño del texto */
    transition: border-color 0.3s ease;
    /* Transición suave para el color del borde */
}

/* Estilo del texto de preguntas */
.question {
    color: #F8820B;
    /* Color naranja */
    font-size: 18px;

    font-weight: bold;
    /* Tamaño del texto */
}

/* Etiquetas del formulario */
.form-label {
    font-weight: bold;
    /* Texto en negrita */
    color: #F8820B;
    /* Color naranja */
    padding-top: 15px;
    /* Margen superior */
}
</style>
