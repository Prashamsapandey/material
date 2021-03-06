import React, { Component } from 'react';

// Material Component
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/image/edit';
import IconButton from 'material-ui/IconButton';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

// Component
import Header from '../Header';

// Service
import RebrandlyApi from '../../services/rebrandlyApi';

class LinkList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      links: []
    }
  }
  render() {
    return (
      <div>
         <Header /> 
        <Table selectable={false}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>#</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Destination</TableHeaderColumn>
              <TableHeaderColumn>Short URL</TableHeaderColumn>
              <TableHeaderColumn>Action</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
          {
          this.state.links.map((link, index) => {
            return(
              <TableRow key={link.id} selectable={false}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{link.title}</TableRowColumn>
                <TableRowColumn>{link.destination}</TableRowColumn>
                <TableRowColumn>{link.shortUrl}</TableRowColumn>
                <TableRowColumn>
                  <IconButton
                    onClick={() => this.props.history.push(`/links/${link.id}/edit`)} >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                  onClick={() => this.deleteLink(link.id)} >
                    <DeleteIcon />
                  </IconButton>
                </TableRowColumn>
              </TableRow>
            )
          })
        }
          </TableBody>
        </Table>
      </div>
    )
  }

  componentWillMount() {
    this.listLink()
  }

  deleteLink(linkId) {
    RebrandlyApi.delete(`/links/${linkId}`)
    .then(response => {
      this.listLink()
    })
    .catch(err => {
      alert(err.message)
    })
  }

  listLink() {
    RebrandlyApi.get('/links')
    .then(links => {
      this.setState({
        links: links
      })
    })
  }
}

export default LinkList;