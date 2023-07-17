import { useState } from "react";
import PropTypes from 'prop-types';


const INITIAL_CARD_FORM_DATA = {
    message: ""
};

const NewCardForm = ({addCard}) => {
    const [cardFormData, setCardFormData] = useState(INITIAL_CARD_FORM_DATA);

    const handleChange = (event) => {
        const newFormData = {
            ...cardFormData,
            [event.target.name]: event.target.value,
        };
        setCardFormData(newFormData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addCard(cardFormData);
        setCardFormData(INITIAL_CARD_FORM_DATA);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="message">Message</label>
            <input
                maxLength={40}
                required
                type="text"
                id="message"
                name="message"
                value={cardFormData.message}
                onChange={handleChange}
            />
            <input type="submit" value="submit" />
        </form>
    );
};

NewCardForm.propTypes = {
    addCard: PropTypes.func.isRequired,
}


export default NewCardForm;