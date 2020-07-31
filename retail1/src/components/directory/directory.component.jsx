import React from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'
import productService from '../../services/product-service';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            groups:[]
        }
    }
    componentDidMount(){
        productService.getAll()
        .then(response => {
          this.setState({
            groups: response.data
          });
        })
        .catch(e => {
          console.log(e);
        });
    }

    render(){
        return <div className='directory-menu'>
            {this.state.groups.map(({groupId,imageUrl}) => 
            <MenuItem key={groupId} groupId={groupId} imageUrl={imageUrl}/>)

            }
        </div>
    }

}
export default Directory