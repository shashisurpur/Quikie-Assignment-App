import React from 'react'
import {Link} from 'react-router-dom'


const Status = ({data,row,onClickSaveData}) => {
 
    return (
        <div >
            {
               data && data.find(e=>e.companyName===row.companyName) ? 
                <Link to='/view'> <button type="button" className="btn btn-primary">View</button></Link> 
                :
                    <button type="button" className="btn btn-info" onClick={()=>onClickSaveData(row)} >Save Data</button>                   
            }
            
        </div>
    )
}

export default Status
