import "./style/index.less"
import React from "react"
import { Carousel } from "antd"
import $ from "jquery"
export interface ImageShowProps {
}

export interface ImageShowState {
    width?: number
    height?: number
}
/**
 * created by zpc at 2021-06-26
 * 图片展示
 */
export class ImageShow extends React.Component<ImageShowProps, ImageShowState>{
    ref: any
    constructor(props: ImageShowProps) {
        super(props)
        this.state = {
            width: 400,
            height: 300
        }
    }

    componentDidMount() {
        if (this.ref) {
            const width = $(this.ref).width()
            const height = $(this.ref).height()
            this.setState({
                width,
                height
            })
        }
    }

    componentWillReceiveProps(nextProps: ImageShowProps) {

    }

    render() {
        const datas = [{
            src: "/images/elegant/1.jpg"
        }, {
            src: "/images/elegant/2.jpeg"
        }, {
            src: "/images/elegant/3.jpeg"
        }, {
            src: "/images/elegant/4.jpeg"
        }]
        const { width, height } = this.state

        return <div ref={(ref) => this.ref = ref} className="images-show">
            <Carousel autoplay>
                {datas.map((data) => {
                    const contentStyle: React.CSSProperties = {
                        height,
                        width,
                        textAlign: 'center',
                    }
                    return <div style={{ width, height }}>
                        <div className="bg-image" style={contentStyle}>
                            <img alt="" src={data.src} style={{ height: "100%" }} />
                        </div>
                    </div>
                })}
            </Carousel>
        </div>
    }
}