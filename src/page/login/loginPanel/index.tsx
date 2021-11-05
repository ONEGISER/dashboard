import "./style/loginPanel.less"
import React from "react"
import { Button, Form, Input, message, Row } from "antd"
import { UserOutlined, KeyOutlined } from "@ant-design/icons"
const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
}

export interface UserData {
    username?: string
    password?: string
}

export interface LoginPanelProps {
    onLogin?: (user: UserData, success: (info: string) => void, error: (info: string) => void) => void
}

export interface LoginPanelState {

}
/**
 * created by zpc at 2021-5-25
 * 登录面板
 */
export class LoginPanel extends React.Component<LoginPanelProps, LoginPanelState>{
    constructor(props: LoginPanelProps) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    onFinish = (values: UserData) => {
        if (this.props.onLogin) {
            this.props.onLogin(
                values,
                (info) => {
                    message.success(info)
                },
                (info) => {
                    message.error(info)
                }
            )
        }
    }

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }

    render() {
        return <div className="login-panel">
            <Row className="text" justify="center" style={{ width: "100%", padding: 10 }}>用户登录</Row>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入你的用户名!' }]}
                >
                    <Input placeholder="用户名" prefix={<UserOutlined className="icon" />} style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入你的密码!' }]}
                >
                    <Input.Password placeholder="密码" prefix={<KeyOutlined className="icon" />} style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item >
                    <Button block type="primary" htmlType="submit">
                        登录
        </Button>
                </Form.Item>
            </Form>
        </div>
    }
}