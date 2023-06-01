function Footer() {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-200 rounded-t-lg">
        <a href="#hero" className="block text-xl md:text-2xl font-semibold">Samuel Wachira</a>
        <a href="mailto:samuelwachira219@gmail.com" className=" text-sm md:text-md hover:text-indigo-500">samuelwachira219@gmail.com</a>
        <p className="text-xsr mt-2 text-gray-500">
            &copy; Samuel Wachira. {new Date().getFullYear()} All rights reserved.
        </p>
    </div>
  )
}

export default Footer