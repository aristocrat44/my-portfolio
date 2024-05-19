"use client";
import "../../styles/brochure.scss";

const Brochure = () => {
  return (
    <div>
      <div className="brochure">
        <div className="brochure__bg-shadows">
          <div className="shadow-wrapper shadow-wrapper--1">
            <div className="shadow"></div>
          </div>
          <div className="shadow-edge"></div>
          <div className="shadow-edge"></div>
        </div>
        <div className="brochure__bg-shadows">
          <div className="shadow-wrapper shadow-wrapper--2">
            <div className="shadow"></div>
          </div>
          <div className="shadow-edge"></div>
        </div>
        <div className="brochure__bg-shadows">
          <div className="shadow-wrapper shadow-wrapper--3">
            <div className="shadow"></div>
          </div>
          <div className="shadow-edge"></div>
        </div>
        {/* <!-- brochure__bg-shadows END --> */}

        <div className="brochure__pages brochure__pages--page2">
          <h1 className="page2-heading">Skills and Technologies</h1>
          <div className="icons page2-icons">
            <i className="fa fa-envira" aria-hidden="true"></i>
            <i className="fa fa-wpbeginner" aria-hidden="true"></i>
            <i className="fa fa-sign-language" aria-hidden="true"></i>
            <i className="fa fa-glide-g" aria-hidden="true"></i>
            <i className="fa fa-braille" aria-hidden="true"></i>
            <i className="fa fa-briefcase" aria-hidden="true"></i>
            <i className="fa fa-camera-retro" aria-hidden="true"></i>
            <i className="fa fa-cubes" aria-hidden="true"></i>
            <i className="fa fa-heartbeat" aria-hidden="true"></i>
            <i className="fa fa-motorcycle" aria-hidden="true"></i>
            <i className="fa fa-toggle-off" aria-hidden="true"></i>
            <i className="fa fa-tree" aria-hidden="true"></i>
          </div>
        </div>
        <div className="brochure__pages brochure__pages--page3">
          <div className="icons page3-icons">
            <i className="fa fa-envira fa-page3" aria-hidden="true"></i>
            <i className="fa fa-wpbeginner fa-page3" aria-hidden="true"></i>
            <i className="fa fa-sign-language fa-page3" aria-hidden="true"></i>
            <i className="fa fa-glide-g fa-page3" aria-hidden="true"></i>
            <i className="fa fa-braille fa-page3" aria-hidden="true"></i>
            <i className="fa fa-briefcase fa-page3" aria-hidden="true"></i>
            <i className="fa fa-camera-retro fa-page3" aria-hidden="true"></i>
            <i className="fa fa-cubes fa-page3" aria-hidden="true"></i>
            <i className="fa fa-heartbeat fa-page3" aria-hidden="true"></i>
            <i className="fa fa-motorcycle fa-page3" aria-hidden="true"></i>
            <i className="fa fa-toggle-off fa-page3" aria-hidden="true"></i>
            <i className="fa fa-tree fa-page3" aria-hidden="true"></i>
          </div>
        </div>
        <div className="brochure__pages brochure__pages--page4">
          <div className="icons page4-icons">
            <i className="fa fa-wpbeginner" aria-hidden="true"></i>
            <i className="fa fa-braille" aria-hidden="true"></i>
            <i className="fa fa-motorcycle" aria-hidden="true"></i>
            <i className="fa fa-glide-g" aria-hidden="true"></i>
            <i className="fa fa-briefcase" aria-hidden="true"></i>
            <i className="fa fa-cubes" aria-hidden="true"></i>
            <i className="fa fa-envira" aria-hidden="true"></i>
            <i className="fa fa-heartbeat" aria-hidden="true"></i>
            <i className="fa fa-tree" aria-hidden="true"></i>
            <i className="fa fa-sign-language" aria-hidden="true"></i>
            <i className="fa fa-camera-retro" aria-hidden="true"></i>
            <i className="fa fa-toggle-off" aria-hidden="true"></i>
          </div>
        </div>
        <div className="brochure__pages brochure__pages--page5">
          <div className="icons page5-icons">
            <i className="fa fa-wpbeginner fa-page5" aria-hidden="true"></i>
            <i className="fa fa-glide-g fa-page5" aria-hidden="true"></i>
            <i className="fa fa-camera-retro fa-page5" aria-hidden="true"></i>
            <i className="fa fa-heartbeat fa-page5" aria-hidden="true"></i>
            <i className="fa fa-braille fa-page5" aria-hidden="true"></i>
            <i className="fa fa-envira fa-page5" aria-hidden="true"></i>
            <i className="fa fa-briefcase fa-page5" aria-hidden="true"></i>
            <i className="fa fa-tree fa-page5" aria-hidden="true"></i>
            <i className="fa fa-cubes fa-page5" aria-hidden="true"></i>
            <i className="fa fa-motorcycle fa-page5" aria-hidden="true"></i>
            <i className="fa fa-toggle-off fa-page5" aria-hidden="true"></i>
            <i className="fa fa-sign-language fa-page5" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
