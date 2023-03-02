import { Image, LinkButton } from '@d2xyz/ui';

export const Logo = () => (
  <LinkButton href='/' title='onlydragons'>
    <Image
      title='@onlydragons'
      alt='@onlydragons'
      src='/static/img/onlydragons-logo.png'
      sx={{ height: '39px' }}
    />
  </LinkButton>
);
