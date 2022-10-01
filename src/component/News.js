import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    catagory: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    // console.log("this is a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsApp`;
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=db32f282ca5e4aee8ec08d58e8801c4a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=db32f282ca5e4aee8ec08d58e8801c4a&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data= await fetch(url);
    // let parsedData=await data.json();
    // console.log(parsedData);
    // this.setState({articles:parsedData.articles,
    //   totalResults:parsedData.totalResults,
    //   loading:false
    // })
    this.updateNews();
  }
  handelPrevClick = async () => {
    // console.log("prev")
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=db32f282ca5e4aee8ec08d58e8801c4a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data= await fetch(url);
    // let parsedData=await data.json();
    //   this.setState({
    //     page:this.state.page-1,
    //     articles:parsedData.articles,
    //     loading:false

    //   })
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handelNextClick = async () => {
    //   console.log("next")
    //   if(!(this.state.page+1>Math.ceil( this.state.totalResults/this.props.pageSize))){

    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=db32f282ca5e4aee8ec08d58e8801c4a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //       this.setState({loading:true})
    // let data= await fetch(url);
    // let parsedData=await data.json();
    //   this.setState({
    //     page:this.state.page+1,
    //     articles:parsedData.articles,
    //     loading:false
    //   })
    // }

    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
   fetchMoreData =async() => {
   this.setState({page:this.state.page+1})
   
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=db32f282ca5e4aee8ec08d58e8801c4a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //  this.setState({ loading: true });
   let data = await fetch(url);
   let parsedData = await data.json();
  //  console.log(parsedData);
  setTimeout(() => {
   this.setState({
     articles:this.state.articles.concat( parsedData.articles),
     totalResults: parsedData.totalResults,
     loading: false,
   });
  }, 1500);
  };

  render() {
    return (
      <div className="container my-3 ">
        <h2 className="text-center">
          NewsApp - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          HeadLines{" "}
        </h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {/* { !this.state.loading &&this.state.articles.map((element)=>{ // 1 && 1 => 1 */}
            {this.state.articles.map((element) => {
              // 1 && 1 => 1
              return (
                <div className="col-md-4" key={element.url}>
                  {/* <NewsItem title={element.title.slice(0,45)} newsUrl={element.url}  description={element.description.slice(0,88)} imgUrl={element.urlToImage} /> */}
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    author={element.author ? element.author : "Unknown"}
                    source={element.source.name}
                    date={element.publishedAt}
                    newsUrl={element.url}
                    description={
                      element.description
                        ? element.description.slice(0, 60)
                        : ""
                    }
                    imgUrl={element.urlToImage}
                  />
                </div>
              );
            })}
          </div></div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handelPrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handelNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}
