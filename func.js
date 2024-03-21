
    const toggleButton =document.getElementsByClassName('toggle-button')[0]
    const navcon =document.getElementsByClassName('nav-con')[0]
    toggleButton.addEventListener('click',()=>{
       navcon.classList.toggle('active')
    })

