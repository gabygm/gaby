import React, { Component } from "react";

const Articles = props => {
    const articles = props.articles.map(item =>{
        return(
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-2">
                        <div className="col-md-7 heading-section text-center ">
                            <h2 className="mb-4">Articles</h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                            paradisematic country.</p>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="blog-entry ">
                        <div className="text text-2 pt-2 mt-3">
                            <span className="category mb-3 d-block"><a href="#">Technology</a></span>
                            <h3 className="mb-4"><a href="#">{item.title}</a></h3>
                            <p className="mb-4">{item.body}
                            </p>
                            <div className="meta-wrap align-items-center">
                            <div className="half order-md-last">
                                <p className="meta">
                                <span><i className="icon-heart"></i>3</span>
                                <span><i className="icon-comment"></i>5</span>
                                </p>
                            </div>
                            <div className="half">
                                <p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a>
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
          )
    })
    
    return <div>{articles}</div>
}

export default Articles