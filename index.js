let jet = document.getElementById("jet");
let board = document.getElementById("board");


window.addEventListener("keydown",(e) => {

        let left =parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
        let top =parseInt(window.getComputedStyle(jet).getPropertyValue("top"));

        if(e.key=="ArrowLeft" && left > 0){
            jet.style.left = left - 10 + "px";
        }
        else if(e.key == "ArrowRight" && left <=450){
            jet.style.left = left + 10 + "px";
        }

        else if(e.key == "ArrowUp"  && top > 0){
            jet.style.top = top - 10 + "px";
            
        }
        else if(e.key == "ArrowDown" && top <=450 ){
            jet.style.top = top + 10 + "px";
           
        }

        if(e.keyCode == 32 ){
            var bullet = document.createElement("div");
            bullet.classList.add("bullets");
            board.appendChild(bullet);

            let movebullet = setInterval(()=>{
                let bulletbottom = parseInt(
                    window.getComputedStyle(bullet).getPropertyValue("bottom")
                );
                bullet.style.left = left + "px";
                bullet.style.top = top - "px";
                bullet.style.bottom = bulletbottom +10 + "px";
            });

        }
});




document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { 
      const el = document.querySelector('.follow-cursor') 
  
      window.addEventListener('mousemove', e => { 
        const target = e.target
        if (!target) return
  
     
  
        el.style.left = e.pageX + 'px' 
        el.style.top = e.pageY + 'px' 
      })
    }
  
    followCursor() 
  
  })




// ovechka

  document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => {
      const el = document.querySelector('.follow-cursor2') 
  
      window.addEventListener('mousemove', e => { 
        const target = e.target 
        if (!target) return
  
        el.style.left = e.pageX-500 + 'px'
        el.style.top = e.pageY-10 + 'px' 
      })
    }
  
    followCursor() 
  
  })


















// window.addEventListener('load', () => { 

//     const left = 37,
//         right = 39,
//         top = 38,
//         down = 40;

//     let app = document.querySelector('.app');
//     let ball = document.getElementById('.ball');

//     window.addEventListener('keydown', e => {
//         let bl = ball.getBoundingClientRect();
//         if (e.keyCode == left) {
//             if (bl.left > 0) {
//                 ball.style.left = bl.left - 16 + "px";
//             }
//         } else if (e.keyCode == right) {
//             if (bl.left < (app.offsetWidth - ball.offsetWidth)) {
//                 ball.style.left = bl.left + 16 + "px";
//             }
//         } else if (e.keyCode == down) {
//             if (bl.top < (app.offsetHeight - ball.offsetHeight)) {
//                 ball.style.top = bl.top + 16 + "px";
//             }
//         } else if (e.keyCode == top) {
//             if (bl.top > 0) {
//                 ball.style.top = bl.top - 16 + "px";
//             }
//         }

//     });
// });