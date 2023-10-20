/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    const [allActors, setAllActors] = useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllActors(data));
    },[]);
    
    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">
                <div className="card">
                    <img className='photo' src="https://i.ibb.co/QnXmyzf/karen-gillan-1200.jpg" alt="" />
                    <h2>Ritu</h2>
                <p><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, animi.</small></p>
                <div className="info">
                    <p>Salary: 3000$</p>
                    <p>Student</p>
                </div>
                <button className='card-btn'>Select</button>
                </div>
                </div>
                <div className="cart">
                    <h2>This is cart</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;