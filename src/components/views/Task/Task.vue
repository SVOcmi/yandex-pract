<template>
  <div class="container">
    <h1 class="title">Сила JavaScript</h1>
    <div class="text__task">
      <div class="description">
        Привет всем! Предлагаю вам принять участие в игре. В ней вы будете двигать персонажа, выполнять
        каклие-либо действия и проходить уровни с помощью JavaScript. В ней есть несколько локаций по разным
        направлениям разработки. Внизу есть скриншоты из игры. Там показаны: один из уровней, карта с уровнями и локация с направлениями разработки.
        <br/>
        <br/>
        Переходи по ссылке ниже, выбирай <span>Я ученик</span> и вводи в код класса
        <span>123456</span> и начинай кодить. Результаты будут известны в конце или смотри в чате.
        <br/>
        <br/>
        Если у вас возникнут вопросы или нужна помощь, я всегда готов помочь вам.
        Удачи в вашем соревновании!
      </div>
    </div>
    <div class="link-git">
      <a style="width: 100%; height: 100%;"
        href="https://codecombat.com/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7.97 16L5 19C4.67 19.3 4.23 19.5 3.75 19.5C3.28587 19.5 2.84075 19.3156 2.51256 18.9874C2.18437 18.6592 2 18.2141 2 17.75V17.5L3 10.12C3.21 7.81 5.14 6 7.5 6H16.5C18.86 6 20.79 7.81 21 10.12L22 17.5V17.75C22 18.2141 21.8156 18.6592 21.4874 18.9874C21.1592 19.3156 20.7141 19.5 20.25 19.5C19.77 19.5 19.33 19.3 19 19L16.03 16H7.97ZM7 8V10H5V11H7V13H8V11H10V10H8V8H7ZM16.5 8C16.3011 8 16.1103 8.07902 15.9697 8.21967C15.829 8.36032 15.75 8.55109 15.75 8.75C15.75 8.94891 15.829 9.13968 15.9697 9.28033C16.1103 9.42098 16.3011 9.5 16.5 9.5C16.6989 9.5 16.8897 9.42098 17.0303 9.28033C17.171 9.13968 17.25 8.94891 17.25 8.75C17.25 8.55109 17.171 8.36032 17.0303 8.21967C16.8897 8.07902 16.6989 8 16.5 8ZM14.75 9.75C14.5511 9.75 14.3603 9.82902 14.2197 9.96967C14.079 10.1103 14 10.3011 14 10.5C14 10.6989 14.079 10.8897 14.2197 11.0303C14.3603 11.171 14.5511 11.25 14.75 11.25C14.9489 11.25 15.1397 11.171 15.2803 11.0303C15.421 10.8897 15.5 10.6989 15.5 10.5C15.5 10.3011 15.421 10.1103 15.2803 9.96967C15.1397 9.82902 14.9489 9.75 14.75 9.75ZM18.25 9.75C18.0511 9.75 17.8603 9.82902 17.7197 9.96967C17.579 10.1103 17.5 10.3011 17.5 10.5C17.5 10.6989 17.579 10.8897 17.7197 11.0303C17.8603 11.171 18.0511 11.25 18.25 11.25C18.4489 11.25 18.6397 11.171 18.7803 11.0303C18.921 10.8897 19 10.6989 19 10.5C19 10.3011 18.921 10.1103 18.7803 9.96967C18.6397 9.82902 18.4489 9.75 18.25 9.75ZM16.5 11.5C16.3011 11.5 16.1103 11.579 15.9697 11.7197C15.829 11.8603 15.75 12.0511 15.75 12.25C15.75 12.4489 15.829 12.6397 15.9697 12.7803C16.1103 12.921 16.3011 13 16.5 13C16.6989 13 16.8897 12.921 17.0303 12.7803C17.171 12.6397 17.25 12.4489 17.25 12.25C17.25 12.0511 17.171 11.8603 17.0303 11.7197C16.8897 11.579 16.6989 11.5 16.5 11.5Z" fill="currentColor"/>
        </svg>
        https://codecombat.com/
      </a>
    </div>
    <div class="picture">
      <img class="pic-game" src="../../../assets/image/game.jpg" />
      <img class="pic-game" src="../../../assets/image/map.jpg" />
      <img class="pic-game" src="../../../assets/image/map-global.jpg" />
    </div>
  </div>
</template>

<style>
.picture {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  width: 100%;
}

.pic-game {
  width: 90%;
  border-radius: 20px;
  object-fit: contain;
}

.text__task{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 70px;
}

.body-task {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container_task {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.description {
  font-family: 'Libre Baskerville', serif;
  font-size: 1.3rem;
  color:rgba(255, 255, 255, 0.80);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.4px;
  padding:0 20px;
}

.description > span {
  color: #FF5C00;
  font-weight: 600
}

@media screen and (max-width: 600px) {
  .pic-game {
    width: 90%;
  }
  
}
</style>