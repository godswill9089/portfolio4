import { useContext } from "react";
import {
  GmailDarkIcon,
  GmailIcon,
  LinkedInContactIcon,
} from "../../assets/icons/icons";
import ContactCard from "./ContactCard";
import "./contact.scss";
import { ThemeContext } from "../../App";

interface MeansOfContactProps {}

const MeansOfContact: React.FunctionComponent<MeansOfContactProps> = () => {
  const theme = useContext(ThemeContext);

  const contacts = [
    {
      icon: theme.isDarkmode ? <GmailDarkIcon /> : <GmailIcon />,
      appText: "Send me an email",
      appDetails: (
        <a href="mailto:ejimoforgodswill937@gmail.com" aria-label="send lakes a mail">
          ejimoforgodswill937@gmail.com
        </a>
      ),
    },
   
    {
      icon: <LinkedInContactIcon />,
      appText: "Connect with me on LinkedIn",
      appDetails: (
        <a
          href="https://www.linkedin.com/public-profile/settings"
          target="_blank"
          rel="noreferrer"
          aria-label=""
        >
          Ejimofor Godswill
        </a>
      ),
    },
  ];
  return (
    <div className={theme.isDarkmode ? "flexMeansDark" : "flexMeans"}>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.appText}
          icon={contact.icon}
          appName={contact.appText}
          details={contact.appDetails}
        />
      ))}
    </div>
  );
};

export default MeansOfContact;
