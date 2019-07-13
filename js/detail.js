$(function () {
    // console.log(location.search.substring(4));,得到id后找到对应的数据，遍历数组找到id相同的数据写到页面页面里 
    let id = location.search.substring(4);
    let obj = phoneData.find(function (e, i) {
        return e.pID == id
    })
    // 替换产品的名字
    $('.sku-name').text(obj.name);
    // 替换产品价格
    $('.summary-price em').text('￥' + obj.price)
    // 替换照片
    $('.preview-img img').attr('src', obj.imgSrc)



    // 实现数量的加减
    // 获取元素
    let chooseNumber = $('.choose-number');
    let addBtn = $('.add');
    let reduceBtn = $('.reduce');
    // 点击＋，数量加一
    addBtn.on('click', function () {
        // 获取原来是多少件
        let old = parseInt(chooseNumber.val());
        old++;
        if (old > 1) {
            reduceBtn.removeClass('disabled')
        }
        // 把新的值赋给输入框
        chooseNumber.val(old);
    })

    // 点击－号，数量减一，但数量最少不能少于1
    reduceBtn.on('click', function () {
        // 获取原来是多少件
        let old = parseInt(chooseNumber.val());
        if (old === 1) {
            return
        }
        old--;
        if (old === 1) {
            reduceBtn.addClass('disabled')
        }
        // 把新的值赋给输入框
        chooseNumber.val(old);
    })



    // 点击加入购物车
    $('.addshopcar').on('click', function () {
        // 把当前对应的商品加入购物车
        let number = parseInt($('.choose-number').val()); /*得到商品数量*/
        // 把每个数据存到localStorage里，因为有多个商品所以用数组方式存储
        // let arr = [];
        // 先从localStorage里读取旧的数据，然后新旧数据叠加
        let jsonStr = localStorage.getItem('shopCarData');
        let arr;
        if (jsonStr === null) {
            arr = [];
        } else {
            arr = JSON.parse(jsonStr);
        }

        let good = {
            pID: obj.pID,
            name: obj.name,
            imgSrc: obj.imgSrc,
            price: obj.price,
            number: number
        }
        arr.push(good);

        // 把数组转换成JSON格式字符串存放到localStorage里
        jsonStr = JSON.stringify(arr);
        localStorage.setItem('shopCartData', jsonStr)

    })
})