$(function () {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.map(val => {
        $(`<div class="product flex">
        <p>${val.name} <span>x ${val.quantity}</span></p>
        <span class="total-product">$${Math.round(val.price - val.price * val.discount / 100) * val.quantity}.00</span>
    </div>`)
            .appendTo(".product-out")
        const total = cart.reduce((acc, val) => {
            return acc + val.total;
        }, 0);
        const quantity = cart.reduce((acc, val) => {
            return acc + val.quantity;
        }, 0);
        $(".blue").text(`${quantity}`);

        if (cart.length > 0) {
            $(".no-product").css('display', 'none')
        }
        $(".total").text(`$${total}.00`)

        $(".product-cart").empty();
        cart.map(val => {
            $(`
            <div data-id=${val.id} class="product flex a-center j-between">
            <div  class="item-product flex a-center j-between">
                <img src=${val.img}
                    alt="">
                <div class="info">
                    <a class="name" href="">${val.name}</a>
                    <div class="price flex a-center">
                        <span class="quantity">${val.quantity}x </span>
                        <span class="price"> $${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                    </div>
                </div>
            </div>
            <button id="delete">X</button>     
            </div>
        `).appendTo(".product-cart");
        })
    })
    $(".select-style-2").click(function (e) {
        e.preventDefault();
        // e.stopPropagations();
        $("ul.select-options-2").slideToggle();
        $(".select-style-2 i").css('transform', 'rotate(180deg)');
        for (const option of document.querySelectorAll("li.select-option-2")) {
            $(option).click(function (e) {
                e.preventDefault();
                $(this).parent().find('li.selected').removeClass('selected');
                $(this).addClass('selected');
                this.closest('.select-3').querySelector('.select-style-2 span').textContent = this.textContent;

                $("ul.select-options-2").css('display', 'none');
            });
        }

    });
    $("#login").click(function (e) {
        e.preventDefault();
        // e.stopPropagations();
        $(".login").slideToggle();
    });
    $("#coupon").click(function (e) {
        e.preventDefault();
        // e.stopPropagations();
        $(".coupon").slideToggle();
    });
})