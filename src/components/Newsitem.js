import React, { Component } from "react";
import './card.css';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export class Newsitem extends Component {
  constructor() {
    super();
    //console.log("ava")
  }
  render() {
    let title = this.props.title;
    let curl = this.props.url;
    let cdesc = this.props.desc;
    let articleId = this.props.articleId;
    let articleUrl = this.props.articleUrl;
    //const {title , cdesc }=this.Props;

    return (
      <div>
        
        <Card className="m-3 d-flex justify-content-center">
          <Card.Img
             //style={{ width:312, height: 158 }}
            variant="top"
            className=".img-fluid. max-width: 100%;"
            src={curl}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{cdesc}</Card.Text>
            <div className="d-flex justify-content-end">
            <a href={articleUrl}>
              <Button className="btn-success btn-sm mx-2">read more </Button>
            </a>
            </div>
          </Card.Body>
        </Card>
        
        </div>
    );
  }
}

export default Newsitem;
