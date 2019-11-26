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
import { Button, Select, Input } from "antd";
import IMainStore from "src/stores/interfacestore/IMainStore";
const { Search } = Input;
const { Option } = Select;

interface IAppProps {
	mainStore?: IMainStore;
}
@inject("mainStore")
@observer
export default class Home extends React.Component<IAppProps, {}> {
	constructor(props: IAppProps) {
		super(props);
	}
	state = {
		searchType: "baidu"
	};
	searchMap = {
		baidu: "https://www.baidu.com/s?wd=",
		biying: "https://cn.bing.com/search?q="
	};
	onSelectChange = (value: string) => {
		this.setState({
			searchType: value
		});
	};
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
				<Select
					defaultValue={this.state.searchType}
					value={this.state.searchType}
					style={{ width: 120 }}
					onChange={this.onSelectChange}
				>
					<Option value="baidu">百度</Option>
					<Option value="biying">必应</Option>
				</Select>
				<Search
					placeholder="input search text"
					onSearch={value => window.open(this.searchMap[this.state.searchType] + value, "_blank")}
					style={{ width: 200 }}
				/>
			</div>
		);
	}
}
