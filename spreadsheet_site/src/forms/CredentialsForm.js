import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import $ from 'jquery';

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

 		$.ajax({
            url: "http://localhost:8000/getAllData/",
            type: "GET",
            crossDomain: true,
            dataType: "json",
            success: function (response) {
				// Render excel table
				console.log(response[0]);
            },
            error: function (xhr, status) {
                console.log(status);
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
			</div>
		);
  }
}
export default CredentialsForm;