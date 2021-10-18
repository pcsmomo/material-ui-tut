import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styled from 'styled-components';

import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
// Way 1. Importing css file
// import "./DataSheet.css";

// Way 2. Using makeStyle()
const useStyles = makeStyles((theme) => ({
  sheetContainer: {
    display: 'block',
    padding: '5px',
    boxShadow: '0px 0px 6px #ccc',
    margin: 'auto',
    width: '500px',
    transition: 'box-shadow 0.5s ease-in',
    '&:hover': {
      transition: 'box-shadow 0.5s ease-in',
      boxShadow: '0px 0px 1px #ccc',
    },
  },
  dataGrid: {
    margin: 'auto',
    width: '100%',
    '& tr td.cell:not(.selected)': {
      border: '1px solid #ececec',
    },
    '& tr td.cell, & tr th.cell': {
      fontSize: 12,
    },
  },
}));

// Way 3. Using styled component
// https://v4.mui.com/guides/interoperability/#styled-components
const StyledDataSheet = styled(ReactDataSheet)`
  margin: auto;
  width: 100%;
  & tr td.cell:not(.selected) {
    border: 1px solid #ececec;
  }
  & tr td.cell,
  & tr th.cell {
    font-size: 12px;
  }
`;

const DataSpread = () => {
  const classes = useStyles();

  const [dataGrid, setDataGrid] = useState([
    [
      { readOnly: true, value: '' },
      { value: 'RT XZ', readOnly: true },
      { value: 'RT Y', readOnly: true },
      { value: 'RT Theta', readOnly: true },
      { value: '100 ele det X', readOnly: true },
    ],
    [
      { readOnly: true, value: 1 },
      { value: -16 },
      { value: 68 },
      { value: 180 },
      { value: 180 },
    ],
    [
      { readOnly: true, value: 2 },
      { value: -16 },
      { value: 67 },
      { value: 180 },
      { value: 180 },
    ],
    [
      { readOnly: true, value: 3 },
      { value: -14.5 },
      { value: 1 },
      { value: 90 },
      { value: 230 },
    ],
    [
      { readOnly: true, value: 4 },
      { value: -14.5 },
      { value: 2 },
      { value: 90 },
      { value: 230 },
    ],
    [
      { readOnly: true, value: 5 },
      { value: -14.5 },
      { value: 11.5 },
      { value: 90 },
      { value: 230 },
    ],
    [
      { readOnly: true, value: 6 },
      { value: -14.5 },
      { value: 12.5 },
      { value: 90 },
      { value: 230 },
    ],
    [
      { readOnly: true, value: 7 },
      { value: -14.5 },
      { value: 29.5 },
      { value: 90 },
      { value: 230 },
    ],
  ]);

  const valueRenderer = (cell) => cell.value;

  const onCellsChanged = (changes) => {
    const grid = dataGrid;
    changes.forEach(({ cell, row, col, value }) => {
      grid[row][col] = { ...grid[row][col], value };
    });
    setDataGrid(grid);
  };

  const onContextMenu = (e, cell, i, j) =>
    cell.readOnly ? e.preventDefault() : null;

  return (
    <div className={classes.sheetContainer}>
      <ReactDataSheet
        className={classes.dataGrid}
        data={dataGrid}
        valueRenderer={valueRenderer}
        onCellsChanged={onCellsChanged}
        onContextMenu={onContextMenu}
      />
      {/* <StyledDataSheet
        className={classes.dataGrid}
        data={dataGrid}
        valueRenderer={valueRenderer}
        onCellsChanged={onCellsChanged}
        onContextMenu={onContextMenu}
      /> */}
    </div>
  );
};

export default DataSpread;
