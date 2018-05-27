import React,  {Component} from 'react';
//material ui component

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Account from './Account';
import {Link} from 'react-router-dom'
class Header extends Component{
	appStyle = {
       backgroundColor: '#512DA8'
  } 
  sideBar={
	textDecoration: 'none'
}
	constructor(props){
		super(props)
		this.state={
			sidebarOpen: false,
			email:''
			
		}
	}
	render(){
		return(
			<div>
			
			<AppBar style={this.appStyle}
				title= "Welcome to Dashboard"
				 iconElementRight={ <Account email={this.state.email}/>}
				onLeftIconButtonClick={() => this.toggleSidebar()}
				/>
				
				<Drawer open={this.state.sidebarOpen}
					docked= {false}
					onRequestChange={() => this.toggleSidebar()} >
					<MenuItem> <Link to ="/dashboard" style={this.sideBar}>Home</Link></MenuItem>
					<MenuItem> <Link to ="/links" style={this.sideBar}>Links</Link> </MenuItem>
					<MenuItem> <Link to="/CreateLinks" style={this.sideBar}>Create Link</Link></MenuItem>
				
				</Drawer>
								 
			</div>
			)
	}
	toggleSidebar(){
		this.setState({sidebarOpen: !this.state.sidebarOpen})
	}
	 componentWillMount() {
    this.setState({
      email: sessionStorage.getItem('email')
    })
  }
	
}
export default Header; 