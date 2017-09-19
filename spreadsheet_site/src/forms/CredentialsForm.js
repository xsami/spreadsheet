import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import DataTable from '../tables/DataTable.js';
import $ from 'jquery';

// Custom css code
const containerStyle = {
    margin: 15
};
const labelText = {
	margin: 6
}

class CredentialsForm extends Component { 

  constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);		
		this.state = {
			excelData: [{"Telephone": "849-859-5521", "Address": "WachingTonHigh", "Name": "Rolando", "ID": 1}, {"Telephone": "809-569-3269", "Address": "Dem c\\Perez", "Name": "Juancho Tacorta", "ID": 25}, {"Telephone": "809-256-1314", "Address": "Junior st.AG apt.Carier", "Name": "Billy Jean", "ID": 54}, {"Telephone": "808-123-4454", "Address": "Villa Francisca, Ave. Inmortales #33", "Name": "Edward Snow", "ID": 22}]
		};
  }

  handleSubmit(event) {
		event.preventDefault();

		this.setState({
			excelData: [{"Text": "demo"}, {"giveme": 'pesos'}]
		});
		
 		return $.ajax({
            url: "http://localhost:8000/getAllData/", // TODO: Get api address from config file
            type: "GET",
            crossDomain: true,
            dataType: "json",
            success: function (response) {
				return (response[0]);
            },
            error: function (xhr, status) {
                return (status);
            }
		});
	}

  render() {
		return (
			<div className='container' style={containerStyle}>
				<form onSubmit={this.handleSubmit}>  
					<div className='form-group row'>
						<label style={labelText}>Credentials</label>
						<div className="col-10">
							{/* Input file label */}
							<label className="custom-file">
								<input type="file" id="file" className="custom-file-input" accept='.json' />
								<span className="custom-file-control"></span>
							</label>
						</div>
					</div>
					<div className='form-group'>
						<button type='submit' className='btn btn-default'>Submit</button>
					</div>
				</form>
				<DataTable handleSubmit={this.handleSubmit}>{this.state.excelData}</DataTable>
			</div>
		);
  }
}
export default CredentialsForm;