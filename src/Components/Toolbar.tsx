/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 64,
  [theme.breakpoints.up('sm')]: {
    height: 70,
  },
  color: 'White',
  backgroundColor: 'black',
}));

export default Toolbar;
