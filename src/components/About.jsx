import SectionTitle from './SectionTitle'

function About() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
            <div className='w-full md:w-6/12'>
                <SectionTitle>About Me</SectionTitle>
                <p className='text-black dark:text-gray-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nostrum quos quisquam ad alias minima sapiente unde vero voluptas magni?</p>
                <a href="mailto:samuelwachira219@gmail.com" className='mt-3 text-md md:text-lg text-gray-700 hover:text-indigo-500 dark:hover:text-indigo-500 dark:text-gray-200 underline'>samuelwachira219@gmail.com</a>
            </div>
            <img src='https://avatars.githubusercontent.com/u/105350534?s=400&u=c7ff6e1bce4f9113d125619eb28fa7520a8022e4&v=4' alt="" className='w-full md:w-6/12 rounded-lg object-cover' />
        </div>
    )
}

export default About