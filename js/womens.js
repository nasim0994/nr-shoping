//Women Product Object/Data:
const womenProducts = womenProduct;

//innerHtml Function:
const womenContainer = document.getElementById('womensP-container');

function womenContent(img, title, price, oldPrice){
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
            
            <div class="card">
                <img
                src=${img}
                class="card-img-top"
                alt="..."
                />
                <div class="card-body">
                <h5 class="card-title">
                    ${title}
                </h5>
                <div class="pb-2">
                    <h5 class="card-text mb-0 mt-3">
                    <span class="text-danger">$<span>${price}</span></span>
                    </h5>
                    <small>
                    <del>$${oldPrice}</del>
                    </small>
                </div>
                <div>
                    <button class="btn btn-info women-btn">Add to Card</button>
                </div>
                </div>
            </div>
    `;
    womenContainer.appendChild(div)
}

// Display Show:
for (const womenProduct of womenProducts) {
    const {img, title, price, oldPrice} = womenProduct;
    womenContent(img, title, price, oldPrice)
}

//only cloth show:
document.getElementById('w-cloth').addEventListener('click',function(){
    womenContainer.innerHTML = "";
    const cloths = womenProducts.filter(cloth => cloth.category === "cloth");
    for (const cloth of cloths) {
        const {img, title, price, oldPrice} = cloth;
        womenContent(img,title,price,oldPrice);
    }
})

//only Shoes show:
document.getElementById('w-shoes').addEventListener('click',function(){
    womenContainer.innerHTML = "";
    const shoes = womenProducts.filter(shoe => shoe.category === "shoes");
    for (const shoe of shoes) {
        const {img, title, price, oldPrice} = shoe;
        womenContent(img,title,price,oldPrice);
    }
})

//only Jewellery show:
document.getElementById('w-jewellery').addEventListener('click',function(){
    womenContainer.innerHTML = "";
    const jewellerys = womenProducts.filter(jewellery => jewellery.category === "jewellery");
    for (const jewellery of jewellerys) {
        const {img, title, price, oldPrice} = jewellery;
        womenContent(img,title,price,oldPrice);
    }
})
//All show:
document.getElementById('w-all').addEventListener('click',function(){
    womenContainer.innerHTML = "";
    for (const womenProduct of womenProducts) {
        const {img, title, price, oldPrice} = womenProduct;
        womenContent(img, title, price, oldPrice)
    }
})

//Add Cart
const womenButtons = document.getElementsByClassName('women-btn');
for (const wBtn of womenButtons) {
    wBtn.addEventListener('click', function(e){
        //Cart Update
        addCart(e)
        //btn Disabled
        const targetBtn = e.target;
        targetBtn.setAttribute("disabled", "true");
    })
}
