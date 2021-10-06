import { Button, IconButton } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import React from 'react';
import { useHistory } from 'react-router';
import './Room.css';

const Room = (props) => {
    let history = useHistory();
    const handleBookClick = (bedtype) => {
        history.push(`/book/${bedType}`);
    }
    
    const {avatar, title, price, imageUrl, bed, capacity, description, bedType} = props.room;
    return (
        <div className="room">
            <h1 className="avatar">{avatar}</h1>
            <img src={imageUrl} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="icons">
                <IconButton>
                    <SingleBedIcon /> : {bed}
                </IconButton>
                <IconButton>
                    <PeopleOutlineIcon /> : {capacity}
                </IconButton>
                <IconButton>
                    <AttachMoneyIcon /> : {price}
                </IconButton>
            </div>
            <Button onClick={()=> handleBookClick(bedType)} className="book-button" variant="contained" color="primary">Book</Button>
        </div>
    );
};

export default Room;