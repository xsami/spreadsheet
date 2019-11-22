import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import DataTable from '../DataTable/';
import axios from 'axios';
import logo from '../../logo.svg';
// import config from '../../routes/serverConfig.js';

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
			loadingStyle: { display: 'none', textAling: 'center' },
			excel_name: '',
			file_name: '',
			currentAction: () => {},
		};
	}
	
	updateTh = (data) => {

		var arr = [];
		for (var key in data[0]) {
			arr.push(key);
		}
		this.setState({ th: arr });

	}

	updateExcel = (data) => {
		this.setState({ excelData: data});
		this.updateTh(data);
	}

  loadOpts = () => {
	this.loadExcel('http://localhost:3001/options')

	this.setState({
		currentAction: function(opt, id) {
			console.log('options')
			console.log({ opt, id })
		}
	})
  }

  loadCorps = () => {
	this.loadExcel('http://localhost:3001/corps')

	this.setState({
		currentAction: function(opt, id) {
			console.log('corps')
			console.log({ opt, id })
		}
	})

  }

  loadExcel = (url) => {
	  
		// var url = config.API_URL + config.GET_ALL_DATA + this.state.excel_name;
		this.setState({loadingStyle: {display: 'block'}});
		
		axios.get(url)
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
					<div className='form-group'>
						<input type='button' className='btn btn-default' onClick={this.loadCorps} value="Load Corporations" />
						<input type='button' className='btn btn-default' onClick={this.loadOpts} value="Load Options" />
					</div>
				</div>
				<div style={this.state.loadingStyle} >
					<img src={logo} className='App-logo' alt='loading'/>
					<p>Loading...</p>
				</div>
				<DataTable dpx={this.state.excelData} th={this.state.th} action={this.state.currentAction} />
			</div>
		);
	}
}
export default CredentialsForm;