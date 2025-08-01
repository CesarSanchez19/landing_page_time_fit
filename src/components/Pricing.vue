<template>
  <section id="pricing">
    <div class="body">
      <div class="title">Why should you choose us?</div>

      <div class="text1">
        <p>
          Time Fit stands out as the ideal solution for gyms seeking to optimize
          their operations and provide an exceptional experience for their
          users. Here are some reasons why Time Fit is the best choice to take
          your gym to the next level:
        </p>
      </div>
    </div>

    <div class="content">
      <div class="card">
        <img class="icon" :src="require('@/assets/Customer_Support.svg')" alt="Customer Support" />
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
        <img class="icon" :src="require('@/assets/bar-chart-line-fill.svg')" alt="Grafica" />
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
            <img class="imagenes-rec" :src="require('@/assets/squat.png')" alt="squat" />
            <div class="text-imagen">Squats</div>
          </div>
          <div class="imagen-rec">
            <img class="imagenes-rec" :src="require('@/assets/push.jpg')" alt="push up" />
            <div class="text-imagen">Push-Ups</div>
          </div>
          <div class="imagen-rec">
            <img class="imagenes-rec" :src="require('@/assets/pull_up.png')" alt="pull up" />
            <div class="text-imagen">Pull-Ups</div>
          </div>
          <div class="imagen-rec">
            <img class="imagenes-rec" :src="require('@/assets/burpees.png')" alt="burpees" />
            <div class="text-imagen">Burpees</div>
          </div>
          <div class="imagen-rec">
            <img class="imagenes-rec" :src="require('@/assets/plank.png')" alt="plank" />
            <div class="text-imagen">Plank</div>
          </div>
        </div>
        <div class="image-container">
          <div class="imagen-rec">
            <img class="imagenes-rec" :src="require('@/assets/lunges.png')" alt="lunges" />
            <div class="text-imagen">Lunges</div>
          </div>
          <div class="imagen-rec">
            <img class="imagenes-rec" :src="require('@/assets/deadlift.png')" alt="deadlift" />
            <div class="text-imagen">Deadlift</div>
          </div>
          <div class="imagen-rec">
            <img class="imagenes-rec" :src="require('@/assets/bicep.png')" alt="bicep curl" />
            <div class="text-imagen">Bicep Curls</div>
          </div>
          <div class="imagen-rec">
            <img class="imagenes-rec" :src="require('@/assets/barbell.png')" alt="barbell bicep curl" />
            <div class="text-imagen">Barbell Bicep Curl</div>
          </div>
          <div class="imagen-rec">
            <img class="imagenes-rec" :src="require('@/assets/leg.png')" alt="leg raise" />
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
      </div>

      <!-- Categorías -->
      <div class="recipe-categories">
        <ul>
          <li>
            <img :src="require('@/assets/breakfast.png')" alt="Breakfast" />Breakfast
          </li>
          <li><img :src="require('@/assets/lunch.png')" alt="Lunch" />Lunch</li>
          <li>
            <img :src="require('@/assets/dinner.png')" alt="Dinner" />Dinner
          </li>
          <li><img :src="require('@/assets/snack.png')" alt="Snack" />Snack</li>
          <li>
            <img :src="require('@/assets/smoothies.png')" alt="Smoothies" />Smoothies
          </li>
        </ul>
      </div>
    </div>

    <!-- Sección de Planes Integrada -->
    <div class="pricing-section">
      <div class="title4">Find the Perfect Plan for Your Gym</div>
      <div class="textplan">
        Choose the plan that best suits your gym's needs and start transforming
        your users' experience with Time Fit.
      </div>

      <!-- Period Toggle Button -->
      <div class="period-toggle">
        <span :class="{ active: !isAnnual }" class="period-label">Monthly</span>
        <div class="toggle-switch" @click="togglePeriod">
          <div class="toggle-slider" :class="{ annual: isAnnual }"></div>
        </div>
        <span :class="{ active: isAnnual }" class="period-label">
          Annual 
          <span class="discount-badge">Save 20%</span>
        </span>
      </div>

      <!-- Plans Grid -->
      <div class="plans-grid">
        <!-- Basic Plan -->
        <div class="plan-card">
          <div class="plan-header">
            <h3 class="plan-name">BASIC PLAN</h3>
            <p class="plan-description">Perfect for fitness entrepreneurs.</p>
            <div class="price-section">
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">{{ isAnnual ? '5,400' : '500' }}</span>
                <span class="period">MXN/{{ isAnnual ? 'annual' : 'month' }}</span>
              </div>
              <div v-if="isAnnual" class="savings">Save $600 MXN</div>
            </div>
          </div>
          
          <div class="features-section">
            <h4 class="features-title">What's included?</h4>
            <ul class="features-list">
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Client management (up to 100 records)
              </li>
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Membership creation (up to 3 types)
              </li>
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Personalized user profile
              </li>
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Important gym notes
              </li>
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Basic gym registration
              </li>
            </ul>
          </div>
        </div>

        <!-- Professional Plan -->
        <div class="plan-card featured">
          <div class="popular-badge">Most Popular</div>
          <div class="plan-header">
            <h3 class="plan-name">PROFESSIONAL PLAN</h3>
            <p class="plan-description">Ideal for established gyms.</p>
            <div class="price-section">
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">{{ isAnnual ? '7,200' : '700' }}</span>
                <span class="period">MXN/{{ isAnnual ? 'annual' : 'month' }}</span>
              </div>
              <div v-if="isAnnual" class="savings">Save $1,200 MXN</div>
            </div>
          </div>
          
          <div class="features-section">
            <h4 class="features-title">What's included?</h4>
            <ul class="features-list">
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Complete Home dashboard with widgets
              </li>
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Unlimited clients with complete history
              </li>
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Customizable unlimited memberships
              </li>
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Staff registration (up to 5)
              </li>
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Smart reminder calendar
              </li>
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Basic income reports
              </li>
            </ul>
          </div>
        </div>

        <!-- Master Plan -->
        <div class="plan-card">
          <div class="plan-header">
            <h3 class="plan-name">MASTER PLAN</h3>
            <p class="plan-description">For gyms with accelerated growth.</p>
            <div class="price-section">
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">{{ isAnnual ? '9,000' : '900' }}</span>
                <span class="period">MXN/{{ isAnnual ? 'annual' : 'month' }}</span>
              </div>
              <div v-if="isAnnual" class="savings">Save $1,800 MXN</div>
            </div>
          </div>
          
          <div class="features-section">
            <h4 class="features-title">What's included?</h4>
            <ul class="features-list">
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Complete financial analysis with charts
              </li>
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Total inventory + suppliers control
              </li>
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Detailed period reports
              </li>
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Advanced product and sales management
              </li>
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Customizable time filters
              </li>
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Full web app access with all functions
              </li>
              <li class="feature-item">
                <i class="check-icon">✓</i>
                Unlimited staff with schedules
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SubscriptionPlans',
  setup() {
    const isAnnual = ref(false)

    const togglePeriod = () => {
      isAnnual.value = !isAnnual.value
    }

    return {
      isAnnual,
      togglePeriod
    }
  }
}
</script>

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
  font-family: "Poppins";
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

.body>* {
  position: relative;
  z-index: 2;
}

.title {
  display: flex;
  width: 100%;
  color: white;
  font-size: 80px;
  font-family: "Poppins";
  font-weight: 600;
  text-transform: uppercase;
  word-wrap: break-word;
  position: relative;
  top: 1px;
  margin: 0 auto;
}

.text1 {
  max-width: 600px;
  display: block;
  width: 100%;
  color: white;
  font-size: 18px;
  font-family: "Poppins";
  font-weight: 400;
  word-wrap: break-word;
  margin-top: 26px;
  margin-bottom: 60px;
  margin-left: 15px;
  margin-right: auto;
  line-height: 1.6;
  white-space: normal;
  text-align: left;
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
  margin-bottom: 12px;
}

.titlecard {
  width: auto;
  height: auto;
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: "Poppins";
  font-weight: 700;
  word-wrap: break-word;
  margin-bottom: 10px;
}

.textcard {
  width: auto;
  height: auto;
  text-align: center;
  color: white;
  font-size: 14px;
  font-family: "Poppins";
  font-weight: 300;
  word-wrap: break-word;
}

.title2 {
  width: 100%;
  height: 100%;
  color: #ff6400;
  font-size: 36px;
  font-family: "Poppins";
  font-weight: 700;
  word-wrap: break-word;
  margin-bottom: 25px;
  text-align: center;
}

.rectangles {
  display: flex;
  flex-direction: column;
  gap: 45px;
  margin-bottom: 35px;
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
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-align: center;
}

.textrec {
  width: 80%;
  height: 100%;
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: "Poppins";
  font-weight: 400;
  line-height: 33px;
  word-wrap: break-word;
  margin-left: 10%;
  margin-bottom: 35px;
}

.recipe-section {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  margin-bottom: 40px;
}

.recipe-image {
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  gap: 20px;
}

.title3 {
  margin-top: 35px;
  color: #ff6400;
  font-size: 36px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-left: 25px;
}

.foodtext {
  color: white;
  width: 60%;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  word-wrap: break-word;
  margin-left: 60px;
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
  font-family: "Poppins", sans-serif;
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

/* Sección de Precios - INTEGRADA CON EL DISEÑO EXISTENTE */
.pricing-section {
  background-color: #272829;
  width: 100%;
  padding: 60px 20px;
  font-family: "Poppins", sans-serif;
}

.title4 {
  width: 100%;
  text-align: center;
  color: #ff4300;
  font-size: 48px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 57.6px;
  word-wrap: break-word;
  margin-bottom: 20px;
}

.textplan {
  color: white;
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 26.4px;
  word-wrap: break-word;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 40px;
}

.period-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0 auto 3rem auto;
  width: fit-content;
}

.period-label {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Poppins", sans-serif;
}

.period-label.active {
  color: white;
}

.discount-badge {
  background: #ff6400;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.toggle-switch {
  width: 60px;
  height: 30px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle-slider {
  width: 26px;
  height: 26px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.toggle-slider.annual {
  transform: translateX(30px);
  background: #ff6400;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.plan-card {
  background: #3b3b3b;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
}

.plan-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff6400, #ff4300);
}

.plan-card.featured {
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  background: linear-gradient(135deg, #c25208, #da4711);
  border: 2px solid #ff6400;
}

.plan-card.featured::before {
  height: 6px;
  background: linear-gradient(90deg, #fff, #f8f8f8);
}

.plan-card.featured .plan-name,
.plan-card.featured .plan-description,
.plan-card.featured .features-title,
.plan-card.featured .feature-item {
  color: white;
}

.plan-card.featured .currency,
.plan-card.featured .amount {
  color: white;
}

.plan-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.plan-card.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.popular-badge {
  position: absolute;
  top: -10px;
  right: 20px;
  background: #272829;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.plan-header {
  text-align: center;
  margin-bottom: 2rem;
}

.plan-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
}

.plan-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  font-family: "Poppins", sans-serif;
}

.price-section {
  margin-bottom: 1rem;
}

.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.25rem;
}

.currency {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff6400;
}

.amount {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  font-family: "Poppins", sans-serif;
}

.period {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  font-family: "Poppins", sans-serif;
}

.savings {
  color: #4ade80;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  background: rgba(74, 222, 128, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  display: inline-block;
  font-family: "Poppins", sans-serif;
}

.features-section {
  margin-bottom: 2rem;
}

.features-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  font-family: "Poppins", sans-serif;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
}

.check-icon {
  color: #4ade80;
  font-weight: bold;
  font-size: 1rem;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background: rgba(74, 222, 128, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.1rem;
}

.select-plan-btn {
  width: 100%;
  background: linear-gradient(135deg, #ff6400, #ff4300);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 100, 0, 0.3);
  font-family: "Poppins", sans-serif;
}

.select-plan-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 100, 0, 0.4);
  background: linear-gradient(135deg, #ff4300, #ff6400);
}

.plan-card.featured .select-plan-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.plan-card.featured .select-plan-btn:hover {
  background: linear-gradient(135deg, #764ba2, #667eea);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .main-title {
    font-size: 2rem;
  }
  
  .plans-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .plan-card.featured {
    transform: none;
  }
  
  .period-toggle {
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }
  
  .discount-badge {
    margin-top: 0.25rem;
  }
}
</style>
