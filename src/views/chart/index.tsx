/**
 *
 * Created by maixing on 2019/09/26 11:43:41
 *
 */
import * as React from "react";
import { observer, inject } from "mobx-react";
import { Button } from "antd";
import IMainStore from "@/stores/interfacestore/IMainStore";

interface IAppProps {
	mainStore?: IMainStore;
}
@inject("mainStore")
@observer
export default class Chart extends React.Component<IAppProps, {}> {
	constructor(props: IAppProps) {
		super(props);
	}
	public render() {
		const { changeAppName } = this.props.mainStore!;
		return (
			<div>
				<Button
					onClick={() => {
						changeAppName("chart");
					}}
				>
					chart
				</Button>
			</div>
		);
	}
}
