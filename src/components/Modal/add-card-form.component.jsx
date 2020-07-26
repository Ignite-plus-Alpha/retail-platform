import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import profileService from "../../services/profile-service";

class AddCardModal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open: false,
            cardHolderName: "",
            cardNumber: "",
            expirydate:"",
            upiid:"",
                                    
        }
        
    }
    



show = (dimmer) => () => this.setState({ dimmer, open: true })
close = () => this.setState({ open: false })

    //handle field change
    handleChange = event  => {
      const {value,name } = event.target;
      this.setState({[name]:value})
    };
    //handleFormSubmit
  handleSubmit= event => {
      event.preventDefault();
      const data={        
        cardholder_name:this.state.cardHolderName,
        card_number:this.state.cardNumber,
        expiry_date:this.state.expirydate,
        userid:this.props.UserId,
        upi_id:this.state.upiid,
      }
      profileService.createWallet(data)
      .then(response=>console.log(response))
      .catch(e=>console.log(e))

      this.setState({ cardHolderName:'',cardNumber:'',upiid:'',expirydate:'',open:false})
      


  }


render() {
  const { open, dimmer,cardHolderName,cardNumber,upiid,expirydate } = this.state;

  

  return (
    <div>

<button  onClick={this.show('blurring')} class="ui teal button"style={{position:"right" ,minWidth:"205px"}}>
    <i className="fa  fa-credit-card"></i>
    &nbsp;&nbsp;&nbsp;
    <b>ADD NEW CARD</b>
    </button>

      <Modal dimmer={dimmer} open={open} onClose={this.close} style={{padding:"3%", width:"40%"}}>      
      <form class="ui form" onSubmit={this.handleSubmit}>
            <h4>Card details</h4>
            <div class="field">
              <label>Card Holder Name</label>
              <div class="fields">
                <div class="sixteen wide field">
                  <input
                    type="text"
                    name="cardHolderName"
                    placeholder="Name On Card"
                    onChange={this.handleChange}
                    value={cardHolderName}
                    required
                  />
                </div>
              </div>
            </div>
            <div class="field">
              <label> Card Number</label>
              <div class="fields">
                <div class="sixteen wide field">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    onChange={this.handleChange}
                    value={cardNumber}
                    required
                  />
                </div>
              </div>
            </div>
            <div class="two fields">
            <div class=" six wide field">
                <label>upi id</label>
                <input
                type="text"
                    name="upiid"
                    placeholder="Upi Id"
                    onChange={this.handleChange}
                    value={upiid}
                    required
                    >
                </input>
              </div>
              <div class=" six wide field">
                <label>expiry date</label>
                <input
                type="month"
                    name="expirydate"
                    placeholder="Expiry Date"
                    onChange={this.handleChange}
                    value={expirydate}
                    required
                    >
                </input>
              </div>
  
            </div>
            <div
              className="action-buttons"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "3%",
              }}
            >
              <span style={{ minWidth: "150px" }}>
                <Button positive type='submit' value='Submit Form'>
                  <i class="add  icon"></i>
                  Add
                </Button>
              </span>
              <span>
                {" "}
                <button
                  class="ui google plus button"
                  style={{ minWidth: "120px" }}
                  onClick={this.close}
                >
                  <i class="delete  icon"></i>
                  Cancel
                </button>
              </span>
            </div>
          </form>
      </Modal>
    </div>
  )
}
}

export default AddCardModal
