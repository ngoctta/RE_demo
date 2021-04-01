import React, { Component } from 'react';
import "./style.css";
import wheels from './wheels.json';
import features from './arrayFeatures.json';
import xoay from 'js-cloudimage-360-view';

export default class ChooseCarColor extends Component {
    state = {
        idWheel: 1,
        idCar: 1
    }
    renderColor = () => {
        return features.map((item, index) => {
            return (
                 <div className={`border mb-3 ${ this.state.idCar == item.id ? " border-warning" : ""}`} key={index}>
                    <div className="d-flex p-2" style={{ cursor: "pointer"}} key={ item.id } onClick={() => {this.handleChooseColor(item.id)}}>
                        <div style={{ width: "60px", marginRight: "10px"}}>
                            <img src={item.img} className="img-fluid w-100"/>
                        </div>
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.type}</p>
                        </div>
                    </div>
                </div>
            );
        })
    };
    handleChooseColor = (id) => {
        this.setState({idCar: id});
    }
    handleChooseWheels = (id) => {
        this.setState({idWheel: id});
    }
    renderWheels = () => {
        return wheels.map((item, index) => {
            return ( 
            <div className={`border mb-3 ${ this.state.idWheel == item.idWheel ? " border-warning" : ""}`} key={index}>
                <div className="d-flex p-2" style={{ cursor: "pointer"}} onClick={() => {this.handleChooseWheels(item.idWheel)}}>
                    <div style={{ width: "60px", flexShrink: 0, marginRight: "10px"}}>
                        <img src={ item.img } className="img-fluid w-100"/>
                    </div>
                    <div>
                        <p><b>{ item.title }</b></p>
                        <p className="text-success">{ item.price }$</p>
                    </div>
                </div>
            </div>)
        })
    }
    getFolderImage = () => {
        let car = features.filter(item => item.id == this.state.idCar)[0];
        let wheelItem = car.wheels.filter(item => item.idWheel == this.state.idWheel)[0];
        return "./images/" + wheelItem.srcImg;
    }

    render() {
        return (
           <div className="container my-4">
               <div className="row">
                    <div className="col-md-7">
                        <div className="border">
                            {/* <div className="cloudimage-360" data-folder= data-filename="civic-{index}.jpg" data-amount={8} /> */}
                        <div className="cloudimage-360" data-folder="./images/images-black/images-black-1/" data-filename="civic-{index}.jpg" data-amount={8} />

                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card mb-3">
                            <div className="card-header">
                                Exterior Color
                            </div>
                            <div className="card-body">
                                { this.renderColor()}
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                Wheels
                            </div>
                            <div className="card-body">
                              { this.renderWheels() }
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}
