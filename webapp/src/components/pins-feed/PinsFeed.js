import React, {Component} from 'react';
import './PinsFeed.css';
import GridBox from './GridBox';
import pins from './../../temp';
class PinsFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pins: pins
        }
    }

    // componentDidMount() for fetching

    render() {
        return (
            <div className="pins-feed">
                <div className="grid-box-wrapper">
                    <GridBox data={this.state.pins}/>
                </div>
            </div>
        );
    }
}

export default PinsFeed;