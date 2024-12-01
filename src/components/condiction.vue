<template>
    <section id="condiction" class="container mt-5">
        <h1 class="text-center mb-4">Privacy Policy and Terms</h1>
        <div class="content">
            <p>
                Privacy is important to Time Fit, and we are committed to protecting your personal data. This privacy
                policy explains how we collect, use, and protect the data you provide when participating in our survey.
            </p>
            <h5>1. Information We Collect.</h5>
            <p>
                By completing this survey, we may collect the following data:
            </p>
            <ul>
                <li>Personal data, such as your name, email address, and other details you choose to share.</li>
                <li>Information about your exercise habits and related preferences.</li>
                <li>Any other information you decide to provide in the open-ended survey questions.</li>
            </ul>

            <h5>2. Use of Information.</h5>
            <p>The data collected will be used solely for the following purposes:</p>
            <ul>
                <li>Improving the functionality and experience of the Time Fit application.</li>
                <li>Gaining a better understanding of our users' needs and preferences.</li>
                <li>Conducting statistical and trend analysis to optimize our services.</li>
            </ul>

            <h5>3. Data Protection.</h5>
            <p>
                Time Fit values data protection. To prevent unauthorized access, disclosure, modification, or improper
                destruction of your data, we implement a variety of technical, administrative, and physical security
                measures, including but not limited to:
            </p>
            <ul>
                <li>Encryption of sensitive data both in transit and at rest.</li>
                <li>Restricted access to personal information, limited only to authorized personnel who need it to
                    perform their functions.</li>
                <li>Continuous monitoring of our systems to detect and prevent potential threats.</li>
            </ul>
            <p>
                Additionally, we regularly review and update our security practices to ensure they meet the highest
                industry standards. While no system can guarantee total security, we are committed to protecting your
                data to the best of our abilities.
            </p>
            <p>
                Our goal is to maintain our customers' trust, and we work tirelessly to ensure that your personal
                information is safe with us.
            </p>

            <h5>4. Sharing of Information</h5>
            <p>
                We will not share your personal data with third parties without your explicit consent, except in the
                following cases:
            </p>
            <ul>
                <li>When required by applicable law or regulation.</li>
                <li>To protect our rights, property, or safety, or those of our users.</li>
            </ul>

            <h5>5. Acceptance of the Privacy Policy</h5>
            <p>
                Participating in this survey implies that you have read and accept the terms of this privacy policy. We
                suggest that you do not participate in the survey if you do not agree with the terms established herein.
            </p>

            <!-- Pregunta y botones para aceptar o rechazar la política -->
            <div class="text-center mt-4">
                <!-- Botón para aceptar -->
                <button class="btn btn-success me-3" @click="handleButtonClick('SignIn')">
                    Yes, I accept the privacy policy.
                </button>
                <!-- Botón para rechazar -->
                <button class="btn btn-danger" @click="handleButtonClick('Home')">
                    No, I do not accept the privacy policy.
                </button>
            </div>

        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { nextTick } from 'vue'; // Importar nextTick desde Vue

// Obtener el enrutador
const router = useRouter();

// Método para desplazarse suavemente a una sección específica
const scrollToSection = (sectionId) => {
    nextTick(() => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    });
};

// Método para manejar el clic en los botones y redirigir
const handleButtonClick = (route) => {
    // Redirigir a la ruta correspondiente
    if (route === 'SignIn') {
        router.push('/SignIn');
    } else {
        router.push('/');
    }
    // Desplazar a la parte superior de la página
    scrollToSection('home');
};
</script>

<style scoped>
h1 {
    color: #ff4300;
    font-weight: bold;
    margin-bottom: 30px;
}

h5 {
    color: #F8820B;
    font-weight: bold;
    margin-top: 20px;
}

p {
    color: #FFFF;
    line-height: 1.6;
    margin-bottom: 15px;
}

ul {
    margin-left: 20px;
    color: #FFFF;
}

ul li {
    margin-bottom: 10px;
}

.content {
    background: #45474B;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 6%;
}

/* Estilo para los botones */
button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button.btn-success {
    background: #F8820B;
    /* Fondo naranja */
    color: rgb(5, 5, 5);
    /* Texto negro */
    font-size: 16px;
    /* Tamaño del texto */
    font-weight: bold;
    /* Texto en negrita */
}

button.btn-danger {
    background-color: transparent;
    /* Fondo transparente */
    color: #F8820B;
    /* Texto naranja */
    border: 2px solid #F8820B;
    /* Borde naranja */
    font-weight: bold;
    /* Texto en negrita */
}

button.btn-success:hover {
    background: linear-gradient(#FF4300, #FF6400);
    /* Degradado de naranja */
    border-color: linear-gradient(#FF4300, #FF6400);
    /* Sin borde visible */
    color: rgb(255, 255, 255);
    /* Texto blanco */
}

button.btn-danger:hover {
    background: linear-gradient(#FF4300, #FF6400);
    /* Degradado de naranja */
    border-color: linear-gradient(#FF4300, #FF6400);
    /* Sin borde visible */
    color: rgb(255, 255, 255);
    /* Texto blanco */
}

@media (max-width: 991px) {
    button.btn-success {
        background-color: #F8820B;
        /* Color de fondo naranja */
        border-color: #F8820B;
        /* Color del borde igual al fondo */
        color: black;
        /* Color del texto negro para contraste */
        margin-bottom: 20px;
        /* Margen inferior de 20px para separación con otros elementos */
        margin-top: 12px;
    }

    button.btn-danger {
        background-color: transparent;
        /* Fondo transparente */
        color: #F8820B;
        /* Texto naranja */
        border: 2px solid #F8820B;
        /* Borde naranja */
        font-weight: bold;
        margin-bottom: 20px;
        /* Margen inferior de 20px para separación con otros elementos */
    }
}
</style>
