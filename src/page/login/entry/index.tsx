import "./style/login.less"
import React from "react"
import { LoginPanel, UserData } from "../loginPanel"
import { Logo } from "../logo"
export interface LoginPageProps {

}

export interface LoginPageState {

}
export default class LoginPage extends React.Component<LoginPageProps, LoginPageState>{
    constructor(props: LoginPageProps) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
       
    }


    onLogin(user: UserData, success: (info: string) => void, error: (info: string) => void) {
       
    }

    render() {
        return <div className="login">
            <video  autoPlay loop className="video">
                <source type="video/mp4" src={"/videos/login.mp4"} />
            </video>
            {/* <img alt="" src={"/images/bg.jpg"} className="video" /> */}
            <div className="logo">
                <Logo />
            </div>
            <div className="box">
                <LoginPanel onLogin={this.onLogin.bind(this)} />
            </div>
        </div>
    }
}