<template>
  <section id="pricing">
    <div class="body">
      <div class="space"></div>
      <div class="title">Why should you choose us?</div>

      <div class="text1">
        <p>
          Time Fit stands out as the ideal solution for gyms seeking to optimize
          their operations and provide an exceptional experience for their
          users. Here are some reasons why Time Fit is the best choice to take
          your gym to the next level:
        </p>
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

    <div class="title4">Find the Perfect Plan for Your Gym</div>
    <div class="textplan">
      Choose the plan that best suits your gym’s needs and start transforming
      your users' experience with Time Fit.
    </div>

    <!--planes-->
    <div class="plans-container">
      <div class="plan basic-plan">
        <h2>Basic Plan</h2>
        <p>
          Small gyms or individuals who need quick access to essential features.
        </p>
        <p class="price">$400.00 MXN / Month</p>
        <button>Get Started Now</button>
        <div class="details">
          <h3>For Users:</h3>
          <ul>
            <li>
              Access to a library of over 20,000 PNG and SVG graphics to
              personalize workout plans.
            </li>
            <li>Basic workout tracking and progress monitoring.</li>
            <li>Limited access to training plans and resources.</li>
          </ul>
          <h3>For Administrators:</h3>
          <ul>
            <li>Basic membership management tools.</li>
            <li>Access to customer data and limited analytics.</li>
            <li>No custom branding options.</li>
            <li>Limited storage for member records and gym data.</li>
          </ul>
          <h3>Limitations:</h3>
          <ul>
            <li>Does not support unlimited sharing of resources.</li>
            <li>No ability to create teams for collaborative work.</li>
            <li>No integration with advanced fitness devices or analytics.</li>
          </ul>
        </div>
      </div>

      <div class="plan professional-plan">
        <h2>Professional Plan</h2>
        <p>
          Medium-sized gyms that need advanced features and more flexibility.
        </p>
        <p class="price">$600.00 MXN / Month</p>
        <button>Get Started Now</button>
        <div class="details">
          <h3>For Users:</h3>
          <ul>
            <li>
              Access to a vast library of 100 million stock images for creating
              personalized workout and nutrition plans.
            </li>
            <li>
              Customizable fitness plans with tracking capabilities for
              individual goals.
            </li>
            <li>
              Access to a community forum to engage with other gym members and
              share achievements.
            </li>
            <li>
              Upload and share progress pictures and videos in up to 4K quality.
            </li>
          </ul>
          <h3>For Administrators:</h3>
          <ul>
            <li>
              Advanced membership management tools, including billing and
              attendance tracking.
            </li>
            <li>Custom branding options to align with the gym's image.</li>
            <li>
              Unlimited project management for developing new classes and member
              programs.
            </li>
            <li>
              Access to detailed analytics to track member progress and gym
              performance.
            </li>
          </ul>
          <h3>Limitations:</h3>
          <ul>
            <li>
              Does not allow team creation for design and project collaboration.
            </li>
            <li>Limited integration with external CRM and marketing tools.</li>
          </ul>
        </div>
      </div>

      <div class="plan master-plan">
        <h2>Master Plan</h2>
        <p>Large gyms or fitness chains that need comprehensive tools.</p>
        <p class="price">$800.00 MXN / Month</p>
        <button>Get Started Now</button>
        <div class="details">
          <h3>For Users:</h3>
          <ul>
            <li>
              Full access to all exercise and nutrition resources, including
              high-protein, low-carb, dairy-free, and vegetarian recipe
              collections.
            </li>
            <li>
              Advanced progress tracking with integration to fitness devices
              (e.g., heart rate monitors).
            </li>
            <li>
              Ability to connect and compare progress with other users in real
              time.
            </li>
          </ul>
          <h3>For Administrators:</h3>
          <ul>
            <li>
              Complete membership and financial management suite with advanced
              reporting tools.
            </li>
            <li>
              Team collaboration features to work with trainers, nutritionists,
              and marketing staff.
            </li>
            <li>Limited storage for member records and gym data.</li>
            <li>
              Data insights on user behavior and retention statistics to guide
              business.
            </li>
          </ul>
          <h3>Benefits:</h3>
          <ul>
            <li>Unlimited sharing of resources and multimedia content.</li>
            <li>
              Instant access to updates and new features without additional
              fees.
            </li>
            <li>
              Priority customer support with a dedicated account manager for
              seamless operations.
            </li>
          </ul>
        </div>
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

.body::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.body > * {
  position: relative;
  z-index: 2;
}

.space {
  width: 100%; /* Ocupa todo el ancho del contenedor */
  height: 50px; /* Ajusta la altura según el espacio que desees */
  background-color: transparent; /* Sin color, solo espacio */
}

.title {
  display: flex;
  width: 100%;
  color: white;
  font-size: 80px;
  font-family: Inter;
  font-weight: 700;
  text-transform: uppercase;
  word-wrap: break-word;
  position: relative; /* Posición relativa */
  top: -20px; /* Ajusta hacia arriba */
  margin: 0 auto; /* Centra horizontalmente */
}

.text1 {
  max-width: 600px;
  display: block;
  width: 100%;
  color: white;
  font-size: 18px;
  font-family: Outfit;
  font-weight: 400;
  word-wrap: break-word;
  margin-bottom: 60px;
  margin-left: 0;
  margin-right: auto;
  line-height: 1.6;
  white-space: normal;
  text-align: left;
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
  height: auto;
  padding: 20px;
  top: -150px;
  z-index: 1;
}

.icon {
  display: flex;
  width: 20%;
  height: 20%;
  margin-top: 0px;
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
  margin-bottom: 40px;
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
  margin-left: 100px;
}

.recipe-description {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espacio entre los elementos internos */
}

.title3 {
  color: #ff6400;
  font-size: 36px;
  font-family: Outfit, sans-serif;
  font-weight: 700;
  margin-left: 100px;
}

.foodtext {
  color: white;
  width: 60%;
  font-size: 18px;
  font-family: Outfit, sans-serif;
  word-wrap: break-word;
  margin-left: 60px;
  margin-bottom: 20px;
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
  margin-left: 60px;
  margin-right: 180px;
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
  margin-left: 0px;
  margin-bottom: 20px;
}

.recipe-categories img {
  width: auto;
  height: auto;
  margin-right: 25px;
  border-radius: 10%;
}

.title4 {
  width: 100%;
  text-align: center;
  color: #ff4300;
  font-size: 48px;
  font-family: Inter;
  font-weight: 700;
  line-height: 57.6px;
  word-wrap: break-word;
  margin-bottom: 20px;
}

.textplan {
  color: white;
  font-size: 22px;
  font-family: Inter;
  font-weight: 700;
  line-height: 26.4px;
  word-wrap: break-word;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 10px;
}

/*planes */
.plans-container {
  display: flex;
  justify-content: space-around;
  padding: 100px;
  gap: 20px;
}

.plan {
  width: 300px;
  background-color: #2c2c2c;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.plan:hover {
  background-color: #e9762a;
}

.plan h2 {
  font-size: 24px;
  color: white;
}

.plan p {
  font-size: 16px;
  margin: 10px 0;
  color: white;
}

.plan .price {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
}

.plan button {
  background-color: #fa4f06;
  color: white;
  border: none;
  padding: 10px 57px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0;
}

.plan button:hover {
  background-color: #45474b;
}

.details h3 {
  text-align: left;
  font-size: 18px;
  color: white;
  margin-top: 15px;
}

.details ul {
  text-align: left;
  margin: 10px 0 0 20px;
  color: white;
}

.details ul li {
  margin: 5px 0;
}

.basic-plan {
  background-color: #45474b;
  width: 28%;
}

.professional-plan {
  background-color: #45474b;
  width: 28%;
}

.master-plan {
  background-color: #45474b;
  width: 28%;
}

/* Pantallas pequeñas (móviles) */
@media (max-width: 768px) {
  .body {
    padding: 15px;
  }

  .title {
    font-size: 50px;
    margin-top: -150px;
  }

  .text1 {
    font-size: 16px;
    max-width: 100%;
    margin-bottom: 40px;
  }

  .buttoncreate {
    font-size: 18px;
    padding: 8px 15px;
  }

  .content {
    flex-direction: column;
    height: auto;
    padding: 15px;
  }

  .card {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  .title2 {
    font-size: 30px;
    margin-left: 5%;
  }

  .image-container {
    flex-direction: column;
    gap: 20px;
  }

  .imagen-rec {
    width: 80%;
    height: 300px;
  }

  .foodimagen {
    width: 100%;
    max-width: 300px;
    margin-left: 0;
  }

  .foodtext {
    width: 80%;
    font-size: 16px;
    margin-left: 10%;
  }

  .button3 {
    margin-left: 0;
    margin-right: 0;
  }

  .recipe-categories ul li {
    font-size: 18px;
    margin-bottom: 15px;
  }

  .plans-container {
    flex-direction: column;
    padding: 40px 20px;
  }

  .plan {
    width: 80%;
    margin-bottom: 20px;
  }

  .basic-plan,
  .professional-plan,
  .master-plan {
    width: 100%;
  }
}

/* Pantallas medianas (tabletas) */
@media (min-width: 769px) and (max-width: 1023px) {
  .title {
    font-size: 70px;
    margin-top: -250px;
  }

  .text1 {
    font-size: 18px;
    max-width: 80%;
    margin-bottom: 60px;
  }

  .buttoncreate {
    font-size: 18px;
    padding: 8px 18px;
  }

  .content {
    flex-direction: row;
    height: 40vh;
    padding: 25px;
  }

  .card {
    width: 45%;
    height: auto;
  }

  .title2 {
    font-size: 32px;
  }

  .foodimagen {
    width: 100%;
    max-width: 350px;
  }

  .foodtext {
    font-size: 18px;
    margin-left: 50px;
  }

  .recipe-categories ul li {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .plans-container {
    flex-direction: row;
    padding: 80px;
  }

  .plan {
    width: 30%;
  }

  .basic-plan,
  .professional-plan,
  .master-plan {
    width: 30%;
  }
}

/* Pantallas grandes (escritorios) */
@media (min-width: 1024px) {
  .title {
    font-size: 90px;
    margin-top: -300px;
  }

  .text1 {
    font-size: 18px;
    max-width: 600px;
    margin-bottom: 80px;
  }

  .buttoncreate {
    font-size: 20px;
    padding: 10px 20px;
  }

  .content {
    height: 35vh;
    flex-direction: row;
  }

  .card {
    width: 24%;
    height: 40vh;
  }

  .title2 {
    font-size: 36px;
  }

  .image-container {
    gap: 50px;
  }

  .foodimagen {
    width: 100%;
    max-width: 400px;
  }

  .foodtext {
    font-size: 18px;
    margin-left: 60px;
  }

  .recipe-categories ul li {
    font-size: 24px;
  }

  .plans-container {
    flex-direction: row;
    padding: 100px;
  }

  .plan {
    width: 28%;
  }

  .basic-plan,
  .professional-plan,
  .master-plan {
    width: 28%;
  }
}
</style>
