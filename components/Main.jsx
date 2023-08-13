import slack from "/img/slack.png";
import github from "/img/github.png";

const links = [
  "twitter link",
  "kodeCamp team",
  "kodeCamp books",
  "python books",
  "background Check for Coders",
  "design Books",
];
export default function Main() {
  return (
    <main className="main_div">
      {links.map((item, idx) => {
        return (
          <div key={idx} className="link_row">
            <p>
              {item
                .split(" ")
                .map((w) =>
                  w.charAt(0) == "f"
                    ? w
                    : w.charAt(0).toUpperCase() + w.slice(1)
                )
                .join(" ")}
            </p>
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
