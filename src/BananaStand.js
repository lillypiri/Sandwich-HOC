import React from 'react';
import Money from './Money.js';

class BananaStand extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            money: Money.getMoney(),
            banana: Money.getBanana()
        };
    }

    componentDidMount() {
        Money.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        Money.removeChangeListener(this.handleChange);
    }

    handleChange() {
        this.setState({
            money: Money.getMoney(),
            banana: Money.getBanana()
        });
    }

    render() {
        return (
            <div>
            There's always
                {this.state.money} in the {this.state.banana} stand
            </div>
        )
    }
}

export default BananaStand;
