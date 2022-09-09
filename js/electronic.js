//innerHtml Function:
const electronicContainer = document.getElementById('electronicP-container');

function innerHtml(img, title, price, oldPrice) {
    const div = document.createElement('div');
    div.classList.add('col')
    div.innerHTML = `
            <div class="card">
                <img
                src='${img}'
                class="card-img-top"
                alt="electronic Product"
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
                    <button class="btn btn-info e-btn">Add to Card</button>
                </div>
                </div>
            </div>
    `;
    electronicContainer.appendChild(div)
}

//electronic product object file
const electronicProduct = electronics;

//All Product show
for (const electronic of electronicProduct) {
    const {
        img,
        title,
        price,
        oldPrice
    } = electronic;
    innerHtml(img, title, price, oldPrice)
}



//Only Mobile show
document.getElementById('mobile').addEventListener('click', function () {
    electronicContainer.innerHTML = "";

    const mobiles = electronicProduct.filter(mobile => mobile.category === "phone");
    for (const mobile of mobiles) {
        const {
            img,
            title,
            price,
            oldPrice
        } = mobile;
        innerHtml(img, title, price, oldPrice);
    }
})

//Only Laptop show
document.getElementById('laptop').addEventListener('click', function () {
    electronicContainer.innerHTML = "";

    const laptops = electronicProduct.filter(laptop => laptop.category === "laptop");
    for (const laptop of laptops) {
        const {
            img,
            title,
            price,
            oldPrice
        } = laptop;
        innerHtml(img, title, price, oldPrice);
    }
})

//Only Desktop show
document.getElementById('desktop').addEventListener('click', function () {
    electronicContainer.innerHTML = "";

    const desktops = electronicProduct.filter(desktop => desktop.category === "desktop");
    for (const desktop of desktops) {
        const {
            img,
            title,
            price,
            oldPrice
        } = desktop;
        innerHtml(img, title, price, oldPrice);
    }
})


//Only Desktop show
document.getElementById('ac').addEventListener('click', function () {
    electronicContainer.innerHTML = "";

    const products = electronicProduct.filter(p => p.category === "ac");
    for (const p of products) {
        const {
            img,
            title,
            price,
            oldPrice
        } = p;
        innerHtml(img, title, price, oldPrice);
    }
})

//All show
document.getElementById('e-all').addEventListener('click', function () {
    electronicContainer.innerHTML = "";

    for (const electronic of electronicProduct) {
        const {
            img,
            title,
            price,
            oldPrice
        } = electronic;
        innerHtml(img, title, price, oldPrice)
    }
})


//Add Cart
const eButtons = document.getElementsByClassName('e-btn');
for (const btn of eButtons) {
    btn.addEventListener('click', function (e) {
        //Cart Update
        addCart()
        //btn Disabled
        const targetBtn = e.target;
        targetBtn.setAttribute("disabled", "true");
    })
}