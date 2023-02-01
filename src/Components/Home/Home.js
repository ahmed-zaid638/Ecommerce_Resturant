import React from "react";
import Header from "./Header";
import "./Home.css";
import status from "../../assets/status.png";
import services from "../../assets/services-1.png";
import menu1 from "../../assets/menu-1.png";
import menu2 from "../../assets/menu-2.png";
import menu3 from "../../assets/menu-3.png";

const Home = () => {
  return (
    <>
      <Header />
      <section className="numbers">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
              <h1>1287+</h1>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3  mb-2 ">
              <h1>5786+</h1>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-2 ">
              <h1>1287+</h1>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3  mb-2">
              <h1>1440+</h1>
              <h6>PROJECTS</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="pride">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 col-lg-6 ">
              <img src={status} alt="" />
            </div>
            <div className="col-md-12 col-lg-6 pride-content mt-5">
              <h1>
                We pride ourselves on making real food from the best
                ingredients.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="ingredients py-5" id="ingredients">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ingredients-content ">
              <h1>
                We make everything by hand with the best possible ingredients.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
              <ul>
                <li>
                  {" "}
                  <i class="fa-solid fa-check me-3"></i> Etiam sed dolor ac diam
                  volutpat.
                </li>
                <li>
                  {" "}
                  <i class="fa-solid fa-check me-3"></i> Erat volutpat aliquet
                  imperdiet.
                </li>
                <li>
                  {" "}
                  <i class="fa-solid fa-check me-3"></i> Erat volutpat aliquet
                  imperdiet.
                </li>
              </ul>
              <button type=""> Learn More</button>
            </div>
            <div className="col-md-6">
              <img src={services} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="parallex" >
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                When a man's stomach is full it makes no difference whether he
                is rich or poor.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio <br /> finibus bibendum in sit amet leo. Mauris
                feugiat erat tellus.
              </p>
              <a href="#">
                {" "}
                <i class="fa-solid fa-play"></i> Watch Our Story{" "}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="menu" id="menu">
        <div className="container">
          <div className="row">
            <h1>Explore Our Foods</h1>
            <p className="py-3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat{" "}
              <br /> erat tellus. Far far away, behind the word mountains, far
              from the countries Vokalia and Consonantia, <br /> there live the
              blind texts. Separated they live in Bookmarksgrove.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 box">
              <img src={menu1} alt="" />
              <h4>Rainbow Vegetable Sandwich </h4>
              <p>Time: 15 - 20 Minutes | Serves: 1</p>
              <div>
                {" "}
                <span>$10.50 </span> <span>$16.50</span>{" "}
              </div>
              <button type="">Order Now</button>
            </div>

            <div className="col-md-6 col-lg-3 box">
              <img src={menu2} alt="" />
              <h4>Rainbow Vegetable Sandwich </h4>
              <p>Time: 15 - 20 Minutes | Serves: 1</p>
              <div>
                {" "}
                <span>$10.50 </span> <span>$16.50</span>{" "}
              </div>
              <button type="">Order Now</button>
            </div>

            <div className="col-md-6 col-lg-3 box">
              <img src={menu1} alt="" />
              <h4>Rainbow Vegetable Sandwich </h4>
              <p>Time: 15 - 20 Minutes | Serves: 1</p>
              <div>
                {" "}
                <span>$10.50 </span> <span>$16.50</span>{" "}
              </div>
              <button type="">Order Now</button>
            </div>

            <div className="col-md-6 col-lg-3 box ">
              <img src={menu3} alt="" />
              <h4>Rainbow Vegetable Sandwich </h4>
              <p>Time: 15 - 20 Minutes | Serves: 1</p>
              <div>
                {" "}
                <span>$10.50 </span> <span>$16.50</span>{" "}
              </div>
              <button type="">Order Now</button>
            </div>
          </div>
        </div>
      </section>
    
      <section className="footer text-center" id="contact">
      <div className="container"> 
        <div className="row">
          <div className="col links">
            <a href="#">Register</a>
            <a href="">Forum</a>
            <a href=""> Affaliate </a>
            <a href="">FAQ</a>
          </div>
          <div className="row social">
           <div className="col">
           <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram"></i>
           </div>
          </div>
          <div className="row">
             <p>© 2021. Foodera. All rights reserved.</p>
          </div>
        </div>
      </div>
     </section> 

    </>
  );
};
export default Home;


