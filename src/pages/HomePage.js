import "../App.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import linkData from "../linkData";
import Profile from "../components/Profile";

export default function ProfilePage() {
  const linkEl = linkData.map((link) => {
    if (link.linkTo) {
      return (
        <Link
          key={link.key}
          to={link.linkTo}
          className="App-link"
          id={link.linkId}
          title={link.linkTitle}
        >
          {link.linkText}
        </Link>
      );
    } else {
      return (
        <a
          key={link.key}
          href={link.linkRef}
          className="App-link"
          id={link.linkId}
          target="_blank"
          rel="noreferrer noopener"
          title={link.linkTitle}
        >
          {link.linkText}
        </a>
      );
    }
  });

  return (
    <section>
      <Profile />
      {linkEl}
      <Logo />
      <Footer />
    </section>
  );
}
