import React from "react";
import "./App.css";
import Derik from "./images/Derik.jpg";
import Zach from "./images/Zach.png";
import Brendan from "./images/Brendan.jpg";

function About() {
  return (
    <div>
      <div className="about" id="about">
        <div className="container">
          <div className="row full-screen">
            <div className="home-content">
              <div className="block">
                <h1>Meet the team</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about-me2">
        <div className="container">
          <div className="row">
            <div className="section-title2">
              <h1>Tyler Word</h1>
            </div>
          </div>
          <div className="row">
            <div className="about-content">
              <div className="row">
                <div className="img">
                  <img src="https://ca.slack-edge.com/T9P33872P-UT3PHC3L2-43d458905ce0-512" />
                </div>
                <div className="text">
                  <p>
                    Tyler is a fourth generation entrepreneur with 5 successful
                    businesses to his name. He is currently 3rd on Forbes
                    richest people in America as he surpassed Mark Zuckerberg
                    last month. When asked why he invested in Mario's Pizza, the
                    answer was simple. "I love pizza, and I want to share the
                    love." He says his greatest achievement is having a happy
                    healthy family. He has created a charity called "Happy Home"
                    which focuses on equipping parents with the tools necessary
                    to raise happy and healthy children. Tyler has been married
                    for 8 wonderful years and has 3 children, Luke, Ava, and
                    Judah.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-me3">
        <div className="container">
          <div className="row">
            <div className="section-title2">
              <h1>Derik Dorfner</h1>
            </div>
          </div>
          <div className="row">
            <div className="about-content">
              <div className="row">
                <div className="img">
                  <img src={Derik} />
                </div>
                <div className="text">
                  <p>
                    Derik, who has been labeled as the "brains" behind the
                    business has been a successful CEO for the last 10 years.
                    His greatest achievement in the business world has been his
                    development and implementation of blockchain technology in
                    the world of e-commerce. Derik says the goal is to have a
                    complete decentralized financial system. Because of his love
                    for Cryptocurrency, Mario's Pizza accepts Bitcoin and
                    Ethereum as a form of payment. "We want to be at least 2
                    years ahead of our competition", Derik says. His innovative
                    breakthroughs have opened up endless possibilities for the
                    future. Derik is married with 3 children who all equally
                    share in his love for gourmet pizza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-me4">
        <div className="container">
          <div className="row">
            <div className="section-title2">
              <h1>Zachary Wilson</h1>
            </div>
          </div>
          <div className="row">
            <div className="about-content">
              <div className="row">
                <div className="img">
                  <img src={Zach} />
                </div>
                <div className="text">
                  <p>
                    "Zachary Wilson who is our advertising genius, has single
                    handily made Mario's Pizza a household name. Because of
                    Zach's ingenuity in this space, Mario's was voted the #1
                    pizza restaurant in the nation for the last 3 years. Zach's
                    commercials and marketing have garnered the attention of
                    other big named companies such as Amazon and Apple. When
                    asked why he stayed with Mario's, his answer was simple and
                    poignant, "I stayed because of my love for pizza." His goal
                    is that there will be hundreds of Mario's Pizzas on every
                    contitent, including Antarctica. Voted Sexiest Man Alive by
                    People Magazine, Zach is the total package, money, brains,
                    and good looks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-me5">
        <div className="container">
          <div className="row">
            <div className="section-title2">
              <h1>Brendan Keeton</h1>
            </div>
          </div>
          <div className="row">
            <div className="about-content">
              <div className="row">
                <div className="img">
                  <img src={Brendan} />
                </div>
                <div className="text">
                  <p>
                    Brendan is our esteemed Chief Financial Officer by day,
                    vigilante by night. His double life never seems to get in
                    the way of him managing over 20 billion dollars with no
                    loses on the books. It is reported that Brendan sleeps only
                    two hours a night because of his "nightly activities". Some
                    have suggested that there has been some foul play with
                    Mario's competition, but there is no evidence to support
                    such claims. When asked about his questionable roles within
                    the company, Brendan replied, "I’m whatever Mario's needs me
                    to be." Outside of the information just given, we don't know
                    much more about Brendan, and we like to keep it that way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
