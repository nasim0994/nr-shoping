//Women Product Object/Data:
const menProducts = menProduct;

//innerHtml Function:
const menContainer = document.getElementById('mensP-container');

function menContent(img, title, price, oldPrice){
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
                        <button onclick="addButton()" class="btn btn-info mens-btn">Add to Card</button>
                    </div>
                </div>
            </div>
    `;
    menContainer.appendChild(div)
}

// Display Show:
function addShow(){
    for (const menProduct of menProducts) {
        const {img, title, price, oldPrice} = menProduct;
        menContent(img, title, price, oldPrice)
    }
}
addShow()
//only cloth show:
document.getElementById('m-cloth').addEventListener('click',function(e){
    menContainer.innerHTML = "";
    const cloths = menProducts.filter(cloth => cloth.category === "cloth");
    for (const cloth of cloths) {
        const {img, title, price, oldPrice} = cloth;
        menContent(img,title,price,oldPrice);
    }

    btnDisable(e)
})

//only Shoes show:
document.getElementById('m-shoes').addEventListener('click',function(e){
    menContainer.innerHTML = "";
    const shoes = menProducts.filter(shoe => shoe.category === "shoe");
    for (const shoe of shoes) {
        const {img, title, price, oldPrice} = shoe;
        menContent(img,title,price,oldPrice);
    }
    btnDisable(e)
})

//only Others show:
document.getElementById('m-others').addEventListener('click',function(e){
    menContainer.innerHTML = "";
    const others = menProducts.filter(other => other.category === "others");
    for (const other of others) {
        const {img, title, price, oldPrice} = other;
        menContent(img,title,price,oldPrice);
    }

    btnDisable(e)
})
//All show:
document.getElementById('m-all').addEventListener('click',function(e){
    menContainer.innerHTML = "";
    addShow()
    btnDisable(e)
});


btnDisable()









