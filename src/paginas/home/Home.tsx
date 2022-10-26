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
    <div className='navbar-fixo'>
      <div className="carrosselCima">

        <Swiper className="Swiper"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
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
            <img src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20cima/esportivas.png" alt="" className="slideCima" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20cima/Infantil.png?raw=true" alt="" className="slideCima" />
          </SwiperSlide>
        </Swiper>

      </div>

      <h3 className="amamos">
        Looks que amamos:
      </h3>
      
      <div className="carrosselBaixo">
        <Swiper  className="swiper"
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={false}
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
                <h2 className="descLook">Street clássico</h2>
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
          <div className="item e5">
            <img className="carrosselLook" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/13.jpg?raw=true" alt="" />
              <img className="blackHover" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/black%20hover.png?raw=true" alt="" />
              <div className="text5">
                <h2 className="descLook">Casual fun</h2>
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
          <div className="item e5">
            <img className="carrosselLook" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/8.jpg?raw=true" alt="" />
              <img className="blackHover" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/black%20hover.png?raw=true" alt="" />
              <div className="text5">
                <h2 className="descLook">Street College</h2>
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
          <div className="item e5">
            <img className="carrosselLook" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/12.jpg?raw=true" alt="" />
              <img className="blackHover" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/black%20hover.png?raw=true" alt="" />
              <div className="text5">
                <h2 className="descLook">Elegante e sofisticado</h2>
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
          <div className="item e5">
            <img className="carrosselLook" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/1.jpeg?raw=true" alt="" />
              <img className="blackHover" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/black%20hover.png?raw=true" alt="" />
              <div className="text5">
                <h2 className="descLook">Confortável e clássico</h2>
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
          <div className="item e5">
            <img className="carrosselLook" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/6.jpg?raw=true" alt="" />
              <img className="blackHover" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/black%20hover.png?raw=true" alt="" />
              <div className="text5">
                <h2 className="descLook">Despojado e esportivo</h2>
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
          <div className="item e5">
            <img className="carrosselLook" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/2.png?raw=true" alt="" />
              <img className="blackHover" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/black%20hover.png?raw=true" alt="" />
              <div className="text5">
                <h2 className="descLook">Elegante e ousado</h2>
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
          <div className="item e5">
            <img className="carrosselLook" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/16.jpg?raw=true" alt="" />
              <img className="blackHover" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/black%20hover.png?raw=true" alt="" />
              <div className="text5">
                <h2 className="descLook">Últimas tendências da moda</h2>
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
          <div className="item e5">
            <img className="carrosselLook" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/Carrossel%20de%20baixo/11.jpg?raw=true" alt="" />
              <img className="blackHover" src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/black%20hover.png?raw=true" alt="" />
              <div className="text5">
                <h2 className="descLook">Neo-rocker</h2>
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

      </Swiper>

      </div>

      </div>
    );

}

export default Home;