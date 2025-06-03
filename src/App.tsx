import {useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Navigation,
  Footer,
  AboutMe
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container 'dark-mode'`}>
        <Navigation />
        <FadeIn transitionDuration={700}>
            <Main/>
            <AboutMe/>
            <Expertise/>
            <Timeline/>
            <Project/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;