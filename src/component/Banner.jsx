import React from "react";
import "../../src/assets/sass/components/_banner.scss";
// const Banner = (props) => {
//   const { bannerClass, title } = props;
//   const classcss = "banner " + bannerClass;
// const Banner = ({ bannerClass, title }) => {

// const Banner = (props) => {
//   const classcss = "banner " + props.bannerClass;
//   return (
//     <section className={classcss}>
//       {
//         //pour ne pas afficher la balise <h1> vide si title est vide cas page apropos
//         props.title !== "" && <h1 className="banner__title"> {props.title} </h1>
//       }
//     </section>
//   );
// };
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
