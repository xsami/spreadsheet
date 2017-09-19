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
		this.state = {
			excelData: [],
			change: false
		};
  }

  handleSubmit(event) {
		event.preventDefault();

		return false;
	}

  updateExcel = () => {
	  $.ajax({
            url: "http://localhost:8000/getAllData/", // TODO: Get api address from config file
            type: "GET",
            crossDomain: true,
            dataType: "json",
            success: (response) => {
				this.setState({ excelData: response});
            },
            error: function (xhr, status) {
                console.log(status);
            }
		});
	this.setState({change: !this.state.change});
  }

  render() {
	  var table = <DataTable dpx={this.state.excelData} />
	  if (this.state.change) {
		  table = <div></div>
	  }
		return (
			<div className='container' style={containerStyle}>
				<div>  
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
						<input type='button' className='btn btn-default' onClick={this.updateExcel} value="Update Excel" />
					</div>
				</div>
				{table}
			</div>
		);
  }
}
export default CredentialsForm;