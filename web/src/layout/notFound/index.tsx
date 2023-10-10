import { A } from '@solidjs/router';

import { SVGIconKind } from '../../types';
import SVGIcon from '../common/SVGIcon';
import Footer from '../navigation/Footer';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <>
      <main
        role="main"
        class="container-lg flex-grow-1 p-5 d-flex flex-column align-items-center justify-content-center"
      >
        <div class={`m-3 ${styles.icon}`}>
          <SVGIcon kind={SVGIconKind.Warning} />
        </div>
        <div class="h1 text-center mb-4">Error 404 - Page Not Found</div>
        <div class="h3 text-center mb-5">The page you were looking for wasn't found</div>
        <A href="/" class="btn btn-primary rounded-0 text-white btn-lg text-decoration-none">
          Back Home
        </A>
      </main>
      <Footer logo={window.baseDS.images.footer_logo} />
    </>
  );
};

export default NotFound;
