import React from "react";
import Bread from './Bread';
import './PeanutButterSandwich.css';

class PeanutButter extends React.Component {
    render() {
        return <div className="clickable" onClick={this.props.onClick}>{this.props.data}</div>
    }
}

const PeanutButterSandwich = Bread(
    PeanutButter,
    function (dataSource) {
        return dataSource.getPeanutButter()
    },
    function (dataSource) {
        dataSource.addPeanutButter();
    }
);

export default PeanutButterSandwich;
