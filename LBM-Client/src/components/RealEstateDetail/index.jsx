import css from "./index.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import db from "../RealEstates/fakedb/db.json";
import heartMobile from "../../assets/heart--movile.svg";
import shareIcon from "../../assets/share.svg";
import backIcon from "../../assets/vector.svg";
import starIcon from "../../assets/star.svg";
import avatar from "../../assets/avatar.svg";
import right from "../../assets/right.svg";
import sharePC from "../../assets/share--pc.svg";
import save from "../../assets/save.svg";
import showAll from "../../assets/showAll.svg";
import ModalFilter from "../MarketPlace/ModalFilter/ModalFilter.jsx";
import CardPreview from "./CardPreviewDetails.jsx";
import Footer from "../RealEstates/Footer/Footer.jsx";

const Index = () => {
  const navigate = useNavigate();
  const number = useParams();
  const land = db.find((item) => item.number === number.id);

  return (
    <div className={css.details}>
      <img src={land.image} alt="Land" className={css.detailsImage} />
      <div className={css.navMobile}>
        <img
          src={backIcon}
          alt="back icon"
          onClick={() => navigate("/realestate")}
        />
        <div className={css.navMobileItems}>
          <div>
            <img src={shareIcon} alt="Share" />
            <p>Share</p>
          </div>
          <div>
            <img src={heartMobile} alt="Heart" />
            <p>Like</p>
          </div>
        </div>
      </div>

      <header className={css.header}>
        <h2>Bordeaux Getaway</h2>
        <div className={css.headerText}>
          <p>Bordeaux, Dubai</p>
          <i>
            <b>{land.review}</b>
            <img src={starIcon} alt="Star" />
          </i>

          <div className={css.headerBtns}>
            <img src={sharePC} alt="share" />
            <img src={save} alt="save" />
          </div>
        </div>
        <img src={avatar} alt="Person" className={css.avatar} />
      </header>

      <section className={css.mosaic}>
        <img src={land.image} alt="" />
        <div className={css.otherImages}>
          <img src={land.image} alt="Land" />
          <img src={land.image} alt="Land" />
          <img src={land.image} alt="Land" />
          <img src={land.image} alt="Land" />
        </div>
          <img src={showAll} alt="btn" className={css.showAll} />
      </section>

      <div className={css.info}>
        <h2>Entire rental unit hosted by Ghazal</h2>
        <div className={css.features}>
          <p>
            {land.guests} guests · {land.rooms}
          </p>
        </div>
        <p className={css.description}>
          Come and stay in this superb duplex T2, in the heart of the historic
          center of Bordeaux. Spacious and bright, in a real Bordeaux building
          in exposed stone, you will enjoy all the charms of the city thanks to
          its ideal location. Close to many shops, bars and restaurants, you can
          access the apartment by tram A and C and bus routes 27 and 44. <br />{" "}
          ...
        </p>
        <p className={css.showMore}>
          Show more <img src={right} alt="right" />
        </p>
      </div>

      <div className={css.filtersContainer}>
        <h2>Tokenization Part</h2>
        <div className={css.filters}>
          <div className={css.filtersSelect}>
            <select>
              <option hidden value="">
                Status
              </option>
              <option className={css.option}>Buy now</option>
              <option>Not for sale</option>
            </select>
          </div>
          <ModalFilter />
        </div>
      </div>
      <section className={css.relatedLands}>
        {db.length
          ? db.map((land) => (
              <CardPreview
                image={land.image}
                key={land.number}
                number={land.number}
                price={land.price}
                review={land.review}
                totalReviews={land.totalreviews}
                amenities={land.amenities}
                rooms={land.rooms}
                guests={land.guests}
                type={land.type}
              />
            ))
          : null}
      </section>

      <Footer />
    </div>
  );
};

export default Index;
