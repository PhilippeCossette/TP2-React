const Testimonial = ({ quote, author, rating }) => {
  const stars = [];


  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0; 

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
  }

  if (hasHalfStar) {
    stars.push(<i key="half" className="bi bi-star-half text-warning"></i>);
  }
  return (
    <div className="testimonial">
      <p className="testimonial-quote">"{quote}"</p>
      <div className="rating">{stars}</div>
      <p>- {author}</p>
    </div>
  );
};

export default Testimonial;
