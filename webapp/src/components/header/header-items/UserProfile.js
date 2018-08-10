import React, {Component} from 'react';
import HeaderItem from './../header-item/HeaderItem'


let user = {
    name: 'Yana',
    img: "./../../../img/logo.png"
}
class UserProfile extends HeaderItem {
    render() {
        return (
            <div> 
                <img src={user.img}/>  
                <HeaderItem text={user.name}/>
            </div>
        );
    }
}

export default UserProfile;