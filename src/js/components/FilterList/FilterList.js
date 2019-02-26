import React, { Component } from 'react';
import './FilterList.css';
import 'uui-framework/fonts/font-awesome/css/font-awesome.min.css';


class FilterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedValue : ""
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(item) {
        if(item.id === this.state.checkedValue) {
            this.setState({
                checkedValue: ""
            });
            if(this.props.onClick) {
                this.props.onClick(item,false);
            }
        }
        else {
            this.setState({
                checkedValue: item.id
            });
            if(this.props.onClick) {
                this.props.onClick(item,true);
            }
        }
        
        
        
        
        
    }
    render() {
        
        const { list , label} = this.props.list;
            return (
                <div className="uui-input-group vertical">
                        <label>{label}</label>
                        {list.map((item,index) => {
                            return (<p className="uui-checkbox  square-skin">
                            <input type="checkbox" id={item.id} checked={this.state.checkedValue === item.id} onChange={() => this.onChange(item)} />
                                <label for={item.id}>{item.type}</label>
                            </p> )
                        })}
                        
                </div>
            )
        }
}
export default FilterList;