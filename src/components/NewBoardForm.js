import { useState } from "react";
import PropTypes from 'prop-types';


const INITIAL_FORM_DATA = {
    title: "",
    owner: ""
};

const NewBoardForm = ({addBoard}) => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const handleChange = (event) => {
        const newFormData = {
            ...formData,
            [event.target.name]: event.target.value,
        };
        setFormData(newFormData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addBoard(formData);
        setFormData(INITIAL_FORM_DATA);
    };
    return (
        <form className='new-board-form_form' onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
                required
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <label htmlFor="owner">Owner's Name</label>
            <input
                required
                type="text"
                id="owner"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
            />
            <input type="submit" value="submit" className="new-board-form_form-submit-btn"/>
        </form>
    );
};

NewBoardForm.propTypes = {
    addBoard: PropTypes.func.isRequired,
}


export default NewBoardForm;