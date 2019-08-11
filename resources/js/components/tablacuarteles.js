import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import axios from 'axios';
import Button from '@material-ui/core/Button';

function createData(idcuartel,nombrecuartel,arma,departamento,direccion,tipo) {
  
  return { idcuartel:idcuartel-1,nombrecuartel,arma,departamento,direccion,tipo};
}
function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'idcuartel', numeric: true, disablePadding: false, label: 'ID' },
  { id: 'nombrecuartel', numeric: false, disablePadding: false, label: 'NOMBRE' },
  { id: 'arma', numeric: false, disablePadding: false, label: 'ARMA' },
  { id: 'departamento', numeric: false, disablePadding: false, label: 'DEPARTAMENTO' },
  { id: 'direccion', numeric: false, disablePadding: false, label: 'DIRECCION' },
  { id: 'tipo', numeric: false, disablePadding: false, label: 'TIPO' },
  { id: '', numeric: false, disablePadding: false, label: '' },
  { id: '', numeric: false, disablePadding: false, label: '' },
  
];

function EnhancedTableHead(props) {
  const { order, orderBy,  onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {rows.map(
          row => (
            <TableCell
              key={row.id}
              numeric={row.numeric}
              padding={row.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === row.id ? order : false}
            >
              <Tooltip
                title="Sort"
                placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                enterDelay={300}
              >
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>
              </Tooltip>
            </TableCell>
          ),
          this,
        )}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.primary,
    width: '450px',
  },
  title: {
    flex: '0 0 auto',
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;
  function crear(event){
    window.location.href = "http://localhost:8000/admi/addcuartel";
  }function nuevafecha(event){
    window.location.href = "http://localhost:8000/fechaini";
  }function nuevoinstru(event){
    window.location.href = "http://localhost:8000/admi/addinstru";
  }
  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            LISTA DE CUARTELES
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions} >
      <table>
        <tr>
        <td><Button variant="contained" color="primary" onClick={event=>nuevoinstru(event)}>
          AÑADIR INSTRUCTOR
        </Button></td>
        <td>    </td>
        <td>    </td>
        <td>    </td> 
          <td><Button variant="contained" color="primary" onClick={event=>nuevafecha(event)}>
          FECHA DE INSCRIPCION
        </Button></td>
        <td>    </td>
        <td>    </td>
        <td>    </td> 
        <td><Button variant="contained" color="primary" onClick={event=>crear(event)}>
          AÑADIR CUARTEL
        </Button></td>
        </tr>
      </table>
      
        
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 'auto',
  },
  tableWrapper: {
    overflowX: 'auto',
  }, button: {
    margin: theme.spacing.unit,
  },
  
}));

function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('nombrecuartel');
  const [selected, setSelected] = React.useState([]);
  var [data] = React.useState([]);
  data=[];
  const [datax,setdatax] = React.useState([]);
  React.useEffect(()=>{
    const fetchdata=async ()=>{
      const res=await axios('api/allcuarteles');
      setdatax(res.data);
    };
    fetchdata();
  },['api/allcuarteles']);
      
  for (let i = 0; i < datax.length; i++) {
    data.push(createData(datax[i]['IdCuartel'],datax[i]['Nombre'],datax[i]['Arma'],datax[i]['Departamento'],datax[i]['Direccion'],datax[i]['Tipo']));
    
  }
  console.log(data);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function handleRequestSort(event, property) { 
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = data.map(n => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  function handleClick(event, id) {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    id=id+1;

    /*if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    
    setSelected(newSelected);*/
    window.location.href = "http://localhost:8000/companias/"+id;
    console.log(id);
  }function deletes(event,id){
    
  }

  
  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }

  const isSelected = id => selected.indexOf(id) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <Paper className={classes.root}>
      <EnhancedTableToolbar numSelected={selected.length} />
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-labelledby="tableTitle">
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
          />
          <TableBody>
            {stableSort(data, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(n => {
                const isItemSelected = isSelected(n.id);
                return (
                  <TableRow
                    hover
                    onClick={event => handleClick(event, n.idcuartel)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={n.id}
                    selected={isItemSelected}
                  >
                   <TableCell numeric>{n.idcuartel}</TableCell>
                    <TableCell component="th" scope="row" padding="none" >
                      {n.nombrecuartel}
                    </TableCell>
                    <TableCell component="th" scope="row" padding="none">
                      {n.arma}
                    </TableCell>
                    <TableCell component="th" scope="row" padding="none">
                      {n.departamento}
                    </TableCell>
                    <TableCell component="th" scope="row" padding="none">
                      {n.direccion}
                    </TableCell>
                    <TableCell component="th" scope="row" padding="none">
                      {n.tipo}
                    </TableCell>
                    <TableCell>
                    <Button className={classes.button} color="primary" href={"http://localhost:8000/cupos/"+(n.idcuartel+1)}>
                      cupos
                    </Button>
                    </TableCell>
                    
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 49 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default EnhancedTable;
