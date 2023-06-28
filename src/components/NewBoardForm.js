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
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <label htmlFor="owner">Owner's Name</label>
            <input
                type="text"
                id="owner"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
            />
            <input type="submit" value="submit" />
        </form>
    );
};

NewBoardForm.propTypes = {
    addBoard: PropTypes.func.isRequired,
}


export default NewBoardForm;