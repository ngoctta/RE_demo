import React, { Component } from 'react';
import data from "./DataFilms.json";
import HeaderFirm from './HeaderFilm';

export default class ChooseFilm extends Component {
    renderItemFilm = (item) => {
        return (
            <div className="col-md-3" key={item.maPhim}>
                <div className="card "  style={{ "background" : "#2f2932", "color": "#fff"}} >
                    <a href={item.trailer}>
                        <img className="card-img-top" src={item.hinhAnh} alt="" />
                   </a>
                    <div className="card-body">
                        <h5 className="card-title">{item.tenPhim}</h5>
                        <p className="card-text">{(new Date(item.ngayKhoiChieu)).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
            
        );
    }
    renderContent = () => {
        return data.map((item, index) => {
            return this.renderItemFilm(item);
        });
    }
    render() {
        
        return (
            <div className="" style={{ background: "url(./background/avanger.jpg)"}}>
                <HeaderFirm></HeaderFirm>
                <div className="container-fluid py-4">
                    <div className="row">
                        { this.renderContent()}
                    </div>
                </div>
            </div>
        )
    }
}
