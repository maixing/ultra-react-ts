/**
* 
* Created by maixing on 2019/09/26 11:43:09
*
*/
import ViewStores from "views/ViewStores";
import mainStore from "./MainStore";
let appstore = {
	mainStore,
	...ViewStores
};
export default appstore;
