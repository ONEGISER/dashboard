import "./style/index.less"
import React from "react"
import * as echarts from "echarts"
export interface OtherProps {
}

export interface OtherState {
}
/**
 * created by zpc at 2021-06-26
 * 党费缴纳
 */
export class Money extends React.Component<OtherProps, OtherState>{
    ref: any
    constructor(props: OtherProps) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        const chart = echarts.init(this.ref)
        chart.setOption(this.getOption())
    }

    componentWillReceiveProps(nextProps: OtherProps) {

    }

    getOption() {
        const barTopColor = "#e45a00";
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

            legend: {
                data: ['支部交纳统计', '党员缴纳统计'],
                textStyle: {
                    color: textColor
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
                    name: '金额',
                    min: 0,
                    interval: 200,
                    max: 1400,
                    axisLabel: {
                        formatter: '{value} 元'
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: textColor
                        }
                    },
                },
                {
                    type: 'value',
                    name: '金额',
                    min: 0,
                    interval: 200,
                    max: 1400,
                    axisLabel: {
                        formatter: '{value} 元'
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: textColor
                        }
                    },
                }
            ],
            series: [
                {
                    name: '支部交纳统计',
                    type: 'bar',
                    data: [1000, 980, 1200, 600, 700, 900, 1300, 1200, 1100, 579, 890, 432],
                    barWidth: 12,
                    itemStyle: {
                        normal: {
                            color: barTopColor,
                            opacity: 0.7
                        }
                    },
                },
                {
                    name: '党员缴纳统计',
                    type: 'line',
                    yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            color: textColor
                        }
                    },
                    lineStyle: {
                        type: "dashed"
                    },
                    data: [700, 800, 900, 1200, 600, 800, 100, 1200, 1300, 1100, 1000, 900]
                }
            ]
        };
    }

    render() {
        return <div ref={(ref) => this.ref = ref} style={{ width: "100%", height: "100%" }}>

        </div>
    }
}