import "./style/index.less"
import React from "react"
import { Row } from "antd"
export interface TableProps {
}

export interface TableState {

}
/**
 * created by zpc at 2021-06-27
 * 表格
 */
export class Table extends React.Component<TableProps, TableState>{
    constructor(props: TableProps) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps: TableProps) {

    }

    render() {
        const tdClassName = "primary-title table-title"
        const datas: any[] = [{
            党支部: "党支部一",
            党员数: 200,
            参与活动: "庆祝建党100周年活动",
            占比: 20
        }, {
            党支部: "党支部二",
            党员数: 50,
            参与活动: "庆祝建党100周年活动",
            占比: 5
        }, {
            党支部: "党支部三",
            党员数: 50,
            参与活动: "庆祝建党100周年活动",
            占比: 5
        }, {
            党支部: "党支部四",
            党员数: 100,
            参与活动: "庆祝建党100周年活动",
            占比: 10
        }, {
            党支部: "党支部五",
            党员数: 100,
            参与活动: "庆祝建党100周年活动",
            占比: 10
        }, {
            党支部: "党支部六",
            党员数: 100,
            参与活动: "庆祝建党100周年活动",
            占比: 10
        }, {
            党支部: "党支部七",
            党员数: 100,
            参与活动: "庆祝建党100周年活动",
            占比: 10
        }, {
            党支部: "党支部八",
            党员数: 100,
            参与活动: "庆祝建党100周年活动",
            占比: 10
        }, {
            党支部: "党支部九",
            党员数: 150,
            参与活动: "庆祝建党100周年活动",
            占比: 15
        }, {
            党支部: "党支部十",
            党员数: 50,
            参与活动: "庆祝建党100周年活动",
            占比: 5
        }]
        return <Row align="middle" justify="center" style={{ width: "100%", height: "100%" }}>
            <table className={tdClassName} style={{ border: "none", width: "100%", height: "100%", }}>
                <tr className="bg-table">
                    <th>序号</th>
                    <th>党支部</th>
                    <th>党员数</th>
                    <th>参与活动</th>
                    <th>占比</th>
                </tr>

                {datas.map((data, index) => {
                    const jsxs: any[] = [<td>{index + 1}</td>]
                    let className = "bg-table"
                    if (index % 2 === 0) {
                        className = ""
                    }
                    if (data) {
                        for (let i in data) {
                            if (i === "占比") {
                                const numb = data[i]
                                const width = 90 * (numb / 100)
                                jsxs.push(<td ><div className={"bg-box"} style={{ width: width, height: 8 }} title={`${numb}%`}></div></td>)
                            } else {
                                jsxs.push(<td>{data[i]}</td>)
                            }
                        }
                    }
                    return <tr className={`table-content ${className}`}>{jsxs} </tr>
                })}
            </table>
        </Row>
    }
}