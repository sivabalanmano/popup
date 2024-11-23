const openbtn = document.querySelectorAll('[data-open-btn]')
const closebtn = document.querySelectorAll('[data-close-btn]')
const overlay = document.getElementById('overlay')

openbtn.forEach(button => {
    button.addEventListener('click',() => {
        const model = document.querySelector(button.dataset.openBtn)
        openmodel(model)
    })
})

overlay.addEventListener('click', () =>{
    const modals = document.querySelectorAll('.model.active')
    modals.forEach(model => {
        closemodel(model)
    })
})

closebtn.forEach(button => {
    button.addEventListener('click',() => {
        const model = button.closest('.model')
        closemodel(model)
    })
})

function openmodel(model){
    if(model == null) return
    model.classList.add('active')
    overlay.classList.add('active')
}

function closemodel(model){
    if(model == null) return
    model.classList.remove('active')
    overlay.classList.remove('active')
}