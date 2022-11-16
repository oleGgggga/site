const Card = ({img,header,desc}) => {
  return (
    <div className="card" style={{ maxWidth: 900 }}>
    <div className="row">
      <div className="imgRow">
        <img src={img} className="img-fluid" alt="..." />
      </div>
      <div className="card-body">
          <h5 className="card-title">{header}</h5>
          <p className="card-text">{desc}</p>
      </div>
    </div>
  </div>
  );
};

export default Card;
