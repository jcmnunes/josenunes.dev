import orionLogo from '../../img/orion-logo.svg';
import f1Logo from '../../img/f1-logo.svg';
import adidasLogo from '../../img/adidas-logo.svg';
import dodocLogo from '../../img/dodoc-logo.svg';
import szLogo from '../../img/sz-logo.svg';

interface Work {
  key: string;
  url: string;
  linkText: string;
  helpText: string;
  auxInfo: string;
  img: {
    src: any;
    alt: string;
    width: string;
    height: string;
  };
}

export const works: Work[] = [
  {
    key: 'orion',
    url: '/work/orion',
    linkText: 'Orion Advisor Tech',
    helpText: 'Frontend Developer',
    auxInfo: 'Jun 2019 - Present',
    img: {
      src: orionLogo,
      alt: 'Orion logo',
      width: '40px',
      height: '40px',
    },
  },
  {
    key: 'ostmodern-f1tvapp',
    url: '/work/ostmodern',
    linkText: 'Ostmodern/Formula 1',
    helpText: 'Frontend Developer',
    auxInfo: 'Jan 2019 - Mar 2019',
    img: {
      src: f1Logo,
      alt: 'F1 logo',
      width: '50px',
      height: '15px',
    },
  },
  {
    key: 'adidas-click',
    url: '/work/adidas',
    linkText: 'Adidas AG',
    helpText: 'Frontend Developer',
    auxInfo: 'Mar 2018 - Dec 2018',
    img: {
      src: adidasLogo,
      alt: 'Adidas logo',
      width: '50px',
      height: '33px',
    },
  },
  {
    key: 'dodoc',
    url: '/work/dodoc',
    linkText: 'doDOC Corp.',
    helpText: 'Frontend Developer',
    auxInfo: 'Oct 2016 - Feb 2018',
    img: {
      src: dodocLogo,
      alt: 'doDOC logo',
      width: '100px',
      height: '31px',
    },
  },
  {
    key: 'soundzipper',
    url: '/work/soundzipper',
    linkText: 'Soundzipper',
    helpText: 'Web Developer',
    auxInfo: 'Sep 2015 - Sep 2016',
    img: {
      src: szLogo,
      alt: 'Soundzipper logo',
      width: '120px',
      height: '23px',
    },
  },
];
