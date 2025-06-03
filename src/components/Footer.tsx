import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/rogertjr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/rogertjr/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Feel free to reach me out through my socials above 🤍</p>
    </footer>
  );
}

export default Footer;