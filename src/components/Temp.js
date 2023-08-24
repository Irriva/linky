import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Newsitem from './Newsitem';

export class Temp extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let category = "all";
    category = this.props.category;
    let url = "https://inshorts.me/news/topics/" + category + "?offset=0&limit=10";
    let data = await fetch(url);
    let fetchedData = await data.json();
    this.setState({ articles: fetchedData.data.articles });
    console.log(url);
  }
  render() {
    
    return (
      <div className="container">
      <div className="row"> 
        
        {this.state.articles &&
          this.state.articles.map((element) => {
            return (
              <div className="col">
                <Newsitem
                  title={element.title}
                  desc={element.content}
                  url={element.imageUrl}
                  articleUrl={element.sourceUrl}
                  articleId={element.hashId}
                />
              </div>
            );
          })}
      </div>
    </div>  
      )
  }
}

export default Temp
