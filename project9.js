let filter = document.querySelector('.filter');
let list = document.getElementById('list');
let count = document.getElementById('count')
let listProducts = [
    {
        id:1,
        name: 'Name product black-black-grey',
        price: 10000,
        quantity:0,
        image: 'https://taylorswift.universal-music.de/assets/asset_480x480/Taylor-Swift-Taylor-Swift-The-Eras-Tour-White-T-Shirt-T-Shirt-weiss-501626-372250.png',
        nature: {
            color: ['white','black'],
            size:['S','M','L'],
            type: 'T-shirt'
        }
    },
    {
        id:2,
        name: 'Name product white-black-grey',
        quantity:0,
        price:2000,
        image: 'https://www.gluestore.com.au/cdn/shop/products/20230221-IMG_0160-Edit_1601x.jpg?v=1677389670',
        nature: {
            color: ['white','black'],
            size:['S','M','L'],
            type: 'Polo'
        }
    },
    {
        id:3,
        name: 'Name product white-black-grey',
        quantity:0,
        price:4000,
        image: 'https://www.jonssonworkwear.com/images/thumbs/0005877_100-cotton-tee-shirt_1024.jpeg',
        nature: {
            color: ['white','black','grey'],
            size:['S','M','L'],
            type: 'Polo'
        }
    },
    {
        id:4,
        name: 'Name product yellow-black-grey',
        quantity:0,
        price:4000,
        image: 'https://assets.basspro.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_250,q_auto,w_400/c_pad,h_250,w_400/v1/ProductImages/600/estateblue_100343517_alt1?pgw=1',
        nature: {
            color: ['black','blue'],
            size:['S','M','L'],
            type: 'Shirt'
        }
    },
    {
        id:5,
        name: 'Name product green-black-grey',
        quantity:0,
        price:4000,
        image: 'https://static.lefties.com/9/photos2/2023/I/0/2/p/5913/505/250/5913505250_2_1_1.jpg?t=1686311240585',
        nature: {
            color: ['brown'],
            size:['S','M','L'],
            type: 'Shirt'
        }
    },
    {
        id:6,
        name: 'Name product white-black-grey',
        quantity:0,
        price:4000,
        image: 'https://www.helikon-tex.com/media/catalog/product/cache/4/image/500x/17f82f742ffe127f42dca9de82fb58b1/t/s/ts-tsh-co-11.jpg',
        nature: {
            color: ['white','black'],
            size:['S','M','L'],
            type: 'T-shirt'
        }
    },
];
let productFilter =  listProducts ;
showrProduct(productFilter);
function showrProduct (productFilter) {
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title')
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle)
        // create price;
        let newPrice = document.createElement('div');
        newPrice.classList.add('price')
        newPrice.innerText = item.price.toLocaleString() 
        newItem.appendChild(newPrice)
        list.appendChild(newItem)
    })
}
filter.addEventListener('submit' , function(event) {
    event.preventDefault(); 
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        if ( valueFilter.category.value != '') {
            if( item.nature.type != valueFilter.category.value ) {
                return false;
            }
        }
        // check color  
        if( valueFilter.color.value != ''){
            if( !item.nature.color.includes(valueFilter.color.value)){
                return false;
            }
        }
        // check name
        if( valueFilter.name.value != '') {
            if( !item.name.includes(valueFilter.name.value)){
                return false;
            }
        }
        // check min price
        if( valueFilter.maxPrice.value != ''){
            if( item.price > valueFilter.maxPrice.value){
                return false;
            }
        }
        // check max price
        return true;
    })
    showrProduct(productFilter)
})
console.log(listProducts)
