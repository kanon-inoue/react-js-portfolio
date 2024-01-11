export default function HeroSection () {
  return ( 
    <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Kanon</p>
            <h1 className="hero--section--title">
              <span className="hero--section--title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/image1.jpeg" alt="Hero Section" />
        </div>
      </section>
  );
}