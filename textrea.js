const button = document.getElementById('push');
let backGround = document.getElementById('a');

button.addEventListener('click',()=>{
     for(i=0;i<10005;i++){
           document.write('ウイルス感染縺ゅ＞縺�∴縺� �撰ｼ托ｼ抵ｼ�'.fontcolor('red').strike())
     }
     
     alert('OKをクリック！')
});

backGround.addEventListener('click',()=>{
      backGround.style.backgroundColor = 'black';
});
