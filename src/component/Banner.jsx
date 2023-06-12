import React from "react";
import "../../src/assets/sass/components/_banner.scss";
const Banner = ({ bannerClass, title }) => {
  const classcss = "banner " + bannerClass;
  return (
    <section className={classcss}>
      {title !== "" && <h1 className="banner__title"> {title} </h1>}
    </section>
  );
};
export default Banner;

// const ab = () => {
//   console.log("coucou");
// };
