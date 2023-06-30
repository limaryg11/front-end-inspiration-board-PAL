import React from 'react';
import axios from 'axios';
import Card from './Card';

import {useState, useEffect} from 'react';



const CardList = (props) => {
    const [cardData, setCardData] = useState([]);
    const API = "https://inspiration-board-pal-backend.onrender.com/boards"

    
    useEffect(() => {
        axios.get(`${API}/${props.board.id}/cards`)
        .then((result)=> {
            console.log("getting cardds")
            console.log(result.data.cards)
            setCardData(result.data.cards);
        }).catch((error) => {
            console.log('Error:', error);
            alert('Couldn\'t get cards for this board.');
        });
    }, [props.board]);

    const showCards = cardData.map((card) => {
        return (<Card
            key={card.id}
            card={card}></Card>)
    });
    

    // const postCards = (newCardData) => {
    //     axios
    //     .post(`${API}/${props.board.id}/cards`, newCardData)
    //     .then((result) => {
    //         console.log(result.data);
    //         axios.get(`${API}/${props.board.id}/cards`)
    //         .then((result)=> {
    //         setCardData(result.data.cards);
    //         }).catch((error) => {
    //             console.log('Error:', error);
    //             alert('Couldn\'t get cards for this board.');
    //     });
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // };

    return (<section>
    <section>
        <h2>Cards for {props.board.title}</h2>
        <div> 
        {showCards}
        </div>
    </section>
    {/* <NewCardForm postNewCard={postNewCard}></NewCardForm> */}
    </section>);
}

export default CardList;