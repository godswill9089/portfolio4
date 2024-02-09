import {
  GithubIcon,
  LinkedInIcon,
} from "../../assets/icons/icons";
import "./socials.scss";

interface SocialsProps {}

const Socials: React.FunctionComponent<SocialsProps> = () => {
  return (
    <div className="socialswrapper">
      <a
        className="socialIcons"
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        aria-label=""
      >
        <GithubIcon />
      </a>
      <a
        className="socialIcons"
        href="https://www.linkedin.com/public-profile/settings"
        target="_blank"
        rel="noreferrer"
        aria-label=""
      >
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default Socials;
