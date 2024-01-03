import Bio from "../components/Bio"
import Projects from "../components/Projects"
import SocialMedia from "../components/SocialMedia"

const Home = () => {
    return (
        <div className="flex flex-col justify-center lg:p-7 lg:w-3/4 lg:h-3/4 pt-4 border-t-4 border-r-4 border-bordergreen hover:border-gray-700 transition-all duration-300 rounded-xl">
            <SocialMedia />
            <div className="flex flex-col lg:flex-row items-start ml-5">
                <Bio />
                <Projects />
            </div>
        </div>
    )
}

export default Home