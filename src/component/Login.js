import React, {Component} from  'react';
// material ui 
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';

class Login extends Component{
   alignCenter = {
    height: "100vh",              
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

  }

floatingLabelFocusStyle ={
  color:  "#512DA8"
}
underlineStyle ={
  borderColor : "#512DA8"
}


	constructor(props){
		super(props)
		this.state= {
			email: '', 
			apikey: ''
		}
	}
	render(){
		return(
				<div style={this.alignCenter}>
        <Card>
        
        <CardText>
				<TextField  
                type= "email"
      					hintText="Email"
               	floatingLabelText="Enter Email"
                floatingLabelStyle={this.floatingLabelStyle}
                floatingLabelFocusStyle={this.floatingLabelFocusStyle}
                underlineFocusStyle={this.underlineStyle}
      					value= {this.state.email}
      					onChange={ (e) => this.onChangeEmail(e) }
      					
    					/><br /> 					 
      					   <TextField
                   type= "Password"
      						hintText="Password"
      						floatingLabelText="Enter Password"
                  floatingLabelStyle={this.floatingLabelStyle}
                floatingLabelFocusStyle={this.floatingLabelFocusStyle}
                underlineFocusStyle={this.underlineStyle}
      						value={this.state.apikey}
              				onChange={ (e) => this.onChangePassword(e) }
      							/> <br /> 	
                    </CardText>
                    <CardText>    											
					<RaisedButton backgroundColor ="#512DA8" label= "Submit" labelColor="white" onClick={ () => this.submitForm()}/>
          </CardText>
          </Card>
				</div>
				
			)
	}
	 onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      apikey: e.target.value
    })
  }
   submitForm() {
    this.validateApiKey(this.state.apikey)
    .then((response)=> {
      if(response.ok){
          return response.json()
          .then((data)=>{
            if(data.email === this.state.email){
              sessionStorage.setItem("apikey", this.state.apikey)
              sessionStorage.setItem("email",this.state.email)
              this.props.history.push("/dashboard")
            }
            else{
              alert("User can't be validated")
            }
          })
      }
      else{
        alert(response.statusText)
      }
    })

  }

  componentWillMount(){
    const savedApikey= sessionStorage.getItem("apikey")
    if(savedApikey){
      this.validateApiKey(savedApikey)
      .then((response)=>{
        if(response.ok){
          this.props.history.push("/dashboard")
        }
      }

        )
    }
  }

  validateApiKey(apikey){
    return fetch('https://api.rebrandly.com/v1/account', 
      {
        headers: {
                    apikey: apikey
                }

      })
  }
}
export default Login;