function HeroSection() {
    return (
        <div id="hero" className="flex items-center justify-center flex-col py-20">
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold">
                    Hello, My name is Samuel.
                </h1>
                <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
                    similique!
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
