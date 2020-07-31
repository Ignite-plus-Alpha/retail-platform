import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'



class HomePage extends React.Component {
    render(){
        return (
            <div className='homePage'>
                <center>
                <Directory/> 
                </center>     
            </div>
        )
    }

}
export default HomePage