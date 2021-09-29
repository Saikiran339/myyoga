import React from "react";
import './style.css';
import './main.js';
import $ from 'jquery';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import slide from './img/slide-1.jpg';
import ReactSwipe from 'react-swipe';
import Wonder from './img/image1.jpg';
import image1 from './img/image2.jpg';
import image2 from './img/image3.jpg';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';


function App() {
  let reactSwipeEl;
  return (
    <div >
      <section id="topbar" class="d-none d-lg-block">
          <div class="container d-flex">
              <div class="contact-info mr-auto">
                  <i class="fas fa-envelope"></i>
                  <a href=""> email@example.com   </a>
                  <i class="fas fa-phone"></i> 9876543210
              </div>
              <div class="social-links">
                  <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
                  <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
              </div>
      </div>
    </section>

    <nav class="navbar navbar-expand-lg bg-color" id="mynavbar">
      <div class="container">
        <a  class="navbar-brand">Yoga </a>
        <button class="navbar-toggler"type="button"
        data-toggle="collapse"
        data-target="#myNav"aria-controls="myNav"aria-expanded="false"ar
        ia-label="Toggle navigation">
          <span></span>Menu
        </button>
        <div class="collapse navbar-collapse" id="myNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="" class="nav-link">Home</a> 
            </li> 
            <li class="nav-item">
              <a href="" class="nav-link">About</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">Gallery</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col no-padding">
          <div id="hero-slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              {/* <ReactSwipe
              childcount={3}
              swipeOptions={{ continuous: true,
                                 autoplay: true, 
                                 interval: 3000}}
      
              ref={el => (reactSwipeEl = el) }
            >
              <div width={"100%"} height={"90%"}><img style={{width:"inherit"}}src={Wonder}  ></img></div>
              <div width={"80%"} height={"70%"}><img style={{width:"inherit"}}src={image1}  ></img></div>
              <div width={"80%"} height={"70%"}><img style={{width:"inherit"}}src={image2}  ></img></div> */}
              <div class="carousel-item slide-1 active">
                <div class="carousel-caption mb-5 text-right">
                  <h1 class="display-3 text-capitalize mb-2 text-bold">
                    Yoga Lover
                  </h1>
                  <a href="#" class="btn btn-lg mb-5 text-uppercase site-btn sb-gradient">
                    Join Us
                  </a>
                </div>
              </div>

              <div class="carousel-item slide-2">
                <div class="carousel-caption mb-5 text-right">
                  <h1 class="display-3 text-capitalize mb-2 text-bold">
                    Yoga Life
                  </h1>
                  <a href="#" class="btn btn-lg mb-5 text-uppercase site-btn sb-gradient">
                    Join Us
                  </a>
                </div>
              </div>

              <div class="carousel-item slide-3">
                <div class="carousel-caption mb-5 text-right">
                  <h1 class="display-3 text-capitalize mb-2 text-bold">
                    Yoga Fit
                  </h1>
                  <a href="#" class="btn btn-lg mb-5 text-uppercase site-btn sb-gradient">
                    Join Us
                  </a>
                </div>
              </div>
                {/* </ReactSwipe> */}
            </div>
            <a href="#hero-slider" class="carousel-control-prev" role="button" data-slide="prev">
              <i class="fas fa-arrow-circle-left"></i>

            </a>
            <a href="#hero-slider" class="carousel-control-next"role="button" data-slide="next">
              <i class="fas fa-arrow-circle-right"></i>

            </a>
          </div>
        </div>
      </div>
    </div>

    <section class="about-section">
      <div class="container">
        <div class="section-title text-center">
          <h2>Welcome To Yoga</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. pariatur iste debitisas?</p>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="about-img">
              <img src={slide} class="img-fluid" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-item">
              <div class="about-icon">
                <i class="fab fa-diaspora fa-2x"></i>
              </div>
              <div class="about-text">
                <h4>Lorem ipsum 1</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. pariatur iste debitisas?</p>
              </div>
            </div>

            <div class="about-item">
              <div class="about-icon">
                <i class="fas fa-cannabis fa-2x"></i>
              </div>
              <div class="about-text">
                <h4>Lorem ipsum 2</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. pariatur iste debitisas?</p>
              </div>
            </div>

            <div class="about-item">
              <div class="about-icon">
                <i class="fab fa-d-and-d fa-2x"></i>
              </div>
              <div class="about-text">
                <h4>Lorem ipsum 3</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. pariatur iste debitisas?</p>
              </div>
            </div>

            <a href="" class="site-btn sb-gradient mt-5">Explore More</a>
          </div>
        </div>
      </div>
    </section>

    <section class="services section-bg pt-5">
      <div class="container">
        <div class="section-title">
          <h2>Services</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. pariatur iste debitisas?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. pariatur iste debitisas?
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="icon-box">
              <div class="icon">
                <i class="fas fa-cannabis" style={{color:"#ff689b"}}></i>
              </div>
              <h4 class="title">
                  <a href="">Lorem Ipsum</a></h4>
                  <p class="description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. pariatur iste debitisas?
                  Lorem ipsum dolor
                  </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="icon-box">
              <div class="icon">
                <i class="fab fa-d-and-d" style={{color:"#e9bf06"}}></i>
              </div>
              <h4 class="title">
                  <a href="">Lorem Ipsum</a></h4>
                  <p class="description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. pariatur iste debitisas?
                  Lorem ipsum dolor
                  </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="icon-box">
              <div class="icon">
                <i class="fab fa-envira" style={{color:"#3fcdc7"}}></i>
              </div>
              <h4 class="title">
                  <a href="">Lorem Ipsum</a></h4>
                  <p class="description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. pariatur iste debitisas?
                  Lorem ipsum dolor
                  </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="icon-box">
              <div class="icon">
                <i class="fas fa-feather-alt" style={{color:"#41cf2e"}}></i>
              </div>
              <h4 class="title">
                  <a href="">Lorem Ipsum</a></h4>
                  <p class="description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. pariatur iste debitisas?
                  Lorem ipsum dolor
                  </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="icon-box">
              <div class="icon">
                <i class="fas fa-leaf" style={{color:"#22ffed"}}></i>
              </div>
              <h4 class="title">
                  <a href="">Lorem Ipsum</a></h4>
                  <p class="description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. pariatur iste debitisas?
                  Lorem ipsum dolor
                  </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="icon-box">
              <div class="icon">
                <i class="fas fa-life-ring" style={{color:"#4680ff"}}></i>
              </div>
              <h4 class="title">
                  <a href="">Lorem Ipsum</a></h4>
                  <p class="description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. pariatur iste debitisas?
                  Lorem ipsum dolor, 
                  </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <section class="pricing-section pt-5">
      <div class="container">
        <div class="section-title text-center">
          <h2>Pricing Plans</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. pariatur iste debitisas?</p>
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="price-item beginner">
              <div class="price-top">
                <h4>Beginner</h4>
              </div>
              <div class="price-sec">
                <h3>600</h3>
                <p>Per Month</p>
              </div>
              <ul>
                <li>Lorem Ipsum </li>
                <li>Lorem Ipsum </li>
                <li>Lorem Ipsum </li>
                <li>Lorem Ipsum </li>
              </ul>
              <a href="" class="site-btn sb-gradient">Get Started</a>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="price-item intermediate">
              <div class="price-top">
                <h4>intermediate</h4>
              </div>
              <div class="price-sec">
                <h3>800</h3>
                <p>Per Month</p>
              </div>
              <ul>
                <li>Lorem Ipsum </li>
                <li>Lorem Ipsum </li>
                <li>Lorem Ipsum </li>
                <li>Lorem Ipsum </li>
              </ul>
              <a href="" class="site-btn sb-gradient">Get Started</a>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="price-item Advance">
              <div class="price-top">
                <h4>Advance</h4>
              </div>
              <div class="price-sec">
                <h3>800</h3>
                <p>Per Month</p>
              </div>
              <ul>
                <li>Lorem Ipsum </li>
                <li>Lorem Ipsum </li>
                <li>Lorem Ipsum </li>
                <li>Lorem Ipsum </li>
              </ul>
              <a href="" class="site-btn sb-gradient">Get Started</a>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="price-item Professional">
              <div class="price-top">
                <h4>Professional</h4>
              </div>
              <div class="price-sec">
                <h3>1000</h3>
                <p>Per Month</p>
              </div>
              <ul>
                <li>Lorem Ipsum </li>
                <li>Lorem Ipsum </li>
                <li>Lorem Ipsum </li>
                <li>Lorem Ipsum </li>
              </ul>
              <a href="" class="site-btn sb-gradient">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="gallery">
      <div class="container">
        <div class="row">
          <div class="col text-center py-5">
            <h1 class="text-dark text-uppercase">
              Our Gallery
            </h1>
          </div>
          
        </div>

        <div class="row mb-4 first-row align items-end">
          <div class="col-lg-3">
            <a href="./img/img-1.jpg" data-lightbOX="Yoga"
            data-title="image-title">
              <img src={img1}class="img-thumbnail gallery"></img>
            </a>
          </div>

          <div class="col-lg-3">
            <a href="./img/img-2.jpg" data-lightbOX="Yoga"
            data-title="image-title">
              <img src={img2}class="img-thumbnail gallery"></img>
            </a>
          </div>

          <div class="col-lg-3">
            <a href="./img/img-3.jpg" data-lightbOX="Yoga"
            data-title="image-title">
              <img src={img3}class="img-thumbnail gallery"></img>
            </a>
          </div>

          <div class="col-lg-3">
            <a href="./img/img-4.jpg" data-lightbOX="Yoga"
            data-title="image-title">
              <img src={img4}class="img-thumbnail gallery"></img>
            </a>
          </div>

          
        </div>

        <div class="row mb-4 second-row align-items-end">
          <div class="col-lg-3">
            <a href="./img/img-5.jpg"
            data-lightbox="yoga"data-title="image-title">
              <img src={img5} class="img-thumbnail gallery" />
            </a>
          </div>

          <div class="col-lg-3">
            <a href="./img/img-6.jpg"
            data-lightbox="yoga"data-title="image-title">
              <img src={img6} class="img-thumbnail gallery" />
            </a>
          </div>

          <div class="col-lg-3">
            <a href="./img/img-7.jpg"
            data-lightbox="yoga"data-title="image-title">
              <img src={img7} class="img-thumbnail gallery" />
            </a>
          </div>

          <div class="col-lg-3">
            <a href="./img/img-8.jpg"
            data-lightbox="yoga"data-title="image-title">
              <img src={img8} class="img-thumbnail gallery" />
            </a>
          </div>

          
        </div>
      </div>
    </section>

    {/* <section id="faq" class="faq section-bg pt-5">
          <div class="container">
            <div class="section-title">
              <h2>F.A.Q</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. pariatur iste debitisas?</p>
            </div>
            <div class="faq-list">
              <ul>
                <i class="far fa-question-circle icon-help"></i>
                <a href="#faq-list-1" data-toggle="collapse" class="collapsed">Lorem Ipsum 1
                <i class="fas fa-chevron-down icon-show"></i>
                <i class="fas fa-chevron-up icon-close"></i>
                </a>
                <div class="collapse show" id="faq-list-1" data-parent=".faq-list">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. pariatur iste debitisas?</p>
                </div>
              </ul>
            </div>
          </div>
    </section>  */}

<footer>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div>
          <div class="widget">
            <h5>About Yoga Life</h5>
            <p>Lorem Ipsum, dolor sit amet consectetur adipisicing elit, molestiae, ut!.</p>
          </div>
        </div>
        <div>
          <div class="widget">
            <h5>Information</h5>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Lorem Ipsum</a></li>
              <li><a href="">Lorem Ipsum</a></li>
              <li><a href="">Lorem Ipsum</a></li>
              <li><a href="">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4">
        <div>
          <div class="widget">
            <h5>Yoga Life</h5>
            <p>Lorem Ipsum, dolor sit amet consectetur</p>
            <ul>
              <li>
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fas fa-calendar-alt fa-stack-1x fa-inverse"></i>
                </span>
                Monday-Friday, 8am-8pm
              </li>
              <li>
                <span class="fa-stack fa-lg">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fas fa-phone fa-stack-1x fa-inverse"></i>
                </span>
                9876543210
              </li>
              <li>
                <span class="fa-stack fa-lg">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fas fa-envelope fa-stack-1x fa-inverse"></i>
                </span>
                info@test.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4">
        <div>
          <div class="widget">
            <h5>Our Lcation</h5>
            <p>Hyderabad</p>
          </div>
        </div>
        <div>
          <div class="widget">
            <h5>Follow Us</h5>
            <ul class="social-network">
              <li class="social-facebook">
                <a href="">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li class="social-twitter">
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="social-instagram">
                <a href="">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sub-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-6col-md-6 col-lg-6">
          <div>
            <div class="text-left">
              <p>&copy; copyright - Yoga. All rights reserved</p>
            </div>
          </div>
        </div>
        <div class="text-right">
          <div class="credits">
            Designed By Lorem Ipsum
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>















































































    {/* <section class="gallery">
      <div class="container">
        <div class="title">
          <div class="row">
            <div class="col text-center py-5">
              <h1 class="text-dark text-uppercase">
                Our Gallery
              </h1>
            </div>
          </div>

          <div class="row mb-4 first-row align-items-end">
            <div class="col-lg-3">
              <a href="img/img-1.jpg" data-lightbox="Yoga" data-title="image-title">
                <img src={img1} class="img-thumbnail gallery"></img>
              </a>
            </div>

            <div class="col-lg-3">
              <a href="img/img-2.jpg" data-lightbox="Yoga" data-title="image-title">
                <img src={img2} class="img-thumbnail gallery"></img>
              </a>
            </div>

            <div class="col-lg-3">
              <a href="img/img-3.jpg" data-lightbox="Yoga" data-title="image-title">
                <img src={img3} class="img-thumbnail gallery"></img>
              </a>
            </div>

            <div class="col-lg-3">
              <a href="img/img-4.jpg" data-lightbox="Yoga" data-title="image-title">
                <img src={img4} class="img-thumbnail gallery"></img>
              </a>
            </div>

          </div>

          <div class="row mb-4 second-row align-items-end">
              <div class="col-lg-3">
                <a href="img/img-5.jpg" data-lightbox="Yoga" data-title="image-title">
                  <img src={img5} class="img-thumbnail gallery"></img>
                </a>
              </div>

              <div class="col-lg-3">
                <a href="img/img-6.jpg" data-lightbox="Yoga" data-title="image-title">
                  <img src={img6} class="img-thumbnail gallery"></img>
                </a>
              </div>

              <div class="col-lg-3">
                <a href="img/img-7.jpg" data-lightbox="Yoga" data-title="image-title">
                  <img src={img7} class="img-thumbnail gallery"></img>
                </a>
              </div>

              <div class="col-lg-3">
                <a href="img/img-8.jpg" data-lightbox="Yoga" data-title="image-title">
                  <img src={img8} class="img-thumbnail gallery"></img>
                </a>
              </div>


          </div>
        </div>
      </div>
    </section> */}
    </div>
  );
}

export default App;
