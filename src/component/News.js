import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey={props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);

    //  this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    //  console.log(parsedData);
    setTimeout(() => {
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container my-3 ">
      <h2 className=" text-center" style={{ marginTop: "90px" }}>
        NewsApp - Top {capitalizeFirstLetter(props.category)} HeadLines{" "}
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {/* { !this.state.loading &&this.state.articles.map((element)=>{ // 1 && 1 => 1 */}
            {articles &&
              articles.map((element, index) => {
                // 1 && 1 => 1
                return (
                  <div className="col-md-4" key={index}>
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
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  catagory: PropTypes.string,
};

export default News;
