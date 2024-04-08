import {
  Hero,
  PopularProducts,
  SpecialOffer,
  Footer,
  SuperQuality,
  Subscribe,
  Services,
  CustomerReviews,
} from "./sections";
import Nav from "./components/Nav";
import HamburgerMenu from "./components/HamburgerMenu";
import { useState } from "react";

const App = () => {
  const [hamMenu, setHamMenu] = useState(false);

  const openHamMenu = () => setHamMenu(true);

  const closeHamMenu = () => setHamMenu(false);

  hamMenu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");

  return (
    <main className="relative">
      <Nav openHamMenu={openHamMenu} />
      <section className="">
        {hamMenu && <HamburgerMenu closeHamMenu={closeHamMenu} />}
      </section>

      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
