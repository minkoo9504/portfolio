import './ProjectSection.css';
const Project = () => {
    return ( 
        <section className="Project" id='project'>
            <div className="bk"></div>
            <div className="w1200">
                <h3 className='ProjectTitle'>Team Project</h3>
                <div className='projectContent flex'>
                    <div className='f12mokup'></div>
                    <div className='f12txt'>
                        <div className="int">
                            <div>
                                <p>사이트명</p>
                                <p>제작기간</p>
                                <p>제 작 물</p>
                                <p>컨 셉</p>
                                <p>참여도</p>
                            </div>
                            <div>
                                <p>밤을 걷다</p>
                                <p>1달 (기획/디자인/코딩) </p>
                                <p>메인 Full Page Scroll , 갤러리 , 회원가입
                                </p>
                                <p>팀프로젝트로 밤의 궁을 소개하는 사이트 제작</p>
                                <p>70%</p>
                            </div>

                        </div>
                        <div className="concept">
                            <p>컨셉설명</p>
                            <div>팀원 4명이 진행한 팀프로젝트로 '밤을걷다' 는 별빛야행 축제 중
                                대표적인 3개의 행사를 소개하는 사이트입니다.
                            </div>

                        </div>

                
                    </div>
                </div>
            </div>


        </section>
     );
}
 
export default Project;