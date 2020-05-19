import React, { Component } from "react";
import Articles from './Articles'
import photo from './images/gaby.png'
import pdfCV from './images/cv-page.pdf'

class Home extends Component {
    render() {
        const { articles } = this.props

        return (
            <div id="colorlib-main">
                <div className="text-center">
                    <img className="responsive" src={photo} />
                </div>
                <div className="overlay"></div>
                <div className="js-fullheight d-flex justify-content-center align-items-center">
                    <div className="col-md-8 text text-center">
                        <div className="desc">
                            <h2 className="subheading">Hello I'm</h2>
                            <h1 className="mb-4">Gabriela Guamán</h1>
                            <p className="mb-4">I am a sotfware developer. I define myself as a person who likes continuous learning. I have experience in programming languages like python, Kotlin, JavaScript. My areas of interest are machine learning and data. In my free time I like to walk, and I am a lover of animals and plants. I am a founder of the <a href="https://twitter.com/PyladiesEc">PyLadies Ecuador</a> community.</p>
                            <p><a href="#" className="btn-custom">More About Me <span className="ion-ios-arrow-forward"></span></a></p>
                            <p><a href={pdfCV} className="btn btn-primary p-3 px-xl-4 py-xl-3">My Curriculum vitae</a></p>
                        </div>
                    </div>
                </div>
                <Articles articles={articles} />
                <footer className="ftco-footer ftco-bg-dark ftco-section">
                    <div className="container px-md-5">

                    </div>
                </footer>
            </div >

        )
    }

}

export default Home