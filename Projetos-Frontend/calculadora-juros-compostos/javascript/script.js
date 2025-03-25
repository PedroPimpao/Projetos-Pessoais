// Alternacao de blocos
const operationOptions=document.querySelectorAll(".option")
const calcContent=document.querySelectorAll(".calc-content")

function selectOption(){
    operationOptions.forEach((item)=>{
        item.classList.remove('ativo')
    })
    this.classList.add('ativo')
    const index=Array.from(operationOptions).indexOf(this)
    selectCalc(index);
}

function selectCalc(index){
    calcContent.forEach((item)=>{
        item.classList.remove('showContent')
    })
    calcContent[index].classList.add('showContent')
}

operationOptions.forEach((item)=>{
    item.addEventListener('click',selectOption)
})

// Capturando botoes submit
const montante_btn=document.querySelector('#calcular-montante')
const capital_btn=document.querySelector('#calcular-capital')
const tempo_btn=document.querySelector('#calcular-tempo')

// Capturando divs resultado
const montante_res=document.querySelector('#resultado-montante')
const capital_res=document.querySelector('#resultado-capital')
const tempo_res=document.querySelector('#resultado-tempo')

// Calculos de Juros Compostos e suas variaveis

// Calculo Montante
montante_btn.addEventListener('click',()=>{
    let capitalValue=document.querySelector('#id-capital-montante').value
    let tempoValue=document.querySelector('#id-tempo-montante').value
    let taxaValue=document.querySelector('#id-taxa-montante').value

    capitalValue=String(capitalValue).replace(',','.')
    tempoValue=String(tempoValue).replace(',','.')
    taxaValue=String(taxaValue).replace(',','.')

    const capital=Number(capitalValue)
    const tempo=Number(tempoValue)
    const taxa=Number(taxaValue)
    const taxaDec=taxa/100

    const calcMontante=(capital, tempo, taxa)=>{
        let montante=capital*(1+taxa)**(tempo/12)
        return montante
    }
    const montante=calcMontante(capital, tempo, taxaDec).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    console.log(`Montante necessario: ${montante}`)
    montante_res.innerHTML=`${montante}`
})

capital_btn.addEventListener('click',()=>{
    let montanteValue=document.querySelector('#id-montante-capital').value
    let tempoValue=document.querySelector('#id-tempo-capital').value
    let taxaValue=document.querySelector('#id-taxa-capital').value

    montanteValue=String(montanteValue).replace(',','.')
    tempoValue=String(tempoValue).replace(',','.')
    taxaValue=String(taxaValue).replace(',','.')

    const montante=Number(montanteValue)
    const tempoMes=Number(taxaValue)
    const tempoAno=tempoMes/12
    const taxa=Number(taxaValue)
    const taxaDec=taxa/100

    const calcCapital=(montante, tempo, taxa)=>{
        let Capital=montante/Math.pow((1+taxa),tempo)
        return Capital
    }

    const capital=calcCapital(montante, tempoAno, taxaDec).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    console.log(`Capital inicial necessário: ${capital}`)
    capital_res.innerHTML=`${capital}`
})

tempo_btn.addEventListener('click',()=>{
    let capitalValue=document.querySelector('#id-capital-tempo').value
    let montanteValue=document.querySelector('#id-montante-tempo').value
    let taxaValue=document.querySelector("#id-taxa-tempo").value

    capitalValue=String(capitalValue).replace(',','.')
    montanteValue=String(montanteValue).replace(',','.')
    taxaValue=String(taxaValue).replace(',','.')

    const capital=Number(capitalValue)
    const montante=Number(montanteValue)
    const taxa=Number(taxaValue)
    const taxaDec=taxa/100

    const calcTempo=(capital, montante, taxa)=>{
        let Tempo=(Math.log10(montante/capital))/Math.log10(1+taxa)
        return Tempo
    }

    const tempo=calcTempo(capital, montante, taxa).toFixed(1)
    console.log(`Tempo: ${tempo} anos`)
    tempo_res.innerHTML=`Tempo: ${tempo} anos`
})