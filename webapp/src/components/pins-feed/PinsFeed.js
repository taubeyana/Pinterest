import React, { Component } from 'react';
import './PinsFeed.css';
import GridBox from './components/grid-box/GridBox';
import {getRelevantPins} from '../../store/actions/pins.actions';
import FloatingMenu from './components/floating-menu/FloatingMenu';
import { connect } from 'react-redux';
import ContentWrapper from '../../common/content-wrapper/ContentWrapper'

class PinsFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: true
        };
        this.handleModal = this.handleModal.bind(this)
    }

    componentDidMount() {
        this.props.getRelevantPins()
    }

    handleModal(e) {
        this.setState({modalOpen: false})
    }
    render() {
        return (
            <ContentWrapper>
                <div className = "grid-box-wrapper">
                    <GridBox 
                        isLoading = { this.props.loading } 
                        data = { this.props.pins }/>
                </div>
                <FloatingMenu />
            </ContentWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        pins: state.pinsReducer.pins,
        loading: state.pinsReducer.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getRelevantPins: () => dispatch(getRelevantPins())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PinsFeed);