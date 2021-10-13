import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Button.style.css';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));

function ButtonWrapper(props) {
  const classes = useStyles();

  return (
    <Button className={classes.root} {...props}>
      {props.children}
    </Button>
  );
}

export default ButtonWrapper;
