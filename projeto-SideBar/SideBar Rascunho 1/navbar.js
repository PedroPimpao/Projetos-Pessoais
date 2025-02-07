const menuButton=document.querySelector('.button')
const container=document.querySelector('.container')
const navBar=document.querySelector('.navigationBar')

menuButton.addEventListener('click',()=>{
    container.classList.toggle('navOpen')
    if(container.classList.contains('navOpen')){
        navBar.classList.add('open')
        navBar.classList.remove('close')
    }
    else{
        navBar.classList.remove('open')
        navBar.classList.add('close')
    }
})

const mainContent=document.querySelector('.mainContent')
const MainPhoneMenuButton=document.querySelector('#phoneMainButton')
const NavPhoneButton=document.querySelector('#phoneNavButton')

MainPhoneMenuButton.addEventListener('click',()=>{
    container.classList.toggle('navOpen')
    if(container.classList.contains('navOpen')){
        navBar.classList.add('open')
        navBar.classList.remove('close')
    }
    else{
        navBar.classList.remove('open')
        navBar.classList.add('close')

    }
})


NavPhoneButton.addEventListener('click',()=>{
    container.classList.toggle('navOpen')
    if(container.classList.contains('navOpen')){
        navBar.classList.add('open')
        navBar.classList.remove('close')

        
    }
    else{
        navBar.classList.remove('open')
        navBar.classList.add('close')
        
        
    }
})