import React, { Component } from 'react';

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article: this.props.article
        }
    }
    render() {
        return (
            <div className="col-md-12 article-home">
                <div className="blog-entry">
                    <div className="text text-2 pt-2 mt-3">
                        <span className="category mb-3 d-block"><a href="#">Technology</a></span>
                        <h3 className="mb-4"><a href="#">{this.state.article.title}</a></h3>
                        <p className="mb-4">{this.state.article.body}
                        </p>
                        <div className="meta-wrap align-items-center">
                            <div className="half">
                                <p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article