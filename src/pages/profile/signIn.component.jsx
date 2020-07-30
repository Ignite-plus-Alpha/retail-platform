
import React from 'react'
import Button from '@material-ui/core/Button';

class SignInForm extends React.Component{
    render(){
        return(
                   <div className="sign-in-form" >  
            <form class="ui form" >
                <div class="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="email"/>
                </div>
                <div class="field">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="password"/>
                </div>
                
                
                <div className="sign-in-options" style={{display:"flex",flexDirection:"row",justifyContent:"space-between" ,marginTop:"3%"  }}>
                <span  >
                <Button variant="contained" color="primary"  >
                   Sign In
                 </Button>
                </span>
                    <span> <button class="ui google plus button" style={{minWidth:"150px"}}>
                    <i class="google  icon"></i>
                    Google SignIn
                    </button>
                    </span>
                </div>
                </form>    
                </div>    
         
        )
    }
}
export default SignInForm