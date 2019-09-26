/**
* 
* Created by maixing on 2019/09/26 11:44:17
*
*/
import * as ReactDOM from "react-dom";
import App from "./app";
import "./index.less";
ReactDOM.render(App, document.getElementById("app") as HTMLElement);
if (module["hot"]) {
	module["hot"].accept();
}
