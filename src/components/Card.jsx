const Card = ({ title, imageUrl, description, price, link }) => {
    return (
      <div className="card h-100">
        <img src={imageUrl} className="card-img-top" alt="Card Image" />
        <div className="card-body d-flex flex-column justify-content-between align-items-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="price">
            <strong>À partir de</strong> {price}$
          </p>
          <a href={link} className="btn-primary">
            Reserver
          </a>
        </div>
      </div>
    );
};

export default Card;    