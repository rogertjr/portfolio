import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faApple } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "VueJS",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Swift",
    "SwiftUI",
    "Async/Await",
    "Combine",
    "SPM",
    "Swift Testing",
    "Rest APIs"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Hard Skills</h1>
            <div className="skills-grid">
                 <div className="skill">
                    <FontAwesomeIcon icon={faApple as IconProp} size="3x"/>
                    <h3>iOS Native Development</h3>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJs as IconProp} size="3x"/>
                    <h3>Web Development</h3>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;