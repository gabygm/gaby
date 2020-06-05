
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'

class ArticleDetail extends Component {
    constructor(props) {
        super(props)
        this.state = { 
          terms: null,
          id_article: this.props.match.params.id
        }
      }
      
      componentWillMount() {
        const Article = require(`../../src/components/articles/data/${this.state.id_article}`)
        fetch(Article).then((response) => response.text()).then((text) => {
          this.setState({ terms: text })
        })
      }

      render() {
        return (
          <div className="container blog-entry desc">
            <article> <ReactMarkdown source={this.state.terms} /></article>
          </div>
        )
      }
}

export default ArticleDetail
