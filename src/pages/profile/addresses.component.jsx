import React from 'react'
import './profile.styles.scss'
import { Divider } from '@material-ui/core';




class Addresses extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            currentUser:"somya"
        }
        
    }

    render(){
        return (

            <div className="profile-addresses-page" >

                <h2>Saved Addresses</h2>
                <h5>DEFAULT ADDRESS</h5>
       

            <div class="ui cards">
            <div class="card">
                <div class="content">
                <p>{this.state.currentUser}</p>
             
                <div class="meta">
                    Friends of Veronika
                </div>
                <div class="description">
                    Elliot requested permission to view your contact details
                </div>
                </div>
                <div class="extra content">
                <div className="sign-in-options" style={{display:"flex",flexDirection:"row",justifyContent:"space-around"  }}>
                <span class="material-icons">
                    edit
                    </span>
                <span class="material-icons">
                    delete
                    </span>
                    
                </div>
                   
               
                </div>
            </div>

            <Divider/>
  

</div>
</div>
        )


    }
} 
export default Addresses