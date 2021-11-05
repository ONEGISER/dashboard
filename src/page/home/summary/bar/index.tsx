import "./style/index.less"
import React from "react"
import * as echarts from "echarts"
import Img from "./img/4.png"
export interface BarProps {
}

export interface BarState {
}
/**
 * created by zpc at 2021-06-27
 * 发展党员情况
 */
export class Bar extends React.Component<BarProps, BarState>{
    ref: any
    constructor(props: BarProps) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        const chart = echarts.init(this.ref)
        chart.setOption(this.getOption())
    }

    componentWillReceiveProps(nextProps: BarProps) {

    }

    getOption() {
        const textColor = "#efd08e"
        const bgColor = "#ab1215"

        return {
            tooltip: {
                trigger: 'axis',
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
            grid: { top: 10, bottom: 30 },
            xAxis: [
                {
                    type: 'category',
                    data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: textColor
                        }
                    },
                }

            ],
            yAxis: [
                {
                    type: 'value',
                    // name: '数量',
                    min: 0,
                    interval: 300,
                    // max: 1800,
                    // axisLabel: {
                    //     formatter: '{value} 人'
                    // },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: textColor
                        }
                    },
                }
            ],
            series: [
                {
                    name: '发展党员',
                    type: 'bar',
                    data: [500, 980, 1200, 1300, 1400, 1500, 1700],
                    barWidth: 12,
                    itemStyle: {
                        normal: {
                            color: {
                                image: Img,
                                repeat: 'repeat'
                            },
                            opacity: 0.7
                        },

                    },
                }
            ]
        };
    }

    render() {
        return <div ref={(ref) => this.ref = ref} style={{ width: "100%", height: "100%" }}>

        </div>
    }
}