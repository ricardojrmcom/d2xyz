import { Box } from '@mui/material';
import { MenuButton, LinkButton } from '@d2xyz/ui';
import MenuIcon from '@mui/icons-material/Menu';

export const Nav = () => {
  return (
    <MenuButton
      sx={{ color: '#fff' }}
      labels={{ btn: 'Menu' }}
      endIcon={<MenuIcon />}
      variant='text'
    >
      <Box>
        <Box>
          <LinkButton fullWidth href='/' title='Home'>
            Home
          </LinkButton>
        </Box>
        <Box>
          <LinkButton fullWidth href='/blog' title='Blog'>
            Blog
          </LinkButton>
        </Box>
        <Box>
          <LinkButton fullWidth href='/gms' title='GMs'>
            GMs
          </LinkButton>
        </Box>
      </Box>
    </MenuButton>
  );
};
