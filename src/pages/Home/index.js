import React from 'react';
import Menu from '../../components/Menu';
import dadosInicias from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer'



function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosInicias.categorias[0].videos[0].titulo}
        url={dadosInicias.categorias[0].videos[0].url}
        videoDescription={"Venha curtir minha PLAYLIST FAVORITA com uma diversidade de estilo musical "}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[0]}
      />

      < Carousel
        category={dadosInicias.categorias[1]}
      />
      < Carousel
        category={dadosInicias.categorias[2]}
      />
      < Carousel
        category={dadosInicias.categorias[3]}
      />
      < Carousel
        category={dadosInicias.categorias[4]}
      />
      < Carousel
        category={dadosInicias.categorias[5]}
      />

      <Footer />



    </div >
  );
}



export default Home;
