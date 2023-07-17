import React from 'react';

const Card = (props) => {
    return (<div className='card-item'>
        
        <p>{props.card.message}</p>
        <ul>
        <li><p>{props.card.likes_count} 🩷</p></li>
        {/* <li><p onClick={() => props.plusOneCardItem(props.card)}>+1</p></li> */}
        <li><button onClick={() => props.deleteCard(props.card)}>Delete</button></li>
        </ul>
    </div>);
};



export default Card;