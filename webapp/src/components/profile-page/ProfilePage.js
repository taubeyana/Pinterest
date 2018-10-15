import React, { Component, Fragment} from 'react';
import './ProfilePage.css';
import ContentWrapper from '../../common/content-wrapper/ContentWrapper';
import ProfilePicture from '../../common/profile-picture/ProfilePicture';
import Button from'../../common/button/Button';
import GridBox from '../pins-feed/components/grid-box/GridBox'
import { fetchUserFromDb } from '../../store/actions/usersActions';
import { connect } from 'react-redux';

class ProfilePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: null
        }
        console.log(this.props.currentUser)
    }
    componentDidMount() {
        this.props.fetchUserFromDb('5bc4ca7d49450e2804ff8f65')
    }
    render() {
        console.log(this.props.currentUser)
        // const currentUser = {
        //     firstName: 'Yana',
        //     lastName: 'Taube',
        //     img: 'https://res.cloudinary.com/dat4frntv/image/upload/v1538716810/bzwvmqopam30u6olkach.png',
        //     username: 'taubeyana'
        // }
        return (
            <ContentWrapper className = 'profile-page-wrapper'>
                <div className = "images-background">
                </div>
                <div className = 'profile-page'>
                    <div className = 'user-basic-info'>
                        <ProfilePicture  firstName = { this.props.currentUser.firstName } src = { this.props.currentUser.img }/>
                        <div className = 'user-name-and-desription'> 
                            <h1> { this.props.currentUser.firstName + ' ' + this.props.currentUser.lastName } </h1>
                            <span> { this.props.currentUser.title } </span>
                        </div>
                    </div>
                    <div className = 'about-user'>
                    <Button 
                        buttonType = 'link'
                        href = 'https://www.linkedin.com/in/YanaTaube'
                        src = 'https://lh6.googleusercontent.com/4rp5xdKXECS-448dFfXqsUrGC_QvHokCLu2XTfkcsQFkan6tNFUOLaKx2hHHeNTuUcv16j4nBDXRChHDfiI8=w1920-h948'
                        text = 'www.linkedin.com/in/YanaTaube'
                        >
                    </Button>
                    <p> {this.props.currentUser.about} </p>
                    
                </div>
                </div>
                
                    
                        
                        
            </ContentWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.usersReducer.currentUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserFromDb: (id) => dispatch(fetchUserFromDb(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);