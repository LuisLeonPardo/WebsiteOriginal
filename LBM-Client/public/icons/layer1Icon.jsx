import React from "react";
import variables from "../../src/components/SideBar/SideBar.module.scss";
import { useDispatch } from "react-redux";
import { setSelectedIcon } from "../../redux/reducer";

function Layer1Icon({ selected }) {
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
        <path d="M17.1401 13.14H0.850098V15.95H17.1401V13.14Z" fill={color2} />
        <path
          d="M13.3798 6.5L11.3998 8.48L8.9998 6.02L6.5298 8.48L4.5498 6.5L8.9998 2.06L13.3798 6.5Z"
          fill={color1}
        />
      </svg>
    </div>
  );
}

export default Layer1Icon;
