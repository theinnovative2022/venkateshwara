import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Search() {
    const [q]=useSearchParams();
    const qry=q.get('query');
    if(!qry){
        return(
            <div className="container container-width-auto text-center">
                Please search using the typebox in navbar
            </div>
        )
    }
    return (
        <>
            <div className="container container-width-auto text-center">
                <div className='fs-5'>
                    Search results for <p className='fw-bold d-inline'>{qry}</p>
                </div>
            </div>
        </>
    )
}
