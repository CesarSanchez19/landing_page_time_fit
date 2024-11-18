<template>
    <!-- Sección principal del contacto -->
    <section id="contact">
        <div class="container mt-5">
            <!-- Título vacío, posiblemente para un diseño futuro -->
            <h1 class="text-center mb-4"></h1>

            <div class="row">
                <!-- Columna izquierda: Formulario de contacto -->
                <div class="col-12 col-md-6">
                    <h1 class="text-center mb-4">Contact Form</h1>
                    <form action="#" method="post">
                        <!-- Campo para el nombre -->
                        <div class="mb-3">
                            <label for="name" class="form-label">Name(s)</label>
                            <input type="text" class="form-control" id="name" name="name" placeholder="Write your name here" required>
                        </div>
                        <!-- Campo para el apellido -->
                        <div class="mb-3">
                            <label for="surname" class="form-label">Surname(s)</label>
                            <input type="text" class="form-control" id="surname" name="surname" placeholder="Write your surname here" required>
                        </div>
                        <!-- Campo para el correo electrónico -->
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="Write your email here" required>
                        </div>
                        <!-- Campo para el teléfono -->
                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone</label>
                            <input type="tel" class="form-control" id="phone" name="phone" pattern="[0-9]{9}" placeholder="Write your phone here">
                        </div>
                        <!-- Campo para el asunto -->
                        <div class="mb-3">
                            <label for="subject" class="form-label">Subject</label>
                            <input type="text" class="form-control" id="subject" name="subject" placeholder="Write your subject here" required>
                        </div>
                        <!-- Campo para el mensaje -->
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" name="message" id="message" rows="6" placeholder="Write your message here"></textarea>
                        </div>
                        <!-- Botón de envío del formulario -->
                        <div>
                            <button type="submit" class="btn btn-primary submit">Submit</button>
                        </div>
                    </form>
                </div>

                <!-- Columna derecha: Mapa y detalles de contacto -->
                <div class="col-12 col-md-6">
                    <!-- Mapa incrustado de Google Maps -->
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.648889941564!2d-87.06636422510753!3d20.683858780880602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e2a14f13ba35%3A0x25d0481d668fb996!2sUniversidad%20Tecnol%C3%B3gica%20de%20la%20Riviera%20Maya%20-%20BIS!5e0!3m2!1ses-419!2smx!4v1729181414894!5m2!1ses-419!2smx"
                        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
                    <!-- Información de contacto -->
                    <div class="contact-info">
                        <h5>Contact Information:</h5>
                        <!-- Dirección -->
                        <p>
                            <font-awesome-icon :icon="['fas', 'location-dot']" class="social-contact" />
                            Av.Universidades S/N Ejidal, 77712 Playa del Carmen, Q.R. Mexico
                        </p>
                        <!-- Teléfono -->
                        <p>
                            <font-awesome-icon :icon="['fas', 'phone']" class="social-contact" />
                            +52 (984) 877 2969
                        </p>
                        <!-- Correo electrónico -->
                        <p>
                            <font-awesome-icon :icon="['fas', 'envelope']" class="social-contact" />
                            Timefit19@gmail.com
                        </p>
                        <!-- Horario -->
                        <p>
                            <font-awesome-icon :icon="['fas', 'clock']" class="social-contact" />
                            Monday to Sunday: 8:00 AM- 18:00 PM
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
/* Exportación de componente vacío, probablemente será completado más tarde */
export default {};
</script>

<style scoped>
/* Define un contenedor de formulario con estilos específicos */
.form-container {
    background-color: 272829; /* Color de fondo oscuro para el contenedor del formulario */
    padding: 30px; /* Espaciado interno de 30px alrededor del contenido del contenedor */
    border-radius: 10px; /* Bordes redondeados de 10px */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra ligera para darle profundidad al contenedor */
}

/* Estilos para el encabezado principal (h1) */
h1 {
    color: orangered; /* Color del texto en rojo anaranjado */
    margin-bottom: 30px; /* Margen inferior de 30px para separar el título del contenido siguiente */
    font-weight: bold; /* Texto en negrita para mayor énfasis */
    font-size: 45px; /* Tamaño de fuente grande para destacar el encabezado */
}

/* Estilo para etiquetas de formulario (como labels) */
.form-label {
    font-weight: bold; /* Texto en negrita para visibilidad */
    color: #F8820B; /* Color naranja vibrante para los labels */
}

/* Estilos para el botón principal */
.btn-primary {
    background-color: #F8820B; /* Color de fondo naranja */
    border-color: #F8820B; /* Color del borde igual al fondo */
    color: black; /* Color del texto negro para contraste */
    margin-bottom: 20px; /* Margen inferior de 20px para separación con otros elementos */
}

/* Estilos para el botón principal cuando se pasa el cursor por encima */
.btn-primary:hover {
    background: linear-gradient(#FF4300, #FF6400); /* Gradiente naranja para el fondo al pasar el cursor */
    border-color: linear-gradient(#FF4300, #FF6400); /* Gradiente en el borde para consistencia */
    color: white; /* Cambia el color del texto a blanco para mejor visibilidad */
}

/* Estilos para subtítulos o encabezados pequeños (h5) */
h5 {
    font-weight: bold; /* Texto en negrita para énfasis */
    color: #FF4300; /* Color naranja más intenso para diferenciar de otros textos */
    padding-top: 15px;
}

/* Estilos para enlaces o contactos sociales */
.social-contact {
    padding-right: 4px;
    color: #F8820B; /* Color naranja vibrante, consistente con el tema */
}

/* Estilos para párrafos generales */
p {
    color: rgb(248, 239, 239); /* Color blanco con un ligero tono cálido */
    padding-top: 2px; /* Agrega un relleno superior de 2px al texto del párrafo */
    padding-bottom: 2px; /* Agrega un relleno inferior de 2px al texto del párrafo */
}

/* Media query para dispositivos con un ancho máximo de 991px */
@media (max-width: 991px) {
    /* Estilos específicos para los párrafos cuando el ancho de la pantalla es menor o igual a 991px */
    p {
        padding-top: 4px; /* Agrega un relleno superior de 4px al texto del párrafo */
        padding-bottom: 5px; /* Agrega un relleno inferior de 5px al texto del párrafo */
    }
}

</style>
