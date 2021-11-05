import "./style/baseButton.less"
import React from "react"

export interface BaseButtonProps {
    active?: boolean
    data?: ButtonData
    onClick?: (data?: ButtonData) => void
}

export interface ButtonData {
    name?: string
}

export interface BaseButtonState {
    active?: boolean
    data?: ButtonData
}
/**
 * 基础按钮
 * created by zpc at 2021-6-26
 */
export class BaseButton extends React.Component<BaseButtonProps, BaseButtonState>{
    constructor(props: BaseButtonProps) {
        super(props)
        const { data, active } = props
        this.state = {
            data,
            active
        }
    }


    componentWillReceiveProps(nextProps: BaseButtonProps) {
        const { data, active } = nextProps
        if (this.props?.data?.name !== data?.name) {
            this.setState({
                data
            })
        }

        if (this.props?.active !== active) {
            this.setState({
                active
            })
        }
    }

    componentDidMount() {

    }

    onClick() {
        if (this.props.onClick) {
            this.props.onClick(this.state.data)
        }
    }

    render() {
        const { data, active } = this.state
        return <div className={active ? "menu-button-bg-active menu-button-common" : "menu-button-bg menu-button-common"} onClick={this.onClick.bind(this)}>
            {data?.name}
        </div>
    }
}