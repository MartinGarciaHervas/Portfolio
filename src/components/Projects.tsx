import db from '../utils/db.json'

interface Props {
    infoSelect: (proyecto:string)=>void
}

const Projects: React.FC<Props> = ({infoSelect}) => {
    return (
        <div className="flex flex-col lg:items-center mt-20 lg:mt-0 lg:w-1/2">
            <div>
                <h1 className="text-4xl mb-10">My Projects</h1>
                <div className="flex flex-col border-l-4 border-t-4 border-gray-700 hover:border-bordergreen transition-all duration-300 rounded-lg p-3">
                    {db.Projects.map((project, index) => (
                        <button onClick={()=>{infoSelect(project.title)}} key={index}>{project.title}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects