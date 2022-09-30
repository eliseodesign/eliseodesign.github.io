const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text')

const body = document.querySelector("body")


load()

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    store(body.classList.contains('dark'));


    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src='assets/icons/sun.svg'
        toggleText.textContent='Light Mode'
    }else{
        toggleIcon.src='assets/icons/moon.svg'
        toggleText.textContent='Dark Mode'
    }
})




function store(value){
    localStorage.setItem('dark', value);
}


function load(){
    const darkmode = localStorage.getItem('dark');

    if(!darkmode){
        store('false');
    }else if(darkmode == 'true'){
        body.classList.toggle('dark');
        toggleIcon.src='assets/icons/sun.svg'
        toggleText.textContent='Light Mode'

        toggleIcon.src='assets/icons/moon.svg'
        toggleText.textContent='Dark Mode'
        
    }

}


//////////////////////////////////7 
// color 
const toggleColor = document.getElementById('toggle-colors')

const rootStyles = document.documentElement.style;
loadColor()


toggleColor.addEventListener('click', (e)=>{
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
    storeColor(e.target.dataset.color);
      
})


function storeColor(value){
    localStorage.setItem("color-actual", value)
    // alert(localStorage.setItem("color-actual", value))
}



function loadColor(){
    const color = localStorage.getItem("color-actual")

    if(!color){
        storeColor("none")
    }
    else{
        rootStyles.setProperty('--primary-color', color);
    }
}

