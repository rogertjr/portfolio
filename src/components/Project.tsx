import spendo from '../assets/images/spendo.png';
import fitta from '../assets/images/fitta.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={spendo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Spendo</h2></a>
                <p>A budgeting app to keeps track of your transactions and saving goals.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={fitta} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Fitta</h2></a>
                <p>A wellness hub to record and analyze your fitness</p>
            </div>
        </div>
    </div>
    );
}

export default Project;