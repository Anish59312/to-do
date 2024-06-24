import React from 'react';


const Footer = ({ onClick }) => {

    return (
            <button className='addBtn' onClick={onClick}>Add Todo</button>
    );
}

export default Footer;