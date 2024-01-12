import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

interface Props{
    btnName: string,
    handleOnclick: any,
    style: string,
    link?: string,
}

const Button = ({ btnName,link,handleOnclick,style }:Props) => {
  return (
    <div      
    onClick={()=>handleOnclick()}
    className={`text-center ${style ? style : ''}`}
    >
      {link ? (
        <Link to={link}>
          <button
            className="text-center whitespace-nowrap"
          >
            {btnName}
          </button>
        </Link>
      ) : (
        <button
          className="text-center whitespace-nowrap"
        >
          {btnName}
        </button>
      )}
    </div>
  );
};

export default Button;
