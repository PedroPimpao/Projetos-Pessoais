// Dark Mode
const toggleTheme=document.querySelector('#toggleTheme')
const html=document.querySelector('.html')
toggleTheme.addEventListener('click',()=>{
    html.classList.toggle('dark')
})

// Cards Manipulation

const editButton=document.querySelectorAll('.edit')
const excludeButton=document.querySelectorAll('.exclude')
const plusButton=document.querySelector('.plus-button')


const edit=({target})=>{
    // console.log(target)

    const button=target.parentElement
    // console.log(button)

    const optionsContainer=button.parentElement
    // console.log(optionsContainer)

    const card=optionsContainer.parentElement
    // console.log(card)

    const content=card.querySelector('.text-content')
    // console.log(content)

    content.contentEditable='true'
    content.focus()
    content.addEventListener('focusout',({target})=>{
        target.contentEditable='false'
    })

}

const exclude=({target})=>{
    // console.log(target)

    const button=target.parentElement
    // console.log(button)

    const optionsContainer=button.parentElement
    // console.log(optionsContainer)

    const card=optionsContainer.parentElement
    // console.log(card)

    card.remove()
}

const addNewCard=()=>{
    const cardContainer=document.querySelector('.card-container')

    const card=document.createElement('div')
    card.classList.add('card')

    const textField=document.createElement('div')
    textField.classList.add('text-content')

    const optionsContainer=document.createElement('div')
    optionsContainer.classList.add('options-container')

    const editButton=document.createElement('div')
    editButton.classList.add('edit')
    editButton.classList.add('option')

    const excludeButton=document.createElement('div')
    excludeButton.classList.add('exclude')
    excludeButton.classList.add('option')


    const editIcon=document.createElement('i')
    editIcon.classList.add('bi')
    editIcon.classList.add('bi-pencil-square')
    editButton.append(editIcon)

    const excludeIcon=document.createElement('i')
    excludeIcon.classList.add('bi')
    excludeIcon.classList.add('bi-trash')
    excludeButton.append(excludeIcon)

    optionsContainer.append(editButton)
    optionsContainer.append(excludeButton)

    card.append(textField)
    card.append(optionsContainer)

    editButton.addEventListener('click',edit)
    excludeButton.addEventListener('click',exclude)

    cardContainer.append(card)
}

editButton.forEach((editButton)=>{
    editButton.addEventListener('click',edit)
})

excludeButton.forEach((excludeButton)=>{
    excludeButton.addEventListener('click',exclude)
})

plusButton.addEventListener('click',addNewCard)