import "./style/index.less"
import React from "react"
import { Col, Row } from "antd"
import Img1 from "./img/6.png"
import Img2 from "./img/7.png"

export interface BaseProps {
}

export interface BaseState {

}
/**
 * created by zpc at 2021-06-26
 * 基础信息
 */
export class Base extends React.Component<BaseProps, BaseState>{
    constructor(props: BaseProps) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps: BaseProps) {

    }

    renderItem(icon: React.ReactNode, name: string, num: number) {
        return <Row align="middle" style={{ width: "100%", paddingBottom: 10 }}>
            <Col style={{ height: "100%" }}>
                <Row align="middle">{icon}</Row>
            </Col>
            <Col style={{ height: "100%", paddingLeft: 5, paddingRight: 5 }} className="primary-label">
                {name} :
            </Col>
            <Col style={{ height: "100%" }} className="primary-num base-text">
                {num.toLocaleString()}
            </Col>
            <Col style={{ height: "100%" }} className="primary-num-unit">
                人
            </Col>
        </Row>
    }

    renderCol(datas: any[]) {
        return <Col span={8}>
            {datas.map((data) => {
                return this.renderItem(data.icon, data.name, data.num)
            })}
        </Col>
    }

    render() {
        const imgStyle = { height: 20 }
        const datas = [{
            icon: <img alt="" src={Img1} style={imgStyle} />,
            name: "正式党员",
            num: 542678
        }, {
            icon: <img alt="" src={Img2} style={imgStyle} />,
            name: "流动党员",
            num: 4326
        }]
        const datas2 = [{
            icon: <img alt="" src={Img1} style={imgStyle} />,
            name: "预备党员",
            num: 123567
        }, {
            icon: <img alt="" src={Img2} style={imgStyle} />,
            name: "基层党组织",
            num: 643
        }]
        const datas3 = [{
            icon: <img alt="" src={Img1} style={imgStyle} />,
            name: "发展党员",
            num: 87654
        }, {
            icon: <img alt="" src={Img2} style={imgStyle} />,
            name: "军队退役党员",
            num: 9865
        }]
        return <Row style={{ width: "100%", height: "100%" }}>
            {this.renderCol(datas)}
            {this.renderCol(datas2)}
            {this.renderCol(datas3)}
        </Row>
    }
}