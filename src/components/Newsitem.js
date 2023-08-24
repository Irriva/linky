import React, { Component } from "react";

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
        <Card className="m-3">
          <Card.Img
            style={{ width: 286, height: 158 }}
            variant="top"
            src={curl}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{cdesc}</Card.Text>
            <a href={articleUrl}>
              <Button className="btn-success btn-sm">read more</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Newsitem;
