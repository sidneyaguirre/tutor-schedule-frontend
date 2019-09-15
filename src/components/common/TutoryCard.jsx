import React, { Component } from "react";
import { MdAccessTime, MdToday, MdPlace } from "react-icons/md";

class TutoryCard extends Component {
    render() {
        return (
            <div className="card rounded-lg  is-box">
                <div className="card-body">                  
                    <h5 className="card-title">{this.props.data.nameMateria}</h5>
                    <div className="is-font-small text-primary ">
                        <span className="is-font-weight-600 is-open-sans"> Monitor: </span>
                        {this.props.data.nameInstructor}
                    </div>
                    <div className="is-font-small">                        
                        {this.props.data.description}
                    </div>
                    <div  className="is-font-small"> 
                        <MdAccessTime /> {this.props.data.timeInit} - {this.props.data.timeEnd} 
                    </div>
                    <div  className="is-font-small">
                        <MdToday /> {this.props.data.date}
                    </div>
                    <div  className="is-font-small">
                        <MdPlace /> {this.props.data.place}
                    </div>
                    
                    <button className="btn btn-primary btn-sm float-right">Asistir</button>
                </div>
            </div>

        );
    }
}
export default TutoryCard;
