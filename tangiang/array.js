title = '中国';
d3.select('title').html(title);
d3.select('body').append('h1').html(title);

function print_array(array) {
  var ol = d3.select('body').append('ol');
  var array_length = array.length
  d3.select('body').append('p').html('Number of Items: ' + array_length);
  array.forEach(function(item, index, array) {
    ol.append('li').html(item);
    console.log(item, index);
  });
}
var new_item = "天津"
pro_list = ["北京", "上海", "广东", "深圳","成都", new_item];
print_array(pro_list)
