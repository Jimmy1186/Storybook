import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import PropTypes from 'prop-types';
import './Button.css'
export const Button = ({size,tp,backgroundColor,color,...props}) => {
  return (
    <Tippy content={tp}>
      <button className={`btn btn-tippy-${size}`}  style={{color,backgroundColor}} {...props}>My button</button>
    </Tippy>
  );
};

Button.propTypes={
    size:PropTypes.oneOf(['large','medium','small']),
    tp:PropTypes.string,
}

Button.defaultProps ={
    size: 'medium',
    tp:'Helle',
    backgroundColor:null,
    color:null
}