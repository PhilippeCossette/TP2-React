const InlineCard = ({
  title,
  imageUrl,
  description,
  link,
  oldPrice,
  price,
}) => {
  return (
    <div className="inline-card">
      <img className="inline-card-img" src={imageUrl} alt={title} />
      <div className="inline-card-body">
        <div className="inline-card-header">
          <h5 className="inline-card-title">{title}</h5>
          <p className="inline-card-text">{description}</p>
        </div>
        <div className="inline-card-footer">
          <span className="inline-card-price">
            <del className="inline-card-old-price">{oldPrice} $</del>{" "}
            <strong>{price} $</strong>
          </span>
          <a href={link} className="btn-primary">
            Reserver
          </a>
        </div>
      </div>
    </div>
  );
};

export default InlineCard;
