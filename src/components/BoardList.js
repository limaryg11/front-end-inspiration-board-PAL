import Board from "./Board";
import PropTypes from "prop-types";

const BoardList = (props) => {
    const boardComponents = props.data.map((board) => {
        return (
            <Board 
                key={board.id}
                id={board.id}
                title={board.title}
                owner={board.owner}
                cards={board.cards}
                selectBoard={props.selectBoard}
            />
        );
    });
    return (
        <div>
            <h1> Boards</h1>
            {boardComponents}
        </div>
    );
};

BoardList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            owner:PropTypes.string.isRequired
        })
    ).isRequired,
    selectBoard:PropTypes.func.isRequired
};

export default BoardList;