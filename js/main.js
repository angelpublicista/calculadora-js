const keys = document.querySelectorAll('.key')
const screen = document.getElementById('screen')

for (const key of keys) {
    key.addEventListener('click',function(){
        let content = this.innerHTML;
        
        screen.innerHTML = content
    })
}