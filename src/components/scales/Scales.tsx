import Scale from "../scale/Scale";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import "./styles.modules.css";

const Scales = () => {
  return (
    <div className="scales">
      <Scale img={img1} />
      <Scale img={img2} />
    </div>
  );
};

export default Scales;
