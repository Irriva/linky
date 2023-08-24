import React, { Component } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";
import Temp from "./Temp";

export class News extends Component {
  static defaultProps = {
    category: "all",
  };

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
    let url =
      "https://inshorts.me/news/topics/" + category + "?offset=0&limit=10";
    let data = await fetch(url);
    let fetchedData = await data.json();
    this.setState({ articles: fetchedData.data.articles });

    console.log();
  }

  async fetchMoreData() {
    let url = "https://inshorts.me/news/science?offset=0&limit=100";

    try {
      let data = await fetch(url);
      let fetchedData = await data.json();

      this.setState({
        articles: fetchedData.data.articles.concat(fetchedData.articles),
      });
    } catch (e) {
      console.log(e);
    }
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

                  <p>hello</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default News;
