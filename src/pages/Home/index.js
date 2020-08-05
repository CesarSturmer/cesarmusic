import React, { useEffect, useState } from 'react';
//import dadosInicias from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias'


function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setDadosIniciais(categoriasComVideos);

    })
    .catch((err)=>{
      console.log(err.message);
    });

  }, []);
  // http://localhost:8080/categorias?_embed=video

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    {/*
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
      /> */}

    </PageDefault>
  );
}



export default Home;
