import React, { Component } from 'react';
import './HomePage.css';
import { Link } from "react-router-dom";


class HomePage extends Component {
        render() {
            return (
                <div className="home-container">
                <div className="text1">Welcome to QuizGuru</div>
                <div className="text2">click <Link to="/qbank">here</Link> to create your quiz</div>
                </div>
            )
        }
}
export default HomePage;