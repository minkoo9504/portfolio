import './AboutMeSection.css';
const AboutMe = () => {
    return ( 
        <section className="AboutMe" id='aboutme'>
            <h2>About Me</h2>
            <div className="contents">
                <div className="mk"></div>
                <div className="txt">
                    <div>
                        <div className="profile">
                            <h3 className="title">Profile</h3>
                            <p>이름 : 강민구</p>
                            <p>나이 : 28 (1995.04.10)</p>
                            <p>연락처 : 010-7661-0675</p>
                            <p>Email : mk9504@naver.com</p>
                        </div>
                        <div className="experiences">
                            <h3 className="title">Experiences</h3>
                            <p>경복대학교 건축공간디자인 졸업</p>
                            <p>19.08~20.03 : HM(점주)</p>
                            <p>21.09~22.03 : SK쉴더스(ADT캡스)</p>
                            <p>23.05~23.12 : 노원그린컴퓨터아카데미</p>
                            <span className="smalltxt">(WebGL(3DAPI)을 활용한 Motion UI 프론트엔드 웹앱개발자 양성과정)</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="skills">
                        <h3 className="title">Skills</h3>
                        <div className="skillsicon">
                            <div className="flex">
                                <div className="css icon"></div>
                                <div className="html icon"></div>
                                <div className="js icon"></div>
                            </div>
                            <div className="flex">
                                <div className="pigma icon"></div>
                                <div className="ps icon"></div>
                                <div className="react icon"></div>
                            </div>
                        </div>
                    </div>
                    <div className="license">
                        <h3 className="title">License</h3>
                        <p>웹디자인기능사</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default AboutMe;