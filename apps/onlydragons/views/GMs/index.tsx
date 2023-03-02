import { Grid, Box } from '@mui/material';
import { Image, LinkButton, Subtitle1 } from '@d2xyz/ui';
import { HomeLayout } from '../../components/HomeLayout';

export const GMsView = () => {
  return (
    <HomeLayout>
      <Grid
        container
        sx={{
          minHeight: '100vh',
          color: '#fff',
          paddingTop: '81px',
          paddingBottom: '120px',
        }}
        alignItems='center'
        justifyContent='start'
      >
        <Grid item>
          <Box textAlign='center'>
            <LinkButton href='/' title='Only Dragons'>
              <Image
                src='static/img/onlydragons-logo.png'
                alt='onlydragons'
                title='onlydragons'
                responsive
                sx={{
                  maxWidth: '360px',
                }}
              />
            </LinkButton>
          </Box>
          <Box textAlign='center' mb={3}>
            <Subtitle1 paragraph>Only Dragons Game Masters</Subtitle1>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              external
              title='Thomas'
              href='https://startplaying.games/gm/onlydragons'
            >
              Thomas
            </LinkButton>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              external
              title='Paul'
              href='https://startplaying.games/gm/onlydragons-paul'
            >
              Paul
            </LinkButton>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              external
              title='Ricardo'
              href='https://startplaying.games/gm/ricardojrmcom'
            >
              Ricardo
            </LinkButton>
          </Box>
        </Grid>
      </Grid>
    </HomeLayout>
  );
};
