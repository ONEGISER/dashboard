import "./style/other.less"
import React from "react"

export interface OtherProps {
}

export interface OtherState {
}
/**
 * created by zpc at 2021-06-26
 * 党员队伍
 */
export default class Other extends React.Component<OtherProps, OtherState>{
    constructor(props: OtherProps) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps: OtherProps) {
       
    }

    render() {
        return <div style={{ }}>
            努力开发中，敬请期待
        </div>
    }
}