import React from 'react';

function LandingPage() {
    return(
        <div>
            <header style={{backgroundColor:'pink',padding:'20px'}}>
                <h1>MamaAfya</h1>
                <h2>Healthy beginnings,Happy endings</h2>
            </header>
            <nav style={{backgroundColor:'pink',padding:'10px'}}>
                <ul style={{listStyle:'none',margin:0,padding:0}}>
                    <li style={{display:'inline',marginRight:'20px'}}>
                        <a href="#about">About</a>
                    </li>
                    <li style={{display:'inline',marginRight:'20px'}}>
                        <a href="#login">Login</a>
                    </li>
                    <li style={{display:'inline',marginRight:'20px'}}>
                        <a href="#appointment">Make an appointment</a>
                    </li>
                    <li style={{display:'inline',marginRight:'20px'}}>
                        <a href="#blog">Blog</a>
                    </li>
                </ul>
            </nav>
            
            <section id="about" style={{padding:'20px'}}>
                <h2>About</h2>

            </section>
            <section id="login" style={{padding:'20px'}}>
                <h2>Login</h2>

            </section>
            <section id="appointment" style={{padding:'20px'}}>
                <h2>About</h2>

            </section>
            <section id="blog" style={{padding:'20px'}}>
                <h2>Blog</h2>

            </section>
        </div>
    )
}