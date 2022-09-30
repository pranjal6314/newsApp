import React, { Component } from 'react'

export default class NewsItem extends Component {
    
  render() {
    let {title,description,imgUrl,newsUrl,date,author,source}=this.props;
    return ( 
      <div className='my-3'>
            {/* <div className="card" style={{width: "18rem"}}> */}
            <div className="card" >
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>{source}</span>
                <img src={!imgUrl?"https://images.moneycontrol.com/static-mcnews/2022/03/fandosensexniftyderivative-770x433.jpg":imgUrl}className="card-img-top" alt="..."/>
                <div className="card-body">
                
                
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
            
      </div>
    )
  }
}
