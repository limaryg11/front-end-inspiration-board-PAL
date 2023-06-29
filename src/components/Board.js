import React from 'react';
import PropTypes from "prop-types";

const Board = ({id, title, owner, selectBoard, board}) => {
    return (
        <div onClick={()=>{
            selectBoard(board)
            console.log("Board has been click")
        }} > {title}
        </div>
    )
};

Board.propTypes = {
    title:PropTypes.string.isRequired,
    owner:PropTypes.string.isRequired
};

export default Board;