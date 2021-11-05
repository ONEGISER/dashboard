import "./style/index.less"
import React from "react"
import * as echarts from "echarts"
export interface AgeProps {
}

export interface AgeState {
}
/**
 * created by zpc at 2021-06-27
 * 党龄
 */
export class Age extends React.Component<AgeProps, AgeState>{
    ref: any
    constructor(props: AgeProps) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        const chart = echarts.init(this.ref)
        chart.setOption(this.getOption())
    }

    componentWillReceiveProps(nextProps: AgeProps) {

    }

    getOption() {
        const textColor = "#efd08e"
        const color = ["#ab5d2b", "#e45a00", "#da731e", "#f2843c", "#ffab75"]
        const bgColor = "#ab1215"

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
            legend: {
                icon: "circle",
                top: 'middle',
                right: "10%",
                orient: "vertical",
                textStyle: {
                    color: textColor
                }
            },
            series: [
                {
                    name: '党龄',
                    type: 'pie',
                    radius: ['0%', '100%'],
                    right: "60%",
                    label: {
                        show: false,
                        position: 'center'
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 1048, name: '3年以下' },
                        { value: 735, name: '3-5年' },
                        { value: 898, name: '6-10年' },
                        { value: 484, name: '非公10年以上' },
                    ]
                }
            ]
        };
        return option
    }

    render() {
        return <div ref={(ref) => this.ref = ref} style={{ width: "100%", height: "100%" }}>

        </div>
    }
}