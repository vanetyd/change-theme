const modeSwitcher = document.querySelector('.btn');

modeSwitcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')
    
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});