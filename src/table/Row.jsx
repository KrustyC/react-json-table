import React from 'react'

import { TableRow, TableRowColumn } from 'material-ui/Table'

export default ({ player }) => (
  <TableRow>
    <TableRowColumn>{player.idPlayer}</TableRowColumn>
    <TableRowColumn>{player.profiles.toString()}</TableRowColumn>
    <TableRowColumn>{player.gamesWinCount}</TableRowColumn>
    <TableRowColumn>{player.gamesCount}</TableRowColumn>
    <TableRowColumn>{player.pointsCount}</TableRowColumn>
    <TableRowColumn>{player.betrayCount}</TableRowColumn>
    <TableRowColumn>{player.killedCount}</TableRowColumn>
    <TableRowColumn>{player.killCount}</TableRowColumn>
  </TableRow>
)