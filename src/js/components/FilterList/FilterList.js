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
    onChange(id) {
        console.log(id);
        this.setState({
            checkedValue: id
        })
        
    }
    render() {
        
        const { list , label} = this.props.list;
            return (
                <div className="uui-input-group vertical">
                        <label>{label}</label>
                        {list.map((item,index) => {
                            return (<p className="uui-checkbox  square-skin">
                            <input type="checkbox" id={item.id} checked={this.state.checkedValue === item.id} onChange={() => this.onChange(item.id)} />
                                <label for={item.id}>{item.type}</label>
                            </p> )
                        })}
                        
                </div>
            )
        }
}
export default FilterList;