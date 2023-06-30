import React from 'react';
import axios from 'axios';
import Card from './Card';

import {useState, useEffect} from 'react';



const CardList = (props) => {
    const [cardData, setCardsData] = useState([]);
    const API = "https://inspiration-board-pal-backend.onrender.com"

    useEffect(() => {
        axios.get(`${API}/boards/${props.board.id}/cards`)
        .then((response)=> {
            console.log("getting cardds")
            console.log(response.data.cards)
          setCardsData(response.data.cards);
        }).catch((error) => {
          console.log('Error:', error);
          alert('Couldn\'t get cards for this board.');
        });
      }, [props.board]);

    //   const cardElements = cardData.map((card) => {
    //     return (<Card
    //         card={card}></Card>)
    //   });
    
    // const getAllCards = () => {
    //     axios
    //     .get(`${API}/boards/${props.id}/cards`)
    //     .then((result) => {
    //         console.log(result.data)
    //         setCardsData(result.data);
            
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    //     };
    
    
    // useEffect(() => {
    //     getAllCards();
    // }, [props.board]);

    // const postCards = (newCardData) => {
    //     axios
    //     .post(API, newCardData)
    //     .then((result) => {
    //       console.log(result.data);
    //       getAllCards();
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   };

    return (<section className='cards__container'>
    <section>
      <h2>Cards for {props.board.title}</h2>
      <div className='card-items__container'> {props.board.cards}
        {/* {cardElements} */}
      </div>
    </section>
    {/* <NewCardForm postNewCard={postNewCard}></NewCardForm> */}
  </section>);
}

export default CardList;