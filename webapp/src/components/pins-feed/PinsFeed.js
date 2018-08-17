import React, {Component} from 'react';
import './PinsFeed.css';
import Pin from './pin/Pin'

class PinsFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    // componentDidMount() {
    //     fetch("/getPosts").then(res => {

    //     })
    // }

    render() {
        return (
            <div className="pins-feed">
                {this.state.posts}
                <Pin/>
            </div>
        );
    }
}

export default PinsFeed;