import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Checking...'
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <nav className="AppNav">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Feedback Collector</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

function mapStateProps({ auth }) {
    return { auth };
}

export default connect(mapStateProps)(Header);
