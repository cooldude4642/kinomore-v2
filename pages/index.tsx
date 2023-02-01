import { createGSP } from 'pages/shared';
import { HomePage, pageModel } from 'pages/home';

export const getStaticProps = createGSP({
  pageEvent: pageModel.pageStarted,
});

export default HomePage;
