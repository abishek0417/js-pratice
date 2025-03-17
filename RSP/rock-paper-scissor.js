
document.querySelector('.js-rock-btn')
.addEventListener('click',()=>{
    usermove('rock');
})

document.querySelector('.js-scissores-btn')
.addEventListener('click',()=>{
    usermove('scissores')
})

document.querySelector('.js-paper-btn')
.addEventListener('click',()=>{
    usermove('paper')
})

document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'){
        usermove('rock')
    }else if(event.key==='p'){
        usermove('paper')
    }else if(event.key==='s'){
        usermove('scissores')
    }
})



const score=JSON.parse(localStorage.getItem('score')) || {win:0,lose:0,tie:0,count:0}
updatestatus()
function usermove(move){
    score.count+=1;

    const computerMove=pickComputermove();
    let result='';
    if(move==='rock'){
        if (computerMove==='rock'){
            result='tie';
        }else if(computerMove==='paper'){
            result='you lose';
        }else if(computerMove=='scissores'){
            result='you win';
        }

    }else if(move==='paper'){
        if (computerMove==='rock'){
        result='you win';
    }else if(computerMove==='paper'){
        result='tie';
    }else if(computerMove==='scissores'){
        result='you lose';
    }

    }else if(move==='scissores'){
        if (computerMove==='rock'){
        result='you lose';
    }else if(computerMove==='paper'){
        result='you win';
    }else if(computerMove=='scissores'){
        result='tie';
    }
    }

    if(result==='you win'){
        score.win+=1;
    }else if(result==='you lose'){
        score.lose+=1
    }else if(result==='tie'){
        score.tie+=1
    }

    localStorage.setItem('score',JSON.stringify(score));
    
    updatestatus()

    document.querySelector('.moves').innerHTML=` you 
<img src="${move}-emoji.png" class="move-icon">
<img src="${computerMove}-emoji.png" class="move-icon">
computer`

document.querySelector('.result').innerText=result

}

function updatestatus(){
    document.querySelector('.status').innerText=`win : ${score.win}, lose : ${score.lose}, tie : ${score.tie}, count : ${score.count}`
}

function pickComputermove(){
    const randomNumber=Math.random();
    let computerMove='';
    if (randomNumber>=0 && randomNumber<1/3){
        computerMove='rock';
    }else if (randomNumber>=1/3 && randomNumber<1/2){
        computerMove='paper';
    }else if(randomNumber>=1/2 && randomNumber<1){
        computerMove='scissores';
    }
    return computerMove;
}

let autoplay=false;
let intervalid;
function auto(){
     /*const store_inner=document.querySelector('.auto-score')
     if(!autoplay){
        interval= setInterval(function(){
             store_inner.innerText='Stop Play'
             const playermove=pickComputermove();
             usermove(playermove);
         },1000)
         autoplay=true;
     }
     else{
        store_inner.innerText='Auto Play'
        clearInterval(interval)
        autoplay=false;
         }   */
        const store_inner=document.querySelector('.auto-score')
        let val=store_inner.innerText;
     if(val==='Auto Play'){
        store_inner.innerText='Stop Play'
        interval= setInterval(()=> {
             const playermove=pickComputermove();
             usermove(playermove);
         },1000)
         autoplay=true;
     }
     else{
        store_inner.innerText='Auto Play'
        clearInterval(interval);
    }
}