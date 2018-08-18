import React, {Component} from 'react';
import './PinsFeed.css';
import Pin from './pin/Pin';
import GridBox from './GridBox';

class PinsFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pins: [
                {
                    "title": "What 10+ years of web design experience has taught me",
                    "body": "After years of web design experience, I'll teach you how to build your Wordpress website in a week with my FREE Layout To Launch Bootcamp.",
                    "img": "https://i.pinimg.com/564x/46/5d/d0/465dd0e72f7e0fce429459a464845dad.jpg",
                    "link": "anitam.com"
                },
                {
                    "title": "Pure CSS Loading Bar Button",
                    "body": "A download button that transitions to a loading progress bar on click, all done in pure CSS. A nice demo by Jamie Coulter - posted under Coding tagged with: Animation, Buttons, Code, CSS, CSS3, HTML",
                    "img": "https://i.pinimg.com/originals/f5/9c/e8/f59ce811ad0354a525068cbb56262450.gif",
                    "link": "http://fribly.com"
                },
                {
                    "title": "31 Photos That Prove Bulldogs Are Beautiful",
                    "body": "Whether French, American, or English, bulldogs are beautiful, lovable creatures. 'National Bulldogs are Beautiful Day' is a great time to celebrate that!",
                    "img": "https://i.pinimg.com/564x/38/c5/7a/38c57a4dab9c630878e451f54c599112.jpg",
                    "link": "http://buzzfeed.com"
                },
                {
                    "title": "31 Photos That Prove Bulldogs Are Beautiful",
                    "body": "Whether French, American, or English, bulldogs are beautiful, lovable creatures. 'National Bulldogs are Beautiful Day' is a great time to celebrate that!",
                    "img": "https://i.pinimg.com/564x/27/3c/8e/273c8ee01a1bac7ca17b22a606453222.jpg",
                    "link": "http://buzzfeed.com"
                },
                {
                    "title": "31 Photos That Prove Bulldogs Are Beautiful",
                    "body": "Whether French, American, or English, bulldogs are beautiful, lovable creatures. 'National Bulldogs are Beautiful Day' is a great time to celebrate that!",
                    "img": "https://i.pinimg.com/564x/ca/88/7c/ca887c0351c5a0d81f234bd005eb7a81.jpg",
                    "link": "http://buzzfeed.com"
                },
                {
                    "title": "31 Photos That Prove Bulldogs Are Beautiful",
                    "body": "Whether French, American, or English, bulldogs are beautiful, lovable creatures. 'National Bulldogs are Beautiful Day' is a great time to celebrate that!",
                    "img": "https://i.pinimg.com/564x/b3/76/2d/b3762d605459fa40d4354edb8f40bece.jpg",
                    "link": "http://buzzfeed.com"
                },
                {
                    "title": "31 Photos That Prove Bulldogs Are Beautiful",
                    "body": "Whether French, American, or English, bulldogs are beautiful, lovable creatures. 'National Bulldogs are Beautiful Day' is a great time to celebrate that!",
                    "img": "https://i.pinimg.com/564x/5b/89/64/5b8964ad80cd2e5d992aba9ea6c38024.jpg",
                    "link": "http://buzzfeed.com"
                },
                {
                    "title": "31 Photos That Prove Bulldogs Are Beautiful",
                    "body": "Whether French, American, or English, bulldogs are beautiful, lovable creatures. 'National Bulldogs are Beautiful Day' is a great time to celebrate that!",
                    "img": "https://i.pinimg.com/564x/b5/f1/14/b5f114c0b24e12fcca894ee1479c7a1f.jpg",
                    "link": "http://buzzfeed.com"
                },
                {
                    "title": "31 Photos That Prove Bulldogs Are Beautiful",
                    "body": "Whether French, American, or English, bulldogs are beautiful, lovable creatures. 'National Bulldogs are Beautiful Day' is a great time to celebrate that!",
                    "img": "https://i.pinimg.com/564x/26/8a/92/268a9263f2d02565375096fd9617d163.jpg",
                    "link": "http://buzzfeed.com"
                },
                {
                    "title": "31 Photos That Prove Bulldogs Are Beautiful",
                    "body": "Whether French, American, or English, bulldogs are beautiful, lovable creatures. 'National Bulldogs are Beautiful Day' is a great time to celebrate that!",
                    "img": "https://i.pinimg.com/564x/50/96/63/50966344cc8716a1f9b165e0863fec2b.jpg",
                    "link": "http://buzzfeed.com"
                },
                {
                    "title": "31 Photos That Prove Bulldogs Are Beautiful",
                    "body": "Whether French, American, or English, bulldogs are beautiful, lovable creatures. 'National Bulldogs are Beautiful Day' is a great time to celebrate that!",
                    "img": "https://i.pinimg.com/564x/65/87/fb/6587fb80b20057fef86f2389785693ec.jpg",
                    "link": "http://buzzfeed.com"
                },
                {
                    "title": "31 Photos That Prove Bulldogs Are Beautiful",
                    "body": "Whether French, American, or English, bulldogs are beautiful, lovable creatures. 'National Bulldogs are Beautiful Day' is a great time to celebrate that!",
                    "img": "https://i.pinimg.com/564x/2b/c4/28/2bc428a4b60a2e708d8704299190148d.jpg",
                    "link": "http://buzzfeed.com"
                },
            ]
        }
    }

    // componentDidMount() {
    //     fetch("/getPosts").then(res => {

    //     })
    // }

    render() {
        const pin = {
            "title": "What 10+ years of web design experience has taught me",
            "body": "After years of web design experience, I'll teach you how to build your Wordpress website in a week with my FREE Layout To Launch Bootcamp.",
            "img": "https://i.pinimg.com/564x/46/5d/d0/465dd0e72f7e0fce429459a464845dad.jpg",
            "link": "http://anitam.com"
        }
        // const pins = [
        //     {
        //         "title": "What 10+ years of web design experience has taught me",
        //         "body": "After years of web design experience, I'll teach you how to build your Wordpress website in a week with my FREE Layout To Launch Bootcamp.",
        //         "img": "https://i.pinimg.com/564x/46/5d/d0/465dd0e72f7e0fce429459a464845dad.jpg",
        //         "link": "anitam.com"
        //     },
        //     {
        //         "title": "What 10+ years of web design experience has taught me",
        //         "body": "After years of web design experience, I'll teach you how to build your Wordpress website in a week with my FREE Layout To Launch Bootcamp.",
        //         "img": "https://i.pinimg.com/564x/46/5d/d0/465dd0e72f7e0fce429459a464845dad.jpg",
        //         "link": "anitam.com"
        //     }
        // ]
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
// <Pin img={pin.img} title={pin.title} link={pin.link}/>