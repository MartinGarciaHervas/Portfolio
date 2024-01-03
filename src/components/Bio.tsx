import { useState } from "react"
import Projects from "./Projects"
import db from '../utils/db.json'

const Bio = () => {

    const [info, setInfo] = useState("Bio");

    const infoHandler = (proyecto:string):void => {
        setInfo(proyecto)
    }

    return (
        <div className="flex flex-col items-start lg:flex-row">
            <div className="lg:w-1/2">
                <h1 className="text-5xl lg:text-8xl mb-10">{info === 'Bio' ? db.Bio.title.en : info}</h1>
                <div className="border-l-4 border-gray-700 hover:border-bordergreen transition-all duration-300 rounded-lg p-3">
                    {info === 'Bio' ? db.Bio.desc.en : db.Projects.map(project => {
                        if (project.title === info) {
                            return (
                                <p>{project.desc.en}</p>
                            )
                        }
                    })}
                </div>
            </div>
            <div className="flex lg:w-1/2 lg:h-full lg:justify-center lg:items-center">
                <Projects infoSelect={infoHandler}/>
            </div>
        </div>
    )
}

export default Bio