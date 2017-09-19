import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';


class RowDataTable extends Component {

	rows = {}
	constructor(props) {
		super(props);
		this.rows = props.children;
		this.state = {
			rows: this.rows
		}
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
			this.headers = props.children;
			this.state = {
				headers: this.headers
			}
		}

		render() {
			return (
				<thead>
					<tr>
						{
							this.state.headers.reverse().map((h, i) =>
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

		this.rows = props.children; 
		// Getting the header keys
		for (var key in this.rows[0]) {
			this.headers.push(key);
		}
		this.state = {
			rows: this.rows,
			headers: this.headers
		}

	}

	render() {
			return (
					<div>
					<table className="table">
						<HeaderDataTable>{this.state.headers}</HeaderDataTable>
						<tbody>
							{
								this.state.rows.map( (r, i) =>
										<RowDataTable key={i}>
											{r}
										</RowDataTable>
								)
							}
						</tbody>
					</table>
			</div>
			);
	}
}

export default DataTable;