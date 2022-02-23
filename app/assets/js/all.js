/*------------------- 動畫效果 -------------------*/

$(document).ready(function () {

  /*----------- 登入註冊狀態轉換 -----------*/

  $('.loginBtn').click(function (e) {

    /*----------- 底線位置移動 -----------*/
    $('.signForm__enableLine').removeClass('signForm__enableLine--register').addClass('signForm__enableLine--login');

    /*----------- 移除註冊特效 -----------*/
    $('.registerBtn').removeClass('fw-bold').removeClass('text-primary').addClass('text-inactive');
    /*----------- 新增登入特效 -----------*/
    $('.loginBtn').addClass('fw-bold').addClass('text-primary');

    /*----------- 切換登入表單 -----------*/
    $('.loginForm').addClass('d-block').removeClass('d-none');
    $('.registerForm').addClass('d-none').removeClass('d-block');
  })

  $('.registerBtn').click(function (e) {

    /*----------- 底線位置移動 -----------*/
    $('.signForm__enableLine').removeClass('signForm__enableLine--login').addClass('signForm__enableLine--register');

    /*----------- 移除登入特效 -----------*/
    $('.loginBtn').removeClass('fw-bold').removeClass('text-primary').addClass('text-inactive');
    /*----------- 新增註冊特效 -----------*/
    $('.registerBtn').addClass('fw-bold').addClass('text-primary');

    /*----------- 切換註冊表單 -----------*/
    $('.loginForm').addClass('d-none').removeClass('d-block');
    $('.registerForm').addClass('d-block').removeClass('d-none');
  })

  /*----------- 漢堡選單轉換 -----------*/
  $('.navbar__hamburger').click(function (e) {
    $('.navbar__hamburgerIcon').toggleClass('navbar__hamburgerIcon--change');
  })

})