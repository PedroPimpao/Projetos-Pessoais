// Dark mode
const themeToggle=document.querySelector('#themeToggle')
const html=document.getElementsByTagName('html')[0]
themeToggle.addEventListener('click',()=>{
    html.classList.toggle('dark')
})

// Contador de colunas 
const updateColumnCounter=()=>{
    const columnsContainerElements=[...document.querySelectorAll('.column')]
    const columnCounter=document.querySelector('.column-counter')
    
    let countColumn=columnsContainerElements.length
    columnCounter.innerHTML=`${countColumn}`
    return countColumn
}
updateColumnCounter()
// Fim contador de colunas

// Contador de cards
const updateCardCounter=()=>{
    const column=document.querySelectorAll('.column')
    column.forEach((item)=>{
        const counter=item.querySelector('.card-counter-number')
        const cardContainerElements=[...item.querySelectorAll('.card')]
        let cardCount=cardContainerElements.length
        counter.innerHTML=`${cardCount}`
        return cardCount
    })
}
updateCardCounter()
// Fim contador de cards

// Textos padrão
// const columnStandardTitle=`Coluna ${updateColumnCounter()}`
const cardStandardContent='Tarefa...'

// alert(`Coluna ${updateColumnCounter()}`)
// alert(`${cardStandardContent}`)

// Manipulação de cards (declaração de variaveis)

const editCardButton=document.querySelectorAll('.edit')
const removeCardButton=document.querySelectorAll('.exclude')
const plusCardButton=document.querySelectorAll('.plus')

// Manipulação de colunas (declaração de variaveis)
const plusColumn=document.querySelector('.plusColumn')
const closeColumn=document.querySelectorAll('.close')


// Manipulação de cards (funções)
const editCard=({target})=>{
    console.log(target)
    const button=target.parentElement
    const optionsContainer=button.parentElement
    const card=optionsContainer.parentElement
    const textContent=card.querySelector('.text-content')
    textContent.contentEditable='true'
    textContent.focus() 
    textContent.addEventListener('focusout',()=>{
        textContent.contentEditable='false'
    })
}

const removeCard=({target})=>{
    console.log(target)
    const button=target.parentElement
    const optionsContainer=button.parentElement
    const card=optionsContainer.parentElement
    card.remove()
}

const editColumnTitle=({target})=>{
    target.contentEditable='true'
    target.addEventListener('focusout',()=>{
        target.contentEditable='false'
    })
}

const createCard=({target})=>{
    console.log(target)
    const button=target.parentElement
    const columnHeader=button.parentElement
    const column=columnHeader.parentElement
    const cardContainer=column.querySelector('.cards-container')
    
    const card=document.createElement('div')
    card.classList.add('card')
    card.draggable='true'
    
    const textContent=document.createElement('div')
    textContent.classList.add('text-content')
    
    const optionsContainer=document.createElement('div')
    optionsContainer.classList.add('options-container')
    
    const editButton=document.createElement('div')
    const excludeButton=document.createElement('div')
    
    editButton.classList.add('edit')
    editButton.classList.add('option')
    
    excludeButton.classList.add('exclude')
    excludeButton.classList.add('option')
    
    const editIcon=document.createElement('i')
    const excludeIcon=document.createElement('i')
    
    editIcon.classList.add('bi')
    editIcon.classList.add('bi-pencil-fill')
    
    excludeIcon.classList.add('bi')
    excludeIcon.classList.add('bi-trash')
    
    editButton.append(editIcon)
    excludeButton.append(excludeIcon)
    
    optionsContainer.append(editButton)
    optionsContainer.append(excludeButton)
    
    card.append(textContent)
    card.append(optionsContainer)
    
    editButton.addEventListener('click',editCard)
    excludeButton.addEventListener('click',removeCard)
    excludeButton.addEventListener('click',updateCardCounter)
    
    textContent.innerText=`${cardStandardContent}`
    card.addEventListener('dragstart',dragstart)
    cardContainer.append(card)
}

// Manipulação de colunas (funções)
const createColumn=()=>{
    const columnsContainer=document.querySelector('.columns-container')
    
    const column=document.createElement('div')
    column.classList.add('column')
    
    const columnHeader=document.createElement('div')
    columnHeader.classList.add('column-header')
    
    const cardCounter=document.createElement('div')
    cardCounter.classList.add('card-counter')
    
    const cardsContainer=document.createElement('div')
    cardsContainer.classList.add('cards-container')
    
    // Elementos do Column Header
    
    const columnTitle=document.createElement('h2')
    columnTitle.classList.add('column-title')
    columnTitle.innerHTML=`Coluna ${updateColumnCounter()+1}`
    columnTitle.addEventListener('click',editColumnTitle)

    const plusCardButton=document.createElement('div')
    plusCardButton.classList.add('plus')
    const plusIcon=document.createElement('i')
    plusIcon.classList.add('bi')
    plusIcon.classList.add('bi-plus-lg')
    plusCardButton.append(plusIcon)
    plusCardButton.addEventListener('click',createCard)
    plusCardButton.addEventListener('click',updateCardCounter)
    
    const closeColumnButton=document.createElement('div')
    closeColumnButton.classList.add('close')
    const closeIcon=document.createElement('i')
    closeIcon.classList.add('bi')
    closeIcon.classList.add('bi-x-lg')
    closeColumnButton.append(closeIcon)
    closeColumnButton.addEventListener('click',removeColumn)
    closeColumnButton.addEventListener('click',updateColumnCounter)
    
    columnHeader.append(columnTitle)
    columnHeader.append(plusCardButton)
    columnHeader.append(closeColumnButton)
    
    const cardcounterTitle=document.createElement('span')
    cardcounterTitle.classList.add('card-counter-title')
    cardcounterTitle.innerHTML=`Tarefas: `

    const cardCounterNumber=document.createElement('span')
    cardCounterNumber.classList.add('card-counter-number')
    cardCounterNumber.innerHTML=`0`

    cardCounter.append(cardcounterTitle)
    cardCounter.append(cardCounterNumber)

    column.addEventListener('dragover',dragover)
    column.addEventListener('dragenter',dragenter)
    column.addEventListener('dragleave',dragleave)
    column.addEventListener('drop',dropCard)
    column.addEventListener('dragleave',updateCardCounter)
    column.addEventListener('drop',updateCardCounter)
    
    column.append(columnHeader)
    column.append(cardCounter)
    column.append(cardsContainer)
    
    columnsContainer.append(column)
    // alert(`Coluna ${updateColumnCounter()} criada com sucesso!`)
    updateColumnCounter()
}
const removeColumn=({target})=>{
    console.log(target)
    const button=target.parentElement
    const columnHeader=button.parentElement
    const column=columnHeader.parentElement
    column.remove()
}


// Drag & Drop
let draggedCard
const dragstart=(event)=>{
    draggedCard=event.target
    event.dataTransfer.effectAllowed="move"
}

const dragover=(event)=>{
    event.preventDefault()
}
const dragenter=({target})=>{
    if(target.classList.contains('cards-container')){
        target.classList.add('column-highlight')
    }
}

const dragleave=({target})=>{
    if(target.classList.contains('cards-container')){
        target.classList.remove('column-highlight')
    }
}

const dropCard=({target})=>{
    if(target.classList.contains('cards-container')){
        target.classList.remove('column-highlight')
        target.appendChild(draggedCard)
    }
}


editCardButton.forEach((item)=>{
    item.addEventListener('click',editCard)
})

plusCardButton.forEach((item)=>{
    item.addEventListener('click',createCard)
    item.addEventListener('click',updateCardCounter)
})

removeCardButton.forEach((item)=>{
    item.addEventListener('click',removeCard)
    item.addEventListener('click',updateCardCounter)
})


plusColumn.addEventListener('click',createColumn)

closeColumn.forEach((item)=>{
    item.addEventListener('click',removeColumn)
    item.addEventListener('click',updateColumnCounter)
})

const columns=document.querySelectorAll('.column')
const cards=document.querySelectorAll('.card')
const columnTitle=document.querySelectorAll('.column-title')

cards.forEach((item)=>{
    item.addEventListener('dragstart',dragstart)
})

columns.forEach((item)=>{
    item.addEventListener('dragover',dragover)
    item.addEventListener('dragenter',dragenter)
    item.addEventListener('dragleave',dragleave)
    item.addEventListener('drop',dropCard)

    item.addEventListener('dragleave',updateCardCounter)
    item.addEventListener('drop',updateCardCounter)
})

columnTitle.forEach((title)=>{
    title.addEventListener('click',editColumnTitle)
})