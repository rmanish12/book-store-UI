import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AddStore from "../../../containers/home/admin/addStore"
import ViewStore from "../../../containers/home/admin/viewStore"

export default function AdminPortal() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="add-store"
        >
          <Typography className={classes.heading}>Add New Store</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <AddStore />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="add-store"
        >
          <Typography className={classes.heading}>Get Store Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ViewStore />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));