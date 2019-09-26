/**
* 
* Created by maixing on 2019/09/26 11:42:53
*
*/
import * as React from "react";
import { Router, hashHistory } from "react-router";
const routes = [
	{
		path: "/",
		getComponent(nextState: any, cb: any) {
			require["ensure"]([], function(require: any) {
				cb(null, require("@/views/Main").default);
			});
		},
		indexRoute: { onEnter: (nextState: any, replace: any) => replace("/home") },
		childRoutes: [
			{
				path: "/home",
				getComponent(nextState: any, cb: any) {
					require["ensure"]([], function(require: any) {
						cb(null, require("@/views/home").default);
					});
				}
			},
			{
				path: "/chart",
				getComponent(nextState: any, cb: any) {
					require["ensure"]([], function(require: any) {
						cb(null, require("@/views/chart").default);
					});
				}
			}
		]
	}
];
export default class Routers extends React.Component {
	render() {
		return <Router history={hashHistory}>{routes}</Router>;
	}
}
