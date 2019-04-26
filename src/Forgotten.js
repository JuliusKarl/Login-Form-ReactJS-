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
                <h2>Trouble logging in?</h2>
                <form method="post" className="items-start">
                    <p>Enter your username or email and we'll 
                       send you a link to get back into your account.
                    </p>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Email or Username" 
                        className="full-width main-text"
                    />
                    <a
                        name="forgotten"
                        onClick={this.props.signup}
                        className="self-end sub-text cursor-pointer main-text">
                        <p>Create new account</p>
                    </a>
                    <button 
                        className="self-center main-text">
                        Reset
                    </button>
                    <br/>
                    <p 
                        className="self-center sub-text cursor-pointer"
                        onClick={this.props.login}>
                        Back to login
                    </p>
                </form>
            </div>
        )
    }
}

export default Forgotten