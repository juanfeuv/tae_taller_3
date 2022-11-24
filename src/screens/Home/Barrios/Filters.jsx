import _ from 'lodash';

import { toast } from 'react-toastify';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from "react";
import Select from 'react-select'
import Typography from '@mui/material/Typography';

import SideModal from '../../../components/SideModal';
import getAccidentes from '../Comunas/getAccidentes';

const DEFAULT_FORM = {
  year: null,
  clase: null,
};

const YEARS = [
  2014, 2015, 2016, 2017, 2018, 2019, 2020
].map(item => ({ value: item, label: item }));

const Filters = ({ open, setOpen, getColleges }) => {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [accidentes, setAccidentes] = useState([]);

  const handleClose = () => setOpen(false);

  const handlechange = (e) => {
    setForm({
      ...form,
      [e?.target?.name]: e?.target?.value,
    });
  };

  const changeSelect = (name) => value => handlechange({
    target: {
      name,
      value,
    }
  });

  const search = () => {
    getColleges(form);
    toast.success('Filtro aplicado exitosamente!');
    handleClose();
  };

  useEffect(() => {
    if (open) {
      setForm(DEFAULT_FORM);
    }
  }, [open]);

  useEffect(() => {
    setAccidentes(getAccidentes());
    // eslint-disable-next-line
  }, []);

  return (
    <SideModal open={open} setOpen={setOpen}>
      <div style={{ padding: '20px' }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Filtros de búsqueda
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography gutterBottom>Clase de Accidente *</Typography>
            <Select
              name='clase'
              value={form?.clase}
              onChange={changeSelect('clase')}
              options={accidentes}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom>Año *</Typography>
            <Select
              name='year'
              value={form?.year}
              onChange={changeSelect('year')}
              options={YEARS}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'right' }}>
            <Button
              variant="contained"
              color="success"
              onClick={search}
              disabled={_.isEmpty(form?.clase) || _.isEmpty(form?.year)}
            >
              Buscar
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="error"
              onClick={handleClose}
            >
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </div>
    </SideModal>
  );
};

Filters.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  getColleges: PropTypes.func.isRequired,
};

export default Filters;