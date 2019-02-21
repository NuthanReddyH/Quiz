import React, { Component } from 'react';
import './HomePage.css';


class HomePage extends Component {
        render() {
            return (
                <div className="home-container">
                <div className="text1">Welcome to QuizGuru</div>
                <div className="text2">click <a href="#">here</a> to create your quiz</div>
                </div>
            )
        }
}
export default HomePage;