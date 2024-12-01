<template>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- ! Main: Hero content -->
    <section class="hero-contnt-main">
        <img class="hero-img-backgrd" 
        src="../assets/img-aboutUs/img-hero-aboutUs.jpg" 
        alt="People training image"
        >
        <div class="hero-txt-contnt">
            <h1>Discover the Future of Gym Management and Personalized Fitness</h1>
            <p> At Time Fit, we're transforming the way gyms operate and how 
                users achieve their fitness goals. With a unique blend of advanced 
                technology, personalized routines, and a strong community focus, we’re 
                setting a new standard in the fitness industry.
            </p>
        </div>
    </section>

    <!-- ! Main: Info text and imgs about us-->
    <section class="info-txt-img-contnt-main">

        <!--? Who are we content -->
        <div class="info-txt-img-contnt info-txt-img-contnt-1">

            <img class="info-img-1" src="../assets/img-aboutUs/img-team-about-1.jpg" 
            alt="Time Fit members">

            <div class="info-txt-contnt info-txt-contnt-1">
                <h2>Who are we?</h2>

                <p>At Time Fit, we are a team passionate about technology 
                    and fitness, committed to transforming the experience of 
                    gyms and their users through innovative and accessible solutions.
                    We believe in the power of a platform that simplifies gym 
                    management while enhancing each client’s experience with 
                    personalized tools and progress tracking.</p>
                <br>
                <p>Inspired by the real needs of users and administrators, 
                    we have developed a comprehensive platform that combines 
                    process automation with personalized routine creation and 
                    an active community space to keep users motivated.</p>
            </div>
        </div>

        <!--? Vision content-->
        <div class="info-txt-img-contnt info-txt-img-contnt-2 revers-row">

            <img class="info-img-2" src="../assets/img-aboutUs/img-vision-about-2.png" 
            alt="Trainer talking to a client">

            <div class="info-txt-contnt info-txt-contnt-2">
                <h2>Vision</h2>
                <p>At Time Fit, our vision is to revolutionize the fitness 
                    industry through advanced technology and personalization.
                    We see ourselves as the leading platform in gym management,
                    integrating wearable devices and cutting-edge technologies to 
                    deliver a fitness experience that adapts in real-time to each 
                    user's needs. We envision a world where both administrators 
                    and users have instant access to relevant information, 
                    personalized routines, and performance metrics—all in a
                    single platform. </p>
            </div>
        </div>

        <!--? Mission content -->
        <div class="info-txt-img-contnt info-txt-img-contnt-3">

            <img class="info-img-3" src="../assets/img-aboutUs/img-mission-about-3.png" 
            alt="People in the Gym">

            <div class="info-txt-contnt info-txt-contnt-3">
                <h2>Mission</h2>
                <p>At Time Fit, our mission is to revolutionize gym management
                    and user experience through an accessible, intuitive, and 
                    personalized platform. We believe in the importance of 
                    simplifying daily gym operations, allowing administrators
                    to manage their activities efficiently and effortlessly. 
                    At the same time, we aim to provide each user with a unique 
                    experience, with personalized tools that adapt to their 
                    individual goals, motivating them to reach their fitness
                    objectives.</p>
            </div>
        </div>

    </section>

    <!-- ! Main: Team members - Cards -->
    <header class="title-cards-content">
        <h2>Team Members</h2>
    </header>

    <section class="team-membs-contnt-main">
        <div class="team-membs-contnt">
            
            <!--? Target 1 -->
            <article>
                
                <figure>
                    <img src="../assets/img-aboutUs/Diego-foto-card.jpg" alt="Diego Balbuena picture">
                </figure>
                <div class="txt-team-membs-contnt txt-team-membs-diego">
                    <p class="txt-team-membs-name">Balbuena Caballero Diego</p>
                    <p class="txt-team-membs-rol">UX/UI Designer</p>
                </div>
                
            </article>
            
            <!--? Target 2 -->
            <article>

                <figure>
                    <img src="../assets/img-aboutUs/Enrique-foto-card.jpg" alt="Enrique Castillo picture">
                </figure>
                <div class="txt-team-membs-contnt txt-team-membs-enrique">
                    <p class="txt-team-membs-name">Castillo Rodríguez Enrique</p>
                    <p class="txt-team-membs-rol">CEO project</p>
                </div>

            </article>

            <!--? Target 3 -->
            <article>

                <figure>
                    <img src="../assets/img-aboutUs/Yair-foto-card.jpg" alt="Yair Gamaliel picture">
                </figure>
                <div class="txt-team-membs-contnt txt-team-membs-yair">
                    <p class="txt-team-membs-name">Guzmán Pérez Yair Gamaliel</p>
                    <p class="txt-team-membs-rol">Full Stack Developer</p>
                </div>

            </article>

            <!--? Target 4 -->
            <article>

                <figure>
                    <img src="../assets/img-aboutUs/Cesar-foto-card.jpg" alt="Cesar Sanchez picture">
                </figure>
                <div class="txt-team-membs-contnt txt-team-membs-cesar">
                    <p class="txt-team-membs-name">Sánchez Trejo Cesar David</p>
                    <p class="txt-team-membs-rol">Network Architect</p>
                </div>

            </article>

            <!--? Target 5 -->
            <article>

                <figure>
                    <img src="../assets/img-aboutUs/Aaron-foto-card.jpg" alt="Aarón Santos picture">
                </figure>
                <div class="txt-team-membs-contnt txt-team-membs-aaron">
                    <p class="txt-team-membs-name">Santos Absalón Aarón de Jesús</p>
                    <p class="txt-team-membs-rol">UX/UI Designer</p>
                </div>

            </article>

        </div>
    </section>

     <!-- ! Main: Asked questions - Accordion -->
    <section class="ask-accor-contnt-main">
        <h2>Frequently Asked Question</h2>

        <div class="ask-accor-quest-contnt">
            <details class="ask-accor-quest ask-acorr-1">
                <summary>
                    <h3>
                        How does Time Fit help gyms improve client retention?
                    </h3>
                    <i class="ask-accor-icon fa-solid fa-plus"></i>
                </summary>
                <div class="ask-accor-txt-contnt">
                    <p> 
                        Allows gyms to offer a personalized experience for each client, 
                        with workout routines and diet plans tailored to their goals. 
                        It also includes an integrated community that motivates users 
                        to stay active and committed to their objectives, which helps 
                        improve long-term client retention.
                    </p>
                </div>
            </details>
    
            <details class="ask-accor-quest ask-acorr-2">
                <summary>
                    <h3>
                        How easy is it to integrate Time Fit with a gym's daily operations?
                    </h3>
                    <i class="ask-accor-icon fa-solid fa-plus"></i>
                </summary>
                <div class="ask-accor-txt-contnt">
                    <p> 
                        Time Fit is designed to be easy to use and implement. Its intuitive interface allows gym administrators to manage memberships, payments, and inventory quickly and efficiently without disrupting daily operations. We also offer support to help gyms integrate seamlessly.
                    </p>
                </div>
            </details>
    
            <details class="ask-accor-quest ask-acorr-3">
                <summary>
                    <h3>
                        How does Time Fit personalize each user's experience?
                    </h3>
                    <i class="ask-accor-icon fa-solid fa-plus"></i>
                </summary>
                <div class="ask-accor-txt-contnt">
                    <p> 
                        Time Fit provides advanced personalization tools that allow for tailoring workout routines and diet plans based on each user's experience level, goals, time availability, and dietary preferences. In the future, it may also integrate with wearable devices to offer a real-time personalized experience.
                    </p>
                </div>
            </details>
    
            <details class="ask-accor-quest ask-acorr-4">
                <summary>
                    <h3>
                        Is Time Fit suitable for gyms of all sizes?
                    </h3>
                    <i class="ask-accor-icon fa-solid fa-plus"></i>
                </summary>
                <div class="ask-accor-txt-contnt">
                    <p> 
                        Yes, Time Fit is suitable for gyms of all sizes. It is designed to be accessible and affordable, offering only essential features for smaller gyms and advanced customization and management options for larger gyms. The platform adapts to the specific needs of each type of gym.
                    </p>
                </div>
            </details>
        </div>

    </section>

</template>


<style scoped>

    /* Sizing reset */

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    /* ----- Main: Hero section ----- */

    .hero-contnt-main {
        width: 100%;
        min-height: 30em;
        contain: content;
        overflow: hidden;
        position: relative;
    }

    /* Styles resposive background */
    .hero-img-backgrd {
        width: 100%;
        /* height: 50em; */
        height: 100%;
        object-fit: cover;
        object-position: 63% 10%;
        position: absolute;
        filter: brightness(55%);
    }

    /* Styles text for hero content */
    .hero-txt-contnt {
        display: block;
        top: 5em;
        height: auto;
        width: 50em;
        max-width: 90%;
        margin: auto;
        position: relative;
        z-index: 1; /* El texto esta por encima del background*/
        text-align: center;
        color: #fff;
    }

    /* Styles for main title of hero*/
    .hero-contnt-main h1 {
        font-weight: 600;
        font-size: 2.4em;
        letter-spacing: 2px;
        padding-bottom: 1em;
    }

    /* For screen smaller */
    @media(width <= 628px) {
        .hero-contnt-main h1 {
        font-weight: 600;
        font-size: 1.6em;
        letter-spacing: 1px;
        padding-bottom: 1em;
        }
    }

    /* ----- Main: Info text and imgs about us ----- */
    
    /* Styles resposive main contain */
    .info-txt-img-contnt-main {
        width: 100%;
        height: auto;
        margin-bottom: 5em;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    /* Styles for resposive contain of div's containers */
    .info-txt-img-contnt {
        display: flex;
        color: #fff;
        height: 100%;
        padding: 1em;
        justify-content: center;
        align-items: center;
        /* margin-bottom: 2em; */
    }

    /* Styles images of 'Who are we' and 'Mission' contents */
    .info-txt-img-contnt-1 img, .info-txt-img-contnt-3 img {
        display: block;
        /* max-width: 45em; */
        width: 51%;
        /* max-height: 33em; */
        height: 30%;
        position: relative;
        left: 7em;
        margin-top: 5em;
        border-radius: 10px;
    }

    /* Styles for resposnive text contain */
    .info-txt-contnt {
        border-radius: 10px;
        margin: 7em 6em 0 2.6em;
        background: linear-gradient(180deg, #FF4300 0%, #FF6400 100%);
        display: flex;
        flex-direction: column;
        /* Shadow 1 */
        box-shadow: 0px 20px 24px -4px rgb(17 24 39 / 0.10), 
        0px 8px 8px -4px rgb(17 24 39 / 0.04);
        z-index: 2;
        padding: 2em;
    }
    
    .info-txt-contnt p {
        font-size: 1em;
    }

    .info-txt-contnt-1 {
        /* position: relative; */
        max-width: 30em;
        height: 100%;
        top: 9em;
        /* margin-top: 1%; */
    }

    .info-txt-contnt-1 p {
        font-size: .9em;
    }

    .info-txt-contnt-2 {
        max-width: 30em;
        /* max-height: 24em; */
        top: 9.5em;
        height: 100%;
        margin: 7em 2.6em 0 6em;
    }

    /* Changed of direction 'vision' content */
    .revers-row {
        flex-direction: row-reverse;
    }

    .revers-row img {
        display: block;
        /* max-width: 45em; */
        width: 51%;
        /* max-height: 33em; */
        height: 30%;
        position: relative;
        right: 7em;
        margin-top: 5em;
        border-radius: 10px;
    }

    .info-txt-contnt-3 {
        max-width: 30em;
        height: 100%;
        top: 10.5em;
        
    }


    .info-txt-contnt h2 {
        font-size: 1.7em;
        font-weight: 700;
        padding-bottom: .7em;
    }

    /* For screen smaller */

    @media(width < 1256px) {

        /*  */
        .info-txt-img-contnt-main {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            /* flex-wrap: wrap; */
            margin-bottom: 5em;
            margin-top: 5em;
        }

        .info-txt-img-contnt {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0;
            height: auto;
            margin-top: 0em;
            contain: content;
            border-radius: 10px;
        }
        
        .info-txt-img-contnt img {
            left: 0;
            width: 77%;
            margin-top: 0em;
            height: 100%;
            border-radius: 10px 10px 0px 0px;
        }

        .info-txt-img-contnt-2, .info-txt-img-contnt-3 {
            margin-top: 2em;
        }

        /* Texto que aun no se muestra */
        .info-txt-contnt {
            margin: 0;
            max-width: 77%;
            border-radius: 0px 0px 10px 10px;
        }

        .info-txt-contnt p {
            font-size: .9em;
        }
    }

    /* ----- Main: Team members section ----- */

    /* Styles for title */

    .title-cards-content {
        display: flex;
        justify-items: center;
    }

    .title-cards-content h2 {
        text-align: center;
        justify-content: center;
        font-size: 2.4em;
        color: #ff6400;
        margin: 0 auto;
        font-weight: 500;
        letter-spacing: 1px;
    }

    /* Styles for team members main container */
    .team-membs-contnt-main {
         display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        color: white;
        min-height: 30em;
    }

    .team-membs-contnt {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        gap: 3em;
    }

    /* Styles for every card */

    .team-membs-contnt article {
        width: 12em;
        height: 350px;
        display: block;
        transition: all 0.4s ease-in-out;
        overflow: hidden;
        border-radius: 16px;
    }

    
    /* Styles of conteiner text and text */
    
    .team-membs-contnt article p {
        margin: 0 0 18px 0;
        font-size: 14px;
        color:  #fff;
        text-align: center;
        transition: color 0.3s ease-out;
    }
    
    .txt-team-membs-contnt {
        margin-top: 1em;
        padding: 0 1em;
        
    }

    .team-membs-contnt .txt-team-membs-rol {
        color: #F8820B;
    }

    .team-membs-contnt .txt-team-membs-name {
        font-weight: 600;
    }

    .txt-team-membs-yair {
        font-size: 10px;
        margin: 1.2em;
    }

    /* Styles for conteiner and image */

    .team-membs-contnt article img {
        max-width: 100%;
        transform-origin: center;
        max-height: 370px;
        border: solid #ff6400;
        border-radius: 30px;
        cursor: pointer;
    }

    /* Styles extras but not functional */

    /* .team-membs-content figure {
        width: 100%;
        height: 24px;
        overflow: hidden;
    } */

    /* .team-membs-content figure img {
        height: 100%;
        aspect-ratio: 16/9;
        overflow: hidden;
        object-fit: cover;
    } */

    /* For screen smaller */

    @media(width <= 1151px) {
        .title-cards-content {
            margin-bottom: 2em;
        }

        .title-cards-content h2 {
            font-size: 1.8rem;
        }

        .team-membs-contnt-main {
            margin-bottom: 3em;
        }
    }

    /* ----- Main: Frequently asked question section ----- */

    /* Styles of main container */

    .ask-accor-contnt-main {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
        height: 100%;
        margin-bottom: 3em;

    }

    /* Styles for title (is a h2)
    */

    .ask-accor-contnt-main h2 {
        color: rgb(255 255 255 / 0.70);
        letter-spacing: 1px;
        text-align: center;
        font-size: 2.4em;
    }

    /* Styles for accordion container (is a div)
    */

    .ask-accor-quest-contnt {
        display: block;
        margin-left: 2em;
        margin-right: 2em;
        margin-top: 3em;
        width: 90%;
        max-width: 90em;
        /* background-color: #FF6400; */
    }

    .ask-accor-quest-contnt details {
        padding-bottom: 2em;
    }

    /* Styles for title and icon */

    .ask-accor-quest summary{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: rgb(255 255 255 / 0.70);
        margin-bottom: 1em;
        padding: 1em;
        border-radius: 20px;
        transition-duration: 400ms;
    }

    .ask-accor-quest summary:hover {
        background-color: #FF6400;
        color: #000;
    }

    .ask-accor-quest h3 {
        font-size: 1.5em;   
    }

    /* -- Style for icons -- */

    .ask-accor-icon {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Styles for text container and paragraph */

    .ask-accor-txt-contnt {
        /* -- Color and form styles */
        background-color: #68391d;

        /* -- Forma romboide */
        clip-path: polygon(4% 0, 100% 0, 96% 100%, 0 100%);   
        /* background: linear-gradient(89deg, #FF6400,#68391d,#272829); */

        /* -- Shadows */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

        padding: 3em;
    }

    .ask-accor-quest p {
        color: #fff;
        letter-spacing: 1px;
    }

    /* For screen smaller */

    @media(width <= 788px) {

        .ask-accor-contnt-main h2 {
            font-size: 1.8em;
        }

        .ask-accor-icon {
            display: none;
        }

        .ask-accor-quest summary {
            justify-content: center;
            border: solid #FF6400 1px;
            text-align: center
        }

        .ask-accor-quest h3 {
            font-size: 1.2em;
        }
    }
    
</style>