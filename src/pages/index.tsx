import '../styles/pages/index.module.css';

import Layout from '../layouts/layout';
import Intro from '../components/section/introSection'
import Introduction from '../components/section/introductionSection'


const index = () => {
  return (
    <Layout>
      <Intro />
      <Introduction id="about" />
    </Layout>
  );
};

export default index;