import Bio from "../components/Bio"
import Projects from "../components/Projects"
import SocialMedia from "../components/SocialMedia"

const Home = () => {
    return (
        <div className="flex flex-col justify-center p-7 w-3/4 h-3/4 border-r-4 border-bordergreen hover:border-gray-700 transition-all duration-300 rounded-xl">
            <SocialMedia />
            <div className="flex">
                <Bio />
                <Projects />
            </div>
        </div>
    )
}

export default Home