import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublicIcon from '@mui/icons-material/Public';
import React, { useState } from "react";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Tooltip from '@mui/material/Tooltip';
import WarningIcon from '@mui/icons-material/Warning';

import Barrios from './Barrios/Barrios';
import Comunas from './Comunas/Comunas';

const Home = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid container alignItems="center">
        <Grid item xs={12} md={8}>
          <Tabs value={value} onChange={handleChange}>
            <Tab icon={<PublicIcon />} label="Predicción" iconPosition="start" />
            <Tab icon={<LocationSearchingIcon />} label="Agrupamiento por Barrios" iconPosition="start" />
          </Tabs>
        </Grid>
        <Grid item xs={12} md={4} style={{ textAlign: 'right' }}>
          <IconButton disableRipple>
            <WarningIcon color='warning' />
          </IconButton>
          &nbsp;
          Aplique primero filtros:
          <IconButton disableRipple>
            <ArrowRightAltIcon />
          </IconButton>
          <Tooltip title="Filtrar mapa">
            <IconButton onClick={() => setOpen(true)} color="primary">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item xs={12}>
          {
            value === 0 && (
              <Comunas open={open} setOpen={setOpen} />
            )
          }
          {
            value === 1 && (
              <Barrios open={open} setOpen={setOpen} />
            )
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
