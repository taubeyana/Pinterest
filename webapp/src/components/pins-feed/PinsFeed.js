import React, { Component } from 'react';
import './PinsFeed.css';
import GridBox from './components/grid-box/GridBox';
import GetPinsService from './../../services/GetPinsService';
import FloatingMenu from './components/floating-menu/FloatingMenu';
import NewPinModal from './components/new-pin-modal/newPinModal'



class PinsFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            pins: [],
            modalOpen: true
        };
        this.handleModal = this.handleModal.bind(this)
    }
    
    componentDidMount() {
        GetPinsService.getRelevantPins()
        .then(pins => {
            this.setState({ pins: [...pins] })
            this.setState({ loading: false })
        })
        .catch(e => console.log(e))
    }

    handleModal(e) {
        // console.log(e)
        this.setState({modalOpen: false})
    }


    render() {
        return (
            <div className = "pins-feed">
                <div className = "grid-box-wrapper">
                    <GridBox 
                        state = { this.state.loading } 
                        data = { this.state.pins }/>
                </div>
                <FloatingMenu />
                {/*<NewPinModal modalOpen = { this.state.modalOpen } modalClose = { this.handleModal }/>*/}
            </div>
        );
    }
}

export default PinsFeed;