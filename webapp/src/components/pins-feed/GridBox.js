import React, {Component} from 'react';
import Masonry from 'react-masonry-component';
import './GridBox.css'
import Pin from './pin/Pin';
import LoadingImage from './../../common/loading-gif/LoadingGif';

const masonryOptions = {
    transitionDuration: 0,
    fitWidth: true
};

class GridBox extends Component {
    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
    }
    render() {
        let childElements = [];
        // if (this.props.data.length > 0) {
        //     childElements = this.props.data.map(pin => {
        //         return (
        //             <Pin data={pin}/>
        //         )
        //     });
        // }
        // else {

        //     childElements = <LoadingImage/>
        // }
        childElements = this.props.data.map(pin => {
                    return (
                        <Pin data={pin}/>
                    )
                });


        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'div'} // default 'div'
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                options={masonryOptions}
            >
                {this.props.state && <LoadingImage/>}
                {childElements}
            </Masonry>
        );
    }
}

export default GridBox;