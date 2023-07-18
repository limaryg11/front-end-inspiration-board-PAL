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
        <section className="new-card-form_container">
            <h2>Create A New Card</h2>
            <form onSubmit={handleSubmit} className="new-card-form_form">
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
            <input type="submit" value="submit" className="new-card-form_form-submit-btn" />
            </form>
        </section>
    );
};

NewCardForm.propTypes = {
    addCard: PropTypes.func.isRequired,
}


export default NewCardForm;