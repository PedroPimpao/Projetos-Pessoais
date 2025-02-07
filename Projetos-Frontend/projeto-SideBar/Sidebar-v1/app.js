const ItemMenu=document.querySelectorAll('.itemMenu')

function selectItem(){
    ItemMenu.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

ItemMenu.forEach((item)=>
    item.addEventListener('click', selectItem)
)

const sideBar=document.querySelector('.sideBar')
const MenuButton=document.querySelector('.ExpandButton')

MenuButton.addEventListener('click',function(){
    sideBar.classList.toggle('expandir')
})