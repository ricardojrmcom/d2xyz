import { Image, LinkButton } from '@d2xyz/ui';

export const Logo = () => (
  <LinkButton href='/' title='landingwebnet'>
    <Image
      title='@landingwebnet'
      alt='@landingwebnet'
      src='/static/img/landingwebnet-logo-alpha.png'
      sx={{ height: '39px' }}
    />
  </LinkButton>
);
