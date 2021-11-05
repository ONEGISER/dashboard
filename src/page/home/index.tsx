import React from "react"
import { Row } from "antd"
import { MainEntry } from "./entry"
export interface HomePageProps {

}

export interface HomePageState {

}
export default class HomePage extends React.Component<HomePageProps, HomePageState>{
    constructor(props: HomePageProps) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {

    }


    render() {
        return <Row style={{ width: "100%", height: "100%", position: "relative" }}>
            <MainEntry />
        </Row>
    }
}