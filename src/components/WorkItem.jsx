/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
function WorkItem({ imgUrl, title, tech, workUrl}) {
  return (
    <a href={workUrl} target="_blank" rel="noreferrer" className="bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden gap-2">
        <img src={imgUrl} alt={title} className="w-full h-36 md:h-48 object-cover"/>
        <div className="text-black p-5 w-full dark:text-gray-300">
            <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
            <p>
                {tech.map((item) => (
                    <span key={item} className="text-sm md:text-base bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md mr-2">{item}</span>
                ))}
            </p>
        </div>
    </a>
  )
}

export default WorkItem