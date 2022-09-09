
//Cart update function:
function addButton() {
    const cartDisplay = document.getElementById('cart');
    const cartValue =  parseInt(cartDisplay.innerText)
    cartDisplay.innerText = cartValue + 1;
}


//Buttons Disabled function:
function btnDisable(e){
    const Buttons = document.getElementsByClassName('mens-btn');
    for (const btn of Buttons) {
        btn.addEventListener('click', function(e){
            //btn Disabled
            const targetBtn = e.target;
            targetBtn.setAttribute("disabled", "true");
            
        })
    }

}