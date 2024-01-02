const Bio = () => {
    return (
        <div className="flex justify-start w-1/2">
            <div>
                <h1 className="text-5xl mb-10">Welcome!</h1>
                <div className="border-l-4 border-gray-700 hover:border-bordergreen transition-all duration-300 rounded-lg p-3">
                    <p className="mb-5">My name is Martín García Hervás, I'm a Full Stack Developer with over 3 years of experience in logistics and construction.</p>
                    <p className="mb-5">Specialized in Front-end and Back-end development. Proficient in agile methodologies, GIT, data
                        structures, algorithms, and CSS frameworks, with a strong emphasis on JavaScript, React, Redux,
                        Express, Node, PostgreSQL, and Sequelize.</p>
                    <p>I have worked on projects involving design and
                        development in both Front End and Back End using these technologies.
                        My Soft-Skills include strong organizational ability, teamwork, and leadership.</p>
                </div>
            </div>
        </div>
    )
}

export default Bio