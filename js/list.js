$(() => {
  // 把从服务器获取的数据展示给用户
  let html = '';

  // forEach 是循环 数组 e就是循环的每一项 for arr[i] == e
  phoneData.forEach(function (e) {
    html += ` <li class="goods-list-item">
    <a href="detail.html?id=${e.pID}">
      <div class="item-img">
        <img src="${e.imgSrc}" alt="">
      </div>
      <div class="item-title">
       ${e.name}
      </div>
      <div class="item-price">
        <span class="now">¥${e.price}</span> 
      </div>
      <div class="sold">
        <span> 已售 <em>${e.percent}% </em></span>
        <div class="scroll">
          <div class="per" style=width:${e.percent}%></div>
        </div>
        <span>剩余<i>${e.left}</i>件</span>
      </div>
    </a>
    <a href="#" class="buy">
      查看详情
    </a>
  </li> `
  })
  // 把拼接好的li放到ul里面
  $('.goods-list>ul').html(html)
});

// var a = '最帅我松哥'
// var html = '<li>' + a + '<li>'
// var html = `<li>${a}<li>`