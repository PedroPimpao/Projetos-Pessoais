const mobileMenu=document.querySelector('.mobile-menu')
const mobileMenu_btn=document.querySelector('#mobile-menu-button')
const mobileMenu_MainBtn=document.querySelector('#Main-mobile-menu-btn')
const deskMenuButton=document.querySelector('#desk-menu-button')
const container=document.querySelector('.container')
const desktopMenu=document.querySelector('.desktop-menu')


const clickableItems=[mobileMenu_btn,mobileMenu_MainBtn,deskMenuButton].filter(Boolean)

clickableItems.forEach((item)=>{
    item.addEventListener('click',()=>{
        mobileMenu.classList.toggle('showMenu')
        container.classList.toggle('open')
        
        if(item===deskMenuButton){
            desktopMenu.classList.toggle('open')
        }

        if(container.classList.contains('open')){
            container.style.gridTemplateColumns=`var(--MaxWidth) 1fr`
        }
        else{
            container.style.gridTemplateColumns=`var(--MinWidth) 1fr`
        }
    })
})




