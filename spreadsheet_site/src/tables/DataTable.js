import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';


class RowDataTable extends Component {

	rows = {}
	constructor(props) {
		super(props);
		this.rows = props.dpx;
	}

	render() {
		return (
			<tr>
				{
					Object.values(this.rows).reverse().map( (obj, i) =>
						<td key={i}>
							{obj} 
						</td>
					)
				}
			</tr>
		);
	}
}

class HeaderDataTable extends Component {
	
		headers = []
		constructor(props) {
			super(props);
			this.headers = props.dpx;
		}

		render() {
			return (
				<thead>
					<tr>
					{
						this.headers.reverse().map((h, i) =>
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

	rows = [];
	headers = [];

	constructor(props) {
		super(props);

		this.rows = props.dpx; 
		for (var key in this.rows[0]) {
			this.headers.push(key);
		}
	}

	render() {
			return (
					<div>
					<table className="table">
						<HeaderDataTable dpx={this.headers} />
						<tbody>
							{ this.rows.map( (r, i) =>
								<RowDataTable key={i} dpx={r} />
								)
							}
						</tbody>
					</table>
			</div>
			);
	}
}

export default DataTable;