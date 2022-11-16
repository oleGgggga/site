import Card from "../components/Card";
import {info} from "../assets/data"
const Css = () => {
  const cssInfo = info[1].cssInfo;
  
  return (
    <div className="pagesInfo">
      <Card {...cssInfo} />
    </div>
  )
};

export default Css;
