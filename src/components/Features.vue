<template>
  <section id="features">
    <div class="body">
      <div class="title1">Key Features of Time Fit</div>
      <div class="text1">
        Discover how Time Fit is revolutionizing the way gyms and their users
        interact and manage their health and wellness. With advanced tools and
        an intuitive interface, Time Fit is designed to meet the needs of both
        users and administrators, ensuring a comprehensive and personalized
        experience.
      </div>
      <button class="button" onclick="location.href='#firstSection'">
        Learn More
        <img :src="arrowDownIcon" alt="icon" class="icon" />
      </button>
    </div>

    <div class="container" id="firstSection">
      <div class="content">
        <div class="text-section">
          <h2>Two Apps, One Complete Solution</h2>
          <p>
            Time Fit is divided into two main applications: a mobile app for
            clients, allowing them to manage their routines, diets, and
            progress, and a web application for administrators, facilitating
            efficient management of the gym's operational aspects. Together,
            these tools create a complete experience that benefits both clients
            and administrative staff.
          </p>
        </div>

        <div class="image-section">
          <img :src="firtsImage" alt="Time Fit Applications" class="img1" />
        </div>
      </div>

      <div class="mobile-features">
        <h3>Mobile App Features for Clients</h3>
      </div>
    </div>

    <div class="grisclaro">
      <div class="container1">
        <div class="content1">
          <div class="text-section1">
            <h2>Your Starting Point for a Personalized Workout</h2>
            <p>
              The Time Fit home screen is the control center where users can
              quickly access recommended routines, customize their own workouts,
              and stay updated with the latest news. Tailored to different
              experience levels (beginner, intermediate, advanced), this section
              provides access to featured routines, options to create
              personalized workouts, and a list of recent searches to help users
              stay on track with their goals. Additionally, notifications keep
              users informed about new routines, updates, and community
              responses, ensuring a complete and motivating experience.
            </p>
          </div>

          <div class="image-section1">
            <img :src="secondImage" alt="Time Fit Applications" class="img2" />
          </div>
        </div>
      </div>
    </div>

    <div class="grisoscuro">
      <div class="container2">
        <div class="content2">
          <div class="image-section2">
            <img :src="thirdImage" alt="Time Fit Applications" class="img3" />
          </div>
          <div class="text-section2">
            <h2>Customized Workouts for Your Goals</h2>
            <p>
              The Time Fit routines section allows users to access a variety of
              workouts tailored to different goals and experience levels. From
              specific exercises like cardio, strength, and HIIT to full
              routines for abs or functional training, each plan is designed to
              maximize performance and guide the user toward their fitness
              goals. Users can view details for each exercise, including sets,
              reps, and duration, and mark activities as completed to track
              their progress. Additionally, the schedule routine option helps
              users maintain a consistent and organized workout plan.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="grisclaro">
      <div class="container1">
        <div class="content1">
          <div class="text-section1">
            <h2>Personalized Meal Plans for Your Goals</h2>
            <p>
              The Time Fit diet section provides users with meal plans tailored
              to their specific goals, whether it's gaining muscle mass, body
              definition, or achieving a caloric deficit. Each plan is organized
              into meals throughout the day (breakfast, mid-morning snack,
              lunch, pre-workout snack, and dinner) to ensure balanced
              nutrition. Users can view details for each meal, including
              calories, protein, carbs, and fats breakdown, as well as a list of
              ingredients and portion sizes. Additionally, they have the option
              to mark meals as completed to track their daily nutrition intake.
            </p>
          </div>

          <div class="image-section1">
            <img :src="forthImage" alt="Time Fit Applications" class="img2" />
          </div>
        </div>
      </div>
    </div>

    <div class="grisoscuro">
      <div class="container2">
        <div class="content2">
          <div class="image-section2">
            <img :src="fiveImage" alt="Time Fit Applications" class="img3" />
          </div>
          <div class="text-section2">
            <h2>Connect and Share with the Community</h2>
            <p>
              The Forum section in Time Fit is an interactive space where users
              can connect with other members, share experiences, ask questions,
              and offer advice related to fitness and nutrition. Users can
              browse through different categories such as workout routines, diet
              plans, wellness tips, and more. Each user has the ability to
              create new posts, comment on existing threads, and participate in
              discussions to enrich their knowledge and motivate each other.
              Additionally, the forum allows users to receive notifications
              about replies and updates on topics of interest, fostering an
              active and engaged community.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="grisclaro">
      <div class="container1">
        <div class="content1">
          <div class="text-section1">
            <h2>Customize and Manage Your Information</h2>
            <p>
              The User Profile section in Time Fit allows users to easily
              personalize and manage their information. Users can update their
              profile picture, modify their name, email, username, and password
              to keep their account up to date. This section is essential for
              providing each user with a personalized experience and easy access
              to the platform. With just a few taps, users can make changes and
              ensure their profile reflects their identity.
            </p>
          </div>

          <div class="image-section1">
            <img :src="sixImage" alt="Time Fit Applications" class="img2" />
          </div>
        </div>
      </div>
    </div>

    <div class="grisoscuro">
      <div class="mobile-features">
        <h3>Web Application Features for Administrators</h3>
      </div>
    </div>

    <div class="grisclaro">
      <div class="container1">
        <div class="content1">
          <div class="text-section1">
            <h2>Comprehensive Dashboard for Administrators</h2>
            <p>
              The home screen of the Time Fit web app provides administrators
              with a clear, detailed overview of all gym operations. In this
              section, administrators can view key statistics, such as the
              number of clients and employees, revenue earned, and orders in
              progress or completed. It also includes a demographic chart
              showing the age distribution of clients, along with a calendar
              displaying scheduled events and upcoming activities. The services
              section provides quick access to different areas, such as
              memberships, training, nutrition, and more, while the notes area
              organizes important reminders and tasks. This dashboard is
              designed to facilitate efficient management and keep
              administrators informed about the gym's performance in real-time.
            </p>
          </div>

          <div class="image-section1">
            <img :src="webAppImgUno" alt="Time Fit Applications" class="img22" />
          </div>
        </div>
      </div>
    </div>

    <div class="grisoscuro">
      <div class="container2">
        <div class="content2">
          <div class="image-section2">
            <img :src="webAppImgDos" alt="Time Fit Applications" class="img33" />
          </div>
          <div class="text-section2">
            <h2>Users at Your Fingertips</h2>
            <p>
              The users section in Time Fit provides an intuitive interface for efficiently managing all gym member
              information. Administrators can view and manage a complete list of users that includes essential data such
              as unique ID, contact information, and membership status. The table presents a clear layout with organized
              columns showing member name, email, phone, and registration date. The system uses visual status indicators
              (Active, Inactive, Pending) to quickly identify each user's situation. The search function at the top
              allows locating specific members, while the "Register member" button facilitates adding new users. The
              pagination at the bottom enables easy navigation between multiple pages of records, ensuring efficient
              management even with large user bases.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="grisclaro">
      <div class="container1">
        <div class="content1">
          <div class="text-section1">
            <h2>Maximize Your Gym's Potential with Time Fit</h2>
            <p>
              The memberships and services module in Time Fit transforms gym management with an all-in-one control
              system. Track membership performance through intuitive visual metrics showing occupancy rates and
              membership distribution across three strategic tiers. The dynamic pricing display lets you manage multiple
              subscription periods while monitoring member engagement. The integrated services marketplace below
              streamlines the management of additional revenue streams, from specialized fitness classes to premium
              wellness services, complete with real-time status monitoring and capacity management.
            </p>
          </div>

          <div class="image-section1">
            <img :src="webAppImgTres" alt="Time Fit Applications" class="img22" />
          </div>
        </div>
      </div>
    </div>

    <div class="grisoscuro">
      <div class="container2">
        <div class="content2">
          <div class="image-section2">
            <img :src="webAppImgCuatro" alt="Time Fit Applications" class="img33" />
          </div>
          <div class="text-section2">
            <h2>Efficient Management of Collaborators</h2>
            <p>
              The collaborators section in the Time Fit web app allows administrators to efficiently manage gym staff.
              Here, they can register new collaborators, assign roles or permissions, and track recent activity. A
              well-structured table displays key information such as names, email addresses, roles, and the last
              activity date. Additionally, a search bar and options for filtering and sorting make it easy to find and
              organize data. With a prominent button for registering new collaborators, this tool streamlines team
              management and ensures precise control in real time.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="grisclaro">
      <div class="container1">
        <div class="content1">
          <div class="text-section1">
            <h2>Track and Analyze Your Gym’s Revenue Effectively</h2>
            <p>
              This section displays the revenue generated from gym services, products, and memberships. Administrators
              can track weekly earnings through a detailed bar graph that highlights actual revenue, increases, and
              decreases. Key metrics such as products sold, memberships sold, new clients, and total expenses are shown
              on the right-hand side, providing a comprehensive snapshot of performance. A table at the bottom showcases
              the top-selling products, including their quantities sold, revenue generated, and percentage contribution,
              offering valuable insights into sales trends. This feature is designed to help administrators make
              informed decisions and optimize revenue streams.
            </p>
          </div>

          <div class="image-section1">
            <img :src="webAppImgCinco" alt="Time Fit Applications" class="img22" />
          </div>
        </div>
      </div>
    </div>

    <div class="grisoscuro">
      <div class="container2">
        <div class="content2">
          <div class="image-section2">
            <img :src="webAppImgSeis" alt="Time Fit Applications" class="img33" />
          </div>
          <div class="text-section2">
            <h2>Smart Product Inventory Management</h2>
            <p>
              Monitor and efficiently manage your gym's product stock with this intuitive and functional tool. The
              Inventory Control section provides a clear overview of your current product status, highlighting
              bestsellers, critical stock levels, and available categories. Streamline your operations with advanced
              search, custom filters, quick product registration, and comprehensive report downloads.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="grisclaro">
      <div class="container1">
        <div class="content1">
          <div class="text-section1">
            <h2>Calendar Management and Scheduling</h2>
            <p>
              The Calendar module in Time Fit provides administrators with a
              comprehensive view of all scheduled activities at the gym. From
              this section, key events like training sessions, workshops,
              fitness evaluations, and team meetings can be organized and
              managed. The interface allows switching between monthly, weekly,
              and daily views, offering flexibility to fit the specific
              scheduling needs of the gym. This system enables efficient
              planning, prevents scheduling conflicts, and ensures smooth
              coordination between staff and clients. Additionally, the
              quick-add event feature optimizes workflow, keeping the entire
              team aligned with the scheduled activities.
            </p>
          </div>

          <div class="image-section1">
            <img :src="webAppImgSiete" alt="Time Fit Applications" class="img22" />
          </div>
        </div>
      </div>
    </div>

    <div class="grisoscuro">
      <div class="container2">
        <div class="content2">
          <div class="image-section2">
            <img :src="webAppImgOcho" alt="Time Fit Applications" class="img33" />
          </div>
          <div class="text-section2">
            <h2>Stay Organized, Focused, and In Control with Ease!</h2>
            <p>
              Explore the "Notes" section in Time Fit Admin, crafted to help you manage tasks, reminders, and key
              messages effortlessly. Customize your notes, sort them by categories like courses, reminders, and
              suggestions, and never lose sight of your priorities. Keep everything within reach and simplify your daily
              operations!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Importaciones estáticas de todas las imágenes
import arrowDownIcon from '@/assets/arrow-down.svg';
import firtsImage from '@/assets/firts.png';
import secondImage from '@/assets/second.png';
import thirdImage from '@/assets/third.png';
import forthImage from '@/assets/forth.png';
import fiveImage from '@/assets/five.png';
import sixImage from '@/assets/six.png';
import webAppImgUno from '@/assets/wepapp/webappimg1.png';
import webAppImgDos from '@/assets/wepapp/webappimg2.png';
import webAppImgTres from '@/assets/wepapp/webappimg3.png';
import webAppImgCuatro from '@/assets/wepapp/webappimg4.png';
import webAppImgCinco from '@/assets/wepapp/webappimg5.png';
import webAppImgSeis from '@/assets/wepapp/webappimg6.png';
import webAppImgSiete from '@/assets/wepapp/webappimg7.png';
import webAppImgOcho from '@/assets/wepapp/webappimg8.png';

export default {
  setup() {
    return {
      arrowDownIcon,
      firtsImage,
      secondImage,
      thirdImage,
      forthImage,
      fiveImage,
      sixImage,
      webAppImgUno,
      webAppImgDos,
      webAppImgTres,
      webAppImgCuatro,
      webAppImgCinco,
      webAppImgSeis,
      webAppImgSiete,
      webAppImgOcho
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
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.body>* {
  position: relative;
  z-index: 2;
}

.title1 {
  width: 100%;
  text-align: center;
  color: #d9d9d9;
  font-size: 80px;
  font-family: poppins, sans-serif;
  font-weight: 800;
  line-height: 112px;
  word-wrap: break-word;
  margin-bottom: 30px;
}

.text1 {
  width: 100%;
  text-align: center;
  color: white;
  font-size: 24px;
  font-family: poppins, sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  margin-bottom: 30px;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background: linear-gradient(90deg, #ff4300 0%, #ff6400 100%);
  border-radius: 20px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: poppins, sans-serif;
  font-weight: 600;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  width: fit-content;
  margin-bottom: 20px;
  border: none; /* Elimina el borde */
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
  color: white;
}

.text-section h2 {
  color: #f8820b;
  margin-bottom: 20px;
}

.img1 {
  filter: drop-shadow(0 0 10px rgba(40, 40, 41, 1));
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
  margin-bottom: 40px;
}

.mobile-features h3 {
  color: #ff4300;
}

.grisoscuro {
  background-color: #272829;
}

.container1 {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.content1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.text-section1 {
  flex: 1 1 50%;
  padding: 20px;
  color: white;
}

.text-section1 h2 {
  color: white;
  margin-bottom: 20px;
}

.img2 {
  filter: drop-shadow(0 0 10px rgba(55, 57, 59, 1));
  width: 40%;
  height: auto;
}

.img22 {
  filter: drop-shadow(0 0 10px rgba(55, 57, 59, 1));
  width: 75%;
  height: auto;
}

.image-section1 {
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-section1 img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.grisclaro {
  background-color: rgba(55, 57, 59, 1);
}

.container2 {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.content2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.text-section2 {
  flex: 1 1 50%;
  padding: 20px;
  color: white;
}

.text-section2 h2 {
  color: white;
  margin-bottom: 20px;
}

.img3 {
  filter: drop-shadow(0 0 10px rgba(40, 40, 41, 1));
  width: 40%;
  height: auto;
}

.img33 {
  filter: drop-shadow(0 0 10px rgba(40, 40, 41, 1));
  width: 75%;
  height: auto;
}

.image-section2 {
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-section2 img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

/* RESPONSIVIDAD */
@media (max-width: 1024px) {

  .content,
  .content1,
  .content2 {
    flex-direction: column;
  }

  .text-section,
  .text-section1,
  .text-section2 {
    text-align: center;
  }

  .img1,
  .img2,
  .img3 {
    width: 60%;
  }
}

@media (max-width: 768px) {
  .title1 {
    font-size: 50px;
    line-height: 1.2;
  }

  .text1 {
    font-size: 20px;
  }

  .button {
    font-size: 18px;
    padding: 10px 15px;
  }
}

@media (max-width: 480px) {
  .title1 {
    font-size: 36px;
  }

  .text1 {
    font-size: 16px;
  }

  .button {
    font-size: 14px;
    padding: 8px 10px;
  }

  .img1,
  .img2,
  .img3 {
    width: 80%;
  }
}
</style>
