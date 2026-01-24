import './style.css';
import project01 from './../../img/projects/01.jpg';

function Project(props) {
  return (
    <li className="project">
      <a href="./project-page.html">
        <img src={project01} alt="Project img" className="project_img" />
        <h3 className="project__title">Gaming streaming portal</h3>
      </a>
    </li>
  );
}

export default Project;
