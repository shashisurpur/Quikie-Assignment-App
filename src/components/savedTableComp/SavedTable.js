import React from 'react'

const SavedTable = ({data,onDeleteClicked}) => {
    
    return (
        <table className="table table-hover">
            <tbody>
                {
                    data.map((row)=>(
                        <tr key={row.id}>
                            <td align="center">{row.companyName}</td>
                            <td align="center">
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
                                <button type="button"
                                 className="btn btn-primary"
                                 onClick={()=>onDeleteClicked(row)}
                                 >
                                    DELETE
                                </button>
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
    )
}

export default SavedTable
