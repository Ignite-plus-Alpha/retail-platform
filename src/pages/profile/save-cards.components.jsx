import React from 'react'
import './profile.styles.scss'
import { Divider } from '@material-ui/core';
import ProfileDataService from '../../services/profile-service'
import {WalletCard} from '../../components/card/WalletCard.component'
import AddCardModal from '../../components/Modal/add-card-form.component'
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
            
                <div className="heading"style={{display:"flex",flexDirection:"row" ,justifyContent:"space-between",marginBottom:"3%" }}>
                    <span><h2>Saved Cards</h2></span>
                    <AddCardModal UserId={this.state.currentUserUserId}/>
                       </div>  
                 <h5>DEFAULT CARD</h5>     
                {this.state.wallets.map(wallet=> {
                  if(wallet.wallet_id===this.state.defaultCard)
                  return <WalletCard emailId={this.state.email}  walletId={wallet.wallet_id} currentUserUserId={this.state.currentUserUserId} cardHolderName={wallet.cardholder_name} cardNumber={wallet.card_number} expiryDate={wallet.expiry_date} defaultCard={this.state.defaultCard}/>                
                })}
              <h5>Other Cards</h5>     
              {this.state.wallets.map(wallet=>  {
                if(wallet.wallet_id!==this.state.defaultCard)
                return <WalletCard emailId={this.state.email} walletId={wallet.wallet_id} currentUserUserId={this.state.currentUserUserId} cardHolderName={wallet.cardholder_name} cardNumber={wallet.card_number} expiryDate={wallet.expiry_date} defaultCard={this.state.defaultCard}/>
              })}         

               
            </div>
        )
      


    }
} 
export default SaveCards