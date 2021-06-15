

function Draw(){
    let sections = document.querySelectorAll("section")
    let text = 1;
    for(let i = 0; i < sections.length; i++){
        if(sections[i].querySelector(".left .linked") != null && sections[i].querySelector(".right .linked") != null){
            let container_width = document.querySelector('.content-margins').offsetWidth - 20
            let text_width = sections[i].querySelector(".left .linked").offsetWidth
            text_width += text_width/10
            document.documentElement.style.setProperty('--side-bar-width', (container_width - (text_width * 2))/2 + 'px')
            
            let left_text_height = sections[i].querySelector(".left .linked").offsetHeight
            let right_text_height = sections[i].querySelector(".right .linked").offsetHeight
            if(left_text_height > right_text_height){
                sections[i].querySelector(".left .linked").style.height = right_text_height + "px"
            }else if(left_text_height < right_text_height){
                sections[i].querySelector(".right .linked").style.height = left_text_height + "px"
            }
            left_text_height = sections[i].querySelector(".left .linked").offsetHeight
            document.documentElement.style.setProperty('--middle-bar-height'+text, left_text_height + 'px')
            text++
        }
    }
}
Draw()
window.addEventListener("resize", function () {
    Draw()
  });