import { Layout, Header, Footer } from '@d2xyz/ui';
import { APP } from '../../cfg/app';
import { Logo } from '../Logo';
import { Nav } from '../Nav';

export interface HomeLayoutProps {
  children?: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Layout
      bgImage='/static/img/onlydragons-hero.png'
      header={
        <Header transparent home={<Logo />}>
          {<Nav />}
        </Header>
      }
      footer={
        <Footer
          transparent
          copyrightMsg={APP.copyright}
          webmaster='https://www.landingweb.net/'
        />
      }
      containerWidth='lg'
    >
      {children}
    </Layout>
  );
};
