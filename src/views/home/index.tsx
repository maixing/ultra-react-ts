/**
 *
 * Created by maixing on 2019/08/07 17:26:36
 *
 */
/**
 *
 * Created by maixing on 2019/09/26 11:43:48
 *
 */
import * as React from "react";
import { observer, inject } from "mobx-react";
import { Button } from "antd";
import IMainStore from "src/stores/interfacestore/IMainStore";

interface IAppProps {
	mainStore?: IMainStore;
}
@inject("mainStore")
@observer
export default class Home extends React.Component<IAppProps, {}> {
	constructor(props: IAppProps) {
		super(props);
	}
	public render() {
		const { changeAppName } = this.props.mainStore!;
		return (
			<div>
				<Button
					onClick={() => {
						changeAppName("home");
					}}
				>
					Home
				</Button>
			</div>
		);
	}
}
