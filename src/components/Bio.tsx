import { useState } from "react"
import Projects from "./Projects"
import db from '../utils/db.json'
import SocialMedia from "./SocialMedia";

import html5 from '../../public/Logos/DeviconHtml5.svg'
import css3 from '../../public/Logos/DeviconCss3.svg'
import git from '../../public/Logos/LogosGitIcon.svg'
import js from '../../public/Logos/SkillIconsJavascript.svg'
import ts from '../../public/Logos/SkillIconsTypescript.svg'
import rt from '../../public/Logos/LogosReact.svg'
import rx from '../../public/Logos/LogosRedux.svg'
import nd from '../../public/Logos/LogosNodejsIcon.svg'
import ex from '../../public/Logos/SkillIconsExpressjsLight.svg'
import psql from '../../public/Logos/LogosPostgresql.svg'
import sql from '../../public/Logos/DeviconSequelize.svg'
import i18next from '../../public/Logos/SimpleIconsI18next.svg'
import tw from '../../public/Logos/VscodeIconsFileTypeTailwind.svg'

interface Logos {
    [key:string]:string
    html5:string
    css3:string
    git:string
    js:string
    ts:string
    rt:string
    rx:string
    nd:string
    ex:string
    tw:string
    psql:string
    sql:string
    i18next:string
}

const Bio = () => {

    const [info, setInfo] = useState("Bio");

    const logos:Logos = {html5, css3, git, js, ts, rt, rx, nd, ex, tw, psql, sql, i18next}

    const infoHandler = (proyecto: string): void => {
        setInfo(proyecto)
    }

    return (
        <div className="flex flex-col w-full justify-start lg:justify-center">
            <SocialMedia infoSelect={infoHandler}/>
            <div className="flex flex-col ml-2 lg:m-0 lg:flex-row justify-between h-full lg:h-3/4">
                <div className="lg:w-1/2">
                    <h1 className="text-5xl lg:text-8xl mb-10">{info === 'Bio' ? db.Bio.title.en : info}</h1>
                    <div className="border-l-4 border-gray-700 hover:border-bordergreen transition-all duration-300 rounded-lg p-3">
                        {info === 'Bio' ? db.Bio.desc.en : db.Projects.map((project, i)=> {
                            if (project.title === info) {
                                return (
                                    <div key={i}>
                                    <p>{project.desc.en}</p>
                                    <div className="flex flex-between mt-2">
                                        {project.technologies.map((tech, i )=> { 
                                                return <img className="w-5 mr-2" key={i} src={logos[tech]} />
                                        } )}
                                    </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div>
                        {db.Projects.map((project, i) => {
                            if(project.title === info){
                                return(
                                    <div key={i} className="flex justify-around">
                                    <a href={project.url} target="_blank"><p className="border-b-4 rounded-s border-gray-700 hover:border-bordergreen transition-all duration-300">Check the code</p></a>
                                    {project.pageUrl && <a href={project.pageUrl} target="_blank"><p className="border-b-4 rounded-s border-gray-700 hover:border-bordergreen transition-all duration-300">Take a look</p></a>}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className="flex lg:w-1/2 lg:h-full lg:justify-center lg:items-center">
                    <Projects infoSelect={infoHandler} />
                </div>
            </div>
        </div>
    )
}

export default Bio