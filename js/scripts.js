const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text')


toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src='assets/icons/sun.svg'
        toggleText.textContent='Light Mode'
    }else{
        toggleIcon.src='assets/icons/moon.svg'
        toggleText.textContent='Dark Mode'
    }
})



//////////////////////////////////7 
// color 
const toggleColor = document.getElementById('toggle-colors')

const rootStyles = document.documentElement.style;

toggleColor.addEventListener('click', (e)=>{
    rootStyles.setProperty('--primary-color', e.target.dataset.color)
})