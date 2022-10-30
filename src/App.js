import "./App.css";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import linkData from "./linkData";
import Profile from "./components/Profile";

function App() {
  const linkEl = linkData.map(link => {
    return <a key={link.key} href={link.linkRef} className='App-link' id={link.linkId} target='_blank' rel="noreferrer noopener" title={link.linkTitle}>{link.linkText}</a>
  })
  return (
    <div className="App">
      <main>
        <Profile/>
        {linkEl}
        <Logo/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
