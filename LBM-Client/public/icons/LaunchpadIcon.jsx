import React from "react";
import variables from "../../src/components/SideBar/SideBar.module.scss";
import { useDispatch } from "react-redux";
import { setSelectedIcon } from "../../redux/reducer";

function LaunchpadIcon({ selected }) {
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
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1395_4118)">
          <path
            d="M11.0757 0.39691C10.8764 0.326867 10.6887 0.256824 10.5011 0.210129C10.4548 0.199621 10.4067 0.199621 10.3604 0.210129C9.92611 0.0812878 9.47652 0.0106231 9.02349 0C7.55952 0.00308426 6.1564 0.583365 5.12122 1.61384C4.08603 2.64432 3.5031 4.04106 3.5 5.49837C3.50042 5.9508 3.55554 6.40154 3.66418 6.84085C3.66418 6.84085 3.66418 6.93424 3.66418 6.99261C3.71612 7.18275 3.77876 7.36983 3.85181 7.55296C4.19265 8.39671 4.7384 9.14314 5.44019 9.72538C6.14198 10.3076 6.9779 10.7075 7.87305 10.8892C8.76821 11.0708 9.69466 11.0287 10.5694 10.7664C11.4442 10.5041 12.2399 10.03 12.8854 9.38639C13.5309 8.74281 14.0059 7.94991 14.2679 7.0787C14.53 6.20749 14.5708 5.28519 14.3868 4.3944C14.2029 3.50362 13.7998 2.67216 13.2138 1.97451C12.6277 1.27687 11.877 0.734816 11.0288 0.39691H11.0757ZM9.02349 8.03158L7.61623 6.61905L6.44352 5.45167L9.02349 2.9885L9.97339 3.9224L10.1493 4.08583L10.8998 4.83296L11.5683 5.48669L9.02349 8.03158Z"
            fill={color1}
          />
          <path
            d="M5.2998 13.98L7.2798 12L8.9998 13.72L10.7298 12L12.7098 13.98L8.9998 17.68L5.2998 13.98Z"
            fill={color2}
          />
        </g>
        <defs>
          <clipPath id="clip0_1395_4118">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default LaunchpadIcon;
