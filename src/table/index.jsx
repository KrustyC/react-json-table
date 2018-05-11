import _ from 'lodash'
import React from 'react'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import Row from './Row'

export default ({ players }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Id Player</TableHeaderColumn>
        <TableHeaderColumn>Players</TableHeaderColumn>
        <TableHeaderColumn>Wins</TableHeaderColumn>
        <TableHeaderColumn>Games</TableHeaderColumn>
        <TableHeaderColumn>Points</TableHeaderColumn>
        <TableHeaderColumn>Betrays</TableHeaderColumn>
        <TableHeaderColumn>Killed</TableHeaderColumn>
        <TableHeaderColumn>Kills</TableHeaderColumn>
    </TableRow>
    </TableHeader>
    <TableBody>
     {_.map(players, (player, i) => <Row key={i} player={player} />)}
    </TableBody>
  </Table>
)