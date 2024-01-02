import github from '../assets/MdiGithub.svg'
import linkedin from '../assets/MdiLinkedin.svg'
import gmail from '../assets/CibGmail (1).svg'

const SocialMedia = () => {
    return (
        <div className="flex justify-end">
                <div className="w-9 h-6 mr-1">
                    <a href={`mailto:ghervasmartin@gmail.com`} target="_blank">
                        <img
                            src={gmail}
                            alt="gmail"
                            className="w-8 hover:w-9 transition-all duration-500"
                        />
                    </a>
                </div>
                <div className="w-9 h-6">
                    <a href="https://github.com/MartinGarciaHervas" target="_blank">
                        <img
                            src={github}
                            alt="github"
                            className="w-8 hover:w-9 transition-all duration-500"
                        />
                    </a>
                </div>
                <div className="w-9 h-6">
                    <a href="https://linkedin.com/in/martin-garcia-hervas-07846a281" target="_blank">
                        <img
                            src={linkedin}
                            alt="linkedin"
                            className="w-8 hover:w-9 transition-all duration-500"
                        />
                    </a>
                </div>
            </div>
    )
}

export default SocialMedia