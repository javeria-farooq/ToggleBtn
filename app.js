let btn = document.querySelector('.btn')
let main = document.querySelector('main')
let container = document.querySelector('.container')

let theme = 'dark'

const lightTheme = () => {
    main.classList.add('light')
    main.classList.remove('dark')
    container.classList.add('light')
    container.classList.remove('dark')
    btn.classList.add('light')
    btn.classList.remove('dark')
}

const darkTheme = () => {
    main.classList.add('dark')
    main.classList.remove('light')
    container.classList.add('dark')
    container.classList.remove('light')
    btn.classList.add('dark')
    btn.classList.remove('light')
}

container.addEventListener('click', () => {
    if(theme === 'dark') {
        lightTheme()
        theme = 'light'
    }

    else{
        darkTheme()
        theme = 'dark'
    }
})