import profilePics from "/img/profile_img.png";
import shareButton_M from "/img/Avatar_share_button_M.png";
import shareButton_D from "/img/Avatar_share_button_D.png";

export default function Header() {
  return (
    <header className="profile">
      {/* src= "./img/profile_img.png" */}
      <img src={shareButton_M} className="shareBtn_M" alt="" />
      <img src={shareButton_D} className="shareBtn_D" alt="" />
      <img src={profilePics} className="" alt="profile pics" />
      <h2>John Doe</h2>
    </header>
  );
}
