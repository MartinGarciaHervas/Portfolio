import Projects from "./Projects"

const Bio = () => {

    

    return (
        <div className="flex flex-col items-start lg:flex-row">
            <div className="lg:w-1/2">
                <h1 className="text-5xl lg:text-8xl mb-10">Welcome!</h1>
                <div className="border-l-4 border-gray-700 hover:border-bordergreen transition-all duration-300 rounded-lg p-3">
                    <p className="mb-5">My name is Martín García Hervás, I'm a Full Stack Developer, with background experience of over 3 years in logistics and construction. I have worked on projects involving design and
                        development in both Front End and Back End.</p>
                    <p>My Soft-Skills include strong organizational ability, teamwork, and leadership.</p>
                </div>
            </div>
            <div className="flex lg:w-1/2 lg:h-full lg:justify-center lg:items-center">
                <Projects/>
            </div>
        </div>
    )
}

export default Bio