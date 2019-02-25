import React, { Component } from 'react';
import './QuestionBank.css';
import {typeList, areaList, Levels, timeList} from '../../constants/constants'
import FilterList from '../FilterList/FilterList';
import Dropdown from '../../common/dropdown';


class QuestionBank extends Component {
        render() {
            return (
                <div className="question-container clearfix">
                    <div className="leftBar">
                    <FilterList list={typeList}/>
                    <FilterList list={areaList}/>
                    <Dropdown list = {Levels}/>
                    <Dropdown list = {timeList}/>
                    </div>
                    <div className="rightBar">
                        <div className="questionBtnContainer"> 
                            <button className="uui-button disable" disabled>New Question</button>
                            <div>Please select a category from the filters to create the question</div>
                        </div>
                    </div>
                </div>
            )
        }
}
export default QuestionBank;