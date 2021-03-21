import React, { Component } from 'react'

export default class ChooseCarColor extends Component {
    state = {
        colorId: 1
    }
    data = [
        {
            id: 1,
            image: "https://salt.tikicdn.com/cache/w444/ts/product/27/55/4e/54cc3939b3d58d5a6e9aa65c15c65d20.jpg",
            name: "Bạc",
            price: "1000"
        },
        {
            id: 2,
            image: "https://salt.tikicdn.com/cache/w444/ts/product/b0/39/57/a5c7b46a18cd2e077fb2d805ed600e67.jpg",
            name: "Xanh Dương",
            price: "2000"
        },
        {
            id: 3,
            image: "https://salt.tikicdn.com/cache/w444/ts/product/14/f0/60/1ceceef2a9a64bef35e415ab1c3635e0.jpg",
            name: "Vàng",
            price: "1200"
        },
        {
            id: 4,
            image: "https://salt.tikicdn.com/cache/w444/ts/product/86/dd/0c/116f1383ebab5e5af8e71301a80d1b17.jpg",
            name: "Xám",
            price: "1100"
        },

    ];
    handleClickItemColor = (id) => {
        this.setState({colorId: id});
    };
    renderItemColor = (id, name) => {
        return <button key={id} onClick={() => { this.handleClickItemColor(id) }} className={`list-group-item list-group-item-action list-group-item-primary ${this.state.colorId === id ? "active" : ""}`} >{name}</button>
    };
    renderListColor = () => {
        let listProduct = [];
        let dataProduct = this.data;
         for (var i=0; i < dataProduct.length; i++) {
            listProduct.push(this.renderItemColor(dataProduct[i].id, dataProduct[i].name));
        } 
        return (
            <div className="list-group">
                { listProduct }
            </div>
        )
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <img src={this.data[this.state.colorId - 1].image} className="img-fluid rounded-top" alt="" />
                    </div>
                    <div className="col-md-4">
                        { this.renderListColor() }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-border mt-3 ">
                            <tbody>
                                <tr>
                                    <th scope="row">Color</th>
                                    <td>{this.data[this.state.colorId].name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Price</th>
                                    <td>{this.data[this.state.colorId].price}$</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
