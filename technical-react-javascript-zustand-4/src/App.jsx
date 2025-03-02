import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="appLayout">
        <Header />
        <div className="mainContent">
          <div className="container h-full">
            <div className="innerContent">
              {/* Avatar and Fill Form Section (Hidden When Video Expands) */}
              <div className={`avatarFormBlock sectionBlock ${isVideoOpen ? "hidden" : ""}`}>
                <div className="avatarBlock sectionBlock">Avatar Profile</div>
                <div className="fillForm sectionBlock">
                  Fill Form
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                </div>
              </div>

              {/* Video Block with Position Change */}
              <div className={`videoGetBlock ${isVideoOpen ? "shiftUp" : ""}`}>
                <div className={`videoContainer ${isVideoOpen ? "fullHeight" : ""}`}>
                  <div className={`videoBlock sectionBlock ${isVideoOpen ? "fullHeight" : ""}`}>
                    <div className="videoHeader" onClick={() => setIsVideoOpen(!isVideoOpen)}>
                      <span>Video Block</span>
                      {isVideoOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </div>

                    {/* Framer Motion Animation */}
                    <motion.div
                      className="videoContent"
                      initial={{ opacity: 0, height: 0 }}
                      animate={isVideoOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="videoWrapper">
                        <video width="100%" controls>
                          <source src="your-video.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Get To Know Block - Always at Bottom */}
              <div className="getToKnowBlock sectionBlock">Get To Know</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
