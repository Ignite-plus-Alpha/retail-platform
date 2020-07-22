import http from "../http-common2";

class ProfileService {

//get user by email id
getProfileByEmailId(id){
    return http.get(`/user/${id}`)
  
  }    
}
export default new ProfileService();