import React from "react";
import variables from "../../src/components/SideBar/SideBar.module.scss";
import { useDispatch } from "react-redux";
import { setSelectedIcon } from "../../redux/reducer";

function HistoryIcon({ selected }) {
  const dispatch = useDispatch();
  var color1 = variables.color1;
  var color2 = variables.color2;
  selected ? ((color1 = variables.color3), (color2 = variables.color4)) : null;
  return (
    <div>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.2295 4.73004V0.290039L0.219498 0.290039V4.73004L15.2295 4.73004Z"
          fill={color1}
        />
        <path
          d="M3.21973 0.290039H0.219727V4.73004H3.21973V0.290039Z"
          fill={color2}
        />
        <path
          d="M15.2295 18.2501V13.8101L0.21949 13.8101V18.2501H15.2295Z"
          fill={color1}
        />
        <path
          d="M3.21973 13.8101H0.219727V18.2501H3.21973V13.8101Z"
          fill={color2}
        />
        <path
          d="M18.2397 11.58V7.14001L3.22974 7.14001V11.58H18.2397Z"
          fill={color1}
        />
        <path
          d="M15.2295 11.5701H18.2295V7.13007H15.2295V11.5701Z"
          fill={color2}
        />
      </svg>
    </div>
  );
}

export default HistoryIcon;
