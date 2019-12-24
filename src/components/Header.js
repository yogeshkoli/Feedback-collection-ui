import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="AppNav">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Feedback Collector</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/auth/google">Login with Google</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;