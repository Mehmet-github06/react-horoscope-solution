import { data } from "../../helper/data.js";

const Card = () => {
  return (
    <div className="cards">
      {data.map(({ id, title, date, desc, image }) => (
        <div className="card" key={id}>
          <img src={image} alt="" />
          <div>
            <h2>{title}</h2>
          </div>
          <div>
            <p className="date">{date}</p>
          </div>
          <div>
            <p className="desc">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
