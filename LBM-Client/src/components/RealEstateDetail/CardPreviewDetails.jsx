import css from "./CardPreviewDetails.module.scss";
import starICon from "../../assets/star.svg";
import heartIconMobile from "../../assets/heart--movile.svg";
import heartIconPc from "../../assets/heart--pc.svg";
import { Link } from "react-router-dom";

const CardPreviewDetails = (props) => {
  return (
    <div className={css.card}>
      <Link to={`/marketplace/${props.number}`}>
        <img src={props.image} alt="Land" className={css.landImage} />
      </Link>
      <div className={css.info}>
        <div className={css.title}>
          <h3>Bordeaux Getaway</h3>
          <p>{props.type} in Bordeaux</p>
        </div>

        <div className={css.description}>
          <p>
            {props.guests} guests · {props.type} · {props.rooms} ·{" "}
            {props.amenities}
          </p>
        </div>
        <div className={css.rating}>
          <img src={starICon} alt="" />
          <p>{props.review}</p>
          <span>({props.totalReviews} Reviews)</span>
        </div>
      </div>
      <div className={css.price}>
        <p>Min. Investment</p>
        <i>${props.price}</i>
      </div>
      <i className={css.heartIconMobile}>
        <img src={heartIconMobile} alt="heart" />
      </i>
      <i className={css.heartIconPc}>
        <img src={heartIconPc} alt="heart" />
      </i>
    </div>
  );
};

export default CardPreviewDetails;
