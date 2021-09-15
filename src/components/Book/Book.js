import React from 'react';
import { useParams } from 'react-router';
import './Book.css';

const Book = () => {
    let {bedType} = useParams();
    return (
        <div className="book_container">
            <h3>You have selected {bedType} bed room.</h3>
        </div>
    );
};

export default Book;
