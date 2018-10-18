    import React, { Component } from 'react';
    import './ProfilePage.css';
    import ContentWrapper from '../../common/content-wrapper/ContentWrapper';
    import ProfilePicture from '../../common/profile-picture/ProfilePicture';
    import Button from'../../common/button/Button';
    import { withRouter } from 'react-router-dom';
    import { connect } from 'react-redux';

    class ProfilePage extends Component {
        render() {
            return (
                <ContentWrapper className = 'profile-page-wrapper'>
                    <div className = "images-background"></div>
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
                                href = { this.props.currentUser.website }
                                src = 'http://res.cloudinary.com/dat4frntv/image/upload/v1539456960/linkedin.png'
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
    export default connect(mapStateToProps)(ProfilePage);