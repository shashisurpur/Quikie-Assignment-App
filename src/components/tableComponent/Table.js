import React, { useEffect,useState } from 'react'
import Status from '../statusComponent/Status'
import DummyData from '../../MOCK_DATA.json'
import LoDash from 'lodash'
import './style.css'

/* 
const initialState=[
    { 
         id: 1,
         companyName: '141 Capital Inc',
         symbol: 'ONCP',
         marketCap:"$145.5k",
         currentPrice:'$0.001 ',
     },
     { 
         id: 2,
         companyName: 'Cardlytics Inc',
         symbol: 'DLX',
         marketCap:"$145..8B",
         currentPrice:'$66 ',
     },
     { 
         id: 3,
         companyName: 'Brightcove Inc',
         symbol: 'BCOV',
         marketCap:"$394M",
         currentPrice:'$10',
        
     },
     { 
         id: 4,
         companyName: 'BigString Corp',
         symbol: 'BSGC',
         marketCap:"$543K",
         currentPrice:'$0.003',
     },
     { 
         id: 5,
         companyName: 'Akamai Technologies Inc',
         symbol: 'AKAM',
         marketCap:"$145.4K",
         currentPrice:"$106",
     },

  ] */

function Table({data,searchItem,onClickSaveData}) {
    const leftArrow='<'
    const rightArrow='>'

    const pageCount=5;

    const intialPage = LoDash.range(1,6)
    const [paginationData,setPaginationData] = useState()
    const [pages, setpages] = useState(LoDash.range(1,6))
   
   
    

    const nextPage=(page)=>{
        setpages(LoDash.range(page[0]+5 ,page[page.length-1]+6))
        const startIndex=page[page.length-1]
        const paginatedChangedData=LoDash(DummyData).slice(startIndex).take(pageCount).value()
        setPaginationData(paginatedChangedData)
    }

    const previousPage=(page)=>{
        setpages(LoDash.range(page[0]-5 ,page[page.length-1]-4))
        const startIndex=page[0]-6
        
         const paginatedChangedData=LoDash(DummyData).slice(startIndex).take(pageCount).value()
        setPaginationData(paginatedChangedData) 
    }


    useEffect(() => {
       
        setPaginationData(LoDash(DummyData).slice(0).take(pageCount).value())
    }, [])

    
   

    return (
        <div>
            
        <table className="table table-hover ">
            
                  <thead className="table_thead">
                    <tr >
                        <th className="table_head text-center" scope="col">Company Name</th>
                        <th className="table_head text-center" scope="col">Symbol</th>
                        <th className="table_head text-center" scope="col">Market Cap</th>
                        <th className="table_head text-center" scope="col"></th>
                        <th className="table_head text-center" scope="col" >Current Price</th>
                    </tr> 
                  </thead>
                    <tbody className="table_body">
                        {
                            paginationData && paginationData.filter(val=>{
                                if(searchItem ===' '){
                                    return val;
                                }else if(val.companyName.toLowerCase().includes(searchItem.toLowerCase())){
                                    return val;
                                }else{
                                    return '';
                                }
                            }).map((row)=> (
                            <tr key={row.id} >
                                <td align="center">{row.companyName}</td>
                                <td className="" align="center">
                                    <div className="symbol justify-content-center">
                                        <i className="bi bi-dot d-inline "/>
                                        <div className="d-inline">
                                        {row.symbol}
                                        </div>
                                        
                                    </div>        
                                </td>
                                <td align="center">
                                    {row.marketCap}
                                </td>
                                <td align="center"> 
                                    <Status data={data} row={row} onClickSaveData={onClickSaveData}/> 
                                </td>
                                <td align="center">
                                    {row.currentPrice}
                                    <div>
                                        USD
                                    </div>
                                </td>
                            </tr>
                            ))
                        }
                        
                    </tbody>
        </table>
        
        <div className="card-footer table_thead position-sticky ">
            <div className="d-flex flex-row justify-content-end">
                <div className="pagination_pages d-inline">
                     {pages[0]} - {pages[pages.length-1] } of {DummyData.length}
                </div> 

                 <div className=" ">
                    {
                        pages[0] === intialPage[0] ? 
                        <div className="d-inline p-2 m-4 btn   disabled">
                            <i onClick={()=>previousPage(pages)} >{leftArrow}</i>
                        </div>:
                        <div className="d-inline p-2 m-4 btn  pagination_leftArrow">
                            <i onClick={()=>previousPage(pages)} >{leftArrow}</i>
                        </div>
                    }
                    <div className="d-inline p-2 m-4 btn pagination_rightArrow">
                        <i  onClick={()=>nextPage(pages)}>{rightArrow}</i>
                    </div>                        
                </div> 
            </div>
        </div>
        
        
     </div>
    )
}

export default Table
