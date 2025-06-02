import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Description from '@mui/icons-material/Description';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/rogertjr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rogetjr/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://drive.google.com/file/d/1LGr269yyvZKYvzsas0vXM5UD6euiq--2/view" target="_blank" rel="noreferrer"><Description/></a>
          </div>
          <h1>Rogerio Toledo</h1>
          <p>iOS Mobile Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/rogertjr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rogetjr/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;