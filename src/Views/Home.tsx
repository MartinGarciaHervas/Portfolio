import Bio from "../components/Bio"

import github from '../assets/MdiGithub.svg'
import linkedin from '../assets/MdiLinkedin.svg'
import gmail from '../assets/CibGmail (1).svg'

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-end">
                <div>
                    <a href="https://github.com/MartinGarciaHervas" target="_blank">
                        <img
                            src={github}
                            alt="github"
                            className="w-10"
                        />
                    </a>
                </div>
                <div>
                    <a href="https://linkedin.com/in/martin-garcia-hervas-07846a281" target="_blank">
                        <img
                            src={linkedin}
                            alt="linkedin"
                            className="w-10"
                        />
                    </a>
                </div>
                <div>
                    <a href={`mailto:ghervasmartin@gmail.com`} target="_blank">
                        <img
                            src={gmail}
                            alt="gmail"
                            className="w-10"
                        />
                    </a>
                </div>
            </div>
            <h1>Welcome!</h1>
            <Bio />
        </div>
    )
}

export default Home