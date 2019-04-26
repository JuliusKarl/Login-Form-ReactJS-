import React ,{ Component }from 'react'
import logoImg from "./resources/logo.png"
import './Logo.css'

class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content-container main-text">
                <img 
                    src={logoImg}
                    alt="logo"
                    className="logo-img"
                />
                <h2>Sign In</h2>
                <form method="post" className="items-start">
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Email" 
                        className="full-width main-text"
                    />
                    <br/>
                    <input 
                        type="text" 
                        id="password" 
                        name="password" 
                        placeholder="Password" 
                        className="full-width main-text"
                    />
                    <a
                        name="forgotten"
                        onClick={this.props.forgotten}
                        className="self-end sub-text cursor-pointer hoverable">
                        <p>Forgot Password?</p>
                    </a>
                    <button 
                        className="self-center main-text">
                        Login
                    </button>
                    <br/>
                    <p 
                        className="self-center sub-text">
                        Not a member? <span className="cursor-pointer hoverable" onClick={this.props.signup}>Sign Up</span>
                    </p>
                </form>
            </div>
        )
    }
}

export default Login