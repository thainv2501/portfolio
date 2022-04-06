import React from "react";
import CV from "../../assets/Viet-Thai-CV.pdf";

export const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-primary">
        Download CV
      </a>
      <a
        href="https://www.facebook.com/taolanhuthedo/"
        target="_blank"
        className="btn"
      >
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
