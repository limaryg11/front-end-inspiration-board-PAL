import React from 'react';
import PropTypes from "prop-types";

const Board = ({id, title, owner}) => {
    return (
        <div>
            <h2>{title}</h2>
            <h2>{owner}</h2>
        </div>
    )
};

Board.propTypes = {
    title:PropTypes.string.isRequired,
    owner:PropTypes.string.isRequired
};

export default Board;