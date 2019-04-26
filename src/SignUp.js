import React ,{ Component }from 'react'
import logoImg from "./resources/logo.png"

class SignUp extends Component {
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
                <h2>Sign Up</h2>
                <form method="post" className="items-start">
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="Username" 
                        className="full-width main-text"
                    />
                    <br/>
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
                    <br/>
                    <input 
                        type="text" 
                        id="password" 
                        name="password" 
                        placeholder="Confirm Password" 
                        className="full-width main-text"
                    />
                    <br/>
                    <button 
                        className="self-center main-text">
                        Register
                    </button>
                    <br/>
                    <p 
                        className="self-center sub-text">
                        Already a member? <span className="cursor-pointer hoverable" onClick={this.props.login}>Log In</span>
                    </p>
                </form>
            </div>
        )
    }
}

export default SignUp