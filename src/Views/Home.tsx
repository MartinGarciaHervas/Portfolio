import Bio from "../components/Bio"

import github from '../assets/MdiGithub.svg'
import linkedin from '../assets/MdiLinkedin.svg'
import gmail from '../assets/CibGmail (1).svg'

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-end">
                <div>
                    <img
                        src={github}
                        alt="github"
                        className="w-10"
                    />
                </div>
                <div>
                    <img
                        src={linkedin}
                        alt="linkedin"
                        className="w-10"
                    />
                </div>
                <div>
                    <img
                        src={gmail}
                        alt="gmail"
                        className="w-10"
                    />
                </div>
            </div>
            <h1>Welcome!</h1>
            <Bio />
        </div>
    )
}

export default Home