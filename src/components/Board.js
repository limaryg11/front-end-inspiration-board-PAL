import React from 'react';
import PropTypes from "prop-types";

const Board = ({id, title, owner, selectBoard}) => {
    return (
        <div>
            <button onClick={()=>{
                selectBoard(id)
            }}>
                {title}
            </button>
        </div>
    )
};

Board.propTypes = {
    title:PropTypes.string.isRequired,
    owner:PropTypes.string.isRequired
};

export default Board;