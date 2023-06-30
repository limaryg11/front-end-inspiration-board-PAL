import React from 'react';
import PropTypes from "prop-types";

const Board = ({id, title, selectBoard}) => {
    return (
        <div onClick={()=>{
            selectBoard(id)
            console.log("Board has been clicked")
        }} > {title}
        </div>
    )
};

Board.propTypes = {
    title:PropTypes.string.isRequired,
    owner:PropTypes.string.isRequired
};

export default Board;