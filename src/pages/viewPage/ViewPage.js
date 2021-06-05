import React, { useEffect,  } from 'react'
import SavedTable from '../../components/savedTableComp/SavedTable'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getPosts,deletePost} from '../../redux/actions/Actions'
import './style.css'

function ViewPage() {
    
    const dispatch = useDispatch();
    const data = useSelector((state) => state.reducer)

    
    const onDeleteClicked= async(post)=>{
        dispatch(deletePost(post._id))
    }

    useEffect(() => {
        dispatch(getPosts());
    }, [data,dispatch])

    return (
        <div className="container-md  ">
            <div className="card cust_container">
                <div className="card-header card_header">
                    <h4>Saved Data Table</h4>
                </div>
                <div className="card-body"> 
                    <SavedTable data={data} onDeleteClicked={onDeleteClicked}/>
                </div>
                <div className="card-footer card_footer">
                    <Link to='/home'>
                        <button type="button" className="btn btn-primary" >BACK</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ViewPage
