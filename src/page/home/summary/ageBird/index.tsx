import "./style/index.less"
import React from "react"
import * as echarts from "echarts"
export interface AgeBirdProps {
}

export interface AgeBirdState {
}
/**
 * created by zpc at 2021-06-27
 * 出生年龄
 */
export class AgeBird extends React.Component<AgeBirdProps, AgeBirdState>{
    ref: any
    constructor(props: AgeBirdProps) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        const chart = echarts.init(this.ref)
        chart.setOption(this.getOption())
    }

    componentWillReceiveProps(nextProps: AgeBirdProps) {

    }

    getOption() {
        const textColor = "#efd08e"
        const bgColor = "#ab1215"
        const color = ["#ab5d2b", "#e45a00", "#da731e", "#f2843c", "#ffab75"]
        const option = {
            color,
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                },
                backgroundColor: bgColor,
                borderColor: textColor,
                textStyle: {
                    color: textColor
                }
            },
            radar: {
                shape: 'circle',
                indicator: [
                    { name: '30岁以下', max: 52000 },
                    { name: '30-40岁', max: 52000 },
                    { name: '40-50岁', max: 52000 },
                    { name: '50-60岁', max: 52000 },
                    { name: '60岁以上', max: 52000 },
                ],
                name: {
                    color: textColor,
                },
                axisLine: { show: false },
                splitLine: {
                    lineStyle: {
                        color: "#cb6774",
                        type: "dashed",
                    }
                },
                radius:"57%"
            },
            series: [{
                name: '年龄',
                type: 'radar',
                data: [
                    {
                        value: [42000, 3000, 20000, 35000, 50000],
                        name: '年龄'
                    }
                ],

            }]
        };
        return option
    }

    render() {
        return <div ref={(ref) => this.ref = ref} style={{ width: "100%", height: "100%" }}>

        </div>
    }
}