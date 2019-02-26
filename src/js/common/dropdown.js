import React, { Component } from 'react';




class Dropdown extends Component {
    constructor(props) {
        super(props);
    }
    onChange = (e,defaultValue) => {
        let value = e.target.value;
        if(value == "Please select") {
            value = "";
        }
        if(this.props.onChange) {
            this.props.onChange(value);
        }
    }
        render() {
            const { label, list, defaultVal } = this.props.list;
            return (
                <div className="dropdownContainer">
                    <label>{label} </label>
                    <select className="selectpicker uui-form-element" onChange={this.onChange}>
                    <option defaultValue className="grey">{defaultVal}</option>
                    {list.map((item) => {
                        return <option>{item.type}</option>
                    })}
                    </select>
                </div>
            )
        }
}
export default Dropdown;