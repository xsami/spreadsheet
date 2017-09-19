import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import DataTable from '../tables/DataTable.js';
import axios from 'axios';
import logo from '../logo.svg';
import '../App.css';

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
			th: [],
			loadingStyle: { display: 'none', textAling: 'center' }
		};
	}
	
	updateTh = (data) => {
		var arr = [];
		for (var key in data[0])
			arr.push(key);
		this.setState({ th: arr });
	}

	updateExcel = (data) => {
		this.setState({ excelData: data});
		this.updateTh(data);
	}

  loadExcel = () => {
		this.setState({loadingStyle: {display: 'block'}});
		axios.get('http://localhost:8000/getalldata/') // Get url from config file
		.then((res) => {
			this.updateExcel(res.data);
			this.setState({loadingStyle: {display: 'none'}});
		})
		.catch( (err) => {
			this.setState({excelData: []}, console.log(err));
			this.setState({loadingStyle: {display: 'none'}});
		});
	}
	

  render() {
		return (
			<div className='container' style={containerStyle}>
				<div>  
					<div className='form-group row'>
						<label style={labelText}>Credentials</label>
						<div className="col-10">
							<label className="custom-file">
								<input type="file" id="file" className="custom-file-input" accept='.json' />
								<span className="custom-file-control"></span>
							</label>
						</div>
					</div>
					<div className='form-group'>
						<input type='button' className='btn btn-default' onClick={this.loadExcel} value="Load Excel" />
					</div>
				</div>
				<div style={this.state.loadingStyle} >
					<img src={logo} className='App-logo' alt='loading'/>
					<p>Loading...</p>
				</div>
				<DataTable dpx={this.state.excelData} th={this.state.th}  />
			</div>
		);
  }
}
export default CredentialsForm;