import RevealOnScroll from "../RevealOnScroll"

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen items-center justify-center py-20!">
      <RevealOnScroll>
      <div className="max-w-6xl!  mx-auto! px-4!">
        <h2 className='text-3xl font-bold mb-8! bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent leading-right text-center'>Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6! rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all ">
            <h3 className="text-xl font-bold mb-2!">Apple Film Group </h3>
            <p className="text-gray-400 mb-4!">Developed a custom WordPress theme using HTML, CSS, JavaScript, and Bootstrap, based on layouts from the Web Designer. Added smooth animations and transitions for a modern, dynamic interface.</p>
            <div className="flex flex-wrap gap-2" >
              {["HTML5", "CSS3", "JavaScript", "Bootstrap", "Wordpress"].map((item, index) => (
                <span key={index} className='bg-blue-500/10 text-blue-500 py-1! px-3!  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2xp_8px_rgba(59,130,246,0.1)] transition-all'>
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="https://applefilm-group.com/en/" target="_blank" className="text-blue-400 hover:text-blue-30 transition-colors my-4!">View Project →</a>
            </div>
          </div>
          <div className="p-6! rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all ">
            <h3 className="text-xl font-bold mb-2!">Yazawa Meat Hanoi</h3>
            <p className="text-gray-400 mb-4!">Built a visually rich website featuring a complex design and interactive animations, enhancing user engagement and aesthetics. Implemented responsive layouts with Bootstrap and custom JavaScript animations.</p>
            <div className="flex flex-wrap gap-2" >
              {["HTML5", "CSS3", "JavaScript", "Bootstrap"].map((item, index) => (
                <span key={index} className='bg-blue-500/10 text-blue-500 py-1! px-3!  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2xp_8px_rgba(59,130,246,0.1)] transition-all'>
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="https://yazawameat-hanoi.vn/" target="_blank" className="text-blue-400 hover:text-blue-30 transition-colors my-4!">View Project →</a>
            </div>
          </div>
          <div className="p-6! rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all ">
            <h3 className="text-xl font-bold mb-2!">ACE Ventures </h3>
            <p className="text-gray-400 mb-4!">Created a landing page from a UX/UI Designer’s layout using HTML, CSS, JavaScript, and Bootstrap. Focused on responsiveness, clean structure, and fast-loading performance.</p>
            <div className="flex flex-wrap gap-2" >
              {["HTML5", "CSS3", "JavaScript", "Bootstrap", "Wordpress"].map((item, index) => (
                <span key={index} className='bg-blue-500/10 text-blue-500 py-1! px-3!  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2xp_8px_rgba(59,130,246,0.1)] transition-all'>
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="https://www.ace-ventures.com/" target="_blank" className="text-blue-400 hover:text-blue-30 transition-colors my-4!">View Project →</a>
            </div>
          </div>
          <div className="p-6! rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all ">
            <h3 className="text-xl font-bold mb-2!">Kids Kingdom </h3>
            <p className="text-gray-400 mb-4!">Developed a responsive website using WordPress and Elementor, based on designs provided by the UX/UI Designer.
              Responsible for layout building, content management, and ensuring design consistency across all devices.</p>
            <div className="flex flex-wrap gap-2" >
              {["HTML5", "CSS3", "JavaScript", "Wordpress", "Elementor"].map((item, index) => (
                <span key={index} className='bg-blue-500/10 text-blue-500 py-1! px-3!  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2xp_8px_rgba(59,130,246,0.1)] transition-all'>
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="https://kidskingdom.ac.th/" target="_blank" className="text-blue-400 hover:text-blue-30 transition-colors my-4!">View Project →</a>
            </div>
          </div>
          <div className="p-6! rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all ">
            <h3 className="text-xl font-bold mb-2!">Web E-Commerce Demo</h3>
            <p className="text-gray-400 mb-4!">Developed a full-stack e-commerce demo project during a self-learning period to explore modern web development frameworks.
              Implemented product listing, shopping cart functionality, and database integration using Next.js, TypeScript, and Prisma, while leveraging shadcn/ui for a clean and accessible component design system.
            </p>
            <div className="flex flex-wrap gap-2" >
              {["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Node.js", "PostgreSQL", "Prisma"].map((item, index) => (
                <span key={index} className='bg-blue-500/10 text-blue-500 py-1! px-3!  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2xp_8px_rgba(59,130,246,0.1)] transition-all'>
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="https://github.com/tonzaa10/web-e-commerce-" target="_blank" className="text-blue-400 hover:text-blue-30 transition-colors my-4!">View Project →</a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}

export default Projects