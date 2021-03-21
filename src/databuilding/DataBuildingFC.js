import React from 'react'
let namef = {
    title: 'a',
    age: 2,
    content:"đâfafsfdasfaf"
}
export default function DataBuildingFC() {
    let  name = {
        title: 'asss',
        age: 2,
        content:"đâfafsfdasfaf"
    }
    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <img className="card-img-top" src="ss" alt="aaa" />
                        <div className="card-body">
                            <h4 className="card-title">{name.title}</h4>
                            <p className="card-text">{name.content}</p>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}
