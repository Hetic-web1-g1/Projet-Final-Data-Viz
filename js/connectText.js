function Drawline(){
    let sections = document.querySelectorAll("section")
    let text = 1;
    for(let i = 0; i < sections.length; i++){
        if(sections[i].querySelector(".left .linked") != null && sections[i].querySelector(".right .linked") != null){
            let container_width = document.querySelector('.content-margins').offsetWidth - 20
            let text_width = sections[i].querySelector(".left .linked").offsetWidth
            text_width += text_width/10
            document.documentElement.style.setProperty('--side-bar-width', (container_width - (text_width * 2))/2 + 'px')
            
            for(let j = 0; j< sections[i].querySelectorAll(".left .linked").length;j++){
            let left_text_height = sections[i].querySelectorAll(".left .linked")[j].offsetHeight
            let right_text_height = sections[i].querySelectorAll(".right .linked")[j].offsetHeight
            console.log(left_text_height,right_text_height)
            if(left_text_height > right_text_height){
                sections[i].querySelectorAll(".left .linked")[j].style.height = right_text_height + "px"
            }else if(left_text_height < right_text_height){
                sections[i].querySelectorAll(".right .linked")[j].style.height = left_text_height + "px"
            }
            left_text_height = sections[i].querySelectorAll(".left .linked")[j].offsetHeight
            document.documentElement.style.setProperty('--middle-bar-height'+text, left_text_height + 'px')
            text++
        }}
    }
}

function Redraw(){
    if(window.innerWidth > 950){
        Drawline()
    }else{
        let linkedText = document.querySelectorAll('.linked')
        for(let i = 0; i<linkedText.length ; i++){
            linkedText[i].style.height = null;
        }
    }
}

window.addEventListener("resize", function () {
    Redraw()
});

Redraw()