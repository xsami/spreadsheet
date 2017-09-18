import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';


class RowDataTable extends Component {

	rows = {}
	constructor(props) {
		super(props);
		this.rows = props.children;
	}

	render() {
		return (
			<tr>
				{
					Object.values(this.rows).reverse().map( (obj) =>
						<td>
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
		}

		render() {
			return (
				<thead>
					<tr>
						{
							this.headers.reverse().map((h, i) =>
									<th>
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

		this.rows = props.children; // Getting the rows 
		console.log(this.rows);
		// Getting the header keys
		for (var key in this.rows[0]) {
			this.headers.push(key);
		}

	}

	render() {
			return (
					<div>
					<table className="table">
						<HeaderDataTable>{this.headers}</HeaderDataTable>
						<tbody>
							{
								this.rows.map( (r) =>
										<RowDataTable>
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