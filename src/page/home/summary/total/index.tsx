import "./style/index.less"
import React from "react"
import { Col, Row } from "antd"
export interface TotalProps {
}

export interface TotalState {

}
/**
 * created by zpc at 2021-06-26
 * 总户
 */
export class Total extends React.Component<TotalProps, TotalState>{
    constructor(props: TotalProps) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps: TotalProps) {

    }

    render() {
        const total = 210143654
        return <Row align="middle" justify="center" style={{ width: "100%", height: 150 }}>
            <Row justify="center" style={{ width: "100%" }} className="primary-title total-title">党员总数</Row>
            <Row justify="center" align="middle" style={{ width: "100%" }}>
                <Col className="total-num">
                    {total.toLocaleString()}
                </Col>
                <Col className="total-unit"> 人</Col>
            </Row>
        </Row>
    }
}