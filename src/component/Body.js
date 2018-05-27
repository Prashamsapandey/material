import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Body extends Component{
	render(){
		return(
				<div>
					<Table>
							<TableHeader>
      							<TableRow>
        							<TableHeaderColumn>ID</TableHeaderColumn>
        							<TableHeaderColumn>Name</TableHeaderColumn>
        							<TableHeaderColumn>Status</TableHeaderColumn>
      							</TableRow>
    						</TableHeader>
					</Table>
				</div>
			)
	}
}
export default Body;