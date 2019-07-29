import React ,{ Component }from 'react'
import logoImg from "./resources/logo.png"

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            email: ''
        }
        this.register = this.register.bind(this)
    }

    register(e) {
        e.preventDefault()
        const account = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }
        /*fetch('mongodb://public:publicpass1234@ds113046.mlab.com:13046/mean_project_database/collections/accounts', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(account)
        })
        .then(res => res.json())
        .then(data => console.log(data))*/
    }

    render() {
        return (
            <div className="content-container main-text">
                <img 
                    src={logoImg}
                    alt="logo"
                    className="logo-img"
                />
                <h3>Sign Up</h3>
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
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Password" 
                        className="full-width main-text"
                    />
                    <br/>
                    <input 
                        type="password" 
                        id="confirm-password" 
                        name="confirm-password" 
                        placeholder="Confirm Password" 
                        className="full-width main-text"
                    />
                    <br/>
                    <button 
                        className="self-center main-text cursor-pointer"
                        onClick={this.register}>
                        Register
                    </button>
                    <br/>
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