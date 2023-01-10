import React from "react";
import variables from "../../src/components/SideBar/SideBar.module.scss";
import { useDispatch } from "react-redux";
import { setSelectedIcon } from "../../redux/reducer";

function OrdersIcon({ selected }) {
  const dispatch = useDispatch();
  var color1 = variables.color1;
  var color2 = variables.color2;
  selected ? ((color1 = variables.color3), (color2 = variables.color4)) : null;
  return (
    <div>
      <svg
        width="12"
        height="19"
        viewBox="0 0 12 19"
        fill=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.64644 9.34354L6 9.6971L6.35355 9.34354L9.10355 6.59354L9.45775 6.23935L9.10291 5.88579L6.35291 3.1458L6 2.79417L5.64709 3.1458L2.89709 5.88579L2.54225 6.23935L2.89644 6.59354L5.64644 9.34354ZM2.94436 1.66691C3.84883 1.06256 4.9122 0.73999 6 0.73999C7.45869 0.73999 8.85764 1.31946 9.88909 2.35091C10.9205 3.38236 11.5 4.7813 11.5 6.23999C11.5 7.32779 11.1774 8.39116 10.5731 9.29562C9.96874 10.2001 9.10976 10.9051 8.10477 11.3213C7.09977 11.7376 5.99391 11.8465 4.92701 11.6343C3.86011 11.4221 2.88011 10.8983 2.11092 10.1291C1.34173 9.35989 0.817903 8.37989 0.605685 7.31299C0.393466 6.2461 0.502381 5.14023 0.918662 4.13524C1.33494 3.13024 2.03989 2.27126 2.94436 1.66691Z"
          fill={color2}
        />
        <path d="M11.5 14.3V17.74H0.5V14.3H11.5Z" fill={color1} />
      </svg>
    </div>
  );
}

export default OrdersIcon;
