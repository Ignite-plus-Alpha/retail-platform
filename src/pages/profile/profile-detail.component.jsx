import React from 'react'
import './profile.styles.scss'
import ProfileDataService from '../../services/profile-service'

import SignInForm from './signIn.component'
import SignUp from '../../components/signUp/SignUp.component';
import ProfileDetailCard from '../../components/card/ProfileDetailCard.component'
import UpdateProfile from '../../components/Modal/update-profile-form.component';


class ProfileDetailPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            userEmail:"chinmay@gmail.com",
            user:null,
            firstName:'',
            lastName:'',
            mobile:'',

           
        }        
    }

    componentDidMount(){
        ProfileDataService
        .getProfileByEmailId(this.state.userEmail)
        .then((response) => {
          this.setState({
            user: response.data,
            firstName:response.data.first_name,
            lastName:response.data.last_name,
            mobile:response.data.mobile,       
            
            
          });
        })
        .catch((e) => {
          console.log(e);
        });
      
    }
    

   handleSignIn=()=>{
       
    }
    render(){

       const {userEmail,firstName,lastName,mobile} = this.state;
        console.log(this.state.user)
        
        if(this.state.userEmail!==null){
            return(
            
                <div className='profilePage'>
                 
                <ProfileDetailCard email={userEmail} firstName={firstName} lastName={lastName} mobile={mobile} />
                </div>
                
            )
        }
        else return(
            <div style={{display:"flex" ,flexDirection:"row"}}>
                <div style={{padding:"2%" ,width:"40%"}}>
                <a><h3>I do not have an account</h3></a>
                    <p>Sign in with email and password</p>
                <SignInForm/>
                </div>

                <div style={{padding:"2%",width:"50%"}}>
                
                <a><h3>I already have an account</h3></a>
                    <p>Sign Up with email and password</p>
                <SignUp/>
                </div>
            </div>
        )


    }
} 
export default ProfileDetailPage