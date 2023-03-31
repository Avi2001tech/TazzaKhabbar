import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.props.category} - NewsApp`;
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1930add188364321a7750c9d08159b7c&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResultss: parsedData.totalResults,
      loading: false,
    });
  }

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=1930add188364321a7750c9d08159b7c&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=1930add188364321a7750c9d08159b7c&page=${
        this.state.page + 1
      }&pageSize=5`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    const textStyle = {
      background:
        "linear-gradient(90deg, #FF9933, #FF9933 40%, #138808 60%, #138808)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textDecoration: "underline",
      textDecorationColor: `#000000`,
      textAlign: "center",
      margin: '40px 0px'
    };
    return (
      <>
        <div className="Container my-3">
          <h1 style={textStyle} gap={8}>
            Aaj Ki Taaza Khabbar
          </h1>
          {this.state.loading && <Spinner />}
          <Row gap={5}>
            {this.state.articles.map((element) => {
              return (
                <Col
                  md={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={element.url}
                >
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author?element.author:"unknown"}
                    date={element.publishedAt}
                  />
                </Col>
              );
            })}
          </Row>
          <div className="container d-flex justify-content-between">
            <Button
              disabled={this.state.page <= 1}
              type="button"
              variant="dark"
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </Button>
            <Button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResultss / this.props.pageSize)
              }
              type="button"
              variant="dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </Button>
          </div>
        </div>
      </>
    );
  }
}
