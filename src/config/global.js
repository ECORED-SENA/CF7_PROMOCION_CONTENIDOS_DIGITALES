export default {
  global: {
    componenteFormativo: 'Elaboración de propuestas comerciales',
    descripcionCurso:
      'Una propuesta comercial incluye la información del producto, beneficios, plazos, alcance, formas de pago. Además, los principales componentes de una propuesta comercial, el análisis de resultados del plan de mercadeo y la identificación de necesidades del cliente, la descripción del producto, condiciones de la propuesta y formas de presentación, estrategias y técnicas que ayudarán al cierre efectivo de la venta.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/8.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.svg'),
      },
      {
        clases: ['banner-principal-decorativo-10', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/10.svg'),
      },
      {
        clases: ['banner-principal-decorativo-11', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/11.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Plan de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de plan de mercadeo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de planes de mercadeo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estructura de un plan de mercadeo',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Las ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto de ventas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Proceso de la venta',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estrategia y técnicas de ventas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Propuestas comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Concepto de documentos comerciales',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de documentos comerciales',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Concepto de propuesta comercial',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Estructura de una propuesta comercial',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Control y manejo de la información comercial',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Plan de mercadeo',
      referencia:
        'Cámara de Comercio de Medellín. (2022). Aula empresarial: estrategias de ventas, 3 maneras de traer dinero a la empresa. [Video]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Cf1o8F1tIIQ',
    },
    {
      tema: 'Las Ventas',
      referencia:
        'Kotler, P., Armstrong, G., Gay, M. G. M., y Cantú, R. G. C. (2017). Fundamentos de marketing. Pearson Educación.',
      tipo: 'Libro',
      descarga: '/downloads/Fundamentos-del-Marketing-Kotler.pdf',
    },
    {
      tema: 'Propuesta comercial',
      referencia:
        'Keller, K. L., y Kotler, P. (2012). Dirección de marketing. Pearson Educación.',
      tipo: 'Libro',
      descarga: '/downloads/direccion-de-marketing-14edi-kotler1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Administración de ventas',
      significado:
        'actividades gerenciales que intervienen en la planeación, realización y evaluación de las actividades a desarrollar por una fuerza de ventas.',
    },
    {
      termino: 'AIDA',
      significado:
        'etapa de presentación de ventas en el proceso de venta personal. Los puntos para llevarlo a cabo son Atraer la atención, mantener el Interés, provocar el Deseo y generar la Acción de compra al responder las objeciones del cliente y cerrar la venta',
    },
    {
      termino: 'B2B',
      significado:
        'siglas de “<i>Business to Business</i>”. Se basa en la interacción de empresas por medio de Internet. Puede incluir intercambios de información, plataformas de subastas y mercados de negocios.',
    },
    {
      termino: 'B2C',
      significado:
        'siglas de “<i>Business to Consumer</i>”. Se basa en transacciones entre empresas y consumidores finales.',
    },

    {
      termino: 'B2E',
      significado:
        'siglas de “<i>Business to Employees</i>”. Dirigida a las relaciones entre las empresas y sus empleados. Es un comercio interno que va desde la empresa hacia los empleados, la cual puede ser realizada a través del <i>website</i> corporativo, o desde una Intranet de acceso restringido, a los empleados de una empresa.',
    },
    {
      termino: 'B2I',
      significado:
        'siglas de “<i>Business to Investor</i>”. Se basa en transacciones entre empresas e Inversionistas.',
    },
    {
      termino: 'Cierre de ventas',
      significado:
        'parte del proceso de ventas donde (después de haber presentado el producto o servicio y aclarado las dudas existentes) se tiende a cerrar la negociación y el prospecto de venta se convierte en cliente (DocuSign).',
    },
    {
      termino: 'Clínica de ventas',
      significado:
        'actividad de capacitación que implementan las empresas para mantener la fuerza de ventas en las habilidades de la técnica y el proceso de la venta adoptado por la empresa.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'comunicación que permite dialogar con calma y respeto, expresando lo que queremos decir, pero sin herir los sentimientos de las otras personas (González, 2021).',
    },
    {
      termino: 'Proceso de ventas',
      significado:
        'sucesión de pasos que una empresa realiza desde el momento en que intenta captar la atención de un potencial cliente hasta que la transacción final se lleva a cabo (Inboundcycle).',
    },
    {
      termino: 'Técnicas de venta',
      significado:
        'serie de procedimientos, acciones y protocolos para lograr el resultado de ventas.',
    },
    {
      termino: 'Venta consultiva',
      significado:
        'tipo de venta en la que el vendedor también actúa como consultor. Más que vender a toda costa, el profesional escucha al posible cliente, comprende sus necesidades y busca conjuntamente la solución más adecuada (Station, 2020).',
    },
  ],
  referencias: [
    {
      referencia:
        'Jobber, D., y Lancaster, G. (2012). Administración de ventas. Pearson.',
    },
    {
      referencia: 'Heller, M. E. (s. f.). Ventas. ',
      link: 'http://www.degerencia.com/tema/ventas',
    },
    {
      referencia:
        'Kotler, P. y Keller, K. L., & (2012). Dirección de marketing. Pearson Educación.',
    },
    {
      referencia:
        'Kotler, P., Armstrong, G., Gay, M. G. M., y Cantú, R. G. C. (2017). Fundamentos de marketing. Pearson Educación.',
    },
    {
      referencia: 'Madurga, J. (2015). Semrush.',
      link:
        'https://es.semrush.com/blog/estrategia-ventas-superar-competencia/',
    },
    {
      referencia: 'Marketing XXI. (s. f). Marketing.',
      link: 'https://www.marketing-xxi.com/',
    },
    {
      referencia:
        'Mayo, R., A. (2012). Administración de ventas. Red de Tercer Milenio.',
    },
    {
      referencia: 'Westreicher, G. (2020). Ventas.',
      link: 'https://economipedia.com/definiciones/ventas.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Paolo Andrés Cantillo Largo',
        cargo: 'Experto temático',
        centro: 'Regional Antioquia - Centro de Comercio.',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eulises Orduz Amezquita',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
