import "./style/army.less"
import React from "react"

export interface ArmyProps {
}

export interface ArmyState {
}
/**
 * created by zpc at 2021-06-26
 * εειδΌ
 */
export default class Army extends React.Component<ArmyProps, ArmyState>{
    constructor(props: ArmyProps) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps: ArmyProps) {
       
    }

    render() {
        return <div style={{ }}>
            army
        </div>
    }
}