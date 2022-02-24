"use strict";

/*------------------- 動畫效果 -------------------*/
$(document).ready(function () {
  /*----------- 登入狀態轉換 -----------*/
  $('.loginBtn').click(function (e) {
    /*----------- 底線位置移動 -----------*/
    $('.signForm__enableLine').removeClass('signForm__enableLine--register').addClass('signForm__enableLine--login');
    $('.loginBtn').addClass('loginBtn__phone--active');
    $('.registerBtn').removeClass('registerBtn__phone--active');
    /*----------- 移除註冊特效 -----------*/

    $('.registerBtn').removeClass('fw-bold').removeClass('text-primary').addClass('text-inactive');
    /*----------- 新增登入特效 -----------*/

    $('.loginBtn').addClass('fw-bold').addClass('text-primary');
    /*----------- 切換登入表單 -----------*/

    $('.loginForm').addClass('d-block').removeClass('d-none');
    $('.registerForm').addClass('d-none').removeClass('d-block');
    $('.signForm').addClass('signForm__loginPadding').removeClass('signForm__registerPadding');
  });
  /*----------- 註冊狀態轉換 -----------*/

  $('.registerBtn').click(function (e) {
    /*----------- 底線位置移動 -----------*/
    $('.signForm__enableLine').removeClass('signForm__enableLine--login').addClass('signForm__enableLine--register');
    $('.registerBtn').addClass('registerBtn__phone--active');
    $('.loginBtn').removeClass('loginBtn__phone--active');
    /*----------- 移除登入特效 -----------*/

    $('.loginBtn').removeClass('fw-bold').removeClass('text-primary').addClass('text-inactive');
    /*----------- 新增註冊特效 -----------*/

    $('.registerBtn').addClass('fw-bold').addClass('text-primary');
    /*----------- 切換註冊表單 -----------*/

    $('.loginForm').addClass('d-none').removeClass('d-block');
    $('.registerForm').addClass('d-block').removeClass('d-none');
    $('.signForm').removeClass('signForm__loginPadding').addClass('signForm__registerPadding');
  });
  /*----------- 漢堡選單轉換 -----------*/

  $('.navbar__hamburger').click(function (e) {
    $('.navbar__hamburgerIcon').toggleClass('navbar__hamburgerIcon--change');
    $('.dropdown').removeClass('dropdown__link--change');
    $('.dropdown__arrow').removeClass('dropdown__arrow--change');
  });
  /*----------- 下拉選單箭頭轉換 -----------*/

  $('.dropdown__link').click(function (e) {
    $(this).find('.dropdown__arrow').toggleClass('dropdown__arrow--change');
    $(this).parent().siblings().find('a > .dropdown__arrow').removeClass('dropdown__arrow--change');
  });
  /*----------- 標註當前點選的下拉選單效果 -----------*/

  $('.dropdown').click(function (e) {
    $(this).toggleClass('dropdown__link--change');
    $(this).siblings().removeClass('dropdown__link--change');
  });
  $('.nav-item').click(function (e) {
    $('.dropdown').removeClass('dropdown__link--change');
    $(this).siblings().find('a > .dropdown__arrow').removeClass('dropdown__arrow--change');
  });
});
//# sourceMappingURL=all.js.map
