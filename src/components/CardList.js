import React from 'react';
import axios from 'axios';
import Card from './Card';
import NewCardForm from './NewCardForm';

import {useState, useEffect} from 'react';



const CardList = (props) => {
    const [cardData, setCardData] = useState([]);
    const API = "https://inspiration-board-pal-backend.onrender.com/boards"
    

    // const API = "http://127.0.0.1:5000/boards"

    
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


    const deleteCard = (card) => {
        console.log(card)
        axios
            .delete(`https://inspiration-board-pal-backend.onrender.com/cards/${card.id}`)
            .then((response) => {
                const newCardData = cardData.filter((currentCard) => {
                    return currentCard.id !== card.id;
                });
                setCardData(newCardData);
            })
            .catch((error) => {
                console.log('Error:', error);
                alert('Delete was unsuccessful!');
            });
    };

    
    const showCards = cardData.map((card) => {
        return (<Card
            key={card.id}
            card={card}
            deleteCard={deleteCard}>
                </Card>)
    });


    const postCard = (newCardData) => {
        axios
        .post(`${API}/${props.board.id}/cards`, newCardData)
        .then((result) => {
            console.log(result.data);
            axios.get(`${API}/${props.board.id}/cards`)
            .then((result)=> {
            setCardData(result.data.cards);
            }).catch((error) => {
                console.log('Error:', error);
                alert('Couldn\'t get cards for this board.');
        });
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const handleSort = () => {
        const sortCards = [...cardData].sort((a,b)=> {
            return a.message > b.message ? 1: -1
        })
        setCardData(sortCards)
    }

    const sortById = () => {
        const sortCardsId = [...cardData].sort((a, b) => {
            return a.id > b.id ? 1 : -1
        })
        setCardData(sortCardsId)
    }

    

    return (<section className='cards_container'>
    <section>
        <h2>Cards for {props.board.title}</h2>
            <button onClick={handleSort} id="sort-a-z">Sort A-Z</button>
            <button onClick={sortById} >Sort By ID</button>
        <div className='card-items_container'> 
        {showCards}
        </div>
    </section>
    <NewCardForm addCard={postCard}></NewCardForm>
    </section>);
}

export default CardList;