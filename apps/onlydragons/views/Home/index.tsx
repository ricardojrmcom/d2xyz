import { Grid, Box } from '@mui/material';
import { Image, LinkButton, Subtitle1 } from '@d2xyz/ui';
import { HomeLayout } from '../../components/HomeLayout';

export const HomeView = () => {
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
            <Subtitle1 paragraph>
              Dungeons and Dragons Online Community
            </Subtitle1>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='Blog'
              href='/blog'
            >
              Check out our Blog
            </LinkButton>
          </Box>
          <Box textAlign='center' mt={1.5} mb={1.5}>
            <LinkButton
              color='secondary'
              variant='contained'
              fullWidth
              title='DMs'
              href='/gms'
            >
              Meet the Dungeon Masters
            </LinkButton>
          </Box>
        </Grid>
      </Grid>
    </HomeLayout>
  );
};
