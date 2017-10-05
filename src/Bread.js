import React from "react";
import DataSource from "./DataSource";
import './Bread.css';

// This function takes a component
function Bread(WrappedComponent, selectData, addData) {
    // ...and returns another component...
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
        }

        componentDidMount() {
            // ... that takes care of the subscription...
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }
/* Render the wrapped component with fresh data
Normnally you don't put other stuff in here (like the bread) - this should be a pure function. */
        render() {
            return (
                <div className="sandwich">
                    <span role="img" aria-label="Bread emoji">🍞</span>
                    <WrappedComponent data={this.state.data} {...this.props} onClick={e => addData(DataSource)} />
                    <span role="img" aria-label="Bread emoji">🍞</span>
                </div>
            );
        }
    };
}

export default Bread;
