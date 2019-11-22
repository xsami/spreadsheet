import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';


class RowDataTable extends Component {

	render() {
		return (
			<tr>
				{
					Object.values(this.props.dpx).map( (obj, i) =>
						<td key={i} onClick={this.props.clk('click', i)}>
							{obj} 
						</td>
					)
				}
			</tr>
		);
	}
}

class HeaderDataTable extends Component {

		render() {
			return (
				<thead>
					<tr>
					{
						this.props.th.map((h, i) =>
								<th key={i}>
									{h}
								</th>
						)
					}
					</tr>
				</thead>
			);
		}
}

class DataTable extends Component {

	render() {
		return (
				<div>
				<table className="table">
					<HeaderDataTable th={this.props.th} />
					<tbody>
						{ this.props.dpx.map( (r, i) =>
							<RowDataTable key={i} dpx={r} clk={this.props.action} />
							)
						}
					</tbody>
				</table>
		</div>
		);
	}
}

export default DataTable;