// import React from "react";
// import { Link } from "react-router-dom";
// import "./homepage.css";
// import { assets } from "../../../utils/assets";

// const HomePage = () => {
//   return (
//     <div className="homepage-background">
//       <div className="homepage">
//         <header className="header">
//           <nav className="navbar">
//             <ul>
//               <img
//                 src={assets?.LOGO}
//                 alt="Logo"
//                 className="intro-logo-homepage"
//               />
//               <div className="name-of-website">
//                 <h2> INSIDE LEARNER</h2>
//               </div>
//               <div className="info-about-us">
//                 <li>
//                   <Link to="/about">About Us</Link>
//                 </li>
//                 <li>
//                   <Link to="/contact">Contact</Link>
//                 </li>
//                 <li>
//                   <Link to="/login">Login</Link>
//                 </li>
//               </div>
//             </ul>
//           </nav>
//         </header>
//         <main className="main-content">
//           <div className="homepage-image"></div>
//           <div className="text-content">
//             <h1>Welcome to InsideLearner</h1>
//             <h2>Your journey to web development starts here!</h2>
//           </div>

//           <section className="all-about">
//             <h2>Learn from the best</h2>
//             <p>
//               Join our platform to access top-quality courses and materials.
//             </p>
//             <Link to="/login" className="cta-button">
//               Browse Courses
//             </Link>
//           </section>
//           <section className="features">
//             <div className="feature">
//               <h3>Expert Instructors</h3>
//               <p>Learn from industry experts and experienced educators.</p>
//             </div>
//             <div className="feature">
//               <h3>Flexible Learning</h3>
//               <p>Access courses anytime, anywhere, on any device.</p>
//             </div>
//             <div className="feature">
//               <h3>Community Support</h3>
//               <p>
//                 Join a community of learners and get support from peers and
//                 mentors.
//               </p>
//             </div>
//           </section>
//           <div className="free-courses">
//             <h3> Most Popular Courses</h3>
//           </div>
//           <section className="features">
//             <div className="favourite-courses">
//               <div className="Image-hp">
//                 <div className="A-image">
//                   <h3>React</h3>
//                   <p></p>
//                 </div>
//               </div>
//               <div className="Image-hp">
//                 <div className="B-image">
//                   <h3>JavaScript</h3>
//                   <p></p>
//                 </div>
//               </div>
//               <div className="Image-hp">
//                 <div className="C-image">
//                   <h3>HTML</h3>
//                   <p></p>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <section className="features">
//             {/* <h3> Benefits</h3> */}
//             <div className="feature">
//               <h3>Expert Instructors</h3>
//               <p>Learn from industry experts and experienced educators.</p>
//             </div>
//             <div className="feature">
//               <h3>Flexible Learning</h3>
//               <p>Access courses anytime, anywhere, on any device.</p>
//             </div>
//             <div className="feature">
//               <h3>Community Support</h3>
//               <p>
//                 Join a community of learners and get support from peers and
//                 mentors.
//               </p>
//             </div>
//           </section>
//         </main>
//         <footer className="footer">
//           <p>&copy; 2024 InsideLearner. All rights reserved.</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import { assets } from "../../../utils/assets";

const HomePage = () => {
  return (
    <div className="homepage-background">
      <div className="homepage">
        <header className="header">
          <nav className="navbar">
            <ul>
              <img
                src={assets?.LOGO}
                alt="Logo"
                className="intro-logo-homepage"
              />
              <div className="name-of-website">
                <h2> INSIDE LEARNER</h2>
              </div>
              <div className="info-about-us">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </div>
            </ul>
          </nav>
        </header>
        <main className="main-content">
          <div className="welcome-section">
            <div className="text-content">
              <h1 className="welcome">Welcome to InsideLearner</h1>
              <h2>Your journey to web development starts here!</h2>
            </div>
            <div className="homepage-image"></div>
          </div>
          <section className="all-about">
            <h2>Learn from the best</h2>
            <p>
              Join our platform to access top-quality courses and materials.
            </p>
            <Link to="/login" className="cta-button">
              Browse Courses
            </Link>
          </section>
          <section className="features">
            <div className="feature">
              <h3>Expert Instructors</h3>
              <p>Learn from industry experts and experienced educators.</p>
            </div>
            <div className="feature">
              <h3>Flexible Learning</h3>
              <p>Access courses anytime, anywhere, on any device.</p>
            </div>
            <div className="feature">
              <h3>Community Support</h3>
              <p>
                Join a community of learners and get support from peers and
                mentors.
              </p>
            </div>
          </section>
          <div className="free-courses">
            <h3> Most Popular Courses</h3>
          </div>
          <section className="features">
            <div className="favourite-courses">
              <div className="Image-hp">
                <div className="A-image">
                  <h3>React</h3>
                  <p></p>
                </div>
              </div>
              <div className="Image-hp">
                <div className="B-image">
                  <h3>JavaScript</h3>
                  <p></p>
                </div>
              </div>
              <div className="Image-hp">
                <div className="C-image">
                  <h3>HTML</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </section>
          <section className="features">
            <div className="feature">
              <h3>Expert Instructors</h3>
              <p>Learn from industry experts and experienced educators.</p>
            </div>
            <div className="feature">
              <h3>Flexible Learning</h3>
              <p>Access courses anytime, anywhere, on any device.</p>
            </div>
            <div className="feature">
              <h3>Community Support</h3>
              <p>
                Join a community of learners and get support from peers and
                mentors.
              </p>
            </div>
          </section>
        </main>
        <footer className="footer">
          <p>&copy; 2024 InsideLearner. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
