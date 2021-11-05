import React from "react"
export interface LogoProps {
    style?: React.CSSProperties
}

export interface LogoState {

}
export class Logo extends React.Component<LogoProps, LogoState>{
    constructor(props: LogoProps) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        const { style } = this.props
        return <img alt="logo" style={style} src={'/images/logo.png'} />
    }
}