const About = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container max-1200">
        {/* Titre */}
        <h1 className="mb-4 text-center fw-bold">À propos de Voyago</h1>
        <p className="lead text-center text-muted mb-5">
          Explorez le monde avec nos voyages uniques et nos expériences
          personnalisées.
        </p>

        {/* Section Notre Mission */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <h3 className="fw-bold mb-3">Notre mission</h3>
            <p>
              Chez Voyago, notre mission est de rendre chaque voyage
              exceptionnel. Nous voulons que chaque client découvre de nouvelles
              cultures, vive des aventures inoubliables et se crée des souvenirs
              qui dureront toute la vie. Nous croyons que le voyage est plus
              qu'une destination – c'est une expérience.
            </p>
          </div>
        </div>

        {/* Section Nos Services */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <h3 className="fw-bold mb-3">Nos services</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                • Forfaits vacances tout compris adaptés à vos besoins
              </li>
              <li className="mb-2">
                • Excursions et circuits culturels uniques
              </li>
              <li className="mb-2">
                • Conseils personnalisés par des experts du voyage
              </li>
              <li className="mb-2">
                • Assistance avant et pendant votre voyage
              </li>
            </ul>
          </div>
        </div>

        {/* Section Pourquoi nous choisir */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h3 className="fw-bold mb-3">Pourquoi nous choisir ?</h3>
            <p className="mb-4">
              Nous mettons un point d'honneur à fournir un service de qualité,
              une attention personnelle et une connaissance approfondie des
              destinations. Nos clients apprécient notre approche transparente,
              notre professionnalisme et notre passion pour le voyage.
            </p>
            <p>
              Que vous soyez un voyageur solo, en famille ou en groupe, nous
              avons des solutions adaptées pour tous. Avec Voyago, vous pouvez
              partir l’esprit tranquille et profiter pleinement de chaque
              moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
