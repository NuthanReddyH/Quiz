import React, { Component } from 'react';




class Dropdown extends Component {
        render() {
            const { label, list, defaultVal } = this.props.list;
            console.log(list);
            return (
                <div className="dropdownContainer">
                    <label>{label} </label>
                    <select className="selectpicker uui-form-element">
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