import React from 'react'
import { FcGraduationCap } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import RevealOnScroll from '../RevealOnScroll';

const About = () => {
  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'WordPress', 'Elementor'];
  const backendSkills = ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'MongoDB'];
  const tools = ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'];
  const softSkills = ['Problem Solving', 'Communication', 'Team Collaboration', 'Adaptability', 'Time Management'];
  return (
    <section id='about' className="min-h-screen items-center justify-center py-20!">
      <RevealOnScroll>
        <div className=" max-w-6xl! mx-auto! px-4!">
          <h2 className='text-3xl font-bold mb-8! bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent leading-right text-center'>About Me</h2>
          <div className="glass rounded-xl p-8! border-white/10 border hover:-translate-y-1 transition-all">
            <p className='text-gray-300 mb-6!'>
              My name is Ton, and I’m a Front-End Developer with more than 11 years of hands-on experience in web development. I specialize in crafting responsive websites using HTML, CSS, JavaScript, and WordPress. I enjoy turning design concepts into functional, user-friendly interfaces while maintaining clean structure, accessibility, and SEO best practices. I am always improving my skills and currently exploring modern technologies such as React, Next.js, Angular, Node.js, and Prisma to broaden my capabilities.
            </p>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6!">
              <div className="rounded-xl p-6! hover:-translate-y-1 transition-all">
                <h3 className='text-xl font-bold mb-4!'>Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((item, index) => (
                    <span key={index} className='bg-blue-500/10 text-blue-500 py-1! px-3! rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6! hover:-translate-y-1 transition-all">
                <h3 className='text-xl font-bold mb-4!'>Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((item, index) => (
                    <span key={index} className='bg-blue-500/10 text-blue-500 py-1! px-3! rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6! hover:-translate-y-1 transition-all">
                <h3 className='text-xl font-bold mb-4!'>Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((item, index) => (
                    <span key={index} className='bg-blue-500/10 text-blue-500 py-1! px-3! rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2xp_8px_rgba(59,130,246,0.2)] transition-all'>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6! hover:-translate-y-1 transition-all">
                <h3 className='text-xl font-semibold mb-4!'>Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((item, index) => (
                    <span key={index} className='bg-blue-500/10 text-blue-500 py-1! px-3! rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2xp_8px_rgba(59,130,246,0.2)] transition-all'>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8!">
              <div className='p-6! rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                <h3 className='text-xl flex items-center gap-2 '><FcGraduationCap width={10} /> Education</h3>
                <ul className='list-disc list-inside text-gray-300 space-y-2! mt-2!'>
                  <li>
                    <strong>B.Sc. Information Technology</strong> - Rajamangala University of Technology Suvarnabhumi
                  </li>
                  <li>
                    <strong>Higher Vocational Certificate, Business Computer</strong> - Samut Songkhram Technical College
                  </li>
                </ul>
              </div>
              <div className='p-6! rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                <h3 className='text-xl flex items-center gap-2 '><FcBriefcase width={10} /> Work Experience</h3>
                <div className='space-y-4! text-gray-300 mt-2!'>
                  <div>
                    <h4 className='font-semibold'>Front-End Developer at Yes Web Design Studio Co., Ltd. (Oct 2024 – Dec 2024)</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, nam.</p>
                  </div>
                  <div>
                    <h4 className='font-semibold'>Front-End Developer at AUN Thai Laboratories Co., Ltd. (Mar 2013 – May 2024)</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, nam.</p>
                  </div>
                  <div>
                    <h4 className='font-semibold'>Web Master / HTML-CSS Coder at ISSUE DESIGN CORPORATION Co., Ltd. (Aug 2009 – Jun 2012)</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, nam.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default About