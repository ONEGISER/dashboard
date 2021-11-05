import "./style/index.less"
import React from "react"
import { Row } from "antd"
import { HashRouter, Route, Switch } from "react-router-dom"
import { SecondRouterPathsForHome } from "../../../configs/routerPaths"
import { Header } from "../header"
const Summary = React.lazy(() => import("../summary"))
const Other = React.lazy(() => import("../other"))



export interface MainEntryProps {

}

export interface MainEntryState {
}

const menus = [{
    name: "组织概况",
    url: `/`
}, {
    name: "党员队伍",
    url: SecondRouterPathsForHome.other//SecondRouterPathsForHome.army
}, {
    name: "党务工作",
    url: SecondRouterPathsForHome.other
}, {
    name: "思想建设",
    url: SecondRouterPathsForHome.other
}, {
    name: "支部地图",
    url: SecondRouterPathsForHome.other
}]
export class MainEntry extends React.Component<MainEntryProps, MainEntryState>{
    constructor(props: MainEntryProps) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {

    }


    render() {
        const height = 150
        return <HashRouter >
            <div className="main-entry" style={{ width: "100%", height: "100%", position: "relative" }}>
                <Row justify="center" align="middle" style={{ height, width: "100%", position: "relative" }}>
                    <Header menus={menus} />
                </Row>
                <Row className="header-bg" justify="center" align="middle" style={{ height: `calc(100% - ${height}px)`, width: "100%" }}>
                    <Switch>
                        {/* <Route exact path={SecondRouterPathsForHome.army} component={Army} /> */}
                        <Route exact path={SecondRouterPathsForHome.summary} component={Summary} />
                        <Route exact path={SecondRouterPathsForHome.other} component={Other} />
                    </Switch>
                </Row>
            </div>
        </HashRouter>
    }
}