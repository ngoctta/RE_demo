import React from 'react'

export default function HandleEventFC() {
    let handleClick = (name) => {
        alert(name);
    }
    return (
        <div>
            <a name id className="btn btn-info" href="#" role="button" onClick={() => { handleClick('ngoc fc') }} >event function</a>

        </div>
    )
}
