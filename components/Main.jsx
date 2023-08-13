import slack from "/img/slack.png";
import github from "/img/github.png";

const links = [
  "twitter link",
  "kodeCamp team",
  "kodeCamp books",
  "python books",
  "Background Check for Coders",
  "Design Books",
];
export default function Main() {
  return (
    <main className="main_div">
      {links.map((item, idx) => {
        return (
          <div key={idx} className="link_row">
            <p>{item}</p>
          </div>
        );
      })}

      <div className="link_row socials">
        <img src={slack} className="" alt="slack" />
        <img src={github} className="" alt="github" />
      </div>
    </main>
  );
}
