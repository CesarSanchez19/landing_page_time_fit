<template>
  <section id="pricing">
    <div class="body">
      <div class="title">Why should you choose us?</div>

      <div class="text1">
        Time Fit stands out as the ideal solution for gyms seeking to optimize
        their operations and provide an exceptional experience for their users.
        Here are some reasons why Time Fit is the best choice to take your gym
        to the next level:
      </div>
      <button class="buttoncreate">Create Account</button>
    </div>
    <div class="content">
      <div class="card">
        <img
          class="icon"
          :src="require('@/assets/Customer_Support.svg')"
          alt="Customer Support"
        />
        <div class="titlecard">Dedicated Customer Support</div>
        <div class="textcard">
          Our support team is available to assist you every step of the way,
          from initial setup to integrating new features. We ensure you can make
          the most of all the tools Time Fit offers, with live assistance and
          personalized resources to resolve your questions quickly and
          efficiently.
        </div>
      </div>
      <div class="card">
        <img
          class="icon"
          :src="require('@/assets/bar-chart-line-fill.svg')"
          alt="Grafica"
        />
        <div class="titlecard">Flexible Scalability</div>
        <div class="textcard">
          Time Fit grows with you. As your gym expands, you can easily upgrade
          to plans with more advanced features. This flexibility ensures that
          the platform adapts to your needs at all times, without worrying about
          complicated or costly migrations.
        </div>
      </div>
      <div class="card">
        <img class="icon" :src="require('@/assets/sync.svg')" alt="Update" />
        <div class="titlecard">Constant Updates</div>
        <div class="textcard">
          At Time Fit, we continuously work on improving our platform with new
          features and upgrades that integrate automatically at no extra cost.
          These updates allow you to stay at the forefront of technology and
          respond to the latest trends in the fitness industry.
        </div>
      </div>
    </div>
    <div>
      <div class="title2">Complete Workout Program for All Levels</div>
      <div class="rectangles">
        <div class="image-container">
          <div class="imagen-rec">
            <img
              class="imagenes-rec"
              :src="require('@/assets/squat.png')"
              alt="squat"
            />
            <div class="text-imagen">Squats</div>
          </div>
          <div class="imagen-rec">
            <img
              class="imagenes-rec"
              :src="require('@/assets/push.jpg')"
              alt="push up"
            />
            <div class="text-imagen">Push-Ups</div>
          </div>
          <div class="imagen-rec">
            <img
              class="imagenes-rec"
              :src="require('@/assets/pull_up.png')"
              alt="pull up"
            />
            <div class="text-imagen">Pull-Ups</div>
          </div>
          <div class="imagen-rec">
            <img
              class="imagenes-rec"
              :src="require('@/assets/burpees.png')"
              alt="burpees"
            />
            <div class="text-imagen">Burpees</div>
          </div>
          <div class="imagen-rec">
            <img
              class="imagenes-rec"
              :src="require('@/assets/plank.png')"
              alt="plank"
            />
            <div class="text-imagen">Plank</div>
          </div>
        </div>
        <div class="image-container">
          <div class="imagen-rec">
            <img
              class="imagenes-rec"
              :src="require('@/assets/lunges.png')"
              alt="lunges"
            />
            <div class="text-imagen">Lunges</div>
          </div>
          <div class="imagen-rec">
            <img
              class="imagenes-rec"
              :src="require('@/assets/deadlift.png')"
              alt="deadlift"
            />
            <div class="text-imagen">Deadlift</div>
          </div>
          <div class="imagen-rec">
            <img
              class="imagenes-rec"
              :src="require('@/assets/bicep.png')"
              alt="bicep curl"
            />
            <div class="text-imagen">Bicep Curls</div>
          </div>
          <div class="imagen-rec">
            <img
              class="imagenes-rec"
              :src="require('@/assets/barbell.png')"
              alt="barbell bicep curl"
            />
            <div class="text-imagen">Barbell Bicep Curl</div>
          </div>
          <div class="imagen-rec">
            <img
              class="imagenes-rec"
              :src="require('@/assets/leg.png')"
              alt="leg raise"
            />
            <div class="text-imagen">Leg Raise</div>
          </div>
        </div>
      </div>
    </div>

    <div class="textrec">
      At Time Fit, we offer a variety of essential and effective exercises to
      help you achieve your fitness goals, regardless of your experience level.
      From basic movements like squats and push-ups to advanced exercises like
      deadlifts and pull-ups, our program is designed to build strength,
      endurance, and muscle tone.
    </div>
    <div class="button2">Join Now</div>


    <div class="title3">Famous and Nutritious Recipes for Every Taste</div>
    <div class="recipe-section">
      <!-- Imagen -->
      <div class="recipe-image">
        <img class="foodimagen" :src="require('@/assets/food.png')" />
      </div>

      <!-- Texto descriptivo -->
      <div class="recipe-description">
        <div class="foodtext">
          At Time Fit, we know that nutrition is essential to achieving your
          fitness goals. That's why we offer a collection of nutritious and
          delicious recipes, designed to provide the energy and nutrients your
          body needs. From energizing breakfasts to light dinners, our recipes
          are tailored to complement your workouts and improve your overall
          well-being.
        </div>
        <div class="button3">Join Now</div>
      </div>

      <!-- Categorías -->
      <div class="recipe-categories">
        <ul>
          <li>
            <img
              :src="require('@/assets/breakfast.png')"
              alt="Breakfast"
            />Breakfast
          </li>
          <li><img :src="require('@/assets/lunch.png')" alt="Lunch" />Lunch</li>
          <li>
            <img :src="require('@/assets/dinner.png')" alt="Dinner" />Dinner
          </li>
          <li><img :src="require('@/assets/snack.png')" alt="Snack" />Snack</li>
          <li>
            <img
              :src="require('@/assets/smoothies.png')"
              alt="Smoothies"
            />Smoothies
          </li>
        </ul>
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
  background-image: url("@/assets/chica.png");
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

.title {
  display: flex;
  width: 60%;
  color: white;
  font-size: 80px;
  font-family: Inter;
  font-weight: 700;
  text-transform: uppercase;
  word-wrap: break-word;
  /*margin-bottom: 20px;*/
  margin-top: -300px;
  margin-left: -600px;
}

.text1 {
  display: flex;
  width: 50%;
  color: white;
  font-size: 18px;
  font-family: Outfit;
  font-weight: 400;
  word-wrap: break-word;
  margin-bottom: 80px;
  margin-left: -700px;
}

.buttoncreate {
  display: flex;
  width: auto;
  height: auto;
  padding: 10px 20px;
  background: linear-gradient(90deg, #ff4300 0%, #ff6400 100%);
  border-radius: 20px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: Outfit, sans-serif;
  font-weight: 600;
  cursor: pointer;
  margin-right: auto;
}

.content {
  background-color: #272829;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 35vh;
}

.card {
  display: flex;
  flex-direction: column;
  width: 24%;
  background: #3b3b3b;
  border-radius: 23px;
  justify-content: center;
  align-items: center;
  height: 40vh;
  padding: 20px;
  top: -150px;
}

.icon {
  width: 20%;
  height: 20%;
  margin-top: -20px;
  margin-bottom: 20px;
}

.titlecard {
  width: auto;
  height: auto;
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: Inter;
  font-weight: 700;
  word-wrap: break-word;
  margin-bottom: 10px;
}

.textcard {
  width: auto;
  height: auto;
  text-align: center;
  color: white;
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
}

.title2 {
  width: 100%;
  height: 100%;
  color: #ff6400;
  font-size: 36px;
  font-family: Outfit;
  font-weight: 700;
  word-wrap: break-word;
  margin-bottom: 25px;
  margin-left: 5%;
}

.rectangles {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 30px;
}

.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.imagen-rec {
  position: relative;
  width: 250px;
  height: 600px;
  background: rgba(0, 0, 0, 0.78);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagenes-rec {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
}

.text-imagen {
  position: absolute;
  color: white;
  font-size: 1.5rem;
  font-family: Inter, sans-serif;
  font-weight: 700;
  text-align: center;
}

.textrec {
  width: 80%;
  height: 100%;
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  line-height: 33px;
  word-wrap: break-word;
  margin-left: 10%;
  margin-bottom: 20px;
}

.button2 {
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

.recipe-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px; /* Espacio entre las secciones */
  padding: 20px;
}

.recipe-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.foodimagen {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
}

.recipe-description {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espacio entre los elementos internos */
}

.title3 {
  color: #FF6400;
  font-size: 36px;
  font-family: Outfit, sans-serif;
  font-weight: 700;
}

.foodtext {
  color: white;
  font-size: 18px;
  font-family: Outfit, sans-serif;
  word-wrap: break-word;
  margin-left: 20px;
}

.button3 {
  display: inline-block;
  width: auto;
  height: auto;
  padding: 10px 20px;
  background: linear-gradient(90deg, #ff4300 0%, #ff6400 100%);
  border-radius: 20px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: Outfit, sans-serif;
  font-weight: 600;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.recipe-categories {
  flex: 1;
}

.recipe-categories ul {
  list-style: none;
  padding: 0;
}

.recipe-categories li {
  width: 100%; 
  color: white; 
  font-size: 24px; 
  font-family: Inter; 
  font-weight: 700; 
  word-wrap: break-word;
  margin-left: 20px;
  margin-bottom: 20px;
}

.recipe-categories img {
  width: auto;
  height: auto;
  margin-right: 25px;
  border-radius: 10%;
}

</style>
