<template>
    <section id="home">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <main class="home-main-container">

        <!-- * Section for hero -->
        <section class="hero-content">
        
            <img class="img-backgrd" src="../assets/img-home/back-hero.png" alt="Fondo obscuro del hero">
            <img class="img-subject" src="../assets/img-home/sujeto-gym.png" alt="Sujeto resaltado">

            <div class="text-bttn-hero">
                <p class="txt-subtitl-top">Your Fitness Journey Starts Here</p>
                <h1 class="txt-titl-welcomn">WELCOME TO TIME FIT</h1>
                <p class="txt-parghp-bottom">Manage your gym efficiently and offer an unparalleled experience to your users.</p>

                <!-- Button redirection to section cards video -->
                <a href="#strt-page-read">
                    <button class="bttn-exp-more" type="button">Explore more
                        <i class="arrow-boton fa-solid fa-arrow-right"></i>
                    </button>
                </a>
            </div>
        </section>

        <!-- * Section for "What we offer cards" and "Efficiency and Personalization at Your Fingertips" 
         -->

        <div class="cards_video_content" id="strt-page-read">

            <header class="title-cards">
                <h1>What we offer?</h1>
            </header>
            
            <!-- ** HTML for section for cards -->
            <section class="cards-we-offer">
            <div class="cards-content">
            <!-- Target 1 -->
                <article >
                    <figure>
                        <img
                        src="../assets/img-home/img-card-1.png" alt="Two people talking to each other"/>
                    </figure>
                    <div class="cards-content-preview">
                        <h2> Unified Management and User Experience: </h2>
                        <p>
                            Combines gym administration and routine personalization 
                            in one platform, centralizing all key functions.
                        </p>
                    </div>
                </article>
                <!-- Target 2 -->
                <article >
                    <figure>
                        <img src="../assets/img-home/img-card-2.png" alt="Diets and weight"/>
                    </figure>
                    <div class="cards-content-preview">
                        <h2> Automation and Real-Time Potential: </h2>
                        <p>
                            Automatically personalizes routines and diets, with future potential for integration with real-time monitoring devices.
                        </p>
                    </div>
                </article>
                <!-- Target 3 -->
                <article >
                    <figure>
                        <img src="../assets/img-home/img-card-3.png" alt="Community members"/>>
                    </figure>
                    <div class="cards-content-preview">
                        <h2> Community for Motivation personal: </h2>
                        <p>
                            Includes a forum where users can share achievements and support each other, fostering retention and engagement.
                        </p>
                    </div>
                </article>
                <!-- Target 4 -->
                <article >
                    <figure>
                        <img src="../assets/img-home/img-card-4.png" alt="Gym decorate"/>
                    </figure>
                    <div class="cards-content-preview">
                        <h2> Affordable and Simple for Small Gyms: </h2>
                        <p>
                            Provides essential tools without complexity or high costs, ideal for growing gyms.
                        </p>
                    </div>
                </article>
            </div>
            </section>
            
            <!-- ** HTML for section promotional video -->
            <section class="promotional-video">
                <h1>Efficiency and Personalization at Your Fingertips</h1>
                <!-- Promotional video -->
                <!-- <video src="https://youtu.be/TlJbu0BMLaY?si=BNwZxkJLaF4XML2Q">
                </video> -->
                <!-- <iframe class="video-promo" src="https://www.youtube.com/embed/TlJbu0BMLaY?si=BNwZxkJLaF4XML2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
                <iframe class="video-promo" src="https://www.youtube.com/embed/kV4nYTYB1HU?si=vglkD0o7kNyJNuhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <div class="cont-text-bttn-video">
                    <!-- Paragraph video's -->
                    <p>Time Fit: The all-in-one platform that simplifies gym management and personalizes your clients' experience. Automation, community, and flexibility at your fingertips. Discover how to transform your gym today</p>
    
                    <!-- Button for read more -->
                     <!-- Redirection to About us -->
                    <router-link to="/Aboutus"> 
                        <button name="read-more" class="bttn-red-more-2" type="button"> Read More </button>
                    </router-link>
                </div>

            </section>

        </div>

        <!-- * Section information columns -->
         <section class="info-column-content-main">

            <!-- ** Sections info with your image -->
             <div class="info-column-content">

                <!-- Content text -->
                <section class="section-text">
                    <h2>Advanced Automation and Personalization</h2>
                    <p> Time Fit automates the creation of personalized routines and diets, adapting to each user based on their level, goals, available time, and dietary preferences. In the future, the platform aims to integrate with fitness devices to offer real-time recommendations based on metrics like heart rate and calories burned.
                    </p>
                    <router-link to="/Features"> <!-- There is a conection to "Features" section of landing -->
                        <button class="bttn-red-more-3"> Read more </button>
                    </router-link>
                </section>

                <!-- Content image -->
                <section class="section-img">
                    <figure>
                        <img src="../assets/img-home/info-column-img-1.png" alt="Salad dish">
                    </figure>
                </section>
                
             </div>

             <div class="info-column-content info-column-revers-content">
    
                 <!-- Content text -->
                 <section class="section-text section-text-reverse">
                    <h2>Simplified and Accessible Solution for Small Gyms</h2>
                    <p> Time Fit is designed to be accessible and easy to use, especially for small or growing gyms. The platform offers only essential features, avoiding unnecessary complexity and high costs, allowing these gyms to adopt advanced technology without major investments.
                    </p>
                    <router-link to="/Features"> <!-- There is a conection to "Features" section of landing -->
                        <button class="bttn-red-more-3"> Read more </button>
                    </router-link>
                </section>

                <!-- Content image -->
                <section class="section-img">
                    <figure>
                        <img src="../assets/img-home/info-column-img-2.png" alt="Gym picture's">
                    </figure>
                </section>

             </div>

             <div class="info-column-content">
    
                 <!-- Content text -->
                 <section class="section-text">
                    <h2>Easy Membership and Payment Management</h2>
                    <p> Time Fit offers automated membership renewal reminders and a streamlined payment system, making financial management easier for gyms and ensuring that customer memberships remain active.
                    </p>
                    <router-link to="/Features"> <!-- There is a conection to "Features" section of landing -->
                        <button class="bttn-red-more-3"> Read more </button>
                    </router-link>
                </section>

                <!-- Content image -->
                <section class="section-img">
                    <figure>
                        <img src="../assets/img-home/info-column-img-3.png" alt="People image">
                    </figure>
                </section>

             </div>
         </section>

        <!-- * Section: What Our Member Say About Us? -->

        <section class="member-say-content-main">
            <!-- Text side -->
            <div class="text-side-content">
                <h2>What Our Member Say About Us?</h2>
                <div class="icons-content">
                    <img src="../assets/img-home/comnt-icon-a.svg" class="circle-icon-backgrd icon-a">
                    <img src="../assets/img-home/comnt-icon-b.svg" class="circle-icon-backgrd icon-b">
                    <img src="../assets/img-home/comnt-icon-c.svg" class="circle-icon-backgrd icon-c">  
                </div>
                <p>50K+ Satisfied Customer</p>
            </div>

            <!-- Comment side -->
            <div class="comment-say-content-main">

                <div class="comment-say-content">
                    <!-- Start icons -->
                    <div class="icons-content-stars">
                        <i class="fa-solid fa-star" style="color: #f8820b;"></i>
                        <i class="fa-solid fa-star" style="color: #f8820b;"></i>
                        <i class="fa-solid fa-star" style="color: #f8820b;"></i>
                        <i class="fa-solid fa-star" style="color: #f8820b;"></i>
                        <i class="fa-solid fa-star" style="color: #f8820b;"></i>
                    </div>
                    <q>
                        Since we implemented Time Fit in our gym, management has been much simpler and more efficient. The platform allows us to quickly and easily manage memberships, payments.
                    </q>
    
                    <!-- Info and icon person -->
                    <div class="info-icon-content">
                        <img src="../assets/img-home/comnt-icon-d.svg" class="circle-icon-backgrd icon-d">
                        <div class="info-content">
                            <p class="info-username">Monkey boy</p>
                            <p class="info-rol">student</p>
                        </div>
                    </div>
    
                    <!-- Circles of aside -->
                    <div class="circle-aside-a"></div>
                    <div class="circle-aside-b"></div>
                    <div class="circle-aside-c"></div>
                </div>

                
            </div>
        </section>

        <!-- * Section: Transform your gym experience with innovative  -->
        <!-- <section class="backgrd-final-content-main">
            <img src="../assets/img-home/background-fit.svg" alt=""> -->

            <!-- <div class="text-bttn-final-content"> -->
                <!-- <h2>Transform your gym experience with innovative</h2>
                <p>Join Time Fit and take your training to the next level.</p> -->
                
                <!-- Button for redirection to "Sign up" to Time Fit / Admin-->
                <!-- <a href="https://time-fit-web-app-flax.vercel.app/#/sign_up" target="_blank" rel="noopener">
                    <button class="bttn-red-more-3 bttn-final-content">Join now</button>
                </a> -->

                <!-- There is a conection to "Log in" section of landing -->
                <!-- <router-link to="/Login">
                    <button class="bttn-red-more-3 bttn-final-content">Join now</button>
                </router-link> -->
            <!-- </div> -->
<!-- 
        </section> -->
        
    </main>
    </section>
</template>

<style scoped>

    * { /* Sizing reset */
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    .home-main-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        /* Añade un espacio entre el content y el navbar  */
        /* margin-top: 3em; */
        background-color: #272829;
    }
    
    /* Main: section hero section */
    .hero-content {
        width: 100%;
        height: 50em;
        contain: content;
        overflow: hidden;
        position: relative;
    }

    /* Style background by frist mobile*/

    .img-backgrd { /* Styles for backgrd with a filter */
        width: 100%;
        /* height: 50em; */
        height: 100%;
        object-fit: cover;
        object-position: 75% 10%;
        position: absolute;
        filter: brightness(26%);
    }
    
    .img-subject { /* Subject  */
        object-fit: cover;
        width: 100%;
        /* height: 50em; */
        height: 100%;
        object-fit: cover;
        object-position: 75% 10%;
        filter: brightness(.5);
        z-index: 1; /* Se vuelve una capa encima del backgrd */
        position: relative;
    }
    
    /* Style text by hero content */

    .text-bttn-hero{
        width: auto;
        height: 30em;
        color: #fff;
        position: absolute;
        top: 6em;
        bottom: 65%;
        padding-left: 1.2em;        
        z-index: 2; /* El texto esta por encima del background*/
        /* overflow: scroll; */
    }

    .txt-subtitl-top {
        color: #EC9D0B ;
        font-weight: 500;
        padding-bottom: 1em;
    }

    .txt-titl-welcomn {
        color: #D9D9D9;
        font-size: 3em;
        font-weight: 700;
        line-height: 1.5em; /* Interlineado del titulo */
    }

    .txt-parghp-bottom {
        padding-top: 2em;
        padding-bottom: 3em;
        width: 342px;
        /* padding-right: 3px; */
        /* transition: 3s; */
    }

    .bttn-exp-more {
        background: linear-gradient(90deg, #FF4300 0%, #FF6400 100%);
        padding: 10px 37px;
        border-radius: 15px;
        border-style: inherit;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;
        color: #fff;    
    }

    .arrow-boton {
        transform: rotate(90deg);
        margin-left: 0.625px;
    }

    /* Main: Section for "What we offer cards" and "Efficiency and Personalization at Your Fingertips" */

    .cards_video_content {
        background: linear-gradient(42deg, #272829 42.86%, #BB650F 100%);
        width: 100%;
        height: auto;

    }
    
    /* Styles for section cards */
    .cards-we-offer {
        display: flex;
        justify-content: center;
        align-items: start;
        /* padding: 20px 0px; */
        flex-direction: column;
        color: white;
    }

    /* Styles for cards title */
    .title-cards {
        display: flex;
        justify-items: center;
    }

    .title-cards > h1 {
        text-align: center;
        justify-content: center;
        font-size: 1.8rem;
        color: #D9D9D9;
        margin: 0 auto;
        padding: 2em 0em 0.8em 0em;
        text-transform: uppercase;
        font-weight: 700;
    }

    /* Styles for card directly */

    .cards-content {
        display: flex;
        flex-wrap: wrap;
        /* margin: 0 auto; */
        justify-content: center;
        /* max-width: 1200px; */
        width: 100%;
        gap: 1.5em;
    }

    .cards-content article {
        width: 18em;
        height: 397px;
        cursor: pointer;
        display: block;
        transition: all 0.4s ease-in-out;
        overflow: hidden;
        border-radius: 16px;
    }

    .cards-content article a {
        display: inline-flex;
        text-decoration: none;
        font-size: 16px;
    }

    .cards-content article h2 {
        margin: 0 0 18px 0;
        font-size: 1em;
        font-weight: 700;
        line-height: 1.5em;
        color: #ff6400;
        transition: color 0.3s ease-out;
    }
    .cards-content article p {
        margin: 0 0 18px 0;
        font-size: 14px;
        color:  #fff;
        transition: color 0.3s ease-out;
    }

    .cards-content article img {
        max-width: 100%;
        transform-origin: center;
        transition: transform 0.4s ease-in-out;
    }

    .cards-content-preview {
        padding: 24px;
        background: #45474B;
    }

    .cards-content figure {
        width: 100%;
        height: 200px;
        overflow: hidden;
    }

    .cards-content figure img {
        height: 100%;
        aspect-ratio: 16/9;
        overflow: hidden;
        object-fit: cover;
    }   

    .cards-content article:hover img {
        transform: scale(1.5);
    }

    /* Styles for section promotional video */

    .promotional-video {
        display: flex;
        justify-content: center;
        /* align-items: start; */
        /* padding: 5em 0em 2.5em 0em; */
        margin: 5em 0em;
        flex-direction: column;
        color: white;
        width: 100%;
    }

    .promotional-video h1 {
        justify-content: center;
        text-align: center;
        text-transform: uppercase;
        font-size: 1.6em;
        font-weight: 700;
        line-height: 1.5em;
        padding: 0em 1em;
    }

    /* Styles for video promo */
    .video-promo {
        width: 320px;
        height: 220px;
        position: relative;
        padding-top: 2em;
        padding-bottom: 2em;
        margin:  auto;
    }

    /* Flex syteles for content */
    .cont-text-bttn-video {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .promotional-video p {
        position: relative;
        width: 100%;
        padding: 0em 2em ;
        font-size: 21px;
        padding-bottom: 3em;
    }

    .bttn-red-more-2 {
        background: linear-gradient(90deg, #FF4300 0%, #FF6400 100%);
        padding: 10px 37px;
        border-radius: 16px;
        border-style: inherit;
        font-weight: 500;
        font-size: 15px;
        cursor: pointer;
        color: #fff;
    }

    /*
    Main: Section information columns 
    */
    
    .info-column-content-main {
        /* display: flex; */
        width: 100%;
        height: auto;
        background: #272829;
    }

    /* Styles for section text */
    .info-column-content {
        display: flex;
        justify-content: center;
        margin-bottom: 3em;
        /* padding: 2.5em 0em 3em; */
        flex-direction: row;
        color: white;
        width: 100%;
    }

    .section-img img {
        display: none;
    }

    .section-text {
        padding: 0em 1.25em;
        flex-direction: column;
        text-align: center;
    }

    .section-text h2, .section-text p {
        text-align: center;
    }

    .section-text h2 {
        padding-bottom: 2em;
        font-size: 1.8em;
        font-weight: 700;
        line-height: 1.5em;
    }

    .section-text p {
        position: relative;
        width: 100%;
        /* padding: 0em 2em ; */
        font-size: 21px;
        padding-bottom: 3em;
    }

    .bttn-red-more-3 {
        background: linear-gradient(90deg, #FF4300 0%, #FF6400 100%);
        padding: 8px 28px;
        border-radius: 16px;
        border-style: inherit;
        font-weight: 500;
        letter-spacing: .6px;
        font-size: 15px;
        cursor: pointer;
        color: #fff;
    }

    /* Main: Section - What Our Member Say About Us? */

    .member-say-content-main {
        width: 100%;
        height: auto;
        background: #272829;
    }

    .text-side-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .text-side-content h2 {
        color: #fff;
        text-align: center;
        font-size: 1.8em;
        padding-bottom: 1em;
        font-weight: 700;
        line-height: 1.5em;
    }
    .text-side-content p {
        color: #F8820B;
    }

    .icons-content {
        display: flex;
        flex-direction: row;
        padding-bottom: 1em;
    }

    .circle-icon-backgrd {
        width: 2em;
        height: 2em;
        border-radius: 50%;
        background-color: #fff;
    }

    .icon-a,.icon-b, .icon-c {
        position: relative;
    }

    .icon-a {
        width: 2em;
        height: 2em;
    }

    .icon-b {
        left: -6%;
        z-index: 2;
    }

    .icon-c{
        left: -12%;
        z-index: 3;
    }

    .comment-say-content-main {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    
    .comment-say-content {
        margin: 2em;
        margin-bottom: 4em;
        background-color: #45474B;
        border-radius: 20px;
        padding: 1.5em;
        max-width: 45em;
    }

    .icons-content-stars {
        display: flex;
        justify-content: end; 
    }

    .comment-say-content q {
        padding-top: 1em;
        color: rgba(255, 255, 255, 0.80);
        display: block;
        font-weight: 500;
    }

    .info-icon-content {
        display: flex;
        flex-direction: row;
        padding-top: 1em;
    }

    .info-content > p {
        font-size: 12px;
        color: #fff;
        padding-left: 1em;
    }

    .info-content > .info-rol {
        color: #F8820B;
    }

    /* Main: Section - Transform your gym experience with innovative */

    .backgrd-final-content-main {
        margin-bottom: 4em;
        background-color: #272829;
        width: 100%;
        height: 24em;
        contain: content;
        overflow: hidden;
        position: relative;
    }
    
    .backgrd-final-content-main img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 47% 10%;
        position: absolute;
        /* margin-bottom: 1em; */
        filter: brightness(70%);
    }

    .text-bttn-final-content {
        position: relative;
        text-align: center;
        color: #fff;
        padding: 0em 2em ;
        /* background-color: #45474B; */
        margin: 6.1em 0em;
        color: #D9D9D9;

    }

    .text-bttn-final-content h2 {
        padding-bottom: 1.3em;
        font-size: 1.2em;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        line-height: 1.5em;
    }

    .text-bttn-final-content p {
        text-transform: uppercase;
        font-size: 1em;
        padding-bottom: 1.3em;
        font-weight: 300;
        letter-spacing: 0.5px;
    }

    /* ------ Media queries by size of tablets ------ */

     /* It is a min-width: 768px in legacy sintax */
    @media(width >= 712px) {

        /* ----- Main: section hero section */
        
        .hero-content {
            width: 100%;
            height: 61em;
        }

        .img-backgrd { 
        /* Styles for backgrd with a filter */
            object-position: 63% 10%;
            filter: brightness(23%);
        }
    
        .img-subject { 
        /* Subject  */
            object-position: 63% 10%;
            filter: brightness(71%);
            z-index: 1; /* Se vuelve una capa encima del backgrd */
            position: relative;
        }

        /* ** Style text by hero content ** */

        .text-bttn-hero{
            position: absolute;
            top: 9.7em;
            bottom: 65%;
            height: 50em;
            
        }
        
        .txt-subtitl-top {
            font-size: 1.4em;
            font-weight: 500;
            max-width: 12em;
        }

        .txt-titl-welcomn {
            color: #D9D9D9;
            font-size: 4em;
            padding-right: 7em;
        }

        .txt-parghp-bottom {
            padding-top: 2em;
            padding-bottom: 3em;
            width: 342px;
            padding-right: 3em;
            font-size: 17px;
        }

        .bttn-exp-more {
            padding: 14px 33px;
            font-weight: bold;
            font-size: 15px;
        }

        /* ----- Main: Section for "What we offer cards" 
        and "Efficiency and Personalization at 
        Your Fingertips" */

        .video-promo {
            width: 40em;
            /* height: 420px; */
            height: 26em;
            position: relative;
            padding-top: 2em;
            padding-bottom: 2em;
            margin:  auto;
        }

        /*
        ----- Main: Section information columns 
        */

        .section-text {
            /* padding: 0em 1.25em; */
            padding: 0em 2.3em;
        }

        .section-text h2 {
            padding-bottom: .8em;
        }

        /* 
        ----- Main: Section - Transform your gym experience with
        innovative */

        .text-bttn-final-content {
            padding: 0em 2em;
            margin: 4.3em 0em;
        }

        .text-bttn-final-content h2 {
            font-size: 1.9em;
            letter-spacing: 1.3px;
        }

        .text-bttn-final-content p {
            text-transform: uppercase;
            font-size: 1.4em;
            padding-bottom: 2em;
            font-weight: 300;
            letter-spacing: 0.5px;
        }

    }


    /* ------ Media queries by size of desktop and laptops ------ */

    @media(width >= 1200px) {

        .hero-content {
            width: 100%;
            height: 47em;
        }
        
        /* Style background by hero content ** */
        
        .img-backgrd { 
        /* Styles for backgrd with a filter */
            object-position: 63% 35%;
            filter: brightness(32%);
        }
    
        .img-subject { 
        /* Subject  */
            object-position: 63% 35%;
            filter: brightness(90%);
            z-index: 1; /* Se vuelve una capa encima del backgrd */
            position: relative;
        }

        /* ** Style text by hero content ** */

        .text-bttn-hero{
            position: absolute;
            top: 8.3em;
            bottom: 65%;
            height: 50em;
            padding-left: 3.7em;
            
        }
        
        .txt-subtitl-top {
            font-size: 1.4em;
            font-weight: 500;
            max-width: 18em;
        }

        .txt-titl-welcomn {
            color: #D9D9D9;
            font-size: 4em;
            padding-right: 11.1em;
        }

        .txt-parghp-bottom {
            padding-top: 2em;
            padding-bottom: 3em;
            width: 26em;
            padding-right: 3em;
            font-size: 17px;
        }

        .bttn-exp-more {
            padding: 11px 33px;
            border-radius: 16px;
            font-weight: 550;
            font-size: 15px;
        }

        /* 
        ----- Main: Section for "What we offer cards" and "Efficiency and Personalization at Your Fingertips" 
        ----- */

        /* Styles for cards title */

        .title-cards > h1 {
            text-align: center;
            font-size: 1.8rem;
            padding: 3.5em 0em 2em 0em;
        }

        /* Styles for section promotional video */

        .cards-content article {
            width: 16.5em;
            /* height: 397px; */
        }

        .video-promo {
            width: 64em;
            height: 34em;
        }

        .promotional-video p {
            position: relative;
            width: 100%;
            padding: 0em 2em ;
            font-size: 21px;
            padding-bottom: 2em;
        }

        /*
        Main: Section information columns 
        */

        .info-column-content-main {
            padding: 0em 12em 0em;
        }
        
        /* Styles for section text */
        
        .info-column-content {
            margin-bottom: 4em;
        }

        .info-column-revers-content {
            flex-direction: row-reverse;
        }

        .info-column-revers-content .section-text-reverse {
            padding-right: 0em;
            padding-left: 5em;
        }
        
        .section-text {
            text-align: left;
            padding: 0em 0em;
            padding-right: 5em;
        }
        
        .section-text h2, .section-text p {
            align-items: center;
            text-align: left;
        }
        
        .section-text h2 {
            padding-top: .6em;
            padding-bottom: .6em;
            font-size: 2.5em;
            font-weight: 600;
            
        }

        .section-text p {
            font-size: 1em;
            padding-bottom: 2.5em;
        }

        .section-img {
            display: flex;
            align-items: center;
        }

        .section-img figure{
            position: relative;
            width: 450px;
            margin: 1.9em auto;
        }
        
        .section-img img {
            display: block;
            width: 360px;
            margin: 0 auto;
            position: relative;
        }

        /* Main: Section - What Our Member Say About Us? */

        .member-say-content-main {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: auto;
            justify-items: center;
            gap: 8em;
            margin-bottom: 5em;
        }

        .comment-say-content-main {
            display: block;
        }

        .comment-say-content {
            position: relative;
            margin-right: auto;
            margin-bottom: 0em;
            max-width: 38em;
            padding: 2em;
            margin-bottom: 2em;
        }

        .text-side-content {
            position: relative;
            margin-left: 8.8em;
            align-items: baseline;
        }

        .text-side-content h2 {
            text-align: left;
        }

        /* 
        ----- Main: Section - Transform your gym experience with
        innovative 
        */

        .backgrd-final-content-main img {
            filter: brightness(80%);
        }

        .text-bttn-final-content {
            margin: 6.1em 0em;
            padding: 0em 2em;
        }

        .text-bttn-final-content h2 {
            letter-spacing: 0px;
        }

        .text-bttn-final-content p {
            font-size: 1.2em;
            letter-spacing: 0px;
        }

        .bttn-final-content {
            padding: .6em 4em;
            font-size: 1.1em;
            font-weight: 560;
            letter-spacing: 1.3px;
            border-radius: 18px;
        }








    }
    
</style> 