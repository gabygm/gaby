 import React, { Component } from 'react';
 import { useHistory } from 'react-router-dom';

export default (props) => {
    const  article = props.article;
    const history = useHistory();

    function handleDetailArticlesClick(id){
        history.push(`/article/${id}`)
    }

    return (
    <div className="col-md-12 article-home">
        <div className="blog-entry">
            <div className="text text-2 pt-2 mt-3">
                <span className="category mb-3 d-block"><a href="#">Technology</a></span>
                <h3 className="mb-4"><a href="#">{article.title}</a></h3> 
                <p className="mb-4">{article.body}
                 </p> 
                <div className="meta-wrap align-items-center">
                    <div className="half">
                        <p><a href="#" className="btn py-2" onClick={handleDetailArticlesClick(article.id)} >Continue Reading <span className="ion-ios-arrow-forward"></span></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}