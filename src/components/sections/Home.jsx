import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <RevealOnScroll>
        <div className="text-center z-10 px-4! flex flex-col gap-10 ">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right letter-spacing-wide">
            Hi, I'm Ton Wittay.i{" "}
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-3xl! mx-auto!">
            Front-End Developer with 11+ years of experience creating
            responsive, SEO-optimized, and user-centered websites using HTML,
            CSS, and JavaScript. Skilled in WordPress, Elementor, and modern
            frameworks like React, Next.js, and Tailwind CSS, with a growing
            focus on full-stack development using Node.js, Express, and
            PostgreSQL. Known for attention to detail, strong collaboration with
            design and backend teams, and delivering high-performance web
            interfaces across devices.
          </p>
          <div className="flex justify-center space-x-4!">
            <a href="/portfolio/docs/CV_Wittaya_Imlukin_Ton_EN.pdf"  target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-3! px-6! rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px _rgba(59,130,246, 0.4)]">Download CV</a>
            <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3! px-6! rounded font-medium transition-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px _rgba(59,130,246, 0.2)] hover:bg-blue-500/10 ">Contact Me</a>
          </div>
        </div>
        </RevealOnScroll>
      </section>
    </>
  );
};

export default Home;
