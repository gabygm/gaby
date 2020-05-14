import React, { Component } from "react";

class MenuSide extends Component {
    render() {
        return (
            <div>
                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
                <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
                    <h1 id="colorlib-logo"><a href="index.html">Gaby G<span>.</span></a></h1>
                    <nav id="colorlib-main-menu" role="navigation">
                        <ul>
                            <li className="colorlib-active"><a href="index.html">Home</a></li>
                            <li><a href="photography.html">Photography</a></li>
                            <li><a href="travel.html">Travel</a></li>
                            <li><a href="fashion.html">Tech</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="colorlib-footer">
                        <script>document.write(new Date().getFullYear());</script> Practice makes perfect | 
                        <i className="icon-heart" aria-hidden="true"></i>
                    <ul>
                        <li><a href="#"><i className="icon-facebook"></i></a></li>
                        <li><a href="#"><i className="icon-twitter"></i></a></li>
                        <li><a href="#"><i className="icon-instagram"></i></a></li>
                        <li><a href="#"><i className="icon-linkedin"></i></a></li>
                    </ul>
                    </div>
                </aside>
      
            </div>
            )
        }
}

export default MenuSide