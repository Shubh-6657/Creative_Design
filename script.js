document.querySelectorAll('.story-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
})

// document.querySelectorAll('.best-btn').forEach(btn=>{
//         btn.classList.toggle('change')
//         btn.nextElementSibling.classList.toggle('change')
// })
