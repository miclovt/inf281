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
let sw=0,ij=0;
let listasistidos=[]; 
function createData(ci,nombre,appaterno,apmaterno,tarea,asistio,grado) {
  
  return {ci,nombre,appaterno,apmaterno,tarea,asistio,grado};
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
var hoy=new Date();
const rows = [
  { id: 'fecha', numeric: false, disablePadding: false, label: hoy.getDate()+'/'+(hoy.getMonth()+1)+'/'+hoy.getFullYear() },
  { id: 'nombre', numeric: false, disablePadding: false, label: 'NOMBRE' },
  { id: 'appaterno', numeric: false, disablePadding: false, label: 'AP. PATERNO' },
  { id: 'apmaterno', numeric: false, disablePadding: false, label: 'AP. MATERNO' },
  { id: 'tarea', numeric: false, disablePadding: false, label: 'TAREA' },
  { id: 'grado', numeric: false, disablePadding: false, label: 'GRADO' }
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
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      
    >
      <div className={classes.title}>
        <Typography variant="h6" id="tableTitle">
            LISTA DE SOLDADOS
          </Typography>
      </div>
      <div className={classes.spacer} />
      
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
  const [orderBy, setOrderBy] = React.useState('nombre');
  const [selected, setSelected] = React.useState([]);
  const [ci, setci] = React.useState([]);

  //var x=React.useState([]);
  
  //x.push(createData(2,'INGAVI','CABALLERIA','LA PAZ','AV. 6 DE MARZO','FUERZAS ARMADAS'),);
  var [data] = React.useState([]);
  data=[];
//console.log(window.location.pathname.split('/')[4]);
  const [datax,setdatax] = React.useState([]);
  React.useEffect(()=>{
    const fetchdata=async ()=>{
      const res=await axios(`/api/listarasistencia/${window.location.pathname.split('/')[3]}/${window.location.pathname.split('/')[4]}`);
        
      setdatax(res.data);
    };
    fetchdata();
  },[`api/listarasistencia/${window.location.pathname.split('/')[3]}/${window.location.pathname.split('/')[4]}`]);
  let listasistidos=[]; 
  for (let i = 0; i < datax.length; i++) {
    data.push(createData(datax[i]['CI'],datax[i]['Nombre'],datax[i]['ApPaterno'],datax[i]['ApMaterno'],datax[i]['Tarea'],datax[i]['Asistio'],datax[i]['Grado']));
    if(datax[i]['Asistio']==1 && sw==0){
        //console.log('hola');
        listasistidos.push(datax[i]['CI']);    
    }
  }//console.log(data);
  if(ij<listasistidos.length){
      //console.log(ij+"   "+listasistidos.length);
    setSelected(selected.concat(selected,listasistidos[ij]));  
    ij++;
  }React.useEffect(()=>{
    const fetchdata=async ()=>{
      const res=await axios(`/api/getcinstru/${window.location.pathname.split('/')[4]}`);
        
      setci(res.data);
    };
    fetchdata();
  },[`api/getcinstru/${window.location.pathname.split('/')[4]}}`]);
  console.log(ci['CI']);
  
  //console.log(selected);
  /*for (var index = 0; index < listasistidos.length; index++) {
      console.log(listasistidos[index])
      
  }*/
  
  
  

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function handleRequestSort(event, property) { 
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = data.map(n => n.ci);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  function handleClick(event, id) {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
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
    var data={
        CI:id,
        Fecha:datax[0]['Fecha'],
    };
    axios.put('/api/marcarasistencia/',data);
    setSelected(newSelected);
    
  }
  function guardardata(event) {
    //console.log(selected);
    
    for (let i = 0; i < selected.length; i++) {
        var data={
            CI:selected[i],
            Fecha:datax[0]['Fecha'],
        };
        axios.put('/api/marcarasistencia/',data);
    }alert('guardado exitosamente');
    document.location.reload(true);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }

  function updateTarea(event,id) {
    var tarea=document.getElementById(id+"");
    //console.log('hola')
    if(tarea.innerHTML==='Ninguna'){
            tarea.innerHTML='';
    }
  }function asigTarea(event,id) {
    var data={
        CI:id,
        Tarea:document.getElementById(id+"").innerText,
    };axios.put('/api/addtarea/',data);
  }
  function asigGrado(event,id) {
    var data={
        CI:id,
        Grado:document.getElementById(id+"g").innerText,
    };axios.put('/api/addgrado/',data);
  }
  const isSelected = id => selected.indexOf(id) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  
  return (
    
    <Paper className={classes.root}>
      <EnhancedTableToolbar numSelected={selected.length} />
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-labelledby="tableTitle">
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
          />
          <TableBody>
            {stableSort(data, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(n => {
                const isItemSelected = isSelected(n.ci);
                return (
                  <TableRow
                    hover
                    
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={n.ci}
                    selected={isItemSelected}
                    
                  >
                  <TableCell padding="checkbox">
                      <Checkbox  checked={isItemSelected} onClick={event => handleClick(event, n.ci)} />
                    </TableCell>
                   
                    <TableCell component="th" scope="row" padding="none" onClick={event => handleClick(event, n.ci)}>
                      {n.nombre}
                    </TableCell>
                    <TableCell component="th" scope="row" padding="none" onClick={event => handleClick(event, n.ci)}>
                      {n.appaterno}
                    </TableCell>
                    <TableCell component="th" scope="row" padding="none" onClick={event => handleClick(event, n.ci)}>
                      {n.apmaterno}
                    </TableCell>
                    <TableCell id={n.ci} component="th" scope="row" padding="none" contentEditable onClick={event => updateTarea(event, n.ci)} onKeyUp={event => asigTarea(event, n.ci)}>
                        {n.tarea=='' ?(
                            'Ninguna'
                        ):(
                            n.tarea
                        )}
                    
                    </TableCell>
                    <TableCell id={n.ci+"g"} component="th" scope="row" padding="none" contentEditable onKeyUp={event => asigGrado(event, n.ci)}>
                        {n.grado}                    
                    </TableCell>
                    <TableCell component="th" scope="row" padding="none">
                        <Button variant="contained" color="primary" href={'http://localhost:8000/instru/formlibreta/'+n.ci+'/'+ci['CI']}>realizar libreta</Button>       
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
        rowsPerPageOptions={[5, 10, 25, 50]}
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
      <center>
      
      </center>
      
    </Paper>
  );
}

export default EnhancedTable;
