import "./style/index.less"
import React from "react"
import * as echarts from "echarts"
export interface RecordProps {
}

export interface RecordState {
}
/**
 * created by zpc at 2021-06-26
 * 学历
 */
export class Record extends React.Component<RecordProps, RecordState>{
    ref: any
    constructor(props: RecordProps) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        const chart = echarts.init(this.ref)
        chart.setOption(this.getOption())
    }

    componentWillReceiveProps(nextProps: RecordProps) {

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
                    name: '学历',
                    type: 'pie',
                    radius: ['50%', '80%'],
                    right: "50%",
                    label: {
                        show: false,
                        position: 'center'
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 1048, name: '研究生' },
                        { value: 735, name: '本科' },
                        { value: 580, name: '专科' },
                        { value: 484, name: '高中' },
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