import Bio from "../components/Bio"
import SocialMedia from "../components/SocialMedia"

const Home = () => {
    return (
        <div className="flex flex-col">
            <SocialMedia />
            <Bio />
        </div>
    )
}

export default Home