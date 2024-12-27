import "../MyWork/MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "./../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
export default function MyWork() {
  return (
    <div className="mywork">
      <div className="work-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern}></img>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, idx) => {
          return <img key={idx} src={work.w_img}></img>;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon}></img>
      </div>
    </div>
  );
}
