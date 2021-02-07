import React, {Component} from "react";
import PropTypes from "prop-types";

const ProgressBar = props => {
    const {value, max } = props;
    return <progress value = {value} max = {max}></progress>
}

ProgressBar.defaultProps = {
    max:100
}

export default ProgressBar