<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-down") En todo proceso organizacional, se requiere incrementar las ventas del portafolio de productos de forma planificada y estratégica, satisfaciendo de forma asertiva las necesidades de los clientes. En este sentido, es importante que la empresa elabore una propuesta comercial que reúna la información necesaria del producto o servicio que recibirá el cliente, que se describan los beneficios, plazos de entrega, alcance del trabajo, formas de pago, entre otras disposiciones. 

    p(data-aos="fade-down").mb-5 A continuación, se presentan los elementos adicionales de la propuesta comercial.

    .row.justify-content-center.align-items-center          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/12dhHySM4U0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)       
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
