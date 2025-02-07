const sidebar=document.querySelector('.sidebar')
const MenuButton=document.querySelector('#button')
const layout=document.querySelector('.grid-wrapper')

MenuButton.addEventListener('click',()=>{
    sidebar.classList.toggle('SizeToggle')
    if(sidebar.classList.contains('SizeToggle')){
        layout.style.gridTemplateColumns='var(--sideBarMinWidth) 1fr'
    }
    else{
        layout.style.gridTemplateColumns='var(--sideBarMaxWidth) 1fr';
    }
})

const itemMenu=document.querySelectorAll('.itemMenu')
const pageContent=document.querySelectorAll('.pageContent')

function selectItem(){
    itemMenu.forEach((item)=>{
        item.classList.remove('ativo')
    })
    this.classList.add('ativo')
    const index=Array.from(itemMenu).indexOf(this)
    selectContent(index)
}

function selectContent(index){
    pageContent.forEach((content)=>{
        content.classList.remove('showContent')
    })
    pageContent[index].classList.add('showContent')
}

itemMenu.forEach((item)=>{
    item.addEventListener('click',selectItem)
})

const homeID=document.querySelector('#homeId')
const homeEmptyIcon=`bi bi-house-door`
const homeFullIcon=`bi bi-house-door-fill`

const dashID=document.querySelector('#dashId')
const dashEmptyIcon=`bi bi-grid-1x2`
const dashFullIcon=`bi bi-grid-1x2-fill`

const calendarID=document.querySelector('#calendarId')
const calendarEmptyIcon=`bi bi-calendar-date`
const calendarFullIcon=`bi bi-calendar-date-fill`

const settingsID=document.querySelector('#settingsId')
const settingsEmptyIcon=`bi bi-gear`
const settingsFullIcon=`bi bi-gear-fill`

const changeIcons=(iconId,emptyIcon,FullIcon,isActive)=>{
    iconId.className= isActive ? FullIcon: emptyIcon
}

function executeAll(){
    itemMenu.forEach((item,index)=>{
        const isActive=item.classList.contains('ativo')
        if(index===0){changeIcons(homeID,homeEmptyIcon,homeFullIcon,isActive)}
        if(index===1){changeIcons(dashID,dashEmptyIcon,dashFullIcon,isActive)}
        if(index===2){changeIcons(calendarID,calendarEmptyIcon,calendarFullIcon,isActive)}
        if(index===3){changeIcons(settingsID, settingsEmptyIcon, settingsFullIcon,isActive)}
    })
}
itemMenu.forEach((item)=>{
    item.addEventListener('click',executeAll)
})