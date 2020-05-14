import React, { Component } from "react";

import Articles from './Articles'

class Home extends Component {
    render(){
        const { articles } = this.props
       
        return(
            <div id="colorlib-main">
                <div className="overlay"></div>
                    <div className="js-fullheight d-flex justify-content-center align-items-center">
                        <div className="col-md-8 text text-center">
                        <div className="desc">
                            <h2 className="subheading">Hello I'm</h2>
                            <h1 className="mb-4">Gabriela Guamán</h1>
                            <p className="mb-4">I am A Blogger Far far away, behind the word mountains, far from the countries Vokalia
                            and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                            of the Semantics, a large language ocean.</p>
                            <p><a href="#" className="btn-custom">More About Me <span className="ion-ios-arrow-forward"></span></a></p>
                        </div>
                    </div>
                </div>
                <Articles articles={articles}/>
                <footer className="ftco-footer ftco-bg-dark ftco-section">
                    <div className="container px-md-5">

                    </div>
                </footer>
            </div>      

        )
    }

}

export default Home