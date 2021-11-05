import "./style/index.less"
import React from "react"
import * as echarts from "echarts"
export interface IndustryProps {
}

export interface IndustryState {
}
/**
 * created by zpc at 2021-06-26
 * 行业
 */
export class Industry extends React.Component<IndustryProps, IndustryState>{
    ref: any
    constructor(props: IndustryProps) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        const chart = echarts.init(this.ref)
        chart.setOption(this.getOption())
    }

    componentWillReceiveProps(nextProps: IndustryProps) {

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
                    name: '行业',
                    type: 'pie',
                    radius: ['20%', '100%'],
                    right: "65%",
                    roseType: 'area',
                    label: {
                        show: false,
                        position: 'center'
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 1048, name: '机关事业单位' },
                        { value: 735, name: '农村党员' },
                        { value: 898, name: '退休党员' },
                        { value: 484, name: '非公有制经济党员' },
                        { value: 300, name: '其他' }
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