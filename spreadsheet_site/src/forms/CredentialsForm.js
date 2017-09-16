import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';

const containerStyle = {
    margin: 15
};
const labelText = {
	margin: 6
}
class CredentialsForm extends Component { 
  render() {
		return (
			<div className='container' style={containerStyle}>
				<form>  
					<div className='form-group row'>
						<label style={labelText}>Credentials:</label>
						<div className="col-10">
							<label className="custom-file">
								<input type="file" id="file" className="custom-file-input" />
								<span className="custom-file-control"></span>
							</label>
						</div>
					</div>
				</form>
			</div>
		);
  }
}
export default CredentialsForm;