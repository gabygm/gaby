import React from 'react';
import {Link } from 'react-router-dom';

export default (props) => {
    const article = props.article;
   
    return (
        <div className="col-md-12 article-home">
            <div className="blog-entry">
                <div className="text text-2 pt-2 mt-3">
                    <span className="category mb-3 d-block">Technology</span>
                    <h3 className="mb-4">{article.title}</h3>
                    <p className="mb-4">{article.body}
                    </p>
                    <div className="meta-wrap align-items-center">
                        <div className="half">
                          <Link to={`/article/${article.id}`} >Continue Reading</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}