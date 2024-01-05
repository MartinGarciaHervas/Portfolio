import github from '../assets/MdiGithub.svg'
import linkedin from '../assets/MdiLinkedin.svg'
import gmail from '../assets/CibGmail (1).svg'
import logo from '../../public/logo white.svg'
import spain from '../assets/TwemojiFlagSpain.svg'
import UK from '../assets/TwemojiFlagUnitedKingdom.svg'

interface Props {
    infoSelect: (proyecto:string)=>void
    languageInfo: ()=>void
}

const SocialMedia:React.FC<Props> = ({infoSelect, languageInfo}) => {
    return (
        <div className='flex justify-between mt-2 mb-6 w-full'>
            <div className='rounded-full pt-1 pr-1 hover:bg-bordergreen transition-all duration-300'>
                <button onClick={()=>{infoSelect('Bio')}} className='pl-2 pr-2'><img className='w-16' src={logo}/></button>
            </div>
            <div className='flex'>
                <div className="w-9 h-6 mr-5">
                    <a href={`mailto:ghervasmartin@gmail.com`} target="_blank">
                        <img
                            src={gmail}
                            alt="gmail"
                            className="w-8 hover:w-9 transition-all duration-300"
                        />
                    </a>
                </div>
                <div className="w-9 h-6 mr-4">
                    <a href="https://github.com/MartinGarciaHervas" target="_blank">
                        <img
                            src={github}
                            alt="github"
                            className="w-8 hover:w-9 transition-all duration-300"
                        />
                    </a>
                </div>
                <div className="w-9 h-6 mr-4">
                    <a href="https://linkedin.com/in/martin-garcia-hervas-07846a281" target="_blank">
                        <img
                            src={linkedin}
                            alt="linkedin"
                            className="w-8 hover:w-9 transition-all duration-300"
                        />
                    </a>
                </div>
                <div>
                    <button onClick={()=>{languageInfo()}}><div className='flex justify-between items-center h-7 w-20 m-0.5'><img className='w-7 hover:w-9 transition-all duration-300' src={spain}/><img className='w-7 hover:w-9 transition-all duration-300' src={UK}/></div></button>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia