// 変数
let positionX;
let positionY;

// 全体の初期化（最初に一回だけ呼ばれる）
function setup() {
  // キャンバスをつくる
  createCanvas(windowWidth, windowHeight);
  



  // 背景をぬりつぶす
   background(10);
  //ブレンドモード
  blendMode(ADD);

  // 座標の変数をキャンバスの中央で初期化
  positionX = width / 2;
  positionY = height / 2;

}


  


// 計算と表示
function draw() {
  // ぬりつぶす
   fill(140, random(200), 245, 50);
 
  
  
    
  
  // ↑ を押したら
if (keyIsDown(UP_ARROW)) {

 // ~~円~~四角を描く
  rect(positionX, positionY, random(30));

  // ランダムな数を選ぶ
  let randomNumber = floor(random(4));

  // 0なら、右に進む
  if (randomNumber == 0) {
    positionX += 15;
  }
  // 1なら、左に進む
  else if (randomNumber == 2) {
    positionX -= 15;
  }
  // 2なら、下に進む
  else if (randomNumber == 1) {
    positionY += 15;
  }
  // 3なら、上に進む
  else if (randomNumber == 3) {
    positionY -= 15;
    
  if (mouseIsPressed == true) {
    // 円の色（赤, 緑, 青, 透明度）
    fill(255, 216, 215, 10);//rgb(255, 215, 0)

    // 円を描く(左からの距離, 上からの距離, 大きさ)
    ellipse(mouseX, mouseY, random(100));
  }  
  }


   
    }
  
  // ↓ を押したら
if (keyIsDown(DOWN_ARROW)) {
  // ~~円~~四角を描く
  ellipse(positionX, positionY, random(30));

  // ランダムな数を選ぶ
  let randomNumber = floor(random(4));
 // 円の色（赤, 緑, 青, 透明度）
    fill(random(255), random(255), 255);//rgb(255, 215, 0)
  // 0なら、右に進む
  if (randomNumber == 0) {
    positionX += -15;
  }
  // 1なら、左に進む
  else if (randomNumber == 2) {
    positionX -= -15;
  }
  // 2なら、下に進む
  else if (randomNumber == 1) {
    positionY += -15;
  }
  // 3なら、上に進む
  else if (randomNumber == 3) {
    positionY -= -15;
  
   

  
}
}
}