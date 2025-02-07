const openModal=document.querySelectorAll('.open-modal')
const closeModal=document.querySelectorAll('.close-modal')

openModal.forEach((item)=>{
    item.addEventListener('click',()=>{
        const modalId=item.getAttribute('data-modal')
        const modal=document.getElementById(modalId)
        modal.showModal()
    })
})

closeModal.forEach((item)=>{
    item.addEventListener('click',()=>{
        const modalId=item.getAttribute('data-modal')
        const modal=document.getElementById(modalId)
        modal.close()
    })
})

const themeToggle=document.querySelector('#themeToggle')
const html=document.querySelector('.html')

themeToggle.addEventListener('click',()=>{
    html.classList.toggle('dark')
})