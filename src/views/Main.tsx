/**
 *
 * Created by maixing on 2019/09/26 11:43:57
 *
 */
import * as React from "react";
import { Link } from "react-router";

import { Layout, Menu, Icon } from "antd";
const { Header, Sider, Content } = Layout;
import { observer, inject } from "mobx-react";
import "./main.less";
import IMainStore from "src/stores/interfacestore/IMainStore";

const logo = require("@/style/logo.svg");

export interface IProps {
	name: string;
	enthusiasmLevel?: number;
	mainStore: IMainStore;
}

interface IState {
	collapsed: boolean;
}

@inject("mainStore")
@observer
class App extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			collapsed: false
		};
	}
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};
	public render() {
		const { appName } = this.props.mainStore;
		return (
			<Layout>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo">
						<img src={logo} className="app-logo" alt="logo" />
					</div>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
						<Menu.Item key="1">
							<Icon type="home" />
							<Link to={"/home"} className="link">
								首页
							</Link>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="bar-chart" />
							<Link to={"/chart"} className="link">
								图表
							</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: "#fff", padding: 0 }}>
						<Icon className="trigger" type={this.state.collapsed ? "menu-unfold" : "menu-fold"} onClick={this.toggle} />
						<span className="title">{appName}</span>
					</Header>
					<Content
						style={{
							margin: "24px 16px",
							padding: 24,
							background: "#fff",
							minHeight: 280
						}}
					>
						{this.props.children}
					</Content>
				</Layout>
			</Layout>
		);
	}
}
export default App;
