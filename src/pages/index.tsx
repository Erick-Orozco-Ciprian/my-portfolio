import '../styles/pages/index.module.css';

import Layout from '../layouts/layout';
import About from '../components/section/aboutSection'
import Skill from '../components/section/skillsSection'
import Portfolio from '../components/section/portfolioSection'

const index = () => {
  return (
    <Layout>
      <About />
      <Skill />
      <Portfolio />
    </Layout>
  );
};

export default index;