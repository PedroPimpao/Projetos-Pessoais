const eyeIcons=document.querySelectorAll('.eye-icon')
eyeIcons.forEach((eye)=>{
    eye.addEventListener('click',({target})=>{
        eye.classList.toggle('bi-eye')
        eye.classList.toggle('bi-eye-slash')
        const inputBox=target.parentElement
        const inputField=inputBox.querySelector('.input-field-pass')
        if(inputField.type==='password'){
            inputField.type='text'
        }
        else if(inputField.type==='text'){
            inputField.type='password'
        }
    })
})

const validation=(inputField, errorMessage, valid)=>{
    const inputBox=inputField.parentElement
    const errorContainer=inputBox.querySelector('.error_msg')
    if(!valid){
        errorContainer.innerHTML=`${errorMessage}`
        errorContainer.style.display='block'
        inputField.classList.add('input-error')
    }else{
        errorContainer.style.display='none'
        inputField.classList.remove('input-error')
    }
    return valid ? 1:0
}

const passwordValidation=(ruleBox, valid)=>{
    let ruleCheck=ruleBox.getElementsByTagName('i')[0]
    let rule=ruleBox.getElementsByTagName('div')[0]
    let inputBox=document.querySelector('#input-password-box')
    if(!valid){
        rule.classList.remove('check')
        ruleBox.classList.remove('check')
        ruleCheck.classList.add('bi-x-lg')
        ruleCheck.classList.remove('bi-check-circle','check')
    }else{
        inputBox.classList.remove('input-error')
        rule.classList.remove('error')
        ruleBox.classList.remove('error')
        ruleBox.classList.add('check')
        rule.classList.add('check')
        ruleCheck.classList.remove('bi-x-lg','error')
        ruleCheck.classList.add('bi-check-circle','check')
    }

    return valid ? 1:0
}

const checkPassValidation=(ruleBox, valid)=>{
    let ruleCheck=ruleBox.getElementsByTagName('i')[0]
    let rule=ruleBox.getElementsByTagName('div')[0]
    let inputBox=document.querySelector('#input-password-box')
    if(!valid){
        ruleBox.classList.add('error')
        ruleCheck.classList.add('bi-x-lg','error')
        rule.classList.add('error')
        inputBox.classList.add('input-error')
    }
    return valid ? 1 : 0
}

const minuscBox=document.querySelector('.minusc')
const maiuscBox=document.querySelector('.maiusc')
const numberBox=document.querySelector('.numeros')
const especialBox=document.querySelector('.especiais')
const lengthBox=document.querySelector('.comprimento')

const inputPass=document.querySelector('#input-password')
inputPass.addEventListener('keyup',()=>{
    let forca=0
    forca+=passwordValidation(minuscBox, inputPass.value.match(/[a-z]/g))
    forca+=passwordValidation(maiuscBox, inputPass.value.match(/[A-Z]/g))
    forca+=passwordValidation(numberBox, inputPass.value.match(/[0-9]/g))
    forca+=passwordValidation(especialBox, inputPass.value.match(/[!@#$%&*]/g))
    forca+=passwordValidation(lengthBox, inputPass.value.length>=8)

    console.log(`Força: ${forca}`)
})

const confirmPassValidation=()=>{
    const confirmPass=document.querySelector('#input-confirm-password')
    const confirmPassBox=confirmPass.parentElement
    if(confirmPass.value===inputPass.value){
        confirmPassBox.classList.remove('input-error')
        return 1
    }else{
        confirmPassBox.classList.add('input-error')
        return 0
    }
}

const inputName=document.querySelector('#input-name')
const inputEmail=document.querySelector('#input-email')
const inputPhone=document.querySelector('#input-phone')
const inputCpf=document.querySelector('#input-cpf')

const submitButton=document.querySelector('#submitButton')
submitButton.addEventListener('click',()=>{
    let forca=0
    let nivelValidacao=0
    

    const phoneValidation=/^\(\d{2}\)\d{8,9}$/
    const CPFValidation=/^\d{11}/

    nivelValidacao+=validation(inputName, 'Minimo de 3 caracteres', inputName.value.length>=3)
    nivelValidacao+=validation(inputEmail, 'Insira um Email válido', inputEmail.value.search(/@gmail.com/g)!=-1)
    nivelValidacao+=validation(inputPhone, 'Insira um numero de telefone válido', phoneValidation.test(inputPhone.value))
    nivelValidacao+=validation(inputCpf, 'Insira um CPF válido', CPFValidation.test(inputCpf.value))
    nivelValidacao+=confirmPassValidation()

    forca+=checkPassValidation(minuscBox, inputPass.value.match(/[a-z]/g))
    forca+=checkPassValidation(maiuscBox, inputPass.value.match(/[A-Z]/g))
    forca+=checkPassValidation(numberBox, inputPass.value.match(/[0-9]/g))
    forca+=checkPassValidation(especialBox, inputPass.value.match(/[!@#$%&*]/g))
    forca+=checkPassValidation(lengthBox, inputPass.value.length>=8)

    const nivelForca=()=>{
        if(forca>=5 && nivelValidacao>=5){
            console.log('Cadastrado com sucesso!')
            alert('Cadastrado com sucesso!')
            const nameValue=inputName.value
            const emailValue=inputEmail.value
            const phoneValue=inputPhone.value
            const CPFValue=inputCpf.value
            const passwordValue=inputPass.value
            console.log('----- CADASTRADO -----')
            console.log(`Nome: ${nameValue}`)
            console.log(`Email: ${emailValue}`)
            console.log(`Telefone: ${phoneValue}`)
            console.log(`CPF: ${CPFValue}`)
            console.log(`Senha: ${passwordValue}`)
            console.log('-----------------------')
        }else{
            console.log('[ERRO] Falha ao cadastrar')
        }
    }
    nivelForca()
})


const loginButton=document.querySelector('#login-button')
const cadButton=document.querySelector('#cad-button')

const formBody=document.querySelector('.form-body')
const loginBody=document.querySelector('.login-body')

loginButton.addEventListener('click',()=>{
    formBody.style.display='none'
    loginBody.style.display='flex'
})
cadButton.addEventListener('click',()=>{
    formBody.style.display='block'
    loginBody.style.display='none'
})

const emailLogin=document.querySelector('#login-email')
const passwordLogin=document.querySelector('#login-password')
const submitLogin=document.querySelector("#submitLogin")

const confirmLoginPass=(inputField, errorMessage, valid)=>{
    const inputBox=inputField.parentElement
    const inputBoxContainer=inputBox.parentElement
    const errorContainer=inputBoxContainer.querySelector('.error_msg')
    if(!valid){
        inputBox.classList.add('input-error')
        errorContainer.innerText=`${errorMessage}`
        errorContainer.style.display='block'
    }else{
        inputBox.classList.remove('input-error')
        errorContainer.style.display='none'
        console.log('Login realizado com sucesso!')
        alert('Login realizado com sucesso!')
    }

}

submitLogin.addEventListener('click',()=>{
    const emailValue=inputEmail.value
    const passwordValue=inputPass.value
    const emailValidation=()=>{
        if(emailLogin.value===emailValue && emailLogin.value.length != 0){
            return true
        }else{
            return false
        }
    }

    const passwordValid=()=>{
        if(passwordLogin.value===passwordValue && passwordLogin.value.length != 0){
            return true
        }else{
            return false
        }
    }

    validation(emailLogin, 'Email inválido', emailValidation())
    confirmLoginPass(passwordLogin, 'Senha inválida', passwordValid())
})
