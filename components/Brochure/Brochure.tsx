"use client";
import "../../styles/brochure.scss";
import {
  pageFourImages,
  pageOneImages,
  pageThreeImages,
  pageTwoImages,
} from "../../constants/constants";
import IconsMapper from "../IconsMapper/IconsMapper";

const Brochure = () => {
  return (
    <div>
      <div className="brochure">
        <div className="brochure__pages brochure__pages--page2">
          <h1 className="page2-heading">Skills and Technologies</h1>
          <div className="icons page2-icons">
            <div className="icons-row">
              {pageOneImages.map((img, i) => (
                <div key={i}>
                  <IconsMapper img={`/icons${img}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="brochure__pages brochure__pages--page3">
          <div className="icons page3-icons">
            <div className="icons-row">
              {pageTwoImages.map((img, i) => (
                <div key={i}>
                  <IconsMapper img={`/icons${img}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="brochure__pages brochure__pages--page4">
          <div className="icons page4-icons">
            <div className="icons-row">
              {pageThreeImages.map((img, i) => (
                <div key={i}>
                  <IconsMapper img={`/icons${img}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="brochure__pages brochure__pages--page5">
          <div className="icons page5-icons">
            <div className="icons-row">
              {pageFourImages.map((img, i) => (
                <div key={i}>
                  <IconsMapper img={`/icons${img}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
