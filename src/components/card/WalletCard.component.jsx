import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import ProfileService from '../../services/profile-service'
import {ActionConformationModal} from '../../components/Modal/action-conformation-modal.component'

const useStyles = makeStyles({
  root: {
    minWidth: 10,
    margin:5
  },
  pos: {
    marginBottom: 2,
  },
});

export function WalletCard({currentUserUserId,walletId,cardHolderName,cardNumber,expiryDate,defaultCard}) {
  const classes = useStyles();

  function GetCardType(number)
{
    // visa
    var re = new RegExp("^4");
    if (number.match(re) != null)
        return "Visa";

    // Mastercard 
    // Updated for Mastercard 2017 BINs expansion
     if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)) 
        return "Mastercard";

    // AMEX
    re = new RegExp("^3[47]");
    if (number.match(re) != null)
        return "AMEX";

    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (number.match(re) != null)
        return "Discover";

    // Diners
    re = new RegExp("^36");
    if (number.match(re) != null)
        return "Diners";

    // Diners - Carte Blanche
    re = new RegExp("^30[0-5]");
    if (number.match(re) != null)
        return "Diners - Carte Blanche";

    // JCB
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (number.match(re) != null)
        return "JCB";

    // Visa Electron
    re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (number.match(re) != null)
        return "Visa Electron";

    return "xyz";
}

const handleDelete=(currentUserUserId,walletId)=>{
  console.log("deleted for" ,currentUserUserId,"*****",walletId)
  ProfileService.
  deleteCardByUserIdWalletId(currentUserUserId,walletId)
  .then(response=>console.log(response))
  .catch(e=>{
    console.log(e)
  })
}
const handleEdit=(currentUserUserId,walletId)=>{
  console.log("edited for" ,currentUserUserId,"*****",walletId)
}



  return (
      <div>
    
    <Card className={classes.root}>              
       
      <CardContent>         
      <Typography variant="h5"  style={{marginBottom:"2%"}}>
      {defaultCard===walletId?  <Chip  size="small" label="Default"  float="right" />:null} Card Details     
             </Typography>
        <Divider style={{marginBottom:"1%"}}/>
        <Typography className={classes.pos} color="textSecondary">
        Card Holder Name&nbsp;:&nbsp;{cardHolderName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Card Number &nbsp;:&nbsp;{cardNumber=cardNumber.toString().replace(/\d(?=\d{4})/g, "*")}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Expiry&nbsp;Date&nbsp;:&nbsp;{expiryDate}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Card Type &nbsp;:&nbsp;{GetCardType(cardNumber)}
        </Typography>
      </CardContent>
      <CardActions>
      <div className= "optionButtons" style={{display:"flex",flexDirection:"row",justifyContent:"space-between"  ,minWidth:"100%",padding:"1%" }}>
        <Button variant="outlined" color="secondary"
       startIcon={<DeleteIcon />}  onClick={()=>   handleDelete(currentUserUserId,walletId)}>
        
        Delete
      </Button>
      <Button variant="outlined" sie="small" color="primary"
      startIcon={<EditIcon />} onClick={()=>handleEdit(currentUserUserId,walletId)}>
        edit
      </Button>
  
      </div>
    
      </CardActions>
    </Card>
    </div>
  );
}
