<template>
  <div class="container">
    <div class="about_me">
      <div class="card__body">
        <template>
          <VueSlickCarousel :arrows="true" :dots="true">
            <div class="block__sl">
              <span>Последнее селфи</span>
              <img class="img-sl" src="../../../assets/image/photo.jpg"/>
            </div>
            <div class="block__sl">
              <span>Старшая школа</span>
              <img class="img-sl" src="../../../assets/image/photo2.jpg"/>
            </div>
          </VueSlickCarousel>
        </template>
      </div>
      <div class="text__his-link">
        <div class="history">
            Я решил изменить свою жизнь. Профессия разработчика показалась мне перспективной и сложной. 
            И я решил углубится в эту сферу глубже. Я понял что мне нравится программировать на стадии обучения HTML, CSS и JS.
            После 4 месяцев работы в компании на позиции верстальщик-фронтенд разработчик,
            я осознал, что мне нравится решать сложные задачи. С тех пор программирование стало моим любимым делом. 
        </div>
        <div class="link-git">
          <a style="width: 100%; height: 100%;" 
            href="https://github.com/SVOcmi/yandex-pract.git">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M12.4408 2.35254C11.1276 2.35254 9.82722 2.6112 8.61396 3.11374C7.40071 3.61629 6.29831 4.35289 5.36973 5.28147C3.49436 7.15684 2.4408 9.70037 2.4408 12.3525C2.4408 16.7725 5.3108 20.5225 9.2808 21.8525C9.7808 21.9325 9.9408 21.6225 9.9408 21.3525C9.9408 21.1225 9.9408 20.4925 9.9408 19.6625C7.1708 20.2625 6.5808 18.3225 6.5808 18.3225C6.1208 17.1625 5.4708 16.8525 5.4708 16.8525C4.5608 16.2325 5.5408 16.2525 5.5408 16.2525C6.5408 16.3225 7.0708 17.2825 7.0708 17.2825C7.9408 18.8025 9.4108 18.3525 9.9808 18.1125C10.0708 17.4625 10.3308 17.0225 10.6108 16.7725C8.3908 16.5225 6.0608 15.6625 6.0608 11.8525C6.0608 10.7425 6.4408 9.85254 7.0908 9.14254C6.9908 8.89254 6.6408 7.85254 7.1908 6.50254C7.1908 6.50254 8.0308 6.23254 9.9408 7.52254C10.7308 7.30254 11.5908 7.19254 12.4408 7.19254C13.2908 7.19254 14.1508 7.30254 14.9408 7.52254C16.8508 6.23254 17.6908 6.50254 17.6908 6.50254C18.2408 7.85254 17.8908 8.89254 17.7908 9.14254C18.4408 9.85254 18.8208 10.7425 18.8208 11.8525C18.8208 15.6725 16.4808 16.5125 14.2508 16.7625C14.6108 17.0725 14.9408 17.6825 14.9408 18.6125C14.9408 19.9525 14.9408 21.0325 14.9408 21.3525C14.9408 21.6225 15.1008 21.9425 15.6108 21.8525C19.5808 20.5125 22.4408 16.7725 22.4408 12.3525C22.4408 11.0393 22.1821 9.73896 21.6796 8.5257C21.177 7.31245 20.4404 6.21006 19.5119 5.28147C18.5833 4.35289 17.4809 3.61629 16.2676 3.11374C15.0544 2.6112 13.754 2.35254 12.4408 2.35254Z" fill="CurrentColor"/>
            </svg>
            https://github.com/SVOcmi/yandex-pract.git
          </a>
        </div>
      </div>
    </div>
    <div class="video__fun-its-css">
        <h1 class="title">Фишка CSS</h1>
      <div>
        <youtube player-width="auto" player-height="auto" video-id="J821P2z-K2w"></youtube>
      </div>
    </div>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
  }
</script>

<style>
.body-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
}

.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.about_me {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.card__body {
  width: 20rem;
  height: 28rem;
  border: 1px solid rgba(255, 255, 255, 0.20);
  border-radius: 20px;
}

.text__his-link {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 70px;
}

.history {
  font-family: 'Libre Baskerville', serif;
  font-size: 1.3rem;
  color:rgba(255, 255, 255, 0.80);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.4px;
}

.link-git {
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.80);
  height: 40px;
}

.link-git > a {
  padding: 0 10px;
}


.link-git:hover {
  border: 1px solid #FF5C00;
  color: #FF5C00;
  cursor: pointer;
}

.carousel-cell {
  width: 400px;
  height: 160px;
  margin-right: 10px;
}

.video__fun-its-css {
  width: 90%;
  margin-bottom: 10px;
}

.title {
  color: rgba(255, 255, 255, 0.80);
  text-align: center;
}

.block__sl {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  padding: 11px 0;
  gap: 5px;
}

.block__sl > span{
  color: rgba(255, 255, 255, 0.80);
  text-align: center;
  font-family: 'Libre Baskerville', serif;
  font-size: 1.3rem;
  color:rgba(255, 255, 255, 0.80);
}

.img-sl {
  width: 90%;
  border-radius: 10px;
}

iframe {
  width: 100%;
  aspect-ratio: 16/9;
}

@media screen and (max-width: 600px) {
  .about_me {
    flex-direction: column;
    gap: 20px;
  }

  .text__his-link{
    width: 90%;
    gap: 30px;
  }
  
  .history {
    font-size: 1.2rem;
    text-align: justify;
  }
}
</style>