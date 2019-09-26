/**
* 
* Created by maixing on 2019/09/26 11:43:16
*
*/
import { observable, action } from "mobx";
import IMainStore from './interfacestore/IMainStore';

class MainStore implements IMainStore {
	
	@observable public appName:string = "系统名字";

	@action.bound
	public changeAppName(appName:string):void {
		this.appName = appName;
	};
}
const mainStore = new MainStore();

export default mainStore;