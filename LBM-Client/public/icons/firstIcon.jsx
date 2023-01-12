import React from "react";
import variables from "../../src/components/SideBar/SideBar.module.scss";
import { useDispatch } from "react-redux";
import { setSelectedIcon } from "../../redux/reducer";

function FirstIcon({ selected }) {
  const dispatch = useDispatch();
  var color1 = variables.color1;
  var color2 = variables.color2;
  selected ? ((color1 = variables.color3), (color2 = variables.color4)) : null;
  return (
    <div>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.44 11.34H0V18H4.44V11.34Z" fill={color1} />
        <path d="M11.2203 0H6.78027V18H11.2203V0Z" fill={color1} />
        <path d="M18.0001 5.97998H13.5601V18H18.0001V5.97998Z" fill={color1} />
        <path d="M4.44 14.67H0V18H4.44V14.67Z" fill={color2} />
        <path d="M11.2203 9H6.78027V18H11.2203V9Z" fill={color2} />
        <path d="M18.0001 11.99H13.5601V18H18.0001V11.99Z" fill={color2} />
      </svg>
    </div>
  );
}

export default FirstIcon;
