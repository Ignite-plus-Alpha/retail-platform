import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import './signup.styles.css'
import Button from '@material-ui/core/Button';
import Axios from "axios";

const styles = theme => ({
        button: {
          display: "flex",
          margin: theme.spacing.unit,
          justifyContent: 'flex-end',
          
        },
        input: {
          display: 'none',
        },
      });

      

export default class SignUp extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
      
//       user: []
             
//     }
    
// }

state = {
  users: '',
}

handleChange = event => {
  this.setState({ users: event.target.value });
}

// handleSubmit = event => {
//   event.preventDefault();

//   const user = {
//     users: this.state.users
//   };

         
            
//               Axios.post(`http://localhost:8080/api/user`, {user})
//         .then(res => {
            
//           console.log(res);
//           console.log(res.data);
//         })
//       }
              
 
  //     signinGoogle = () =>{
  //       Axios.get(`http://localhost:8080/user`)
  // .then(response => {
  //   console.log(response.data);
  //  // this.setState({User: response.data});
    
  // });
  //     }          
    render() {
      
        const { classes } = this.props;
        return (
          <div className="signup-form" >
            <form >
             


                <div className="form-group">
                <TextField
          id="fName"
          label="First Name"
          style={{ margin: 8 }}
          placeholder="Enter first name"
          inputtype="password"
          helperText="Mandotary"
          fullWidth
          margin="normal"
          variant="outlined"
 
          />
                <TextField
          id="lName"
          label="Lastname"
          style={{ margin: 8 }}
          placeholder="Enter your lastname"
          helperText="Mandotary"
          fullWidth
          margin="normal"
          variant="outlined"

          />
                <TextField
          id="email"
          label="Email"
          type="email"
          style={{ margin: 8 }}
          placeholder="Enter email address"
          helperText="Mandotary"
          fullWidth
          margin="normal"
          variant="outlined"

        />
          <TextField
          id="standard-password-input"
          label="Password"
          style={{ margin: 8 }}
          fullWidth
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          
          />
                    <TextField
          id="standard-password-input"
          label="Confirm Password"
          style={{ margin: 8 }}
          fullWidth
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          
          />
        
                </div>
                
                <div className="sign-in-options" style={{display:"flex",flexDirection:"row",justifyContent:"space-between" ,marginTop:"3%"  }}>
                <span  style={{minWidth:"150px"}}>
                <Button variant="contained" color="primary"  >
                   Sign Up
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
        );
    }
}
