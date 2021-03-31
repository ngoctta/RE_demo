import React, { Component } from 'react';
import dataGlasses from "./dataGlasses.json";
import style from "./ChooseGlasses.module.css";

export default class ChooseGlasses extends Component {
    state = {
        glassesId: 0
    }
    renderListGlasses = () => {
        return dataGlasses.map((glasses, index) => {
            return  <div className="col-md-2 pb-3" key={index} style={{cursor:"pointer"}} onClick={() => { this.handleClickGlasses(glasses.id)}}>
                        <img src={ glasses.url } className="img-fluid rounded-top w-100" alt=""/>
                    </div>
        })
    }
    handleClickGlasses = (id) => {
        this.setState({glassesId: id});
    }
    getGlassesActive = () => {
        let arr = dataGlasses.filter(glasses => glasses.id === this.state.glassesId);
        if(arr.length > 0){
            return arr[0].url;
        }
    }
    render() {
    
        return (
            <div style={{background: "url(./glassesImage/background.jpg) no-repeat", backgroundSize: "cover", minHeight: "100vh"}}>
                <div className="p-4 text-center text-white" style={{background: "rgba(0,0,0,0.5)"}}>TRY GLASSES APP ONLINE</div>
                <div className="container">
                    <div className="row justify-content-around my-4">
                        <div className="col-md-4 col-6">
                            <div className={style.model}>
                                <img src="./glassesImage/model.jpg" className="img-fluid rounded-top w-100" alt=""/>
                                <div className={style.content_model}>
                                    <b>FENDI F8750</b>
                                    Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </div>
                                <div className={style.glasses_model}>
                                    <img src="./glassesImage/v1.png" className='img-fluid d-inline rounded-top' alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className={style.model}>
                                <img src="./glassesImage/model.jpg" className="img-fluid rounded-top w-100" alt=""/>
                                <div className={style.glasses_model}>
                                    <img src={this.getGlassesActive()} className='img-fluid d-inline rounded-top' alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-light p-3">
                        { this.renderListGlasses() }
                    </div>
                </div>
            </div>
        )
    }
}
