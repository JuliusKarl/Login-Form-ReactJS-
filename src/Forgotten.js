import React ,{ Component }from 'react'
import logoImg from "./resources/logo.png"

class Forgotten extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="content-container main-text">
                <img 
                    src={logoImg}
                    alt="logo"
                    className="logo-img"
                />
                <p>Forgotten</p>
                <form method="post" className="items-start">
                    <label 
                        htmlFor="email">
                        Email
                    </label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Email" 
                        className="full-width"
                    />
                    <br/>
                    <label 
                        htmlFor="password">
                        Password
                    </label>
                    <input 
                        type="text" 
                        id="password" 
                        name="password" 
                        placeholder="Password" 
                        className="full-width"
                    />
                    <a
                        name="forgotten"
                        onClick={this.props.forgotten}
                        className="self-end sub-text cursor-pointer">
                        <p>Forgot Username/Password?</p>
                    </a>
                    <br/>
                    <button 
                        className="self-center">
                        Login
                    </button>
                    <br/>
                    <p 
                        className="self-center sub-text cursor-pointer"
                        onClick={this.props.signup}>
                        Not a member? Sign Up
                    </p>
                </form>
            </div>
        )
    }
}

export default Forgotten