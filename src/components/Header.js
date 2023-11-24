import './Header.css';
const Header = () => {

    //클릭시 각 id 찾아 섹션 이동
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    };
  
    return ( 
        <div className="Header">
            <nav>
                <ul>
                    <li onClick={() => scrollToSection('aboutme')}>About Me</li>
                    <li onClick={() => scrollToSection('project')}>Project</li>
                    <li onClick={() => scrollToSection('webclone')} >Web Clone</li>
                    <li onClick={() => scrollToSection('contactme')}>Contact Me</li>
                </ul>
            </nav>

        </div>
     );
}
 
export default Header;