import React from 'react'
import './category-item.styles.scss'
import {withRouter} from 'react-router-dom'

const CategoryItem = ({categoryId,imageUrl,history,match}) => (
    
    <div className='collection-item'>
      
        <div className='image' onClick={()=>history.push(`${match.url}/${categoryId}`)}
        style={{backgroundImage:`url(${imageUrl})`}}
        />
        <div className='collection-footer'>
            <div className='name'>{categoryId}</div>
        </div>
    </div>
 
)
export default withRouter(CategoryItem);