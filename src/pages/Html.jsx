import Card from "../components/Card";
import {info} from "../assets/data"

const Html = () => {
  
  const htmlInfo = info[0].htmlInfo;

  
  return (
    <div className="pagesInfo">
      <Card {...htmlInfo} />
    </div>
  );
};

export default Html;