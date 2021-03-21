import React, { Component } from 'react'

export default class RenderData extends Component {
    state = {
        status: false,
        data : {
            id: 1,
            name: 'nguyen van a',
            age: 10
        }
    }
    status = false;
    data = {
        id: 1,
        name: 'nguyen van a',
        age: 10
    }
    handleClick = () => {
        if(this.state.status) {
            alert('noe');
            this.setState({ status: false}, () => { console.log(this.state.status);})
        }
        else {
             alert('ok');
            this.setState({ status: true}, () => { console.log(this.state.status);})
        }
        
    }
    renderDataUser = () => {
        if(this.state.status) {
            return (
               <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{this.data.name}</h4>
                    <p className="card-text">{this.data.age}</p>
                </div>
                </div>

            )
        } 
        return <button className="btn btn-primary" role="button" onClick={ this.handleClick}>Đăng nhập</button>
    }
    render() {
        return (
            <div>
               { this.renderDataUser() }
            </div>
        )
    }
}
