import "./Home.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function Home(){
    return(
        <div>
            <h1 className="Center">*** Colocar aqui a caixa de pesquisa? ***</h1>
        <div className="Center">
            <Swiper className="fe"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
      >
        <SwiperSlide><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20cima/1-Feminino.jpg?raw=true" alt="" className="zoni" /></SwiperSlide>
        <SwiperSlide><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20cima/4-Masculino.jpg?raw=true" alt="" className="zoni" /></SwiperSlide>
        <SwiperSlide><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20cima/2-Infantil.jpg?raw=true" alt="" className="zoni" /></SwiperSlide>
        <SwiperSlide><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20cima/3-Promocao.jpg?raw=true" alt="" className="zoni"/></SwiperSlide>
        <SwiperSlide><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20cima/5-Feminino2.jpg?raw=true" alt="" className="zoni" /></SwiperSlide>
      </Swiper>
      </div>

      <div> <h3 className="Center">Ideias de looks</h3> </div>
      
      <div className="Center">
      <Swiper  className="fe"
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide ><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/4.jpg?raw=true" alt="" className="zoni2" /></SwiperSlide>
        <SwiperSlide ><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/13.jpg?raw=true" alt="" className="zoni2" /></SwiperSlide>
        <SwiperSlide ><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/8.jpg?raw=true" alt="" className="zoni2" /></SwiperSlide>
        
        <SwiperSlide ><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/14.jpg?raw=true" alt="" className="zoni2" /></SwiperSlide>
        <SwiperSlide ><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/12.jpg?raw=true" alt="" className="zoni2" /></SwiperSlide>
        <SwiperSlide ><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/7.jpg?raw=true" alt="" className="zoni2" /></SwiperSlide>

        <SwiperSlide ><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/1.jpeg?raw=true" alt="" className="zoni2" /></SwiperSlide>
        <SwiperSlide ><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/17.png?raw=true" alt="" className="zoni2" /></SwiperSlide>
        <SwiperSlide ><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/2.png?raw=true" alt="" className="zoni2" /></SwiperSlide>
        
        <SwiperSlide ><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/6.jpg?raw=true" alt="" className="zoni2" /></SwiperSlide>
        <SwiperSlide ><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/16.jpg?raw=true" alt="" className="zoni2" /></SwiperSlide>
        <SwiperSlide ><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/11.jpg?raw=true" alt="" className="zoni2" /></SwiperSlide>

      </Swiper>

      </div>

        </div>
    );

}

export default Home;