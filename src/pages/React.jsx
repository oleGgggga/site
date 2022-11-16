import Card from "../components/Card";
import {info} from "../assets/data"


const react = () => {
  
  const reactInfo = info[2].reactInfo
    return (
    <div className="pagesInfo">
      <Card {...reactInfo} />
    </div>
  )
};

export default react;
