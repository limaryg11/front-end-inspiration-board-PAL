import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';



const CardList = (props) => {
    const [cardData, setCardsData] = useState([]);
    const API = "https://inspiration-board-pal-backend.onrender.com"
    
    const getAllBoards = () => {
        axios
        .get(`${API}/boards/${props.board.board_id}/cards`)
        .then((result) => {
            setCardsData(result.data);
        })
        .catch((error) => {
            console.log(error);
        });
        };
    
    useEffect(() => {
        getAllBoards();
    }, [props.board]);

    return (
        <div>hello</div>
    )

}

export default CardList;