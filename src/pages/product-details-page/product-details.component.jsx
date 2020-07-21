import React from 'react'
import productService from '../../services/product-service'
import WomenTopWear from './item-detail-table/womeN-top-wear';
import Book from './item-detail-table/book';
import Grocery from './item-detail-table/grocery';
import Chair from './item-detail-table/chair';
import './product-details.styles.scss'
import Footwear from './item-detail-table/footwear'



class ProductDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categoryId:'',
          groupId:'',
          itemId:'',
            item: '',
            description:'',
             size:[],
             chosenSize:'',
  
                       
        }
    }


    componentDidMount(){
    

       this.setState({categoryId:this.props.match.params.categoryId,groupId:this.props.match.params.groupId,itemId:this.props.match.params.itemId},
        ()=>(
          productService.getItemsByGroupIdCategoryIdItemId(this.state.groupId,this.state.categoryId,this.state.itemId)
          .then(response => {  
            console.log(response)           
            this.setState({
              item: response.data,
              description:response.data.description,
              size:response.data.size,
              
            });
           
          })
          .catch(e => {
            console.log(e);
          })
        ))
    }

    renderSwitchCategory(category) {
      switch(category) {
        case 'dress':
          return <WomenTopWear description={this.state.description} />;
          case 'jacket and shrug':
            return <WomenTopWear description={this.state.description} />;
            case 'shirt':
              return <WomenTopWear description={this.state.description} />;
              case 'kurta':
                return <WomenTopWear description={this.state.description} />;
                case 'jeans':
                  return <WomenTopWear description={this.state.description} />;
              case 'chair':
                return <Chair description={this.state.description} />;
                default : return <></>

        
      }
    }
    renderSwitchGroup(group) {
      switch(group) {
        case 'book':
          return <Book description={this.state.description} />;  
          case 'footwear':
            return <Footwear description={this.state.description}/>
        case 'grocery':
          return <Grocery description={this.state.description} />;  
          default :
          return <></>    
                
      }
    }
    

    render () {  
      
      console.log(this.state.size)
             
             return (
                 
             <div className='product-preview'>                                 
             <div className="flexbox-container-column">
               <div className="item-image"><img src={this.state.item.imageUrl} alt="product" style={{ maxWidth: "60%",height:"auto"}} ></img></div>
               <div className="flexbox-container-row">
                 <div className="item-header">              
                   <div style={{color:"black" ,fontSize:"35px",fontWeight:"bold" ,marginBottom:"2%"}}>{this.state.item.title}</div>
                   <div className="subtitle" style={{color:"gray" ,marginTop:"10px",marginBottom:"10px",fontSize:"15px",fontWeight:"bold"}}>{this.state.groupId }  {this.state.item.categoryId}</div> 
                   <div className="price" style={{color:"teal" ,fontSize:"18px",fontWeight:"bold"}}>Rs. {this.state.item.price}</div>
                   {this.state.size!==null ? (
                   <div className="size">Select size : {this.state.size.map(s=><a class="ui teal circular label" style={{margin:"10px"}} onClick={()=>(this.setState({chosenSize:s}))}>{s}</a>)}</div>
                   ) : <></>}      
                 </div>
                 <div class="ui divider"></div>            
               <div className="specification-table" style={{width:"500px"}}>{this.renderSwitchCategory(this.state.categoryId)}</div>
               <div  className="specification-table">{this.renderSwitchGroup(this.state.groupId)} </div>         
               <span><button class="ui teal button" style={{margin:"7%"}} onClick={()=>{console.log("add to cart")}}> <i class="icon cart" ></i>Add to cart</button></span>
               </div>
               {console.log(this.state.chosenSize)}
             </div>
             
                 </div>
              
             )
         }
     }
     export default ProductDetailsPage;
     