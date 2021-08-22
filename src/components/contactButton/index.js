import React from 'react';
import './styles.css';
import {Plus} from 'react-feather';

function ContactButton() {
    return (
        <button className='contact-button'>
            <span>contact me</span>
            <Plus />
        </button>
    )
}

export default ContactButton
