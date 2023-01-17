import React from "react";

export default function ProgressBar(props) {
  const { bgcolor, completed, limit } = props;

  const containerStyles = {
    height: 8,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 2,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    height:'100%',
    width: 3,
    backgroundColor: 'red',
    position: 'relative',
    top: -8,
    left: `${limit}%`
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
      <div style={labelStyles}>
      </div>
    </div>
  );
};