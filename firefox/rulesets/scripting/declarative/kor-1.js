/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: kor-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".body.mwcphide\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".la\",\"action\":[\"style\",\"height: 40px !important; width: 40px !important; visibility: hidden !important;\"]}"],["{\"selector\":\"article > div[class^=\\\"sc-\\\"]\",\"action\":[\"style\",\"grid-template-columns: none !important;\"]}","{\"selector\":\"body[style]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".td-pb-span8\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".site-footer\",\"action\":[\"style\",\"padding-bottom: 0px !important;\"]}","{\"selector\":\"body .td-header-wrap\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"#hidden1\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#content .ad_parent\",\"action\":[\"style\",\"height: 100% !important; overflow: auto !important;\"]}"],["{\"selector\":\".content.partners-wrap\",\"action\":[\"style\",\"max-height: 100% !important;\"]}"],["{\"selector\":\"div[style].row.no-gutters > .col-6\",\"action\":[\"style\",\"max-width: 75% !important; flex-basis: 75% !important;\"]}"],["{\"selector\":\"#wrap > div[style*=\\\"height:\\\"][style^=\\\"position:\\\"] + header\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"header\",\"action\":[\"style\",\"height: 100px !important;\"]}"],["{\"selector\":\"#zzbang_img\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".login_inputbox .inner\",\"action\":[\"style\",\"width: calc(100% - 115px) !important;\"]}"],["{\"selector\":\".MapMain > #map\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#journalist_card li\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#contentBody.bodyHide\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".cs_news_area .cs_area\",\"action\":[\"style\",\"width: calc(100% - 2px) !important;\"]}","{\"selector\":\"li.area_guide\",\"action\":[\"style\",\"width: 96% !important;\"]}"],["{\"selector\":\"#body_wrap > #body_main > div[style]:nth-child(1), #body_wrap > #body_main > div[style]:nth-child(3)\",\"action\":[\"style\",\"width: calc(50% - 5px) !important;\"]}"],["{\"selector\":\".feature_index .box_user\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".inner_contents\",\"action\":[\"style\",\"margin-bottom: 0px !important;\"]}"],["{\"selector\":\"#primary\",\"action\":[\"style\",\"width: 100% !important\"]}"],["{\"selector\":\"body[data-elementor-device-mode=\\\"desktop\\\"] div[itemprop=\\\"mainContentOfPage\\\"]\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".article_area > .article_left\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".article_area .article_left\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".tabad\",\"action\":[\"style\",\"height: 1px !important;\"]}","{\"selector\":\"article\",\"action\":[\"style\",\"top: 0px !important;\"]}"],["{\"selector\":\"#wrap_cnts td[valign=\\\"top\\\"] #wrap_ctgr_new > div[id]\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#wrap_cnts td[valign=\\\"top\\\"] #wrap_ctgr_new\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".errorlay .new-login-warp\",\"action\":[\"style\",\"padding-top: 20px !important; margin-left: calc(50% - 232.5px) !important;\"]}"],["{\"selector\":\"header ~ header\",\"action\":[\"style\",\"margin-top: 50px !important;\"]}"],["{\"selector\":\"#newsBody\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".topBannerWrapper *\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\".depthContentsWrap .productListWrap .searchList\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".wide_layout .wrap_srch_res .wrap_sort\",\"action\":[\"style\",\"width: auto !important;\"]}","{\"selector\":\".wide_layout .wrap_srch_res .wrap_tab\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".wide_layout .wrap_srch_res [class*=\\\"prod_type2\\\"]\",\"action\":[\"style\",\"width: 1275px !important; border-left: 1px solid #e4e4e4 !important; background-image: none !important;\"]}"],["{\"selector\":\".contentBox > .topNews .icon-list\",\"action\":[\"style\",\"border-top: none !important;\"]}","{\"selector\":\".contentBox > .topNews > .con-L\",\"action\":[\"style\",\"border-top: none !important;\"]}"],["{\"selector\":\".article-adCover-div\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".productDetailWrap > .contentsWrap\",\"action\":[\"style\",\"padding-bottom: 0px !important;\"]}"],["{\"selector\":\".content_body > div[class^=\\\"lotto_\\\"]\",\"action\":[\"style\",\"filter: none !important; -webkit-filter: none !important;\"]}","{\"selector\":\".wrap.blocked .content_more_div\",\"action\":[\"style\",\"max-height: 100% !important;\"]}"],["{\"selector\":\"header .artc_ad\",\"action\":[\"style\",\"height: 130px !important;\"]}"],["{\"selector\":\"div[class~=\\\"hospital-images-box\\\"] ~ .row > .col-8\",\"action\":[\"style\",\"max-width: 100% !important; flex: none !important;\"]}"],["{\"selector\":\".content-full\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow-x: auto !important; overflow-y: auto !important;\"]}"],["{\"selector\":\".thisTimeNews > ul\",\"action\":[\"style\",\"border-right: none !important; width: 100% !important;\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"margin-bottom: 0px !important;\"]}","{\"selector\":\".area_ranking\",\"action\":[\"style\",\"top: 400px !important;\"]}"],["{\"selector\":\".wrap_home .section_spot .best_qna_wrap\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".wrap_home .section_spot\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#section_body\",\"action\":[\"style\",\"border-top: none !important;\"]}"],["{\"selector\":\"#topSearchWrap\",\"action\":[\"style\",\"padding-bottom: 50px !important;\"]}","{\"selector\":\"div[class^=\\\"Layout-module_\\\"] #newsstand\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".articleView + .aside .smallbox + .smallbox\",\"action\":[\"style\",\"border-top: none !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".ask_hamburger_wrapper\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\".ask_wrapper .ask_title_zone\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\".ask_wrapper.not_host\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".bot-content-area .mid-util-wrap > div\",\"action\":[\"style\",\"width: calc(50% - 5px) !important;\"]}"],["{\"selector\":\".user_view\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#board_read .board_main_top .member_reward_wrapper\",\"action\":[\"style\",\"margin-top: 20px !important; float: right !important; margin-right: 20px !important;\"]}"],["{\"selector\":\".go_top.go_button\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#index > div[id^=\\\"index_box\\\"][class]:not(.index_row_full)\",\"action\":[\"style\",\"margin-left: calc(50% - 145.5px) !important;\"]}"],["{\"selector\":\".result_wrap\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"header\",\"action\":[\"style\",\"top: 0px !important;\"]}"],["{\"selector\":\".td-is-sticky > .wpb_wrapper\",\"action\":[\"style\",\"top: 0px !important;\"]}"],["{\"selector\":\"#contentmemo ~ .adsbygoogle > div[style^=\\\"font-size:\\\"]\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".banner-open .contents\",\"action\":[\"style\",\"padding-top: 68px !important;\"]}"],["{\"selector\":\"#contentsBox #login_box\",\"action\":[\"style\",\"width: 350px !important; float: right !important; border-bottom: solid 2px #da3b40 !important; border-left: solid 2px #da3b40 !important;\"]}"],["{\"selector\":\"#mbnRoll_001 > .mbnRollUnit > .pagen_1\",\"action\":[\"style\",\"width: 239px !important;\"]}","{\"selector\":\"#mbnRoll_001 > .mbnRollUnit > .pagen_2\",\"action\":[\"style\",\"width: 239px !important; left: 239px !important;\"]}","{\"selector\":\"#mbnRoll_001 > .mbnRollUnit > .pagen_3\",\"action\":[\"style\",\"width: 239px !important; left: 478px !important;\"]}","{\"selector\":\"#mbnRoll_001 > .mbnRollUnit > .pagen_4\",\"action\":[\"style\",\"width: 240px !important; left: 717px !important;\"]}","{\"selector\":\"#mbnRoll_yNow > .mbnRollUnit > .pagen_1\",\"action\":[\"style\",\"width: 363px !important;\"]}","{\"selector\":\"#mbnRoll_yNow > .mbnRollUnit > .pagen_2\",\"action\":[\"style\",\"width: 363px !important; left: 363px !important;\"]}","{\"selector\":\"#mbnRoll_yNow > .mbnRollUnit > .pagen_3\",\"action\":[\"style\",\"width: 363px !important; left: 726px !important;\"]}","{\"selector\":\"#yHeader .yesSearch .key_latest .lastest_word\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#ySContent .loginCont\",\"action\":[\"style\",\"margin-left: 200px !important;\"]}","{\"selector\":\"#yWelMid .yWelNowBook ul\",\"action\":[\"style\",\"margin-left: calc(50% - 436px) !important;\"]}","{\"selector\":\"#yWelMid .yWelNowBook\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#yWelTopMid .yWelTodayBook .tBCont .tBInfo .tb_readCon\",\"action\":[\"style\",\"width: calc(100% - 30px) !important;\"]}","{\"selector\":\"#yWelTopMid .yWelTodayBook\",\"action\":[\"style\",\"width: calc(100% - 240px) !important;\"]}","{\"selector\":\".mContRT .mbnZone\",\"action\":[\"style\",\"left: 94.5px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"padding-top: 0px !important;\"]}"],["{\"selector\":\"#content-header form.FormItem\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#top-banner-ad\",\"action\":[\"style\",\"height: 1px !important; position: absolute !important;\"]}"],["{\"selector\":\".social-after-title\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".bch-main-wrapper > .right-cont\",\"action\":[\"style\",\"margin-right: calc(50% - 180px) !important; width: 100% !important;\"]}"],["{\"selector\":\"#popupBody #nonmember_all .button_login2\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#popupBody #nonmember_all .left1\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#welcomeMainBanner_welcome_tab\",\"action\":[\"style\",\"left: calc(50% - 186px) !important;\"]}"],["{\"selector\":\"#main_sec\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}"],["{\"selector\":\"#body > .hp_allkill\",\"action\":[\"style\",\"margin-top: 375px !important;\"]}","{\"selector\":\".mod-top > .main-promo\",\"action\":[\"style\",\"margin-left: calc(50% - 205px) !important;\"]}"],["{\"selector\":\".box__login #login_tab\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".box__login .box__login-member\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#allKillItemList > .item_list_wrap\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".goods_list_tit\",\"action\":[\"style\",\"padding-top: 0px !important;\"]}"],["{\"selector\":\".sect-movie-chart > ol:nth-child(2) > li\",\"action\":[\"style\",\"margin-left: 130px !important;\"]}","{\"selector\":\".wrap-login > .sect-login\",\"action\":[\"style\",\"margin-left: calc(50% - 270px) !important;\"]}"],["{\"selector\":\".container .contents > .subcontents:nth-child(1)\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}","{\"selector\":\"html:not([data-n-head]) .contents > .headline\",\"action\":[\"style\",\"margin-top: 0px !important; height: 70px !important;\"]}"],["{\"selector\":\"#searchArea .title_wrap\",\"action\":[\"style\",\"width: calc(100% - 50px) !important;\"]}","{\"selector\":\"#searchArea .viewType_L .product_list li .prd_info\",\"action\":[\"style\",\"width: 700px !important;\"]}","{\"selector\":\".wrap_list .standard\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".bodyHide\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".ebs_item .inner > div[class]\",\"action\":[\"style\",\"width: 50% !important;\"]}"],["{\"selector\":\".main-top-banner + .box\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"[class][itemtype*=\\\"//schema.org/\\\"] .markdown\",\"action\":[\"style\",\"max-width: 100% !important; flex-basis: 100% !important;\"]}","{\"selector\":\"[class][itemtype*=\\\"//schema.org/\\\"] > .center\",\"action\":[\"style\",\"width: 100% !important; flex-basis: 100% !important;\"]}"],["{\"selector\":\".mo-new-header .header .show-ads\",\"action\":[\"style\",\"max-height: 54px !important;\"]}"],["{\"selector\":\"#loginFormWrite\",\"action\":[\"style\",\"margin-left: 25% !important;\"]}","{\"selector\":\".byWd .matchingContWrap\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".news_doc #footer\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"div[class^=\\\"premium-lawyer\\\"] ~ a.goto-all-lawyers\",\"action\":[\"style\",\"margin-top: 40px !important;\"]}","{\"selector\":\"div[ng-if] > .lawyers-section.has-border-bottom\",\"action\":[\"style\",\"height: 250px !important;\"]}"],["{\"selector\":\"header.main-header\",\"action\":[\"style\",\"top: 0px !important;\"]}"],["{\"selector\":\".news_synthesis_sec .col.col_4\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"div.section-leftmiddle-topmiddle.cf\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"div[style].clearfix > .nd-by-line\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#pnlContainer .con_b > .reply_b\",\"action\":[\"style\",\"margin: 0px auto !important;\"]}"],["{\"selector\":\"table[style][width][cellspacing][cellpadding] tr[valign] > td[style] > div[style]\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"html[class*=\\\"pc-size\\\"] .m-contents > .side-area > .analysis-ranking1\",\"action\":[\"style\",\"top: 475px !important; left: auto !important; width: 100% !important;\"]}","{\"selector\":\"html[class*=\\\"pc-size\\\"] .m-contents > .side-area > div:nth-child(-1n+4)\",\"action\":[\"style\",\"top: auto !important; left: auto !important;\"]}","{\"selector\":\"html[class*=\\\"pc-size\\\"] .side-area + .m-guide\",\"action\":[\"style\",\"margin-bottom: 150px !important;\"]}"],["{\"selector\":\".box-skin .mobile-popular\",\"action\":[\"style\",\"border-top: none !important;\"]}"],["{\"selector\":\".top-keyword\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"div[class^=\\\"ppom_newSub\\\"] .top_newSub .left_wt\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"div.sc-64vosk-0.jIkGEl\",\"action\":[\"style\",\"margin-bottom: 10px !important;\"]}"],["{\"selector\":\".content_area .todayBox\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#SirenDiv\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".article-ad ~ p[style][class^=\\\"title\\\"]\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}"],["{\"selector\":\"form[name=\\\"loginForm\\\"][action*=\\\"login.yp\\\"] > table\",\"action\":[\"style\",\"margin-left: calc(25% - 27px) !important;\"]}"],["{\"selector\":\"#entFlick\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#hotPlace.myBox\",\"action\":[\"style\",\"margin-left: calc(50% - 65px) !important;\"]}"],["{\"selector\":\".board_view .related_area\",\"action\":[\"style\",\"height: 300px !important;\"]}"],["{\"selector\":\".column_content\",\"action\":[\"style\",\"margin-top: 50px !important;\"]}"],["{\"selector\":\"html[style]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"div[class*=\\\"inner\\\"].column > div\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".xe_content\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\".news-cate + .news-box\",\"action\":[\"style\",\"padding-right: 0px !important;\"]}"],["{\"selector\":\".global-top\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\".layout-main .main-menu\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\".layout-main .panel.no-margin\",\"action\":[\"style\",\"padding-top: 50px !important;\"]}"],["{\"selector\":\".content_join\",\"action\":[\"style\",\"margin-left: calc(50% - 200px) !important;\"]}"],["{\"selector\":\".content\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#article-info > h2\",\"action\":[\"style\",\"overflow: visible !important;\"]}","{\"selector\":\"#header-menu-left\",\"action\":[\"style\",\"border-right: none !important;\"]}","{\"selector\":\"#header-menu-right\",\"action\":[\"style\",\"float: right !important; border-left: none !important;\"]}","{\"selector\":\"div[align=\\\"center\\\"] + .row > .col-xs-6\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"html[style*=\\\"background-image: url(//upload.tgd.kr/\\\"].darkmode\",\"action\":[\"style\",\"background-image: none !important; background-color: #151515 !important;\"]}","{\"selector\":\"html[style*=\\\"background-image: url(//upload.tgd.kr/\\\"]:not(.darkmode)\",\"action\":[\"style\",\"background-image: none !important; background-color: #f3f2f0 !important;\"]}"],["{\"selector\":\".content\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"#top_aria\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".respons-edit > div[style].float-left\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"div[data-tiara-layer]:not([id])\",\"action\":[\"style\",\"margin-top: 0px !important; position: relative !important;\"]}"],["{\"selector\":\".inner-main [data-cloud*=\\\"_ad_\\\"] + div\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"#id_my_menu_area ~ #main_sky_banner_area\",\"action\":[\"style\",\"margin-left: 685px !important;\"]}","{\"selector\":\"div[class^=\\\"main\\\"]#middle_area .academy.fleft:not(.iyua)\",\"action\":[\"style\",\"margin-left: calc(11.5%) !important;\"]}"],["{\"selector\":\".gdl-page-item\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".expanded > #user-container\",\"action\":[\"style\",\"padding-top: 0px !important;\"]}"],["{\"selector\":\".grid-body.g-body\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"header > .header-body\",\"action\":[\"style\",\"width: 100% !important;\"]}"]];

const hostnamesMap = new Map([["3.37.104.109",0],["aagag.com",1],["atlantachosun.com",2],["autopostkorea.com",[3,4]],["ygosunews.com",[3,59]],["ydailynewsis.blogspot.com",5],["dodot.cafe24.com",6],["loapost.cafe24.com",6],["ohohz.cafe24.com",6],["jiavr.xyz",6],["chchclub.com",7],["sports.chosun.com",8],["m.sports.chosun.com",9],["m.sportschosun.com",9],["dailypharm.com",10],["gall.dcinside.com",11],["sign.dcinside.com",12],["diningcode.com",13],["www.donga.com",14],["donthellgo.com",15],["drapt.com",16],["edufindkorea.com",17],["encar.com",18],["fnnews.com",19],["funnyissue.com",20],["googlewph.com",20],["gyeomipang.co.kr",20],["haninvegas.com",21],["heraldcorp.com",22],["news.heraldcorp.com",22],["heraldpop.com",23],["t.hi098123.com",24],["web.humoruniv.com",25],["edit.incruit.com",26],["inews24.com",27],["joynews24.com",27],["instructivehumility.com",28],["news.oasisfeed.com",28],["m.shop.interpark.com",29],["shopping.interpark.com",30],["shoppinghow.kakao.com",31],["koreadaily.com",32],["ktestone.com",33],["lotteon.com",34],["lottoen.com",35],["medipana.com",36],["modoodoc.com",37],["marupost.mycafe24.com",38],["news.nate.com",39],["www.nate.com",40],["kin.naver.com",41],["news.naver.com",42],["www.naver.com",43],["newsis.com",44],["newtoki303.com",45],["newtoki304.com",45],["newtoki305.com",45],["newtoki306.com",45],["newtoki307.com",45],["newtoki308.com",45],["newtoki309.com",45],["newtoki310.com",45],["newtoki311.com",45],["newtoki312.com",45],["newtoki313.com",45],["newtoki314.com",45],["pushoong.com",46],["quasarzone.com",47],["ruliweb.com",48],["bbs.ruliweb.com",49],["m.ruliweb.com",50],["serieamania.com",51],["simcong.com",52],["spotv100.com",53],["spotv101.com",53],["spotv102.com",53],["spotv103.com",53],["spotv104.com",53],["spotv105.com",53],["spotv106.com",53],["spotv107.com",53],["spotv108.com",53],["spotv109.com",53],["spotv110.com",53],["spotv111.com",53],["spotv112.com",53],["spotv113.com",53],["spotv114.com",53],["spotv97.com",53],["spotv98.com",53],["spotv99.com",53],["sundaynewsusa.com",54],["te31.com",55],["toomics.com",56],["uwayapply.com",57],["yes24.com",58],["op.gg",60],["thepumpkin.io",61],["blockchainhub.kr",62],["aladin.co.kr",63],["all-mice.co.kr",64],["auction.co.kr",65],["memberssl.auction.co.kr",66],["www.auction.co.kr",67],["berryjam.co.kr",68],["cgv.co.kr",69],["chaoscube.co.kr",70],["compuzone.co.kr",71],["curiosityblog.co.kr",72],["issueclick.kr",[72,98]],["www.ebs.co.kr",73],["etoland.co.kr",74],["hashcode.co.kr",75],["m.inven.co.kr",76],["jobkorea.co.kr",77],["news.jtbc.co.kr",78],["lawtalk.co.kr",79],["megabox.co.kr",80],["mk.co.kr",81],["mule.co.kr",82],["newdaily.co.kr",83],["m.nocutnews.co.kr",84],["noteforum.co.kr",85],["paxnet.co.kr",86],["pinpointnews.co.kr",87],["ppomppu.co.kr",88],["community.rememberapp.co.kr",89],["unsin.co.kr",90],["withcast.co.kr",91],["wowtv.co.kr",92],["ypbooks.co.kr",93],["m.ytn.co.kr",94],["evape.kr",95],["fomos.kr",96],["gorani.kr",97],["kharn.kr",99],["meeco.kr",100],["bigkinds.or.kr",101],["orbi.kr",102],["sso.pping.kr",103],["ppss.kr",104],["tgd.kr",105],["windowsforum.kr",106],["19size.me",107],["bloter.net",108],["focus.daum.net",109],["v.daum.net",110],["kidkids.net",111],["miraetv.net",112],["topstarnews.net",113],["news.unn.net",114]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["m.dailypharm.com",[10]],["m.joynews24.com",[27]],["m.inews24.com",[27]]]);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
