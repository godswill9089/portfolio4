import { useContext } from "react";
import "./about.scss";
import { ThemeContext } from "../../App";
import AnimatedText from "../animatedText/AnimatedText";
import me2 from "../../assets/me2.jpg"

interface AboutMeProps {}

const AboutMe: React.FunctionComponent<AboutMeProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "abtMewrapperDark" : "abtMewrapper"}>
      <div className="abtCont">
        <img
          src={me2}
          alt="godwill"
          className="me2"
        />
        <div className="details">
          <AnimatedText
            text="Meet Ejimofor Godwill."
            className={theme.isDarkmode ? "meetDark" : "meet"}
            once
          />
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            I am a Frontend Engineer with three years of professional experience
            based in Rivers State, Nigeria. I have a serious passion for UI effects and
            animations, building pixel perfect web applications, creating
            dynamic user experiences and making every element on the web
            accessible to everyone including those with disabilities.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            Over the past years I have worked in the gaming industry, the health
            sector and the finance sector. My experience working in these
            various sectors has helped increase my knowledge in building
            accessible and user friendly web applications using tools like
            React, Typescript and Electron for desktop apps.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            When i'm off my computer you might find me playing FIFA, watching
            movies, bowling, spending time with friends and family and other
            activities that helps me unwind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
