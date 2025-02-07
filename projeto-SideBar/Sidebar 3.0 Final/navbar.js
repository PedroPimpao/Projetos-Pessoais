const menuButtonDesk=document.querySelector('#desk-menu')
const menuButtonMobile=document.querySelector('#mobile-menu')
const navbar=document.querySelector('.navigation')
const mobileMenuMain=document.querySelector('#mobile-menu-main')
const clickableItems=[menuButtonDesk,menuButtonMobile,mobileMenuMain].filter(Boolean)

//Responsive menu
clickableItems.forEach((item)=>{
    item.addEventListener('click',()=>{
        navbar.classList.toggle('close')
    })
})

// mobileMenuMain.addEventListener('click',()=>{
//     navbar.classList.toggle('close')
// })
// menuButtonMobile.addEventListener('click',()=>{
//     navbar.classList.toggle('close')
// })
// menuButtonDesk.addEventListener('click',()=>{
//     navbar.classList.toggle('close')
// })

//Select itens and contents
const itemMenu=document.querySelectorAll('.itemMenu')
const pageContent=document.querySelectorAll('.main')

function selectItem(){
    itemMenu.forEach((item)=>{
        item.classList.remove('ativo')
    })
    this.classList.add('ativo')
    const index= Array.from(itemMenu).indexOf(this)
    selectContent(index)
}

// itemMenu.forEach((item)=>{
//     item.addEventListener('click',selectItem)
// })

function selectContent(index){
    pageContent.forEach((item)=>{
        item.classList.remove('showContent')
    })
    pageContent[index].classList.add('showContent')
}

//Fill Icons

const Home={
    id: document.querySelector('#homeId'),
    EmptyIcon: `bi bi-house-door`,
    FullIcon: `bi bi-house-door-fill`
}

const Dashboard={
    id: document.querySelector('#dashId'),
    EmptyIcon: `bi bi-grid-1x2`,
    FullIcon: `bi bi-grid-1x2-fill`
}

const Calendar={
    id: document.querySelector('#calendarId'),
    EmptyIcon: `bi bi-calendar-date`,
    FullIcon: `bi bi-calendar-date-fill`
}

const Settings={
    id: document.querySelector('#settingsId'),
    EmptyIcon: `bi bi-gear`,
    FullIcon: `bi bi-gear-fill`
}

const changeIcons=(iconId,EmptyIcon,fullIcon,isActive)=>{
    iconId.className= isActive ? fullIcon : EmptyIcon
}

const executeAll=()=>{
    itemMenu.forEach((item,index)=>{
        const isActive=item.classList.contains('ativo')
        if(index==0){changeIcons(Home.id,Home.EmptyIcon,Home.FullIcon,isActive)}
        if(index==1){changeIcons(Dashboard.id,Dashboard.EmptyIcon,Dashboard.FullIcon,isActive)}
        if(index==2){changeIcons(Calendar.id,Calendar.EmptyIcon,Calendar.FullIcon,isActive)}
        if(index==3){changeIcons(Settings.id,Settings.EmptyIcon,Settings.FullIcon,isActive)}
    })
}

itemMenu.forEach((item)=>{
    item.addEventListener('click',selectItem)
    item.addEventListener('click',executeAll)
})
