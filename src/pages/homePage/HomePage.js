import React,{useEffect,useState} from 'react'
import Table from '../../components/tableComponent/Table'

import './stle.css'
import { useDispatch,useSelector } from 'react-redux'
import { getPosts,createPost} from '../../redux/actions/Actions'


function HomePage() {
    const [searchItem, setsearchItem] = useState('')

    const dispatch = useDispatch();
    const data = useSelector((state) => state.reducer)
    
    const onClickSaveData= async(post)=>{
        dispatch(createPost(post));          
    }
   
    useEffect(() => {
        dispatch(getPosts());
    }, [data,dispatch])
    
    return (
        <div className="container-md" id="page-content">
            
                    <div className="card ">
                        <div className="card-header d-flex ">
                            <div className="header_card">
                                <h5>Stock Details Table </h5>
                            </div>
                            
                            <div className="searchBox_card d-flex ">
                                <i className="bi bi-search"></i>
                                <input  
                                    type="text" 
                                    placeholder="Search by Company Name" 
                                    /* aria-label="Search"  */
                                    onChange={(e)=>{
                                        setsearchItem(e.target.value)
                                    }}
                                />
                            </div>
                            
                        </div>

                        <div className="card-body">
                            <Table data={data} searchItem={searchItem} onClickSaveData={onClickSaveData}/>
                        </div>
                    </div>
                   
        </div>
        
    )
}

export default HomePage
