import React from 'react';

const Card = (props) => {
    return (<div className='card-item'>
        
        <p className='card-item_message'>{props.card.message}</p>
        <ul className='card-item_controls'>
        <li><p>{props.card.likes_count} 🩷</p></li>
        <li><button className='card-item_controls' onClick={() => props.deleteCard(props.card)}>Delete</button></li>
        </ul>
    </div>);
};



export default Card;