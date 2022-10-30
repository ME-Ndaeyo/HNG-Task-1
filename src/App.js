import "./App.css";
import Avatar from "./components/Avatar";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import linkData from "./linkData";

function App() {
  const linkEl = linkData.map(link => {
    return <a href={link.linkRef} className='App-link' target='_blank' rel="noreferrer noopener">{link.linkTitle}</a>
  })
  return (
    <div className="App">
      <main>
        <Avatar name='Natasha Bob'/>
        {linkEl}
        <Logo/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
