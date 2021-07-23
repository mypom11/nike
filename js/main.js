class Shoes{
    constructor(name, price, video, img){
        this.name = name;
        this.price = price;
        this.video = video;
        this.img = img;
    }

    videoMaker(){
        return`<div class="video_wrap">
        <video src="videos/${this.video}" autoplay muted></video>
        </div>`
    }
    subjectMaker(){
        return `<div class="subject_wrap ${this.name}">    
            <div class="subject_bg change_bg">
                <h2 class="inner">AirMax BW<br>${this.name}</h2>
            </div>
            <div class="pic">
                <article class="shoes_pic">
                    <img src="images/${this.img}" alt="airmax ${this.name}">
                </article>
                <ul class="detail">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="shopping">
            <h3 class="price">${this.price}won</h3>
            <div class="cart_box">
                <div class="select">
                    <label for="size">size</label>
                    <select name="size-select" id="size">
                        <option value="250">250</option>
                        <option value="255">255</option>
                        <option value="260" selected>260</option>
                        <option value="265">265</option>
                        <option value="275">275</option>
                        <option value="280">280</option>
                        <option value="285">285</option>
                        <option value="290">290</option>
                    </select>
                </div>
                <div class="change_bg cart">Add to Cart</div>
                <div class="change_bg pick">Pick Up on Shop</div>
            </div>
        </div>
        <div class="about">
            <div class="change_bg about_wrap">
                <h3>About Shoes</h3>
                <div class="design">
                    <h4>밑창을 보여주는 디자인.</h4>
                    <p>뒤꿈치의 커다란 윈도우로 발에 접지력을 강화합니다. 고무 스우시부터 천공 디테일까지, 나이키 에어맥스 BW가 거의 일대일 리메이크로 돌아왔습니다. 일렉트로닉 댄스 장면과 동의어가 된 팅커 햇필드 디자인은 맥스 쿠셔닝, 플러시 폼 미드솔, 통풍이 잘 되는 매쉬 액센트 등 클래식한 디테일을 유지하고 있습니다.</p>
                </div>
                <div class="character">
                        <h4>상품 특징</h4>
                        <ul>
                            <li>본래 퍼포먼스 런닝화를 위해 고안된 뒤꿈치의 나이키 에어 쿠셔닝으로 지속적으로 편안함 선사</li>
                            <li>유명한 나이키 디자이너 팅커 햇필드가 디자인하고 러닝화의 편안함과 플러시 폼 미드솔, 나일론 액센트, 날렵함과 청키함의 완벽한 조화와 같은 90년대 디테일을 결함한 신발</li>
                            <li>고무 와플 밑창으로 접지력 및 내구성 제공</li>
                            <li>공기가 잘통하고 가벼운 갑피의 메쉬 소재</li>
                            <li>스포티한 룩과 편안한 착화감을 선사하는 로우 컷 패딩 카라</li>
                        </ul>
                </div>
                <div class="history">
                    <h4>나이키 에어맥스에 대하여...</h4>
                    <p>혁명적인 에어 기술은 1978년 처음으로 나이키 신발에 적용되었습니다. 1987년에는 에어맥스 1의 힐을 통해 투명 에어 기술이 최초로 등장하여 팬들이 에어의 쿠셔닝을 느낄 뿐만 아니라 눈으로 직접 확인할 수 있게 되었습니다. 그 이후, 다음 세대의 에어맥스 신발들은 매력적인 컬러 조합과 안정감 있는 경량의 쿠셔닝을 제공하여 운동선수와 수집가들에게 큰 인기를 얻고 있습니다.</p>
                </div>
            </div>
        </div>
    <div>`
    }
}

shoesGroup = [
    new Shoes('premium','99,000','white.mp4','nike0.png'),
    new Shoes('olympic','129,000','red.mp4','nike1.png'),
    new Shoes('persian','129,000','blue.mp4','nike2.png'),
    new Shoes('flax','159,000','yellow.mp4','nike3.png')
]

const mainLi = document.querySelector('.shoes');
const mainLiGroup = mainLi.querySelectorAll('.main_event')
const subject = document.querySelector('#subject');
const video = document.querySelector('#video');
let dataNum;
let currentShoes;

//신발 호버 이벤트
$('.main_event').on('mouseenter',function(){
    $(this).addClass('hover');
})
$('.main_event').on('mouseleave',function(){
    $(this).removeClass('hover');
})


//신발 클릭이벤트
$('.main_event').on('click',function (event){
    if(event.target.classList == 'btn'){
       moveAnimation()
    }else{
        currentShoes = $(this).data('num');
        $('.main_event').removeClass('on')
        $(event.target).addClass('on')
    }
    
})
let topArr;
//클릭시 무브 이벤트
function moveAnimation(){
    subject.innerHTML = shoesGroup[currentShoes].subjectMaker()
    video.innerHTML = shoesGroup[currentShoes].videoMaker()
    topArr = [0, $('#subject').offset().top, $('.about').offset().top];
   setTimeout(function(){
       $('.video_wrap').addClass('on')
   },100)
   setTimeout(function(){
        current++
        currentNum()
        wheelMove()
    },1000)
    setTimeout(function(){
        $('.video_wrap').css('height','0');
    },2000)
    setTimeout(function(){
        $('.video_wrap').removeClass('on');
    },2300)
}

//스크롤 이벤트

let current = 0;
//current 범위 정하기
function currentNum(){
    if(current < 0){
        current = 0;
    }else if(current >topArr.length-1){
        current = topArr.length-1;
    }
}

//메인 휠 이벤트
$('html').on('wheel',function (e){
    if(e.originalEvent.deltaY < 0){
        current--
        currentNum()
        wheelMove()
    }else{
        current++
        currentNum()
        wheelMove()
    }
})

//휠 애니메이션

function wheelMove(){
    $('html').stop().animate({
        scrollTop: topArr[current]
    }, 1000)
    if(current == 0){
        setTimeout(function(){
            $('.subject_wrap').remove()
        },1200)
        $('.pic').css('position','absolute')
    }else if(current >= 1){
        $('.pic').css('position','fixed')
    }
}