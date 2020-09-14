import React from 'react';
import {Link } from 'react-router-dom';

export default (props) => {
    const article = props.article;
   
    return (
        <div className="col-md-12 article-home">
            <div className="blog-entry">
                <div className="text text-2 pt-2 mt-3">
                    <h3 className="mb-4 title-article">
                    {article.date} <Link to={`/article/${article.id}`} style={{color:'#b51b58'}}>
                            {article.title}
                        </Link>  
                    </h3>
                    <p className="mb-4 title-article">{article.body}
                    </p>
                   
                </div>
            </div>
        </div>
    );
}
