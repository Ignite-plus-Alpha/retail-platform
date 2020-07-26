import React from 'react'
import './profile.styles.scss'
import { Divider } from '@material-ui/core';
import ProfileDataService from '../../services/profile-service'
import {WalletCard} from '../../components/card/WalletCard.component'
import ModalExampleDimmer from '../../components/Modal/modal.component'
import {ActionConformationModal} from '../../components/Modal/action-conformation-modal.component'



class SaveCards extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            email:"chinmay@gmail.com",
            currentUserUserId:"fee623af-3307-4ab6-9362-a4fc35aadf2e",
            wallets:[],
            cardHolderName:'',
            cardNumber:'',
            expiryDate:'',
            defaultCard:'',
            user:null

        }
        
    }


    componentDidMount(){

        ProfileDataService
        .getProfileByEmailId(this.state.email)
        .then((response) => {
          this.setState({
            user: response.data,
            defaultCard:response.data.default_card,          
            
          });
        })
        .catch((e) => {
          console.log(e);
        });
  
        ProfileDataService
        .getWalletsByUserId(this.state.currentUserUserId)
        .then((response) => {
          this.setState({
            wallets: response.data,      
            
          });
        })
        .catch((e) => {
          console.log(e);
        })

    }
    

    render(){
    
        return (
           
            <div className="profile-addresses-page" >
               {/* <ModalExampleDimmer/>
               <ActionConformationModal/> */}
               
           
                <div className="heading"style={{display:"flex",flexDirection:"row" ,justifyContent:"space-between",marginBottom:"3%" }}>
                    <span><h2>Saved Cards</h2></span>
                    <button class="ui violet basic button"style={{position:"right" ,minWidth:"200px"}}><i className="fa fa-plus"></i><b>ADD NEW CARD</b></button>
                </div>  
                 <h5>DEFAULT CARD</h5>     
                {this.state.wallets.map(wallet=> {
                  if(wallet.wallet_id===this.state.defaultCard)
                  return <WalletCard walletId={wallet.wallet_id} currentUserUserId={this.state.currentUserUserId} cardHolderName={wallet.cardholder_name} cardNumber={wallet.card_number} expiryDate={wallet.expiry_date} defaultCard={this.state.defaultCard}/>                
                })}
              <h5>Other Cards</h5>     
              {this.state.wallets.map(wallet=>  {
                if(wallet.wallet_id!==this.state.defaultCard)
                return <WalletCard walletId={wallet.wallet_id} currentUserUserId={this.state.currentUserUserId} cardHolderName={wallet.cardholder_name} cardNumber={wallet.card_number} expiryDate={wallet.expiry_date} defaultCard={this.state.defaultCard}/>
              })}  

              

               
            </div>
        )
      


    }
} 
export default SaveCards