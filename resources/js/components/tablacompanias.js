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

function createData(idcompania,nombrecompania,genero) {
  
  return {idcompania,nombrecompania,genero };
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
  { id: 'nomcompania', numeric: false, disablePadding: false, label: 'NOMBRE' },
  { id: 'genero', numeric: false, disablePadding: false, label: 'GENERO' },
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
    flex: '1 1 50%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    //flex: '0 0 auto',
    width: 'auto',
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;
  const [nombre, setnombre] = React.useState();
  React.useEffect(()=>{
    const fetchdata=async ()=>{
      const res=await axios(`/api/nomcuartel/${window.location.pathname.split('/')[2]}`);
      setnombre(res.data);
    };
    fetchdata();
  },[`/api/nomcuartel/${window.location.pathname.split('/')[2]}`]);
  var x=nombre+"";
  function crear(event){
    window.location.href = "http://localhost:8000/admi/addcompaincuartel/"+window.location.pathname.split('/')[2];
  }
  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        
          <Typography variant="h6" id="tableTitle">
            COMPAÑIAS DEL CUARTEL {x.toUpperCase()}
          </Typography>
   
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
      <Button variant="contained" color="primary" onClick={event=>crear(event)}>
          AÑADIR COMPAÑIA
        </Button>
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
  },
}));

function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('nomcompania');
  const [selected, setSelected] = React.useState([]);

  //var x=React.useState([]);
  
  //x.push(createData(2,'INGAVI','CABALLERIA','LA PAZ','AV. 6 DE MARZO','FUERZAS ARMADAS'),);
  var [data] = React.useState([]);
  data=[];
  const [datax,setdatax] = React.useState([]);
  React.useEffect(()=>{
    const fetchdata=async ()=>{
      const res=await axios(`/api/allcompanias/${window.location.pathname.split('/')[2]}`);
      setdatax(res.data);
    };
    fetchdata();
  },[`/api/allcompanias/${window.location.pathname.split('/')[2]}`]);
      
  for (let i = 0; i < datax.length; i++) {
    data.push(createData(datax[i]['IdCompania'],datax[i]['NomCompania'],datax[i]['Genero']));
    
  }console.log(data);
  
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
    console.log(id);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }
  function funcion(event,ci){}
  //function funcion1(event){document.getElementById('nc').contentEditable=false;console.log('desca');}
  function editable(event){document.getElementById('nc').contentEditable=true;}
  const isSelected = id => selected.indexOf(id) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <Paper className={classes.root}>
      <EnhancedTableToolbar numSelected={selected.length} />
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-labelledby="tableTitle">
          <EnhancedTableHead
            hover
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
                    onClick={event => handleClick(event, n.idcompania)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={n.id}
                    selected={isItemSelected}
                  >
                   
                    <TableCell component="th" scope="row" padding="checkbox"
                     //onClick={event=>editable(event)} onKeyUp={event=>funcion(event,n.ci)} 
                      >
                      {n.nombrecompania}
                    </TableCell>
                    <TableCell component="th" scope="row" padding="none">
                      {n.genero == 0 ? (
                        "FEMENINO"
                        ) : (
                        "MASCULINO"
                        )}
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
