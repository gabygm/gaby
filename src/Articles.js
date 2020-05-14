import React, { Component } from "react"
import Article from './Article'
import dataArticle from './articles/articles.json'

class Articles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: dataArticle
        }
    }

    render() {
        return (
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
                        {this.state.articles.map(article => {
                            return <Article article={article} />
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Articles