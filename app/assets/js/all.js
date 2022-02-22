/*------------------- 登入註冊按鈕切換效果 -------------------*/

$(document).ready(function () {

  $('.loginBtn').click(function (e) {

    /*----------- 底線位置移動 -----------*/
    $('.signForm__enableLine').removeClass('signForm__enableLine--register').addClass('signForm__enableLine--login');

    /*----------- 移除註冊特效 -----------*/
    $('.registerBtn').removeClass('fw-bold').removeClass('text-primary').addClass('text-inactive');
    /*----------- 新增登入特效 -----------*/
    $('.loginBtn').addClass('fw-bold').addClass('text-primary');
  })

  $('.registerBtn').click(function (e) {

    /*----------- 底線位置移動 -----------*/
    $('.signForm__enableLine').removeClass('signForm__enableLine--login').addClass('signForm__enableLine--register');

    /*----------- 移除登入特效 -----------*/
    $('.loginBtn').removeClass('fw-bold').removeClass('text-primary').addClass('text-inactive');
    /*----------- 新增註冊特效 -----------*/
    $('.registerBtn').addClass('fw-bold').addClass('text-primary');
  })

})