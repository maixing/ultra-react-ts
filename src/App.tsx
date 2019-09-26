/**
* 
* Created by maixing on 2019/09/26 11:44:10
*
*/
import * as React from "react";

import { ConfigProvider } from "antd";
import { Provider } from "mobx-react";

import appstore from "./stores/AppStore";
import Routes from "./router/routes";
import zhCN from "antd/es/locale/zh_CN";

import "./style/customer_ant.less";
import "./style/magic.css";

export default (
	<ConfigProvider locale={zhCN}>
		<Provider {...appstore}>
			<Routes></Routes>
		</Provider>
	</ConfigProvider>
);
