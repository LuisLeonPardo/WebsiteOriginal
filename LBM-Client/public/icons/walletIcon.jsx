import React from "react";
import variables from "../../src/components/SideBar/SideBar.module.scss";
import { useDispatch } from "react-redux";
import { setSelectedIcon } from "../../redux/reducer";

function WalletIcon({ selected }) {
  const dispatch = useDispatch();
  var color1 = variables.color1;
  var color2 = variables.color2;
  selected ? ((color1 = variables.color3), (color2 = variables.color4)) : null;
  return (
    <div className={variables.iconSVG}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-0.0400391 6.87001V4.86001L13.46 -0.48999V6.87001H-0.0400391Z"
          fill={color2}
        />
        <path
          d="M-0.0400391 4.82001V17.42H17.96V4.82001H-0.0400391ZM9.15994 13.09L7.15994 11.09L9.15994 9.09L11.1599 11.09L9.15994 13.09Z"
          fill={color1}
        />
        <path
          d="M9.15986 6.87001C8.31181 6.87198 7.48339 7.12527 6.77922 7.59786C6.07505 8.07045 5.52673 8.74114 5.20356 9.52521C4.8804 10.3093 4.79689 11.1715 4.96354 12.0031C5.1302 12.8346 5.53957 13.598 6.13994 14.197C6.7403 14.796 7.50472 15.2036 8.33662 15.3683C9.16853 15.533 10.0306 15.4475 10.8139 15.1225C11.5972 14.7975 12.2666 14.2476 12.7376 13.5424C13.2085 12.8371 13.4599 12.0081 13.4599 11.16C13.4599 10.5958 13.3486 10.0371 13.1324 9.51598C12.9161 8.99484 12.5993 8.52147 12.1998 8.12297C11.8004 7.72448 11.3263 7.40869 10.8047 7.19368C10.283 6.97868 9.72408 6.86869 9.15986 6.87001ZM9.15986 13.13L7.15986 11.13L9.15986 9.13L11.1599 11.13L9.15986 13.13Z"
          fill={color2}
        />
      </svg>
    </div>
  );
}

export default WalletIcon;
