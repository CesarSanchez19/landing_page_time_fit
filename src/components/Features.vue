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
        <img
          :src="require('@/assets/arrow-down.svg')"
          alt="icon"
          class="icon"
        />
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
          <img
            :src="require('@/assets/firts.png')"
            alt="Time Fit Applications"
            class="img1"
          />
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
            <img
              :src="require('@/assets/second.png')"
              alt="Time Fit Applications"
              class="img2"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="grisoscuro">
      <div class="container2">
        <div class="content2">
          <div class="image-section2">
            <img
              :src="require('@/assets/third.png')"
              alt="Time Fit Applications"
              class="img3"
            />
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
            <img
              :src="require('@/assets/forth.png')"
              alt="Time Fit Applications"
              class="img2"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="grisoscuro">
      <div class="container2">
        <div class="content2">
          <div class="image-section2">
            <img
              :src="require('@/assets/five.png')"
              alt="Time Fit Applications"
              class="img3"
            />
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
            <img
              :src="require('@/assets/six.png')"
              alt="Time Fit Applications"
              class="img2"
            />
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
            <img
              :src="require('@/assets/seven.png')"
              alt="Time Fit Applications"
              class="img22"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="grisoscuro">
      <div class="container2">
        <div class="content2">
          <div class="image-section2">
            <img
              :src="require('@/assets/eight.png')"
              alt="Time Fit Applications"
              class="img33"
            />
          </div>
          <div class="text-section2">
            <h2>Efficient Client Administration</h2>
            <p>
              The Membership Management section in Time Fit allows
              administrators to track all gym members in detail. From this area,
              they can access each member's information, such as membership
              type, contact details, and enrollment status. Administrators can
              also register new members by filling out a form with personal
              details, address, and membership type, enabling complete and
              efficient management of subscriptions. This section is essential
              for keeping client information organized and up-to-date, allowing
              for personalized and quality service.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="grisclaro">
      <div class="container1">
        <div class="content1">
          <div class="text-section1">
            <h2>Organize and Manage Your Staff</h2>
            <p>
              The Team Management section in Time Fit provides administrators
              with complete control over their staff. This section allows them
              to view a detailed list of all team members, along with contact
              information, roles, and last activity. Additionally,
              administrators can add new team members by entering basic details
              such as name, email, and assigned role (e.g., Administrator,
              Consultant, or Employee). It is also possible to adjust specific
              permissions based on the gym's needs, ensuring that each staff
              member only has access to the areas relevant to their role. This
              tool simplifies staff management, enhancing organization and
              optimizing team administration.
            </p>
          </div>

          <div class="image-section1">
            <img
              :src="require('@/assets/nine.png')"
              alt="Time Fit Applications"
              class="img22"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="grisoscuro">
      <div class="container2">
        <div class="content2">
          <div class="image-section2">
            <img
              :src="require('@/assets/ten.png')"
              alt="Time Fit Applications"
              class="img33"
            />
          </div>
          <div class="text-section2">
            <h2>Full Control of Your Inventory</h2>
            <p>
              The Sales Management section in Time Fit allows administrators to
              track all gym members in detail. From this area, they can access
              each member's information, such as membership type, contact
              details, and enrollment status. Administrators can also register
              new members by filling out a form with personal details, address,
              and membership type, enabling complete and efficient management of
              subscriptions. This section is essential for keeping client
              information organized and up-to-date, allowing for personalized
              and quality service.
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
            <img
              :src="require('@/assets/eleven.png')"
              alt="Time Fit Applications"
              class="img22"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="grisoscuro">
      <div class="container2">
        <div class="content2">
          <div class="image-section2">
            <img
              :src="require('@/assets/twelve.png')"
              alt="Time Fit Applications"
              class="img33"
            />
          </div>
          <div class="text-section2">
            <h2>Organize Your Ideas and Notes</h2>
            <p>
              The Notes section in Time Fit allows administrators to record
              ideas, pending tasks, and important reminders all in one place.
              With a simple and organized interface, users can create, edit, and
              manage multiple notes, ensuring that no idea is lost and all
              pending tasks are easily accessible. This tool is perfect for
              jotting down details about the gym’s daily operations, planning
              improvement strategies, or keeping track of topics to discuss in
              meetings. Additionally, the categorized organization enables quick
              access to relevant information when needed.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="grisclaro">
      <div class="container1">
        <div class="content1">
          <div class="text-section1">
            <h2>Keep Track of Your To-Do List</h2>
            <p>
              The Tasks section in Time Fit allows administrators to organize
              and prioritize their daily responsibilities. This tool facilitates
              the creation, viewing, and tracking of specific tasks, assigning a
              deadline and priority level for each activity. Administrators can
              mark tasks as completed once they are finished, ensuring focus on
              the gym's objectives. From equipment maintenance to paying bills,
              this section helps manage time and resources efficiently.
            </p>
          </div>

          <div class="image-section1">
            <img
              :src="require('@/assets/thirteen.png')"
              alt="Time Fit Applications"
              class="img22"
            />
          </div>
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

.body > * {
  position: relative;
  z-index: 2;
}

.title1 {
  width: 100%;
  text-align: center;
  color: #d9d9d9;
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
