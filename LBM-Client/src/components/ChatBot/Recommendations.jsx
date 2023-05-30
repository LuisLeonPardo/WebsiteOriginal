import React from "react";
import threepoints from "./assets/threepoints.svg";
import apple from "./assets/apple.svg";
import image from "./assets/image.svg";
import dobleT from "./assets/dobleT.svg";
import moon from "./assets/moon.svg";

const Recommendations = () => {
  const combinedStyles = { ...styles, ...responsiveStyles };

  return (
    <div style={combinedStyles.container}>
      <h2 style={combinedStyles.title}>
        Recommendations{" "}
        <img src={threepoints} alt="threepoints" style={combinedStyles.threepoints} />
      </h2>
      <h1 style={combinedStyles.headerStyles}>
        Lorem ipsum dolor sit amet consectetur. Adipiscing eget cursus sit
        scelerisque mi feugiat cras lobortis leo.
      </h1>
      <div style={combinedStyles.containerText}>
        <div style={combinedStyles.item}>
        <img src={apple} alt="apple" style={combinedStyles.svgs} />
        <h1 style={combinedStyles.titleh1}>Lorem</h1>
        <p style={combinedStyles.p}>
          Lorem ipsum dolor sit amet consectetur. Pulvinar habitant ut tempus
          fusce risus.
        </p>
        </div>
        <div style={combinedStyles.item}>
        <img src={image} alt="image" style={combinedStyles.svgs} />
        <h1 style={combinedStyles.titleh1}>Lorem</h1>
        <p style={combinedStyles.p}>
            Lorem ipsum dolor sit amet consectetur. Vestibulum et cursus sed
            vitae dignissim egestas.
          </p>
        </div>
        <div style={combinedStyles.item}>
        <img src={dobleT} alt="dobleT" style={combinedStyles.svgs}/>
        <h1 style={combinedStyles.titleh1}>Lorem</h1>
        <p style={combinedStyles.p}>
            Lorem ipsum dolor sit amet consectetur. Feugiat aliquet justo nunc
            sollicitudin.
          </p>
        </div>
        <div style={combinedStyles.item}>
        <img src={moon} alt="moon" style={combinedStyles.svgs}/>
        <h1 style={combinedStyles.titleh1}>Lorem</h1>
          <p style={combinedStyles.p}>
            Lorem ipsum dolor sit amet consectetur. Quisque etiam vitae accumsan
            dolor condimentum libero gravida tempus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#F7F9FB",
    borderRadius: "16px",
    // width: "646px",
    maxWidth: "646px",
    minHeight: "698px",
    justifyContent: "space-between",
    padding: "20px",
  },
  title: {
    width: "58px",
    height: "20px",
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    fontFeatureSettings: `'ss01' on, 'cv01' on, 'cv11' on`,
    color: "#1C1C1C",
    flex: "none",
    order: "0",
    flexGrow: "0",
  },
  headerStyles: {
    width: "80%",
    height: "auto",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "32px",
    lineHeight: "44px",
    letterSpacing: "-0.02em",
    color: "#222222",
    flex: "none",
    order: "0",
    flexGrow: "0",
    textAlign: "left",
    marginBottom:"5rem"
  },
  threepoints: {
    marginLeft: "auto", 
  },
  containerText: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, auto)",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", 
  },
  titleh1: {
    fontSize: "20px",
    marginBottom: "10px",
    paddingTop: "1rem"
  },
  p: {
    textAlign: "left",
  },
  svgs: {
    marginBottom: "2%",
    alignItems: "flex-start", 
  },
};

const responsiveStyles = {
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column",
      padding: "10px",
      gap: "16px",
      width: "100%",
      minWidth: "340px",
      maxWidth: "100%",
      minHeight: "340px"
    },
    headerStyles: {
      width: "100%",
      fontSize: "28px",
      lineHeight: "36px",
    },
  },
};



// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "20px 16px",
//     gap: "39px",
//     position: "absolute",
//     // width: "646px",
//     // height: "698px",
//     left: "750px",
//     top: "0px",
//     background: "#F7F9FB",
//     borderRadius: "16px",
//   },
//   title: {
//     fontFamily: "Verdana",
//     fontStyle: "normal",
//     fontWeight: "700",
//     fontSize: "14px",
//     lineHeight: "20px",
//     display: "flex",
//     alignItems: "center",
//     fontFeatureSettings: `'ss01' on, 'cv01' on, 'cv11' on`,
//     color: "#1C1C1C",
//     flex: "none",
//     order: "0",
//     flexGrow: "0",
//   },
//   headerStyles: {
//     width: "499px",
//     height: "176px",
//     fontFamily: "Inter",
//     fontStyle: "normal",
//     fontWeight: "500",
//     fontSize: "32px",
//     lineHeight: "44px",
//     letterSpacing: "-0.02em",
//     color: "#222222",
//     flex: "none",
//     order: "0",
//     flexGrow: "0",
//     textAlign: "left",
//   },
//   threepoints: {
//     paddingLeft: "90%",
//     // paddingRight: "18.75%",
//     // top: "43.75%",
//     // bottom: "43.75%",
//   },
//   containerText: {
//     display: "grid",
//     gridTemplateColumns: "repeat(2, 1fr)",
//     gridTemplateRows: "repeat(2, auto)",
//     gap: "20px",
//   },
//   item: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   titleh1: {
//     fontSize: "24px",
//     marginBottom: "10px",
//   },
//   p: {
//     textAlign: "left",
//     // width: '221px',
//     // height: '40px',
//     // fontFamily: 'Inter',
//     // fontStyle: 'normal',
//     // fontWeight: 400,
//     // fontSize: '12px',
//     // lineHeight: '20px',
//     // letterSpacing: '-0.02em',
//     // color: '#585858',
//     // flex: 'none',
//     // order: 1,
//     // flexGrow: 0,
//   },
//   svgs:{
//     marginBottom:"20px",
//     alignItems:"left"
//   }
// };
