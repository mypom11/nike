const mainLi = document.querySelector('.shoes');
const mainLiGroup =mainLi.querySelectorAll('.main_event')

mainLi.addEventListener('click',function(e){
    mainLiGroup.forEach(function(item){
        item.classList.remove('on')
    })
    e.target.classList.add('on');
})
mainLiGroup.forEach(function(item){
    item.addEventListener('mouseenter',function(e){
        e.target.classList.add('hover');
        console.log(e.target)
    })
    item.addEventListener('mouseleave',function(e){
        e.target.classList.remove('hover');
    })
})



class Shoes{
    constructor(name, mainColor, subColor, price){
        this.name = name,
        this.mainColor = mainColor,
        this.subColor = subColor,
        this.price = price,
    }
}