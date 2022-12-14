import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { Outlet } from 'react-router-dom';

const TOOLTIP_CONTENT = (
  <ul>
    <li>Julian David Ruiz Herrera</li>
    <li>Juan Felipe Usuga Villegas</li>
    <li>Jonatan Urrego Zea</li>
    <li>Johan Sebastian Cano Garcia</li>
    <li>Raul vladimir Gaitan Vaca</li>
  </ul>
);

function DrawerAppBar() {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Accidentalidad en Medellín
            </Typography>
            <Button color="inherit" href="https://www.clickgreenapp.com/Reporte/introduccion.html" target="_blank" rel="noreferrer">Reporte</Button>
            <Button color="inherit" href="https://github.com/joscanoga/prediccion-de-incidentes-viales-en-la-ciudad-de-Medellin" target="_blank" rel="noreferrer">Repositorio</Button>
            <Button color="inherit" href="https://youtube.com/watch?v=tkLXRdLqimQ" target="_blank" rel="noreferrer">Video</Button>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleTooltipClose}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title={TOOLTIP_CONTENT}
                >
                  <Button onClick={handleTooltipOpen} color="inherit">Integrantes</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ padding: '10px' }}>
        <Outlet />
      </div>
    </>
  );
}

export default DrawerAppBar;
