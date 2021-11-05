import "./style/summary.less"
import React from "react"
import { ImageShow } from "./imageShow/imageShow"
import { Col, Row } from "antd"
import { Total } from "./total"
import { Base } from "./base"
import { Money } from "./money"
import { Sex } from "./sex"
import { Record } from "./record"
import { Industry } from "./industry"
import { Age } from "./age"
import { AgeBird } from "./ageBird"
import { Birth } from "./birth"
import { Bar } from "./bar"
import { Table } from "./table"

export interface SummaryProps {
}

export interface SummaryState {
}
/**
 * created by zpc at 2021-06-26
 * 组织概况
 */
export default class Summary extends React.Component<SummaryProps, SummaryState>{
    constructor(props: SummaryProps) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps: SummaryProps) {

    }

    render() {
        return <Row className="primary-box" style={{ width: "100%", height: "100%" }}>
            <Col style={{ height: "100%", width: "25%" }}>
                <div style={{ height: "40%", width: "100%" }}>
                    <Row align="middle" className="primary-title">党建活动风采</Row>
                    <div className="primary-content">
                        <ImageShow />
                    </div>
                </div>
                <div style={{ height: "18%", width: "100%" }}>
                    <Row align="middle" className="primary-title">性别结构</Row>
                    <div className="primary-content">
                        <Sex />
                    </div>
                </div>
                <Row style={{ height: "21%", width: "100%" }}>
                    <Col style={{ height: "100%", width: "50%" }}>
                        <Row align="middle" className="primary-title">学历结构</Row>
                        <div className="primary-content">
                            <Record />
                        </div>
                    </Col>
                    <Col style={{ height: "100%", width: "50%" }}>
                        <Row align="middle" className="primary-title">行业结构</Row>
                        <div className="primary-content">
                            <Industry />
                        </div>
                    </Col>
                </Row>
                <Row style={{ height: "21%", width: "100%" }}>
                    <Col style={{ height: "100%", width: "50%" }}>
                        <Row align="middle" className="primary-title">党龄结构</Row>
                        <div className="primary-content">
                            <Age />
                        </div>
                    </Col>
                    <Col style={{ height: "100%", width: "50%" }}>
                        <Row align="middle" className="primary-title">年龄结构</Row>
                        <div className="primary-content">
                            <AgeBird />
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col style={{ height: "100%", width: "50%", paddingLeft: 10, paddingRight: 10 }}>
                <div style={{ height: "20%", width: "100%" }}>
                    <Row align="middle" className="primary-title">党员基本情况</Row>
                    <div className="primary-content">
                        <Base />
                    </div>
                </div>
                <Row align="middle" style={{ height: "40%", width: "100%" }}>
                    {/* 党员总数 */}
                    <Total />
                </Row>
                <div style={{ height: "40%", width: "100%" }}>
                    <Row align="middle" className="primary-title">党费缴纳统计</Row>
                    <div className="primary-content">
                        <Money />
                    </div>
                </div>
            </Col>
            <Col style={{ height: "100%", width: "25%" }}>
                <div style={{ height: "20%", width: "100%" }}>
                    <Row align="middle" className="primary-title">党员政治生日</Row>
                    <div className="primary-content">
                        <Birth />
                    </div>
                </div>
                <div style={{ height: "30%", width: "100%" }}>
                    <Row align="middle" className="primary-title">发展党员情况</Row>
                    <div className="primary-content">
                        <Bar />
                    </div>
                </div>
                <div style={{ height: "50%", width: "100%" }}>
                    <Row align="middle" className="primary-title">党员组织活动</Row>
                    <div className="primary-content">
                        <Table/>
                    </div>
                </div>
            </Col>
        </Row>
    }
}