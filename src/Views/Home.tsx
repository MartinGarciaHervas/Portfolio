import Bio from "../components/Bio"

const Home = () => {
    return (
        <div className="flex justify-center lg:p-7 lg:w-3/4 lg:h-3/4 pt-4 border-t-4 border-r-4 border-bordergreen hover:border-gray-700 transition-all duration-300 rounded-xl">
            <Bio />
        </div>
    )
}

export default Home