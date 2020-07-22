import React from 'react'
import './profile.styles.scss'

import SignInForm from './signIn.component'
import SignUp from '../../components/signUp/SignUp.component';


class ProfileDetailPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            currentUser:null
        }
        
    }
    

   handleSignIn=()=>{
       
    }
    render(){
        if(this.state.currentUser!==null){
            return(
                <center>
                <div className='profilePage'>
                    <div class="ui secondary vertical pointing menu">
                        profile

                    </div>
                </div>
                </center>
            )
        }
        else return(
            <div style={{display:"flex" ,flexDirection:"row"}}>
                <div style={{padding:"2%" ,width:"40%"}}>
                    <h3>I already have an account</h3>
                    <p>Sign in with email and password</p>
                <SignInForm/>
                </div>

                <div style={{padding:"2%",width:"50%"}}>
                <h3>I do not have an account</h3>
                    <p>Sign Up with email and password</p>
                <SignUp/>
                </div>
            </div>
        )


    }
} 
export default ProfileDetailPage