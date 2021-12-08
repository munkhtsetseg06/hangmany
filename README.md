<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="stylee.css" />
    <script defer src="qw.js"></script>
    <title>Hangman Game</title>
  </head>
  <body>

    <div class="wrapper">
       

        <h1>Hangman</h1>
        <p>Цагийг зугаатай өнгөрүүлээрэй!! &#128513</p>
        <div class="bugd">
     <div  class="zuun"> 
      <img id='hangmanPic' src="./img/0.jpeg" alt="">
     </div>
      <div class="baruun"><br>
        <div class="letter-div"></div>
        <p><strong>Асуулт:</strong></p>
        <p class="hint-txt">Sample Hint for test</p>

      <div class="word-div"></div>
      <h3>Амь: <span class="lives">5</span></h3>
      <div class="row hint-div">
        <button class="reset-btn">Дахин оролдох</button>
      </div>
    </div>
  </div>
    <div class="notif hidden">
      <h2>Тоглоом дууслаа !!</h2>
      <h3 class="notif-content">Тиймээ чи чадлаа</h3>
      <h4>Зөв хариулт: <span class="notif-span"></span></h4>
      <button class="notif-btn">Дахин тоглох
      </button>
    </div>
  </div>
  </body>
</html>
