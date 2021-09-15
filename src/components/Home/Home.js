import React from 'react';
import Room from '../Room/Room';
import './Home.css';


const Home = () => {
    const rooms = [
        {
            title: "Standard Single Room",
            description: "Its like enough for you if you like a big room for you. You have everything that you desire for you .",
            imageUrl: "../../images/single.jpg",
            bed: 1,
            capacity: 1,
            bedType: "Single",
            avatar: "S",
            price: 119
        },
        {
            title: "Power Couple Room",
            description: "If you are with your love ones and you wanna stay then you are at the right palce. Here you will have all the facility that you desire.",
            imageUrl: "../../images/kingsize.jpg",
            bed: 1,
            capacity: 2,
            bedType: "Queen Size",
            avatar: "C",
            price: 249
        },
        {
            title: "Grand Family Room",
            description: "Wanna spend a family holiday and need a place where you wanna stay comfortably? Then sir you are exactly at the right place..",
            imageUrl: "../../images/double.jpg",
            bed: 2,
            capacity: 4,
            bedType: "King Size",
            avatar: "F",
            price: 370
        }
    ]

    return (
        <div className="home">
            {
                rooms.map(room => <Room room={room}></Room>)
            }
        </div>
    );
};

export default Home;