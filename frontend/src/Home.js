import { auth } from "./firebase";
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { useStateValue } from "./StateProvider";

function Home() {
const [{ user }] = useStateValue();

const login = () => {
  if (user) {
    auth.signOut();
  }
};

  return (
    <div>
      <div className="home" id="home">
        <div className="container">
          <div className="row full-screen">
            <div className="home-content">
              <div className="block">
                <div className="dark fire">
                  <h1 className="Blazing">
                    WELCOME TO MARIO'S PIZZA
                  </h1>
                </div>
                <p>REAL ITALIAN PIZZA WITH REAL INGREDIENTS</p>
                <div className="cv-btn">
                  <Link to={!user && "/login"} className="banner_link">
                    <div onClick={login} className="home_option">
                      <span className="hello">
                        Hello, {!user ? "Guest" : user?.email}
                      </span>
                      <br></br>
                      <span className="signIn_signOut">
                        {user
                          ? "Click to Sign Out"
                          : "Sign In To Build Your Pizza"}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about-me" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h1>Mario's Pledge</h1>
              <p className="small text-uppercase">Our Promise</p>
            </div>
            <h4 className="pledge">
              Here at Mario's, we use fresh, never frozen ingredients from local
              farmers that will be sure to satisfy your taste buds. Our pledge
              to you is to satisfy your hunger needs with the best pizza in the
              nation. Voted #1 in the nation for 3 straight years for best
              pizza, we value customer satisfaction and promise to provide the
              best pizza eating experince of your life.{" "}
            </h4>
          </div>
          <div className="about-content">
            <i className="fa fa-thumbs-up"></i>
          </div>
          <div className="about-content"></div>
        </div>
      </section>
      <div className="parallax-container">
        <div className="parallax"></div>
      </div>
      <section className="about-me" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h1>Download the App</h1>
              <p className="small text-uppercase">Connect with us</p>
            </div>
            <h4 className="pledge">
              Every day, we’re adding new ways to safely deliver that superfast
              pizza experience you know and love. Order with the Mario app,
              online, or by phone. You can grab your pizza right by the door at
              a Superfast Grab and Go station. You can choose curbside delivery,
              and we’ll come out to you.{" "}
            </h4>
          </div>
          <div className="about-content">
            <i className="fa fa-mobile-phone"></i>
          </div>
        </div>
      </section>
      <div className="parallax-container">
        <div className="parallax2"></div>
      </div>
      <section className="about-me" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h1>Our Mission</h1>
              <p className="small text-uppercase">our "why"</p>
            </div>
            <h4 className="pledge">
              We are passionate about giving our customers the best pizza eating
              experience. We value community and connections. Our involvement in
              social activities and charities have impacted the lives of many.
              We believe that positive relationships leave a lasting impact on
              our employees, customers, and community.{" "}
            </h4>
            <div className="cv-btn">
              <Link to="/story">our story</Link>
            </div>
          </div>
        </div>
      </section>
      <div className="parallax-container">
        <div className="parallax3"></div>
      </div>
    </div>
  );
}

export default Home;
