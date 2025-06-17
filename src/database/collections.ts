export const portifolioColections = [
  {
    date: 'MARÇO 20',
    type: 'ARTE',
    title: 'GALERIA DE ARTE',
    images: [
      {
        alt: 'exemplo',
        src: '/images/colections/Arte/01.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Arte/02.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Arte/03.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Arte/04.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Arte/05.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Arte/06.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Arte/07.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Arte/08.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Arte/09.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Arte/10.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Arte/11.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Arte/12.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Arte/13.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Arte/14.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Arte/15.jpg',
      },
    ],
  },
  {
    date: 'MARÇO 25',
    type: 'PESSOAL',
    title: 'FOTOS DE PERFIL E OUTRAS',
    images: [
      {
        alt: 'exemplo',
        src: '/images/colections/Pessoal/01.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Pessoal/02.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Pessoal/03.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Pessoal/04.jpg',
      },
    ],
  },
  {
    date: 'MARÇO 25',
    type: 'COMERCIAL',
    title: 'CAMPANHAS COMERCIAIS',
    images: [
      {
        alt: 'exemplo',
        src: '/images/colections/Comercial/01.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Comercial/02.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Comercial/03.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Comercial/04.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Comercial/05.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Comercial/06.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Comercial/07.jpg',
      },
    ],
  },
  {
    date: 'MARÇO 25',
    type: 'FASHION',
    title: 'DESFILE ITAJAÍ',
    images: [
      {
        alt: 'exemplo',
        src: '/images/colections/Moda/01.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Moda/02.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Moda/03.jpg',
      },
    ],
  },
  {
    date: 'MARÇO 25',
    type: 'NATUREZA',
    title: 'NATURE SC',
    images: [
      {
        alt: 'exemplo',
        src: '/images/colections/Natureza/01.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Natureza/02.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Natureza/03.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Natureza/04.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Natureza/05.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Fashion/06.jpg',
      },
      {
        alt: 'exemplo',
        src: '/images/colections/Fashion/07.jpg',
      },
    ],
  },
]

export const menuOptions = [
  {
    title: 'TODOS',
    quantidade: portifolioColections.length,
  },
  {
    title: 'COMERCIAL',
    quantidade: portifolioColections.filter(
      (comercial) => comercial.type === 'COMERCIAL'
    ).length,
  },
  {
    title: 'FASHION',
    quantidade: portifolioColections.filter(
      (comercial) => comercial.type === 'FASHION'
    ).length,
  },
  {
    title: 'NATUREZA',
    quantidade: portifolioColections.filter(
      (comercial) => comercial.type === 'NATUREZA'
    ).length,
  },
  {
    title: 'ARTE',
    quantidade: portifolioColections.filter(
      (comercial) => comercial.type === 'ARTE'
    ).length,
  },
  {
    title: 'PESSOAL',
    quantidade: portifolioColections.filter(
      (comercial) => comercial.type === 'PESSOAL'
    ).length,
  },
]
