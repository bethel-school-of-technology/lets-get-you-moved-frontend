import React from "react";
import "./App.css";
import building from "./images/building.jpg";
import story from "./images/story.jpg";

function Story() {
  return (
    <div id="Story">
      <div className="story" id="home">
        <div className="container">
          <div className="row full-screen">
            <div className="home-content">
              <div className="block">
                <h1>our story</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about-me2">
        <div className="container">
          <div className="row">
            <div className="section-title2">
              <h1>How we started</h1>
            </div>
          </div>
          <div className="row">
            <div className="about-content">
              <div className="row">
                <div className="imgBuilding">
                  <img src={story} alt='' />
                </div>
                <div className="text">
                  <p>
                    Mario's pizza started in the kitchen of Mario Moretti. Mario
                    and his wife Giorgia had 4 boys and 4 girls, and each one
                    had their own preference for what they wanted on their pizza.
                    Instead of Mario and Giorgia making 8 different pizzas for
                    their children, they would layout the different ingredients
                    out on the kitchen counter with pre-maid pizza dough. Each
                    kid would then create their own pizza to their liking as
                    Papà Mario would cook them in his very own pizza oven. This
                    simple family solution would turn into a multi-million
                    dollar business as Mario founded his first Mario's Pizza in
                    downtown Houston on July 23, 1955. On December 12th, 2019,
                    Mario sold his business to four young entrepreneurs that
                    carry the same passion and desire for exquisite Italian
                    pizza with real ingredients.
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

export default Story;
