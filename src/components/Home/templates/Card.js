import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Posting extends React.Component{
    render(){
        return (
            <Card>
            <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="images/jsa-128.jpg"
            />
            <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
            <img src="images/nature-600-337.jpg" alt="" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
            {this.props.postings.video}
            
            
            </CardText>
            <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
            </CardActions>
        </Card>
        );
        
    }
}