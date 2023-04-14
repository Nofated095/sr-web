import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import LyricsIcon from '@mui/icons-material/Lyrics';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ButtonBase from '@mui/material/ButtonBase';
import Link from '@mui/material/Link';
import ToggleButton from '@mui/material/ToggleButton';
import InfoIcon from '@mui/icons-material/Info';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Renaissance Project
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const songs = [
  {
    title: 'SR01',
    cover: '/page/SR/SR01/img/songtitle.jpg',
    vndb: 'r74911',
    play: '/page/SR/index.html',
    flac: 'dllink',
  },
  {
    title: 'SR02',
    cover: '/page/SR/SR02/img/songtitle_zh.jpg',
    vndb: 'r74911',
    play: '/page/SR/index.html',
    flac: 'dllink',
  },
  {
    title: 'SR03',
    cover: '/page/SR/SR03/img/songtitle_zh.jpg',
    vndb: 'r74911',
    play: '/page/SR/index.html',
    flac: 'dllink',
  },
  {
    title: 'SR04',
    cover: '/page/SR/SR04/img/songtitle_zh.jpg',
    vndb: 'r74911',
    play: '/page/SR/index.html',
    flac: 'dllink',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  // backgroundColor: theme.palette.common.white,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function main() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LyricsIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Renaissance Project
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Renaissance Project
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              文艺复兴，我董力😘
              这里可以有更多的描述。
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">View the Manual</Button>
              <Button variant="outlined">GitHub</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {songs.map((songs) => (
              <Grid item key={songs.title} xs={12} sm={6} md={4}>

                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <ImageButton
                    focusRipple
                    key={songs.title}
                  >
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        // pt: '56.25%',
                      }}
                      image={songs.cover}
                      alt={songs.title}
                    />
                  </ImageButton>
                  {/* <Grid container spacing={0}>
                  <Grid xs={6}>
                    <ToggleButton value="center" key="center" href={"https://vndb.org/" + songs.vndb}>
                      <LyricsIcon />
                    </ToggleButton>
                  </Grid>
                  <Grid xs={6}>
                    <ToggleButton value="center" key="center">
                      <InfoIcon />
                    </ToggleButton>
                  </Grid>
                </Grid> */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {songs.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={songs.play}>Play</Button>
                    <Button size="small">Download</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Renaissance Project
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          文艺复兴，我董力
        </Typography>
        <Button variant="contained" href="https://discord.gg/">
          Discord
        </Button>
        <Button variant="contained" href="./page/SR/index.html">
          Play
        </Button>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider >
  );
}
