import http from "../http-common2";

class ProfileService {

//get user by email id
getProfileByEmailId(emailId){

    return http.get(`/user/${emailId}`)
  
  }   
  //get user address userId id
getAddressesByUserId(userId){

  return http.get(`/address/${userId}`)

}    
  //get user address userId id
  getWalletsByUserId(userId){

    return http.get(`/wallet/${userId}`)
  
  } 

    //delete card by userId cardId
    deleteCardByUserIdWalletId(userId,walletId){

      return http.delete(`/wallet/${userId}/${walletId}`)
    
    }

        //delete card by userId cardId
        deleteAddressByUserIdAddressId(userId,addressId){

          return http.delete(`/address/${userId}/${addressId}`)
        
        }
}
export default new ProfileService();