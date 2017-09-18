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
		this.getExcelData = this.getExcelData.bind(this);		
		this.state = {
			excelData: [] //this.getExcelData().bind(this)
		};
  }

  getExcelData(event) {
		event.preventDefault();

	  return $.ajax({
								url: "http://localhost:8000/getAllData/", // TODO: Get api address from config file
								type: "GET",
								crossDomain: true,
								dataType: "json",
								success: function (response) {
									this.setState({
										excelData: response
									});
									return (response[0]);
								},
								error: function (xhr, status) {
									return (status);
								}
							});
  }

  handleSubmit(event) {
		event.preventDefault();

 		$.ajax({
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
				<form onSubmit={this.getExcelData}>  
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
				<DataTable>{this.state.excelData}</DataTable>
			</div>
		);
  }
}
export default CredentialsForm;