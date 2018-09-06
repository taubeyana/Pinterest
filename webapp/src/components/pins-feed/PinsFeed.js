import React, { Component } from 'react';
import './PinsFeed.css';
import GridBox from './components/grid-box/GridBox';
import GetPinsService from './../../services/GetPinsService';

class PinsFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            pins: []
        }
    }
    
    componentDidMount() {
        GetPinsService.getRelevantPins()
        .then(pins => {
            this.setState({ pins: [...pins] })
            this.setState({ loading: false })
        })
        .catch(e => console.log(e))
    }

    render() {
        return (
            <div className = "pins-feed">
                <div className = "grid-box-wrapper">
                    <GridBox 
                        state = { this.state.loading } 
                        data = { this.state.pins }/>
                </div>
            </div>
        );
    }
}

export default PinsFeed;