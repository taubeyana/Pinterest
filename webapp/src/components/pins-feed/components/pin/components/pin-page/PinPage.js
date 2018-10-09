import React, { Component } from 'react';
import './PinPage.css';
import Button from '../../../../../../common/button/Button';
import axios from 'axios';
import ContentWrapper from '../../../../../../common/content-wrapper/ContentWrapper'


class PinPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pin: {}
        }
    }
    componentDidMount() {
        axios.get('/api/pins/' + this.props.match.params.id )
        .then(data => {
            this.setState({pin: {...data.data}})
            console.log(this.state.pin)
        })
    }
    render() {
        console.log(this.props.match.params.id)
        return (
            <ContentWrapper>
                <div className = 'pin-content'> 
                    <img src = {this.state.pin.img} />
                    <div className = 'pin-details'>
                        <h1> { this.state.pin.title } </h1>
                        <p> { this.state.pin.body } </p>
                        <Button 
                            text = { this.state.pin.link } 
                            to = { this.props.match.params.id} 
                            buttonType = "router-link" 
                            faIcon = "external-link-alt" 
                            className = "pin-link">
                        </Button>
                    </div>
                </div>
            </ContentWrapper>
        )
    }
}

// const PinPage = (props) => {
//     console.log(props)
//     return (
//         <div className = 'content-wrapper'> 
//             <h1>pin page</h1>
//             <img src = { props.src } alt = { props.alt }/>
//             <div className = 'pin-details'>
//                 <h1> { props.title } </h1>
//                 <p> { props.body } </p>
//                 <Button 
//                     text = { props.link } 
//                     href = { props.link } 
//                     buttonType = "link" 
//                     faIcon = "external-link-alt" 
//                     className = "pin-link">
//                 </Button>
//             </div>
//         </div>
//     )
// }

export default PinPage