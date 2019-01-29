import React from 'react'

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    alignSelf: 'center' ,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 480,
    height: 40,
    marginBottom: 50,
  },
  input: {
    marginLeft: 15,
    fontSize: 20,
  },
  iconButton: {
    paddingLeft: 2,
    color: 'gray'
  }
}

const SearchInput = (props) => {
    const { classes } = props;
    return(
        <Paper className={classes.root} square={true} elevation={0}>
            <InputBase className={classes.input} fullWidth={true} placeholder="Insira aqui o nome da cidade" />
            <SearchIcon className={classes.iconButton} />
         </Paper>
    )
}

export default withStyles(styles)(SearchInput)