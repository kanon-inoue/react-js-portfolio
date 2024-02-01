import { motion, useScroll } from "framer-motion";
export default function HeroSection () {
  const { scrollYProgress } = useScroll();
  return ( 
    <motion.section 
      id="heroSection" 
      className="hero--section" 
      style={{ scaleX: scrollYProgress }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Kanon Inoue</p>
            <h1 className="hero--section--title">
              <span className="hero--section--title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section--description">
            I'm studying Computer Science at the Queensland University of Technology. I expect to graduate in August 2024. 
            <br /> I’m looking for an internship, graduate program, part time position, or entry level full time position related to my study.
            <br /> I am a Japanese person, so I speak Japanese as my native language.
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/topPic.png" alt="Hero Section" />
        </div>
      </motion.section>
  );
}