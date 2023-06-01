function HeroSection() {
    return (
        <div id="hero" className="flex items-center justify-center flex-col py-20">
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold">
                    Hello, My name is Samuel.
                </h1>
                <p className=" mb-3 text-gray-600 dark:text-white">
                I enjoy the process of transforming ideas into reality, and I'm
            constantly exploring and learning new web technologies to stay
            up-to-date with the latest trends. Whether it's developing a
            responsive website or crafting interactive user interfaces, I'm
            always eager to take on new challenges and deliver high-quality
            solutions.
                </p>
                <a
                    href="#works"
                    className="inline-block px-8 py-3 border border-transparent text-base md:text-md font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700"
                >
                    My Projects
                </a>
            </div>
        </div>
    );
}

export default HeroSection;
