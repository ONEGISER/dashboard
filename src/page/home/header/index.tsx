import "./style/header.less"
import React from "react"
import { Row } from "antd"
import { Configuration } from "../../../configs/config"
import { BaseButton } from "../../../components/common/button"
import img from "./img/header-bg.png"
import { Link } from "react-router-dom"

export interface MenuData {
    name?: string
    url: string
}
export interface HeaderProps {
    menus?: MenuData[]
    onMenuClick?: (data: MenuData) => void
}

export interface HeaderState {
    data?: MenuData
}

export class Header extends React.Component<HeaderProps, HeaderState>{
    constructor(props: HeaderProps) {
        super(props)
        const { menus } = props
        this.state = {
            data: this.getData(menus)
        }
    }

    componentDidMount() {

    }

    getData(menus?: MenuData[]) {
        const { href } = window.location
        const str = "/#"
        if (href.indexOf(str) > -1) {
            const arr = href.split(str)
            if (arr[1]) {
                const name = arr[1]
                return menus?.find((menu) => {
                    return menu.url === name
                })
            }
        }
        return menus ? menus[0] : undefined
    }

    onClick(data: MenuData) {
        this.setState({
            data
        })
    }

    render() {
        const { menus } = this.props
        const { data } = this.state
        return <Row className="header-bg" justify="center" align="middle" style={{ height: "100%", width: "100%", position: "relative" }}>
            <img alt="" style={{ height: "100%" }} src={img} />
            <Row justify="center" style={{ position: "absolute", height: "100%", width: "100%", top: 0, left: 0 }}>
                <Row justify="center" align="middle" style={{ height: "50%", width: "100%" }}>
                    {Configuration.title}
                </Row>
                <Row justify="center" align="middle" style={{ height: "50%", width: "100%" }}>
                    {menus?.map((_data) => {
                        const active = _data.name === data?.name
                        return <div className="menu-button">
                            <Link to={_data.url}><BaseButton data={_data} active={active} onClick={this.onClick.bind(this, _data)}></BaseButton></Link>
                        </div>
                    })}
                </Row>
            </Row>
        </Row>
    }
}