import React from "react";
import './projects.css'
import { BiLinkExternal } from 'react-icons/Bi'
import Card from '../../components/Card/Card'
import panela from '../../assets/panela.png'
import todo from '../../assets/todo.png'
import stopsort from '../../assets/stopsort.png'
import detect from '../../assets/detect.png'
import { Panel, PanelGroup, Placeholder } from 'rsuite';

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h3 className="pageTitle">Projects</h3>
            {/* <main>
                <section className="sectionProject">
                    <Card
                        imgPath={panela}
                        stacks="Wordpress"
                        title="Panela Aberta"
                        description="Blog desenvolvido em wordpress para um projeto de extensão para alunas do curso de nutrição na unifesp baixada Santista."
                        link="https://panelaaberta.unifesp.br/"
                    />
                    <Card
                        imgPath={detect}
                        stacks="React • TensorFlow • MongoDB"
                        title="Libras Detection"
                        description="Blog desenvolvido em wordpress para um projeto de extensão para alunas do curso de nutrição na unifesp baixada Santista."
                        link="https://github.com/gaamatoss/LibrasDetection"
                    />
                    <Card
                        imgPath={stopsort}
                        stacks="HTML • CSS • Bootstrap"
                        title="Stop Sort"
                        description="Blog desenvolvido em wordpress para um projeto de extensão para alunas do curso de nutrição na unifesp baixada Santista."
                        link="https://stopsort-gaamatoss.vercel.app/"
                    />
                    <Card
                        imgPath={todo}
                        stacks="HTML • CSS • Tailwind"
                        title="Just a To-Do"
                        description="Blog desenvolvido em wordpress para um projeto de extensão para alunas do curso de nutrição na unifesp baixada Santista."
                        link="https://justtodo-gaamatoss.vercel.app/"
                    />
                </section>
            </main> */}
            <main >
                <PanelGroup className="projectPanel" accordion defaultActiveKey={1} bordered>
                    <Panel header="Panela Aberta" eventKey={1} id="panel1">
                        <div className="panelContent">
                            <img src={panela} alt="" />
                            <section className="panelInfo">
                                <span className="stacks">Wordpress</span>
                                <p>Blog desenvolvido em wordpress para um projeto de extensão para alunas do curso de nutrição na unifesp baixada Santista.</p>
                                <a href=" https://panelaaberta.unifesp.br/" target="_blank"><BiLinkExternal size="30px" color="white" /></a>
                            </section>
                        </div>
                    </Panel>
                    <Panel header="Libras Detection" eventKey={2} id="panel2">
                        <div className="panelContent">
                            <img src={detect} alt="" />
                            <section className="panelInfo">
                                <span className="stacks">React • TensorFlow • MongoDB</span>
                                <p>Blog desenvolvido em wordpress para um projeto de extensão para alunas do curso de nutrição na unifesp baixada Santista.</p>
                                <a href=" https://panelaaberta.unifesp.br/" target="_blank"><BiLinkExternal size="30px" color="white" /></a>
                            </section>
                        </div>
                    </Panel>
                    <Panel header="Stop Sort" eventKey={3} id="panel3">
                        <div className="panelContent">
                            <img src={stopsort} alt="" />
                            <section className="panelInfo">
                                <span className="stacks">HTML • CSS • Bootstrap</span>
                                <p>Blog desenvolvido em wordpress para um projeto de extensão para alunas do curso de nutrição na unifesp baixada Santista.</p>
                                <a href=" https://panelaaberta.unifesp.br/" target="_blank"><BiLinkExternal size="30px" color="white" /></a>
                            </section>
                        </div>
                    </Panel>
                    <Panel header="Just a To-Do" eventKey={4} id="panel4">
                        <div className="panelContent">
                            <img src={todo} alt="" />
                            <section className="panelInfo">
                                <span className="stacks">HTML • CSS • Tailwind</span>
                                <p>Blog desenvolvido em wordpress para um projeto de extensão para alunas do curso de nutrição na unifesp baixada Santista.</p>
                                <a href=" https://panelaaberta.unifesp.br/" target="_blank"><BiLinkExternal size="30px" color="white" /></a>
                            </section>
                        </div>
                    </Panel>
                </PanelGroup>
            </main>
        </div >
    )
}