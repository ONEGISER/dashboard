import "./style/index.less"
import React from "react"
import { Col, Row } from "antd"
import Img from "./img/2.png"
export interface BirthProps {
}

export interface BirthState {

}
/**
 * created by zpc at 2021-06-27
 * 政治生日
 */
export class Birth extends React.Component<BirthProps, BirthState>{
    constructor(props: BirthProps) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps: BirthProps) {

    }

    renderItem(name: string, num: number) {
        return <Row align="middle" style={{ width: "100%", marginBottom: -10,marginTop:-10 }}>
            <Col style={{ height: "100%", position: "relative" }} className="primary-num">
                <Row justify="center" align="middle" style={{ height: "100%", position: "relative" }}>
                    <img alt="" style={{ width: 60,height:60 }} src={Img} className="rotate-div" />
                    <div className="birth-text" style={{ position: "absolute" }}>{num.toLocaleString()}</div>
                </Row>
            </Col>
            <Col style={{ height: "100%", paddingLeft: 5, paddingRight: 5 }} className="primary-label">
                {name}
            </Col>
        </Row>
    }

    renderCol(datas: any[]) {
        return <Col span={12}>
            {datas.map((data) => {
                return this.renderItem(data.name, data.num)
            })}
        </Col>
    }

    render() {
        const datas = [{
            name: "本月政治生日数",
            num: 345
        }, {
            name: "超期1个月未转正预备人数",
            num: 134
        }]
        const datas2 = [{
            name: "当月预备党员数",
            num: 20
        }, {
            name: "超期3个月未转正预备人数",
            num: 18
        }]
        return <Row style={{ width: "100%", height: "100%" }}>
            {this.renderCol(datas)}
            {this.renderCol(datas2)}
        </Row>
    }
}