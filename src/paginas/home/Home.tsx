import "./Home.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Home(){
  return(
    <div>
      <div className="Carrossel">

        <Swiper className="Swiper"
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
          <SwiperSlide>
            <img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20cima/Ver%C3%A3o2023.png?raw=true" alt="" className="slideCima" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20cima/Bazar.png?raw=true" alt="" className="slideCima" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20cima/Infantil.png?raw=true" alt="" className="slideCima" />
          </SwiperSlide>
        </Swiper>

      </div>

      <h3 className="escolha">
        Looks que amamos:
      </h3>
      
      <div className="carrossel">
        <Swiper  className="swiper"
          slidesPerView={4}
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

          <SwiperSlide >
          <div className="item e5">
            <img className="carrosselLook" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/4.jpg?raw=true" alt="" />
              <img className="blackHover" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/black%20hover.png?raw=true" alt="" />
              <div className="text5">
                <h2 className="descLook">Blá blá blá blá blá</h2>
                <Link to="/produtos">
                  <Button className="botaoLook" type="submit">
                    <div className="fundoBotao">
                      COMPRAR LOOK
                    </div>
                  </Button>
                </Link>
              </div>
          </div>
          </SwiperSlide>

          <SwiperSlide >
            <img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/4.jpg?raw=true" alt="" className="zoni2" />
          </SwiperSlide>
          <SwiperSlide >
            <img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/13.jpg?raw=true" alt="" className="zoni2" />
          </SwiperSlide>
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