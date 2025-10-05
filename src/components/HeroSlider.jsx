const HeroSlider = () => {
    return (
      <section>
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1474&auto=format&fit=crop"
                className="carousel-image"
                alt="Slide 1"
              />
              <div className="carousel-caption ">
                <h1 className="hero__title">Explore the World with Voyago</h1>
                <p className="hero__subtitle">Your Adventure Awaits</p>
                <a href="#packages" className="btn-primary hero__btn">
                  Discover Packages
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1474&auto=format&fit=crop"
                className="carousel-image"
                alt="Slide 2"
              />
              <div className="carousel-caption">
                <h1 className="hero__title">Adventure Awaits</h1>
                <p className="hero__subtitle">Discover Exotic Destinations</p>
                <a href="#packages" className="btn-primary hero__btn">
                  Explore Now
                </a>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1474&auto=format&fit=crop"
                className="carousel-image"
                alt="Slide 3"
              />
              <div className="carousel-caption">
                <h1 className="hero__title">Travel Beyond</h1>
                <p className="hero__subtitle">Your Journey Starts Here</p>
                <a href="#packages" className="btn-primary hero__btn">
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev z-3"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next z-3"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      
    );
}

export default HeroSlider;