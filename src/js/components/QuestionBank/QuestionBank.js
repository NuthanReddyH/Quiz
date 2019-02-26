import React, { Component } from 'react';
import './QuestionBank.css';
import {typeList, areaList, Levels, timeList} from '../../constants/constants'
import FilterList from '../FilterList/FilterList';
import Dropdown from '../../common/dropdown';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { setType, setArea,setLevel,setTime } from '../../actions/actions';


class QuestionBank extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    selectedType = (type,value) => {
        this.props.setType(type,value);
    };
    selectedArea = (area,value) => {
        this.props.setArea(area,value);
    }; 
    selectedLevel = (value) => {
        this.props.setLevel(value);
    };
    selectedTime = (value) => {
        this.props.setTime(value);
    };
    render() {
        let validateButton = (this.props && this.props.selectedArea.type && this.props.selectedType.type && this.props.selectedLevel && this.props.selectedTime);
            return (
                <div className="question-container clearfix">
                    <div className="leftBar">
                        <div className="leftInnerWrapper">
                            <FilterList list={typeList} onClick={this.selectedType}/>
                            <FilterList list={areaList} onClick={this.selectedArea}/>
                            <Dropdown list = {Levels} onChange={this.selectedLevel}/>
                            <Dropdown list = {timeList} onChange={this.selectedTime}/>
                        </div>
                    </div>
                    <div className="rightBar">
                        <div className="rightInnerWrapper">
                            <div>Filters : <span className={!this.props.selectedType.type ? "hide": "filterDivider"} >{this.props.selectedType.type}</span>
                                            <span className={!this.props.selectedArea.type ? "hide": "filterDivider"}> {this.props.selectedArea.type} </span>
                                            <span className={!this.props.selectedLevel ? "hide": "filterDivider"}>{this.props.selectedLevel} </span> 
                                            <span className={!this.props.selectedTime ? "hide": "filterDivider"}> {this.props.selectedTime} </span> 
                            </div>
                            <div className="questionBtnContainer"> 
                                <button className={`${"uui-button"} ${!validateButton ? 'disable' : 'blue'}`} disabled={!validateButton} >New Question</button>
                                <div>Please select a category from the filters to create the question</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}
const mapStateToProps = state => ({
    selectedType: state.type.selectedType,
    selectedArea: state.type.selectedArea,
    selectedLevel: state.type.selectedLevel,
    selectedTime: state.type.selectedTime,
  });
  const mapDispatchToProps = {
        setType,
        setArea,
        setLevel,
        setTime
  };
  export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(QuestionBank)
  );