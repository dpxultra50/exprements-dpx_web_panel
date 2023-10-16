import Service from "../Service/Service";
import MetaData from "../layout/MetaData";

const WebDevelopment = () => {
  const WebDevelopmentData = {
    header: {
      title: [
        "Top-rated Website",
        "Development Services - for a",
        "Seamless Online Experience",
      ],
      subTitle:
        "Empower Your Company and Products with Our Expert Web Development Services",
      headerimg: "/images/services/web-development.webp",
    },
    solution: [
      {
        title: {
          t1: "Front-End",
          t2: "Web Development",
        },
        subTitle:
          "Building modern websites using the latest frontend frameworks including: React.js, Angular, Vue.js, Ember.js, Backbone.js, Polymer",
        icon: "/images/technologies/react-native.svg",
      },
      {
        title: {
          t1: "Back-End",
          t2: "Web Development",
        },
        subTitle:
          "Developing robust and scalable backend systems using latest technologies including : Node.js, Django, Laravel, Express, Flask, Spring",
        icon: "/images/technologies/nodejs.svg",
      },
      {
        title: {
          t1: "Database",
          t2: "Web Development ",
        },
        subTitle:
          "We offer a wide range of database development and management services, including: MySQL, PostgreSQL, MongoDB, Cassandra, SQL, Oracle",
        icon: "/images/technologies/mongodb.svg",
      },
      {
        title: {
          t1: "CMS",
          t2: "Web Development",
        },
        subTitle:
          "Building customizable CMS websitesse with a range of CMS platforms, including: WordPress, Shopify, Wix, Joomla, Magento",
        icon: "/images/technologies/wordpress.svg",
      },
      {
        title: {
          t1: "Full-Stack",
          t2: "App Development",
        },
        subTitle:
          "We offer a range of web development stacks to meet the needs of our clients, including: MEAN, MERN, LAMP, WAMP, XAMPP, Django Stack",
        icon: "/images/icons/Prototype.png",
      },
      {
        title: {
          t1: "Cloud",
          t2: "Web Deployment",
        },
        subTitle:
          "Our deployment process includes: Server setup,Cloud deployment, Database setup, Domain & SSL,Performance optimization and testing ",
        icon: "/images/technologies/aws.svg",
      },
    ],
    team: {
      headline: "Website to Drive Your Business Forward",
      title: "Building Website With Dedicated Web Developers",
      desc: [
        "Transform your website into a user-friendly platform with our expert website development services. Our team of dedicated website developers and designers are committed to building seamless digital solutions that unlock the full potential of your business.We offer end-to-end website development services, from concept to deployment, ensuring a future-proof solution that meets your unique needs. ",
        "From concept to deployment, we guide you through the process, ensuring a future-proof solution. Elevate your business with our scalable web solutions today.",
      ],
      teamImg: "/images/services/web-development-team.webp",
    },
    keyWord: "Website",
    dtlsImg: "/images/services/webdev-tec&team.webp",
    faq: [
      {
        q: "What kind of websites can you build ?",
        a: "We can build a wide range of websites, from simple brochure websites to complex e-commerce platforms. Our team of website developers and designers has experience working on websites across a variety of industries and can build custom websites tailored to your specific needs.",
      },
      {
        q: "What website development technologies do you specialize in ?",
        a: "Our team has expertise in a range of website development technologies, including modern frontend frameworks like React and Angular, robust backend development using Node.js and Laravel, content management systems (CMS) like WordPress and Shopify, and website deployment services like AWS and Google Cloud Platform.",
      },
      {
        q: "How long does it take to build a website?",
        a: "The timeline for website development varies depending on the complexity of the project. We work closely with our clients to understand their needs and provide realistic timelines for each stage of the development process.",
      },
      {
        q: "How much does it cost to build a website?",
        a: "The cost of website development also varies depending on the scope and complexity of the project. We provide custom quotes for each project based on the clients specific needs and requirements.",
      },
      {
        q: "How do I get started with your website development services?",
        a: "To get started, simply contact us to discuss your website development needs and goals. Our team will work with you to understand your business and provide a custom quote for our services.",
      },
    ],
  };
  return (
    <>
      <MetaData
        title="Website Development Company | DataPollex | Top  Website Development In Company Bangladesh | Top Website Development Company In Japan"
        keywords="Top website development company in Bangladesh , Best web development services in Bangladesh , Affordable website development in Bangladesh , Professional web development company Bangladesh , Custom website development services Bangladesh , Reliable web development agency Bangladesh , Ecommerce website development Bangladesh , Responsive web design company Bangladesh , SEO-friendly web development Bangladesh , Mobile app development company Bangladesh , Top website development company in Japan , Best web development services in Japan , Affordable website development in Japan , Professional web development company Japan , Custom website development services Japan , Reliable web development agency Japan , Ecommerce website development Japan , Responsive web design company Japan , SEO-friendly web development Japan , Mobile app development company Japan"
        desc="Looking for the top website development company in Bangladesh, Japan, and India? Look no further! dataPollex offers cutting-edge website development services to startups, SaaS, and enterprise companies. Our team of skilled developers delivers high-quality, custom websites tailored to your business needs. Partner with us for professional website development services that will help you stand out in the digital landscape. Contact us today!"
      />
      <Service data={WebDevelopmentData} />
    </>
  );
};

export default WebDevelopment;
