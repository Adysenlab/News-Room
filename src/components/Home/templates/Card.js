import React, { Component } from 'react';


export default class Posting extends React.Component{
    render(){
        return (
            <div class="w3-container w3-card w3-white w3-round w3-margin"><br/>
            <h4> video </h4>
            <br/>
        <hr class="w3-clear"/>
          
        <div className="embed-container">
        <iframe src={this.props.postings.video} title={this.props.postings.video} width="560" height="315" 
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
        </iframe>
         </div>   

            <br/>
            
            <button type="button" 
            class="w3-button w3-theme-d1 w3-margin-bottom">
            <i class="fa fa-thumbs-up"></i>
             Action 1</button> 


        <button type="button" 
        class="w3-button w3-theme-d2 w3-margin-bottom">
        <i class="fa fa-comment"></i>
          Action 2</button> 
            
        </div>
        );
        
    }
}