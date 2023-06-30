import React from 'react';
import axios from 'axios';

import {useState, useEffect} from 'react';



const CardList = (props) => {
    const [cardData, setCardsData] = useState([]);
    const API = "https://inspiration-board-pal-backend.onrender.com"
    
    const getAllCards = () => {
        axios
        .get(`${API}/boards/${props.board.id}/cards`)
        .then((result) => {
            console.log(result.data)
            setCardsData(result.data);
            
        })
        .catch((error) => {
            console.log(error);
        });
        };
    
    
    useEffect(() => {
        getAllCards();
    }, []);

    const postCards = (newCardData) => {
        axios
        .post(API, newCardData)
        .then((result) => {
          console.log(result.data);
          getAllCards();
        })
        .catch((error) => {
          console.log(error);
        });
      };

    return (
        <div>Cards for...{cardData}</div>
    );
}

export default CardList;