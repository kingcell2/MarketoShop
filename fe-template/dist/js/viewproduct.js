$(function () {
    const cart = JSON.parse(localStorage.getItem("cart"));

    cart.map(val => {
        $(` <div class="href">
                <a href="/home.html">Home ></a>
                <a href="">${val.categories}</a>  
            </div>
            <div class="col">
                <div class="col-left">
                    <div class="col-img-head ">
                        <img id="zoom" src="${val.img}"
                            alt="">
                        </div>
                        
                    <div id="gallery-list" class="col-img-under flex">        
                        <img  src=${val.gallery.slice(0, 1)}
                            alt="">
                        <img  src=${val.gallery.slice(1, 2)}
                            alt="">
                        <img  src=${val.gallery.slice(2, 3)}
                            alt="">
                        <img src=${val.gallery.slice(3, 4)}
                            alt="">
                    </div>
                </div>
                <div class="col-right">
                    <div data-id=${val.id} class="item">
                        <h3>${val.name}</h3>
                        <p>Categories: <span class="categories">${val.categories}</span> </p>
                        <br>
                        <div class="star flex">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <p class="review">(4 customer reviews)</p>
                        </div>
                        <span class="description">${val.description}</span>
                        <div class="price">
                            <span class="price-default">$${val.price}.00</span> <br>
                            <span class="price-discount">$${Math.round(val.price - (val.price * val.discount / 100))}.00</span>
                        </div>
                        <div class="flex a-center">
                        <form class="flex a-center" action="#">
                            <div class="btn flex  a-center">
                                <div class="dec-button">-</div>
                                <input type="text" id="quantity" value="1">
                                <div class="inc-button">+</div>
                            </div>
                            
                        </form>
                        <div class="cart">
                            <button class="add-on-view">Add to cart<i class="fas fa-check"></i></button>
                            
                        </div>
                        </div>
                        <div class="icon flex">
                            <div class="heart">
                                <i class="fas fa-heart"></i>
                            </div>
                            <div class="compare">
                                <i class="fas fa-recycle"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="description-product">
            <div class="title">
                <a class="active" href="">Description</a>
                <a class="not" href="">Reviews (4)</a>
            </div>
            <div class="content">
                <p>${val.description}</p>
            </div>
        </div>`).appendTo(".viewproduct")
    })

    $('#zoom').ezPlus({
        zoomType: 'lens',
        lensShape: 'round',
        //lensSize: 50

    });

    $(".add-on-view").click(function (e) {
        e.preventDefault();
        $("i.fas").css({
            'opacity': '1',
        });
        $(".cart-item").css({
            'position': 'fixed',
            'right': '0',
            'transition': 'all 1s',
        });
        $(".menu").css({
            'z-index': '2',
        });
        $('.blackbg').css('visibility') === 'hidden'
        $('.cart-item').css('z-index', 100);
        $('.blackbg').css('visibility', 'visible');
        $("#exit").click(function (e) {
            e.preventDefault();
            $(".cart-item").css({
                'position': 'fixed',
                'right': '-30%'
            });
            $('.blackbg').css('visibility', 'hidden');
            $('.cart-item').css('z-index', 2);
            $(".menu").css({
                'z-index': '100',
            });
        });
    });
})