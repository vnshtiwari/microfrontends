import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TablePagination from '@mui/material/TablePagination';

import propTypes from 'prop-types';

const HospitalCard = ({ hospital }) => {
  return (
    <div className="containerHosp">
      <Typography> {hospital.hospitalName} </Typography>
      <Typography> {hospital.primaryAddress} </Typography>
      <Typography> {hospital.hospitalEmail} </Typography>
      <Typography> {hospital.hospitalRohiniCode} </Typography>
      <Typography> {hospital.hospitalPhoneNo} </Typography>
      <Typography> {hospital.hospitalCategory} </Typography>
      <Typography> {hospital.hospitalStdCode} </Typography>
      <Typography> {hospital.hospitalPhoneNo} </Typography>

    </div>
  );
};
export default HospitalCard;
// default Props
HospitalCard.defaultProps = {
  id: 0,
  image: 'blank',
  name: 'unknown',
  date: 'unknown',
  type: 'unknown',
  description: 'unknown',
};
// proptypes
HospitalCard.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  date: propTypes.string,
  type: propTypes.string,
  description: propTypes.string,
};
