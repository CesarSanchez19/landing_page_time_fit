<template>
    <section id="features">
        <div class="body">
            <div class="title1">Key Features of Time Fit</div>
            <div class="text1">Discover how Time Fit is revolutionizing the way gyms and their users interact and manage their health and wellness. With advanced tools and an intuitive interface, Time Fit is designed to meet the needs of both users and administrators, ensuring a comprehensive and personalized experience.</div>
            <button class="button">Learn More <img :src="require('@/assets/arrow-down.svg')" alt="icon" class="icon"></button>
        </div>
        <div class="container">
  <div class="content">
    <div class="text-section">
      <h2>Two Apps, One Complete Solution</h2>
      <p>
        Time Fit is divided into two main applications: a mobile app for clients, allowing them to manage their routines, diets, and progress, and a web application for administrators, facilitating efficient management of the gym's operational aspects. Together, these tools create a complete experience that benefits both clients and administrative staff.
      </p>
    </div>
    
    <div class="image-section">
      <img src="" alt="Time Fit Applications">
    </div>
  </div>

  <div class="mobile-features">
    <h3>Mobile App Features for Clients</h3>
  </div>
</div>

    </section>
</template>

<style scoped>
:root {
  --primary: #f8f8f8;
  --secondary: #272829;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
    background-image: url("@/assets/features.png");
    background-color: var(--secondary);
    background-size: cover;
    background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: relative;
}

.body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Ajusta el valor de opacidad (0.5) según sea necesario */
    z-index: 1; /* Coloca la superposición detrás del contenido */
}

.body > * {
    position: relative;
    z-index: 2; /* Asegura que el contenido esté por encima de la superposición */
}


.title1 {
    width: 100%; 
    text-align: center; 
    color: #D9D9D9; 
    font-size: 80px; 
    font-family: Inter; 
    font-weight: 800; 
    line-height: 112px; 
    word-wrap: break-word;
}

.text1 {
    width: 100%; 
    text-align: center; 
    color: white; 
    font-size: 24px; 
    font-family: Inter; 
    font-weight: 400; 
    word-wrap: break-word;
    margin-bottom: 20px;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background: linear-gradient(90deg, #ff4300 0%, #ff6400 100%);
  border-radius: 20px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: Outfit, sans-serif;
  font-weight: 600;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  width: fit-content;
  margin-bottom: 20px;
}

.icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.text-section {
  flex: 1 1 50%;
  padding: 20px;
}

.text-section h2 {
  color: orange;
  margin-bottom: 20px;
}

.image-section {
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-section img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.mobile-features {
  margin-top: 40px;
  text-align: center;
}

.mobile-features h3 {
  color: orange;
}

</style>