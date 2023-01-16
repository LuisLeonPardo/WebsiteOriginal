import React from "react";
import variables from "../../src/components/SideBar/SideBar.module.scss";
import { useDispatch } from "react-redux";
import { setSelectedIcon } from "../../redux/reducer";

function CollapseIcon({ selected }) {
  const dispatch = useDispatch();
  var color1 = variables.color1;
  var color2 = variables.color2;
  return (
    <div>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0927 16.9057L20.0034 10.995L14.0927 5.08433L12.2991 6.88811L16.406 10.995L12.2991 15.1121L14.0927 16.9057Z"
          fill={color1}
        />
        <path
          d="M8.90545 9.73107H18.2097V12.2788H8.90545V9.73107Z"
          fill={color1}
        />
        <path
          d="M1.8331 1.83333H4.38081V20.1667H1.8331V1.83333Z"
          fill={color1}
        />
      </svg>
    </div>
  );
}

export default CollapseIcon;
