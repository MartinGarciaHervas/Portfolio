import { useState } from "react"
import Projects from "./Projects"
import dbs from '../utils/db.json'
import SocialMedia from "./SocialMedia";

const db:Db = dbs

import html5 from '../assets/Logos/DeviconHtml5.svg'
import css3 from '../assets/Logos/DeviconCss3.svg'
import git from '../assets/Logos/LogosGitIcon.svg'
import js from '../assets/Logos/SkillIconsJavascript.svg'
import ts from '../assets/Logos/SkillIconsTypescript.svg'
import rt from '../assets/Logos/LogosReact.svg'
import rx from '../assets/Logos/LogosRedux.svg'
import nd from '../assets/Logos/LogosNodejsIcon.svg'
import ex from '../assets/Logos/SkillIconsExpressjsLight.svg'
import psql from '../assets/Logos/LogosPostgresql.svg'
import sql from '../assets/Logos/DeviconSequelize.svg'
import i18next from '../assets/Logos/SimpleIconsI18next.svg'
import tw from '../assets/Logos/VscodeIconsFileTypeTailwind.svg'

import { type Logos, type Db } from '../types'

const Info = () => {

    const [info, setInfo] = useState("Bio");

    const [language, setLanguage] = useState('en')

    const logos: Logos = { html5, css3, git, js, ts, rt, rx, nd, ex, tw, psql, sql, i18next }

    const infoHandler = (proyecto: string): void => {
        setInfo(proyecto)
    }

    const languageHandler = ():void => {
        language === 'en'? setLanguage('es'):setLanguage('en')
    }

    return (
        <div className="flex flex-col w-full justify-start lg:justify-center">
            <SocialMedia infoSelect={infoHandler} languageInfo={languageHandler} />
            <div className="flex flex-col ml-2 lg:m-0 lg:flex-row justify-between h-full lg:h-3/4">
                <div className="lg:w-1/2">
                    <h1 className="text-5xl lg:text-8xl mb-10">{info === 'Bio' ? db.Bio.title.en : info}</h1>
                    <div className="border-l-4 border-gray-700 hover:border-bordergreen transition-all duration-300 rounded-lg p-3">
                        {info === 'Bio' ? db.Bio.desc[language] : db.Projects.map((project, i) => {
                            if (project.title === info) {
                                return (
                                    <div key={i}>
                                        <p>{project.desc[language]}</p>
                                        <div className="flex flex-between mt-2">
                                            {project.technologies.map((tech, i) => {
                                                return <img className="w-5 mr-2" key={i} src={logos[tech]} />
                                            })}
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div>
                        {db.Projects.map((project, i) => {
                            if (project.title === info) {
                                return (
                                    <div key={i} className="flex justify-around">
                                        <a href={project.url} target="_blank">
                                            <p className="border-b-4 rounded-s border-gray-700 hover:border-bordergreen transition-all duration-300">Check the code</p>
                                        </a>
                                        {project.pageUrl &&
                                            <a href={project.pageUrl} target="_blank">
                                                <p className="border-b-4 rounded-s border-gray-700 hover:border-bordergreen transition-all duration-300">Take a look</p>
                                            </a>}
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

export default Info