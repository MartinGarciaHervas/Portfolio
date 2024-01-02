import Bio from "../components/Bio"
import Projects from "../components/Projects"
import SocialMedia from "../components/SocialMedia"

const Home = () => {
    return (
        <div className="flex flex-col w-3/4 h-1/2 mt-1/4">
            <SocialMedia />
            <div className="flex">
                <Bio />
                <Projects />
            </div>
        </div>
    )
}

export default Home