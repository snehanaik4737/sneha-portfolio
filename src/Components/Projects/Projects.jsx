import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
//import TimerImage from "../../assets/TimerImage.PNG"
//import   from "../../assets/Photo_Sneha.jpg";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">

        <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://miro.medium.com/max/1400/1*P-VUfuP1_U5oLkqdN3vW9w.png"
                    alt="Naukri"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Naukri</h2>
                <p>
                Naukri.com is an Indian employment website provides hiring-related services  in India and overseas.
                </p>
                <div>
                  <FaReact />
                  <SiMaterialui />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <DiCss3 />
                  {/* <SiHtml5 /> */}
                </div>
                <div>
                  <a
                    href="https://naukri-website-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/snehanaik4737/naukri-website-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


        <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://miro.medium.com/max/1400/1*G43bgjBTH3Bgiks0f0-PHg.png"
                    alt="Gearbest"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Gearbest</h2>
                <p>
                 Gearbest is a product-based e-commerce website selling cell phones,electronic gadgets and home
                    products.

                </p>
                <div>
                  <FaReact />
                  <SiMaterialui />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <DiCss3 />
                  {/* <SiHtml5 /> */}
                </div>
                <div>
                  <a
                    href="gearbestclonemasai.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/rupamShaw1998/GearBest"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

         


          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://miro.medium.com/max/1050/0*rTJSAAsm2zgq5STW.png"
                    alt="Mamaearth"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Mamaearth</h2>
                <p>
                 Mamaearth is a product-based e-commerce website selling baby care, skin care, and hair care products. We cloned
                  their  website.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <DiCss3 />
                  <SiHtml5 />
                  {/* <FaReact />
                  <SiMaterialui /> */}
                </div>
                <div>
                  <a
                    href="https://mamaearth-replica.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/snehanaik4737/Mamaearth-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://miro.medium.com/max/1400/1*qZ9TO188H4vbL87PuDCQOg.png"
                    alt="Myntra"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Myntra</h2>
                <p>
                  {/* Location based weather app. User can also search for their
                  cities and pickup location from map to see weather data of
                  respective places. */}
                  Myntra is a product-based e-commerce website selling fashion and lifestyle products.We cloned
                  their  website.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://shoponmyntra.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/snehanaik4737/Myntra-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://miro.medium.com/max/1400/1*jMR8PtBM6_tM1Jnm9hVWJA.png"
                    alt="Timer"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Timer</h2>
                <p>
                
                Stopwatch simulator.
             
                The Start button starts the timer running, and the Stop button stops it, leaving the elapsed time displayed.The Reset button then resets the stopwatch to zero.
                </p>
                <div>
                  <FaReact />
                
                  <DiCss3 />
                
                </div>
                <div>
                  <a
                    href="https://stop-watch-simulator.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/snehanaik4737/unit-5-Assignment/tree/main/timer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

         



          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://miro.medium.com/max/1050/1*3UPU7UDnb1UNlFauaqwsDg.png" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Youtube</h2>
                <p>
                YouTube is a video sharing service where users can watch, like, share, comment and upload their own videos.
                </p>
                <div>
                <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  {/* <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb /> */}
                </div>
                <div>
                  <a
                    href="https://replica-youtube.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/snehanaik4737/youtube-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>

                {/* <div>
                  <a
                    href="https://www.npmjs.com/package/apijs-mongo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View NPM Package
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/API.JS-Mongo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://cdn-images-1.medium.com/max/1200/1*HloczYJCeMdPOhBK3pR6eQ.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather app</h2>
                <p>
                  Location based weather app. User can also search for their
                  cities and can see weather data of
                  respective places.
                </p>
                <div>
                <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  {/* <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb /> */}
                </div>

                <div>
                  <a
                    href="https://weather-app-forecast-unit-3.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/snehanaik4737/weather-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
                {/* <div>
                  <a
                    href="https://drive-system.herokuapp.com/user/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for the API
                    </span>
                  </a>
                  <a
                    href="https://github.com/imbickydutta/file-system-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/934WpdD/uniqlo-clone.png"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Uniqlo Clone</h2>
                <p>
                  UNIQLO is a clothing apparel company, from Japan. They also
                  sell their products in online mode through their website. We
                  cloned their website.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://uniqlo-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/uniqlo-backend-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>PulsePlus Clone</h2>
                <p>
                  PulsePlus is an E-commerce web application for online Buying
                  Medicines and Consult to Doctor and Book a near Testlab.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://pulseplus-clone.netlify.app/landing_page.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/www.pulseplus.in-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      
    </>
  );
};
