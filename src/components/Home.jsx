import HeroSlider from "./HeroSlider";
import InlineCard from "./InlineCard";
import Testimonial from "./Testimonial";
import Card from "./Card";

const Home = () => {
  return (
    <main>
      <HeroSlider />
      <section className="max-1200 mx-auto px-4 py-5">
        <h2 className="text-start">Destinations Populaires</h2>
        <a
          href="#"
          className="mb-3 d-block text-muted text-decoration-none text-start"
        >
          Voir tout <i className="bi bi-arrow-right"></i>
        </a>
        <div className="row">
          {/* Ligne 1 */}
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <Card
              title="Paris"
              imageUrl="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80"
              description="La ville lumière vous attend avec son art, sa culture et son romantisme."
              link="#"
              price="1200"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <Card
              title="New York"
              imageUrl="https://images.unsplash.com/photo-1602828889956-45ec6cee6758?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="La ville qui ne dort jamais vous attend."
              link="#"
              price="1500"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <Card
              title="Tokyo"
              imageUrl="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Découvrez la culture vibrante et la technologie de la capitale japonaise."
              link="#"
              price="1800"
            />
          </div>

          {/* Ligne 2 */}
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <Card
              title="Londres"
              imageUrl="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="La capitale de l’Angleterre est incontournable pour les passionnés d’histoire."
              link="#"
              price="1600"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <Card
              title="Sydney"
              imageUrl="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="La ville portuaire est célèbre pour son magnifique Opéra de Sydney."
              link="#"
              price="1700"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <Card
              title="Le Cap"
              imageUrl="https://images.unsplash.com/photo-1581596326248-f55ac7852760?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="La ville mère est réputée pour ses paysages magnifiques et sa culture vibrante."
              link="#"
              price="1900"
            />
          </div>
        </div>
      </section>
      <section className="max-1200 mx-auto px-4 py-5">
        <h2 className="text-start">Offres Spéciales</h2>
        <a
          href="#"
          className="mb-3 d-block text-muted text-decoration-none text-start"
        >
          Voir tout <i className="bi bi-arrow-right"></i>
        </a>
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <InlineCard
              title="Îles Canaries"
              imageUrl="https://images.unsplash.com/photo-1594401708939-49f49fdf596a?q=80&w=1275&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Profitez du soleil d’hiver ! Offre spéciale pour escapade plage à prix réduit."
              link="#"
              oldPrice="1500"
              price="999"
            />
          </div>
          <div className="col-12 col-md-6">
            <InlineCard
              title="Rome"
              imageUrl="https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Plongée culturelle réduite. Visitez le Colisée, la Cité du Vatican et plus encore."
              link="#"
              oldPrice="1300"
              price="899"
            />
          </div>
          <div className="col-12 col-md-6">
            <InlineCard
              title="Croatie & Dalmatie"
              imageUrl="https://images.unsplash.com/photo-1575540291670-8d3b26f7d327?q=80&w=1239&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Croisière en Adriatique – promotion de printemps, -30%."
              link="#"
              oldPrice="1800"
              price="1250"
            />
          </div>
          <div className="col-12 col-md-6">
            <InlineCard
              title="Bali"
              imageUrl="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Séjour de rêve dans les rizières et plages. Réduction « early bird »."
              link="#"
              oldPrice="2200"
              price="1750"
            />
          </div>
        </div>
      </section>

      <section className="max-1200 mx-auto px-4 py-5">
        <div className="testimonial-container row">
          <div className="col-6 col-md-3">
            <Testimonial
              quote="This was the best trip I’ve ever taken! Everything was perfectly organized — from the airport transfers to the local tours. I didn’t have to worry about a single thing. Highly recommend this agency for anyone who wants a stress-free vacation!"
              author="Lucas T"
              rating={4.5}
            />
          </div>
          <div className="col-6 col-md-3">
            <Testimonial
              quote="Our honeymoon in Bali was absolutely magical. The itinerary was thoughtful and included a great mix of relaxation and adventure. The only thing I’d change is having one more free day, but overall, it was fantastic!"
              author="Jean Dupont"
              rating={5}
            />
          </div>
          <div className="col-6 col-md-3">
            <Testimonial
              quote="The guides were amazing and super knowledgeable. I learned so much about local culture and hidden gems that I would’ve missed traveling alone. You can tell this agency really cares about providing authentic experiences."
              author="Olivia C"
              rating={5}
            />
          </div>
          <div className="col-6 col-md-3">
            <Testimonial
              quote="Great value for the price! The hotels were clean, the transportation was punctual, and the customer service was quick to respond whenever I had questions. Definitely booking again next year."
              author="Daniel K"
              rating={5}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
