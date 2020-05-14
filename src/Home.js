import React, { Component } from "react";

class Home extends Component {
    render(){
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
                            <h3 className="mb-4"><a href="#">The Newest Technology On This Year 2019</a></h3>
                            <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost
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
        <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container px-md-5">
            
        </div>
        </footer>
    </div>      

        )
    }

}

export default Home