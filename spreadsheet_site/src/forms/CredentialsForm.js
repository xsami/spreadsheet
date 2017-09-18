import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';

// Custom css code
const containerStyle = {
    margin: 15
};
const labelText = {
	margin: 6
}

class CredentialsForm extends Component { 

  handleSubmit(event) {
		event.preventDefault();
		
		const headers = new Headers({
			'Content-Type': 'application/json',
			"Access-Control-Allow-Origin": '*'
		});

		const options = {
			method: 'GET',
			headers,
			mode: 'no-cors',
		}
		//const req = new Request('http://localhost:8000/getAllData/', options);
		fetch('http://localhost:8000/getAllData/', options)
			.then((resp) => resp) // Transform the data into json
				.then(function(data) {
					// Create and append the li's to the ul
					console.log(data);
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
			</div>
		);
  }
}
export default CredentialsForm;