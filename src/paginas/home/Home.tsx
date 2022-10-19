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
            <h1 className="Center">Seja bem-vinde</h1>
            <h2 className="Center">Qualidade e aqui </h2>
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
        <SwiperSlide><img src="https://cdn.discordapp.com/attachments/1001884731979350027/1031986083275219054/8UEp8jFDCDEEccW8wEuPc7.jpg" alt="" className="zoni" /></SwiperSlide>
        <SwiperSlide><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/1_iPfyZrZzvEUwmvU06mL4Kg.jpeg?raw=true" alt="" className="zoni" /></SwiperSlide>
        <SwiperSlide><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/7f9708a5-d789-4e2e-9a15-692994e1e626-gettyimages-1168008039.jpg?raw=true" alt="" className="zoni" /></SwiperSlide>
        <SwiperSlide><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/53253027fef2ab5162a602f2acfed431-1644925911.jpg?raw=true" alt="" className="zoni"/></SwiperSlide>
        <SwiperSlide><img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/Slides/wedding-season.jpg?raw=true" alt="" className="zoni" /></SwiperSlide>
      </Swiper>
      </div>

      <div> <h3 className="Center">Seja você</h3> </div>
      
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
        <SwiperSlide ><img src="https://3.bp.blogspot.com/-4rPDhyvWZfk/XG6J9UzCg6I/AAAAAAABTOU/E865Oaf5cLQUycphNvqExxFnjy_Gc5hEwCLcBGAs/s1600/marcas-nacionais-streetwear%2B%25286%2529.jpg" alt="" className="zoni2" /></SwiperSlide>
        <SwiperSlide ><img src="https://3.bp.blogspot.com/-bs82Mgc11zM/XG6J0NNxfDI/AAAAAAABTOM/SEKxnmKyQNkjfgJS44wLUOste-mfCBtqgCLcBGAs/s1600/marcas-nacionais-streetwear%2B%25281%2529.jpg" alt=""  className="zoni2" /></SwiperSlide>
        <SwiperSlide ><img src="https://1.bp.blogspot.com/-Bq-LUyY8Wg4/XG6KWIIjkhI/AAAAAAABTPA/GABGgIg9EgACXT__gGAbdHf2v3TXYvGuQCLcBGAs/s1600/marcas-nacionais-streetwear%2B%252815%2529.jpg" alt="" className="zoni2"/></SwiperSlide>
        <SwiperSlide ><img src="https://2.bp.blogspot.com/-ZKuK_9-eSNQ/XG6KvrQ94_I/AAAAAAABTPw/_U_BVKNS3vAYLO9GGQ1Boasd-J7aHq_8QCLcBGAs/s1600/marcas-nacionais-streetwear%2B%252824%2529.jpg" alt="" className="zoni2"/></SwiperSlide>
      </Swiper>
      </div>

        </div>
    );

}

export default Home;