import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../components/Home.vue") },
        { path: "/AboutUS", component: () => import("../components/AboutUs.vue") },
        { path: "/Contact", component: () => import("../components/Contact.vue") },
        { path: "/Features", component: () => import("../components/Features.vue") },
        { path: "/SignIn", component: () => import("../components/signin.vue") },
        { path: "/Login", component: () => import("../components/login.vue") },
        { path: "/Condiction", component: () => import("../components/condiction.vue") },
        { path: "/Pricing", component: () => import("../components/Pricing.vue") },
    ]
});
// Función que obtiene al usuario autenticado actual.
const getCurrentUser = () => {
    // Devuelve una promesa para manejar la autenticación de forma asincrónica.
    return new Promise((resolve, reject) => {
        // Suscribe un listener para detectar cambios en el estado de autenticación.
        const removeListener  = onAuthStateChanged(
            getAuth(), // Obtiene la instancia de autenticación de Firebase.
            (user) => {
                removeListener(); // Elimina el listener una vez que se obtiene el usuario.
                resolve(user); // Resuelve la promesa con el usuario autenticado.
            },
            (error) => {
                removeListener(); // Elimina el listener en caso de error.
                reject(error); // Rechaza la promesa con el error capturado.
            }
        );
    });
};

// Middleware global que se ejecuta antes de cada cambio de ruta.
router.beforeEach(async (to, from, next) => {
    // Verifica si la ruta que se intenta acceder requiere autenticación.
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        try {
            // Intenta obtener el usuario actual autenticado.
            const user = await getCurrentUser();
            if (user) {
                // Si hay un usuario autenticado, permite el acceso a la ruta.
                next();
            } else {
                // Si no hay usuario autenticado, muestra una alerta y redirige a la página de inicio de sesión.
                alert("You don't have access!");
                next("/SignIn"); // Redirige a la ruta de inicio de sesión.
            }
        } catch (error) {
            // Si ocurre un error al obtener el usuario, lo registra en la consola.
            console.error("Error fetching current user:", error);
            // Redirige a la página de inicio de sesión.
            next("/SignIn");
        }
    } else {
        // Si la ruta no requiere autenticación, permite el acceso sin restricciones.
        next();
    }
});

// Exporta la instancia del enrutador para que pueda ser usada en la aplicación.
export default router;