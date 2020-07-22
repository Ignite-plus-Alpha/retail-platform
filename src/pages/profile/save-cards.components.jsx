import React from 'react'
import './profile.styles.scss'




class SaveCards extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            currentUser:"somya"
        }
        
    }
    

   handleSignIn=()=>{
    // AuthenticationService.get()
    // .then((response) => {
    // //   this.setState({
    // //     items: response.data,
    // //   });
    // console.log(response.data)
    // })
    // .catch((e) => {
    //   console.log(e);
    // })
       
    }
    render(){
        if(this.state.currentUser!==null){
            return(
                <center>
                <div className='profilePage'>
                    <div class="ui secondary vertical pointing menu">
                        cards

                    </div>
                </div>
                </center>
            )
        }
        else return(
            <div>SAve Cards</div>
        )


    }
} 
export default SaveCards