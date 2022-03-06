function showInfo(n){
    var brand_array = ['apple','oneplus','samsung','xiaomi','realme','infinix','poco','nokia'];
    var product_array = ['apple_id','oneplus_id','samsung_id','xiaomi_id','realme_id','infinix_id','poco_id','nokia_id'];
    var display_none = ['apple_products_none','oneplus_products_none','samsung_products_none','xiaomi_products_none','realme_products_none','infinix_products_none','poco_products_none','nokia_products_none'];
    var display = ['apple_products','oneplus_products','samsung_products','xiaomi_products','realme_products','infinix_products','poco_products','nokia_products'];
    
    for(var i = 0;i<display.length;i++){
        var clear = document.getElementById(product_array[i]).classList;
        if(clear.contains(display[i])){
            clear.replace(display[i],display_none[i]);
        }
    }
    
    if(brand_array[n]=='apple'){
        var product = document.getElementById(product_array[n]).classList;
        product.replace('apple_products_none','apple_products');
    }
    else if(brand_array[n]=='oneplus'){
        var product = document.getElementById(product_array[n]).classList;
        product.replace('oneplus_products_none','oneplus_products');
    }
    else if(brand_array[n]=='samsung'){
        var product = document.getElementById(product_array[n]).classList;
        product.replace('samsung_products_none','samsung_products');
    }
    else if(brand_array[n]=='xiaomi'){
        var product = document.getElementById(product_array[n]).classList;
        product.replace('xiaomi_products_none','xiaomi_products');
    }
    else if(brand_array[n]=='realme'){
        var product = document.getElementById(product_array[n]).classList;
        product.replace('realme_products_none','realme_products');
    }
    else if(brand_array[n]=='infinix'){
        var product = document.getElementById(product_array[n]).classList;
        product.replace('infinix_products_none','infinix_products');
    }
    else if(brand_array[n]=='poco'){
        var product = document.getElementById(product_array[n]).classList;
        product.replace('poco_products_none','poco_products');
    }
    else{
        var product = document.getElementById(product_array[n]).classList;
        product.replace('nokia_products_none','nokia_products');
    }

}