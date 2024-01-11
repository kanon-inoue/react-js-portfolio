import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section"
    id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">
          My Expertise</h2>
      </div>
      <div className="skills--secion--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}