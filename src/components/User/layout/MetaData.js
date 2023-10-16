import {Helmet} from 'react-helmet-async';

const MetaData = ({title, keywords, desc}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={desc}></meta>
      <meta property="og:url" content="https://www.datapollex.com/"></meta>
    </Helmet>
  );
};

export default MetaData;
