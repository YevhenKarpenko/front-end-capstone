import React from "react"
import {Link} from "react-router-dom"
import bannerImg from "../assets/banner.jpg"



function Header(){
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred ith a modern twist.</p>
                    <Link to="/booking"><button aria-label="On Click">Reserve a table</button></Link>
                </div>


                <div className="banner-img">
                    <img src={bannerImg} />
                </div>
            </section>

        </header>
    )
}

export default Header