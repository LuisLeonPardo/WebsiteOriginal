import React from "react";
import variables from "../../src/components/SideBar/SideBar.module.scss";
import { useDispatch } from "react-redux";
import { setSelectedIcon } from "../../redux/reducer";
function ExitIcon({ selected }) {
  const dispatch = useDispatch("");
  var color1 = variables.color1;
  var color2 = variables.color2;
  selected ? ((color1 = variables.color3), (color2 = variables.color4)) : null;
  return (
    <div onClick={() => dispatch(setSelectedIcon("ExitIcon"))}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.91667 20.3333C4.67355 20.3333 4.44039 20.2368 4.26849 20.0648C4.09658 19.8929 4 19.6598 4 19.4167V2.91667C4 2.67355 4.09658 2.44039 4.26849 2.26849C4.44039 2.09658 4.67355 2 4.91667 2H17.75C17.9931 2 18.2263 2.09658 18.3982 2.26849C18.5701 2.44039 18.6667 2.67355 18.6667 2.91667V5.66667H16.8333V3.83333H5.83333V18.5H16.8333V16.6667H18.6667V19.4167C18.6667 19.6598 18.5701 19.8929 18.3982 20.0648C18.2263 20.2368 17.9931 20.3333 17.75 20.3333H4.91667ZM16.8333 14.8333V12.0833H10.4167V10.25H16.8333V7.5L21.4167 11.1667L16.8333 14.8333Z"
          fill={color1}
        />
      </svg>
    </div>
  );
}

export default ExitIcon;
