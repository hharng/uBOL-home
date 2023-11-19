/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2019-present Raymond Hill

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

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".qc",".banners",".qx_135",".float-ck-center-lt","#custom_html-42","#mp-preload-popup-overlay",".separator",".cash-fish,\n.cash-fish-pc,\n.preload-pc,\n.top-mobile-banner",".banner-sticky-footer-wrapper","#catfish","#chilladv,\n#headermbads,\n#headerpcads,\n#mobiads,\n#pcads","#hide_float_right",".preload","div[style^=\"position: fixed; bottom: 0px;\"]","#popup-giua-man-hinh","#quang-cao",".item-more,\n.widget-sidebar-block","#backgroundPopupp,\n#popupContact","#wap_bottombannerr,\n.grid-match[style]","#mp-adbk,\n#mp-adx-b32",".mp-adz",".v4j-header > a[target=\"_blank\"]",".code-block",".alldiv ~ div[class]","a[rel=\"nofollow\"]",".below_ads","#overlay",".adsMobile,\n.adsShowPc,\n.offer-rating.widget-offers__list",".dcmm-button-player.row",".ads-menu",".offer__btn",".banner-top",".float-ck1,\n.module_ahlaejaba","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]","#player + div[id]",".catfish-ck",".jw-logo","#qc_clgt",".advertisement","#fbox-background,\n.gnarty-offads","#mobile-ads",".ads",".popup-container",".ai-close-fit","#BaoMoi_HalfPage",".bm_B > div,\ndiv.ad-banner-list,\ndiv.bm_Ii",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc",".list-dat-cuoc",".aHrefAff,\n.adsInPlayer,\n.bet-list,\n.buttonFabet,\n.top-bet-list",".oddsCompany","#wap_bottombanner","div[id^=\"AdLayer\"],\ndiv[id^=\"ad_\"]",".menu-mobile.hot-menu",".container-banner,\n.modal-ads,\ndiv[class^=\"slide-bar\"]",".sticky",".btn-betting,\n.datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".footer-banner",".widget.widget_text",".block-bookmaker.block.most-view",".banner-preload","#text-14,\n.hocwp-ads",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]",".adblock,\n.popup",".adsv","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text",".float-ck","#custom_html-7",".div_box_adv","div.box-aside","#content > div[align=\"right\"],\n#login-ads,\n#playerDailymotion,\n.video-player,\n.wt-ads,\n.wt-ads2",".ad-pin-right-bottom",".adv",".top-right",".line-ads",".ad-container","#home_header","#iklan-atas-wrapper","#fixedban,\ndiv[class^=\"banner-mobile\"]",".pc-catfixx",".pc_catfix_adv",".samCustomSize.samAlignCenter.samCodeUnit,\n.samItem","#layerLogo","#topbanner",".btn_small_fix_container",".ads-home-feed",".left-slider",".text-center.adsense","#sideAdsLeft,\n#sideAdsRight",".banner-bot-mobile,\n.banner-top-mobile",".catfishLoader","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay",".ads-embed,\n.float-ck-center-lt1,\n.separator_mb,\n.separator_pc,\n.topbaner,\n.topbaner_mb","#ads_preload",".anhbn-qc",".ezo_ad,\n.ezoic-ad",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]","#link-view > center:nth-of-type(1)",".dwpb-action,\n.fixtop",".adsHOC_wrapper__i5MTn,\n.homePage_adsHomeLeft__3_ruz.adsHOC_wrapper__Se0cN,\n.style_wrapperAll__jFIbb,\n.style_wrapperAll__oHfiq,\n.style_wrapper__2LeQp,\n.style_wrapper__YEwSi,\n.textlinkBox_notwrap__scC4g.textlinkBox_wrapper__1C2P9,\n.textlinkBox_wrapper,\np[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]","#countdown","#myModal,\ndiv[id^=\"adsphim-\"]",".ff-banner",".player-midpoint-progress",".player-vast-blocker","#sponsor-balloon","#js-read__body + .mt-3,\n#tpads-pc-top-page,\n.nh-read__alert,\n.px-3.nh-read__body > .text-center.pb-3,\n.text-center.pb-3.nh-read__pagination,\ndiv.text-center.pt-3:nth-of-type(1),\ndiv.text-center.pt-3:nth-of-type(2)","#div-ub-metruyencv_net,\n.tpm-unit","div[class*=\"ads\"]",".fixed_bottom",".adv_phim","[class^=\"box_adv_ele\"]","#tdi_129",".container div:not(.top) > div.mrb5.mrt5.text-center > a,\n.mrb5.text-center.container",".pcs-modal","#IMAPointernctPlayer,\n#PL_R01,\n#PL_R02,\n.adv_home_300_250,\n.nqc-zone","#adsTopInPageBanner,\n.adsContainer","#popup",".pcCatfish","#itro_opaco","#video_player ~ div[id]","div[style^=\"position:fixed;inset:0px;z-index:100000;\"]",".ads_popup",".show.ads-sticky","#mobile_content_bottom,\n.BanerTop100,\n.adv-300-right",".adpia_banner",".popUpBannerBox",".popmake",".box_option,\n.event_loader_e,\n.fix_bottom,\n.popup_center",".uniad-player + div[style]","#catfish-banner,\n.center-screen.backdrop,\n.ibetlogo,\n.topless","#itro_popup","#float_content_right",".preload-banner",".sticky-footer",".sgpb-popup-dialog-main-div-wrapper,\n.sgpb-popup-overlay",".ads-container",".ads-bottom-margin,\n.ads_blocks_advice,\n.bs-callout[style=\"min-height: 400px; margin-top:0px;\"]",".top-banner","#adsposttop","#adrighttop",".adbox","#tut4ktream_idAdLink",".code-block-4","#pc-preload-modal,\n.quang-cao","#scriptDiv",".adsbygoogle",".no-auto-popup,\n.qc-adskeeper",".add-logo-ads",".stream-item","#footer-widget-area,\n.e3lan.e3lan-top",".box,\n.pum",".truct-catfish,\n.truct-widget","#ad_info_top","#sticky-footer",".footer-info","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2","#hivideo","[class*=\"_banner\"]","#preload-zing,\n#uniad-head,\n.uniad-head",".sda-catfish",".happy-under-player,\n.vailo-sticky,\n.vailo-under-navbar-mobile","a[target=\"_blank\"][rel=\"dofollow\"]",".item-qc",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW","#BigBanner,\n.ads_position",".ads_txt",".row > div > center","div[class^=\"adbox\"]","#article > .pt-3.text-centers,\n.text-muted","#balloon,\n.banner-masthead",".button-action-float-banner",".adsphim-mobile-popup",".wtt-ads","#adstop2,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap,\n.float-right",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1","#invideo_wrapper,\n.Ads,\n.mobile-catfixx,\ndiv[style^=\"position: fixed; top: 60px\"]","#antiblocker,\n#antiblocker_underplayer",".partner-me","#container-ads,\n#hide_catfish","#ballon-right,\n.most-view:nth-child(2)",".ab1",".widget_custom_html.widget.widget_text",".box_odds",".fixed","#top_oddd",".entry > a[target=\"_blank\"],\n.wpbcap-laptopvang,\n[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)","#btn-skip,\n.vjs-banner-bar,\n[href=\"https://8xbet259.com/\"]",".modal-backdrop.show",".captain-sb,\n.mct_-bet,\n.vb-pr-box",".mmo,\n.mmo-inner",".box-host",".ft-box","#m-bet","div[class*=\"size-\"]",".ibs-bet",".show.fade","#app-web + .container[style=\"margin-bottom: 30px\"],\n.item.item-betnow,\n.sv-link.btn-bet-top",".fade.show",".button-ads-header,\n.main-carousel-wrapper,\n.top-bookies,\n.tvc-link-ads-full","#sec_top_bet,\n.banner-bellow-append-custom,\n.banner_ctn,\n.banner_fixed,\n.banner_left,\n.banner_right,\n.bet-btn,\n.bet_now,\n.block_banner,\n.btn-in-player.btn-bottom-right-append-player,\n.click_blank,\n.logo-top,\n[href=\"/top-bet.html\"]",".banner",".footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide",".banner-bottom-append-custom,\n.button-in-player-box",".mct_-bet-bot",".btn-odds",".ads-menu-item,\n.dcmm-button-player-item",".divdatcuoc",".widget",".show-ads-banner",".marquee-container","#quangcaopc",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block",".btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.menu-item > a[rel=\"nofollow\"],\n.topButton,\n.widget_offer,\nheader > .container","div[id^=\"dnn_\"]",".company","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]","#accordion",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay",".ad599div,\n.bets-now-button,\n.bets-now-ct,\n.pc_header,\na[data-wpel-link=\"external\"]","#closeAds",".v4j-header > center",".a--d-wrapper","div.container:nth-of-type(5)",".adspopupgiua,\n.adspopupleft,\n.adspopupright,\n.float-ckgiua",".sponsor-balloon","#ad-floating-right,\n.ad-floating-left","#menubentrai,\n.gnartyx-offads","[href*=\"cellphones.com.vn\"]",".textwidget","#right_float,\n[id$=\"float_banner\"]",".expand-static-banner,\n.head--banner,\n.static-banner",".link-gold,\n[id^=\"banner\"]",".col-xl-3.col-lg-6.d-md-block.d-none,\n.lazyloaded.mx-auto.d-block.text-center.mb-20,\n.quangcao-down > p,\n.text-down",".ads_zone","#footer_fixed_ads",".cp-modal-popup-container,\n.simple-banner",".parent.special",".ad-floater,\n.popunder-link,\n.promotion-popup,\n.video-ad-layer","#ad_global_below_navbar",".other-ads-container,\n.show-load-ad","#mobileCatfishz","#pc-top-banner","#boxmsgthongbaopopup","#custom_html-2,\n#custom_html-4",".b-player",".baloon,\n.col-sm-10.kqcenter,\n.kqbackground.vien ~ a[target=\"_blank\"]",".banner-sidebar","#sticker",".info-footer:nth-child(4)",".ads-wrapper,\n.preload-backdrop",".mobile-catfix",".fancybox-container,\n.flex-wrap-banner,\n.movie-banner,\n.mv-banner,\n.ws-banner","#js-read-body > .text-center.pb-3,\n.text-center.pb-3.nh-read__pagination > .mb-1 > .text-muted,\n[href=\"https://metruyencv.com/goout/lazada\"],\nsection.nh-section:nth-of-type(5)",".single-box,\n[href^=\"//dooloust.net/\"]",".banner_top","#npads","#pc-catfix,\n.lightbox-player-pc,\ndiv[id^=\"preload-\"],\nlixi88-ads-left,\nmb_catfish_1xbet,\nmobile-catfix,\npreload-11bet,\nsobet-ads-right","#ads-catfish","#headwrap > .computer,\n#headwrap > .mobile,\n.pc-catfix","#pm_quangcao",".container > .right-box","#popup_banner_beta",".ad-script,\n.elementor-widget-container > .widget_custom_html","[href^=\"https://gotrackecom.info\"]","#desktopPopupBanner,\n.ads-floatingads,\n.banner-item,\n.top-nha-cai","#_AM_POPUP_FRAME",".fixed-bottom",".firstmessfloadright.samItem,\n.my_nonresponsive_ads,\n.my_responsive_ads,\n.samBannerUnit,\n.samTextUnit",".t_logo","#catfish-adv,\n#overlay-pop,\n.mobile-catfish,\n.pc-catfish",".show.fade.modal",".btn-bet-top,\n.item-betnow",".elementor-widget-image",".box-rating","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner_mobile_300x250,\n.section_ads_300x250","div[class*=\"qca\"]",".content_middle_rightbar","#catfish_content","#idAdLink",".adsShowMobile",".adLogoPlayer","#fixed-advert-center-panel",".PanelScroller.Notices",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]","div#bnads",".homePageAds","[id^=\"Balloon_\"]",".btn-betnow,\ndiv.vebo-sp.container:nth-of-type(7)",".quangcaomobile",".sticky_bottom","#bar_float_r,\n.quangcaomb",".hd-tube-desktop,\n.hd-tube-mobile","body > [style*=\"position: fixed;\"]",".catfix","#header-ads,\n.catfish-img",".lixitt","#top-banner-pc",".container > .row > center",".footer-fixed-br-container","#menu-main-menu > .menu-bongdainfo.menu-item.nav-item.tt-bdif,\n#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.c-int.d-lg-none.d-block,\n.container > .row > .col-12,\n.justify-content-center.d-flex > .btn-primary.btn,\n.matches__item--footer,\n.mt-1.d-lg-flex.d-none.sub-menu,\na.d-lg-none.d-block:nth-of-type(2)",".d-lg-none.d-block.p-1.text-center","#match-child-1",".match-detail__offer",".menu-cuoc-8xbet","._9xtpcl.c4je67d.c1qs0lzc.c1hrlkpu.cc2icwl.c1i0iccj.cfd18df,\n._9xtpcl.e1e6v8dt,\n.lpp0nsn","div.text-center:nth-of-type(7),\ndiv[style=\"min-height: 250px\"]","#menu-item-52424,\n.btn-od,\n.style-1.ml-2.d-none.d-lg-block.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-52424",".sub-menu.d-none.d-lg-flex","div[data-value=\"1\"]","[data-clm=\"ccccc2\"],\n[data-id=\"ap3poapup\"]",".movies-list-wrap > center","#bnc1","#bnc0",".widget_media_image.widget_block.widget,\nimg.wp-image-1283,\nimg.wp-image-1285",".xx-ads",".banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-one88,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.sk_balloon,\n.widget-offers__list,\na.btn-odds[rel=\"nofollow\"],\ndiv.d-lg-none.d-block:nth-of-type(3)",".menu-top-nha-cai",".d-lg-flex.d-none.p-0.company.flex-1.table,\n.grid-match__footer,\na.d-lg-none.d-block:nth-of-type(1)",".container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom,\na.rlw-extra-i.py-3.flex-grow-1","#qc-kpgame","#ad-container","#ads,\n#overlay-close,\n#play","#position_full_top_banner_pc",".gc-header__wrapper + div[style]",".button-dangkyngay",".afw-topbanner","#adm-slot-7234","#banner3double","div[id^=\"adsWeb\"]",".BT-Ads,\n.qc-inner,\ndiv.qc_TC_Chap_Middle,\ndiv[id^=\"qc_M_\"],\ndiv[style*=\"position: fixed;\"]",".bgadmtoptotal",".bannertop",".top-right-col-ads",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]","#background_bg_link,\n#subRightAbove,\n.module3",".admicro",".top-header",".top_page","#subiz_wrapper,\n.ad-embed",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#dta_inpage_wrapper,\n#dtads_inpage_wrapper,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n#mobile-top-page",".widget_media_image.widget",".banner-cs",".banner-top-main,\n.baohaiquan_bottom_970x250",".top-advertisment",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center","._ning_outer","#Adsv,\n.right-banner > a[title]",".__ads_click","#BannerAdv","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left",".columns-widget .col-right",".chapter-content .min-h-\\[275px\\]",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".box_ads_d",".exp_qc_share",".c-banner",".warp-banner-vip",".sidebar > div[style]","#div-ub-docbao","#ouibounce-modal,\ndiv[id^=\"adsbg\"]","#widget-12",".banr-Rt,\n.banrpstn","#myElementz,\n.bannerinfooter",".LRBanner",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_baiviet_dexuat,\n.box_quangcao_mobile_320x50,\n.box_text_qc","#tubia","[id^=\"admzone\"]",".ads-right1,\n.adv-row",".adx-zone,\n.underlay",".khw-ads-wrapper.clearfix","#qcRight,\n.banner-advertisements",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]",".qc-benphai,\n.qc-bentrai","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsrighttop,\n#adsuggestion","#modal-ads-olm",".advertTop,\n.module_plugins",".ads-sponsor,\n.khw-adk14-wrapper","[id^=\"adv\"]",".quang_cao_chan_trang_pc,\n.quang_cao_pc_right_hoc_tap",".advHolder",".ads_shortcode",".admicro_top","#adop_bfd,\n.adsbypubpower,\nins[class*=\"adsby\"]",".sponsor-zone","div[id^=\"ads_\"]","#top-adv",".bannerchuyenmuc,\n.baseHtml.noticeContent,\n.show-qc-home,\n.show_qc","#popup_center","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]",".box-banner",".banner-ads-home,\n.banner-in","div[class^=\"adv-\"]",".ads-970x280","#mobi-top,\n#pc-top,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4","#myCarousel,\n.banner-boder-zoom",".modal-di__button-wrapper,\n.sam-slot",".ads-general-banner",".LeftFloatBanner,\n.RightFloatBanner,\n.ads_top_left",".asd-headt,\n.detail-tab > .container,\n.detail__foru,\n.super-masthead,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","div[class$=\"_ads\"],\ndiv[data-id=\"2\"]",".ads_660x90,\n[class^=\"ads_\"]",".c-banner-item","div[id^=\"adsMobile\"]",".fyi",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".in-article-promo,\n.jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\n.promo-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]",".container .desktopjszone,\n.mobilejszone","#header-ads-full,\n.ads-responsive,\n[id^=\"ads-\"]","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners",".bannerqc,\n[class^=\"sticky-top\"],\n[href*=\"/default/template/\"],\n[href*=\"hungthinhcorp.com.vn\"],\n[href*=\"vietcombank.com.vn\"]",".Flagrow-Ads-under-header",".vfs_banner","#headerProxy,\n.rightleftads","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone",".zone--ad","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".v-element > .v-responsive,\ndiv.message--post",".sys-ads",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper",".wrapper-adv","#banner1ab,\n#banner2ab",".ad_by_yellowpages,\n.banner_add","#Zingnews_SiteHeader,\n#site-header,\n.znews-banner","#adx,\n.catfish-bottom,\n.catfish-top,\ndiv.banner-catfish-bottom",".button-bottom-center-append-custom",".most-view:first-child","#ads_location,\n.block.ad",".odds-button,\n.odds-button2",".click-ads,\n.click-ads ~ p,\ndiv.mrb10",".a-header,\n.apu,\n.header"];

const hostnamesMap = new Map([["*",0],["bongda365.asia",1],["keoso.club",[1,16]],["bongdatructuyen28.com",[1,52]],["soikeoz.net",[1,264]],["hentaivn.autos",2],["cliphot69.biz",[3,4]],["phevkl.biz",[3,5,6]],["hh3dhay.com",[3,82]],["khoaiphim.com",[3,93,94]],["phimtn.com",[3,14,134]],["phimhay.in",3],["mobiblog.lol",3],["phimhay.mobi",[3,66,224,225]],["hdphim18.net",[3,244]],["phimmois.org",[3,5]],["phimvuihd.org",3],["cliphotvn.pro",3],["phimtuoitho.tv",[3,313]],["vietphims.tv",[3,316]],["phim18hd.biz",7],["phim18vn.biz",7],["phim18hd.me",7],["biphims.cc",8],["biphims.co",8],["biphim.io",[8,24,187]],["phimmoiaz.cc",9],["hhtrungquoc.com",[9,83]],["phimbocn.com",9],["phimhoathinh3d.com",[9,14]],["phimmoiv2.com",[9,75,131]],["motchillss.net",9],["phimmoipro2.net",[9,14,20,36,263]],["xemphimchill.net",[9,14,75,128]],["hhtq.top",[9,185,297]],["hhtqvietsub.top",[9,107,298,299]],["animevip.tv",[9,185]],["hhninja1.tv",9],["hoathinhtq.tv",[9,14]],["hhtq.vip",9],["phimmoichill79.cc",10],["tuoinung.cc",11],["vn1.yeusex.cc",12],["huphimtv.com",[12,41,88,89,90]],["sexviet1.vip",12],["animehay.city",13],["anivn.club",[14,15]],["animevietsub.boctem.com",14],["phimdinhcao.com",[14,126,127,128]],["hhhtq.net",[14,162]],["mephimgi.net",[14,75]],["phimdinhcao.net",[14,126,127,128]],["phimlongtieng.net",[14,126,127,128]],["vkool2.net",[14,20]],["motchillz.org",[14,36,75]],["fimfast.pro",[14,75,88]],["bongda21h.co",[17,18]],["phym18.org",[17,50,286]],["motchill.co",[19,20]],["motphimtw.com",[19,20]],["phimmoichillh.net",[20,262]],["ophim.vip",[20,75,131,323]],["phimsexhay669.co",21],["phimvietsub.co",22],["gocphimvn.net",[22,243]],["mobile.sexnhanh.co",23],["subnhanhvl.co",[24,25,26]],["phimmoi4s.com",[24,130]],["stream.tructiepnba.com",[24,154]],["xemtivi4k.com",[24,176]],["subnhanh.im",[24,25,26]],["vidian.me",[24,222]],["ketqua3.net",[24,248]],["ketqua9.net",[24,248]],["truyenchu.com.vn",[24,355]],["nghean24h.vn",24],["vbfast.xyz",24],["tructiepdabong5.co",[26,27,28,29,30]],["vkoolsss.net",[26,35,66,276]],["mitomb.tv",[26,50,190,207,212,213,214,216,217,273,303,309,310]],["tutientruyen.xyz",[26,264]],["vaoroi13.online",[28,29,209,210,282,283]],["xoivo2.online",[28,210,211,283]],["xoilac89.tv",[30,50,190,198,212,213,216,217,304,305,306,310,318,319]],["123nhadatviet.com",31],["bongda365f.com",[31,36,48]],["123nhadatviet.net",31],["tuoitre.vn",[31,413]],["tuoitrenews.vn",31],["4rkinggame.com",32],["live.7mvn2.com",33],["abysscdn.com",34],["freeplayervideo.com",34],["player-cdn.com",34],["ahaphimz.com",35],["vphims.net",35],["api.anime3s.com",36],["p.thoctv.com",36],["vebo8.link",[36,190,191,192,193,194,195,196,197,198]],["player.4shares.live",36],["rakhoi10.live",[36,54,55,56,204,205]],["rakhoi9.live",[36,54,55,56,204,205]],["mephimtv.net",[36,254]],["ssplay.net",[36,268]],["play.vnupload.net",36],["tvhayt.org",[36,264,271]],["xoilac14.org",[36,194,195,196,197,200,290]],["livefb.xyz",[36,205,431]],["mphimmoi1.xyz",[36,41,90,120,432]],["anime47.com",[37,38]],["doctruyen3qmax.com",38],["toptruyenne.com",38],["animetvn2.com",[39,40]],["animet.net",[39,229]],["appvn.com",41],["javtopxx.com",[41,92]],["laptrinhx.com",41],["linkerpt.com",41],["tinnhac.com",41],["xemphimvuis.com",[41,90]],["film365.in",[41,182,183]],["ghienphim8.net",[41,180,203,239,240]],["motphim3s.net",41],["ophimhdvn3.net",[41,253,259]],["phimgichill.net",[41,253,259,261]],["soikeo365.net",[41,267]],["vieclam123.net",41],["xemphimviet1.net",[41,203,240]],["cungthi.online",41],["antt.vn",41],["bongda24h.vn",41],["kienthuc.net.vn",[41,387]],["nhadautu.vn",41],["saostar.vn",[41,397]],["vietnamplus.vn",[41,420]],["vlxx.xxx",[41,59,104,430]],["asideway.com",42],["audiotruyenfull.com",43],["baomoi.com",44],["m.baomoi.com",45],["baonga.com",46],["bongda12h365.com",47],["bongdainfoz.com",[49,50]],["tvhayhd.com",[50,159]],["vebot.live",[50,56,190,198,207,212,213,214,215,216,217]],["90phutx.tv",[50,212,213,217,302,303,304,305,306]],["xoilaczn.tv",[50,207,305,306,319,320]],["cakhia7.vip",[50,190,212,213,214,216,217,273,310,321]],["bongdalu6.com",51],["cakhia20.com",[53,54,55,56]],["cakhia22.live",[53,54,55,56]],["cakhia25.live",[53,54,55,56]],["caheo7.tv",[53,54,55,56]],["hoatieu.vn",[54,141,170,377]],["canhrau.com",57],["topthuthuat.com",57],["chillphim1.com",[58,59]],["zuiphim.com",59],["chouc.com",60],["clbgamesvn.com",61],["cmangaaz.com",62],["coccoc.com",63],["contuhoc.com",64],["cryptoviet.com",65],["dailyphimz.com",66],["listnhacai1.com",[66,100]],["phim18vipb.com",66],["phimplay24h.com",[66,133]],["web11.sexphim1.com",[66,145]],["sieudamtv.com",[66,119,146]],["kenhgamez.info",66],["rphang.me",[66,220]],["gunnylau360.net",66],["gunnymienphi.net",66],["mythethao.net",[66,257]],["thiendia1.net",[66,270]],["vuonhoalan.net",[66,279]],["checkgaigoi.one",66],["phim33.tv",[66,311]],["phe3x.xyz",66],["phimno4.xyz",[66,433]],["dexuat.com",67],["diadiem.com",68],["doisongphapluat.com",69],["dtruyen.com",70],["dubaotiente.com",[71,72]],["ducvietonline.de",72],["bongda.com.vn",[72,340]],["giadinhonline.vn",[72,358]],["taichinhdoanhnghiep.net.vn",[72,203]],["nongnghiep.vn",[72,358]],["vietnamnet.vn",[72,419]],["ebookbkmt.com",73],["ephoto360.com",[74,75]],["thiepmung.com",75],["phimmoi.im",[75,180,181]],["fsharetv.com",76],["gaingon18.com",77],["game4v.com",78],["gianhangsach.com",[79,80]],["animevietsub.fan",[79,178]],["forum.gocmod.com",81],["truyensieuhay.com",[83,157]],["hoahoc247.com",84],["hoidap247.com",85],["homedy.com",86],["hotruyen.com",87],["phim18zz.com",[90,120]],["hdphimhay1.xyz",90],["javtiful.com",91],["phimcuon.com",[94,125]],["tvhay2.net",[94,271,272]],["lacaigi.com",95],["laptrinhcanban.com",96],["lichngaytot.com",97],["lichvannien365.com",98],["link1s.com",99],["lmssplus.com",101],["loigiaihay.com",102],["luotphimtv1.com",103],["webphim2.com",[103,174]],["cdnwp.icu",103],["luotphim1.net",103],["luotphim2.net",103],["luotphimtv.vip",103],["mehoathinh3.com",[104,105]],["mephimmy2.com",104],["mephimnhat2.com",[104,105,106,107]],["mephimthai2.com",104],["phimmoi2.com",[105,106,107]],["phimnhanh2.com",[105,106,107]],["vuighe2.com",[105,172]],["hhchina.tv",[107,228,299]],["metruyencv.com",[108,109]],["metruyencv.net",[109,255]],["mmo4me.com",110],["baodauthau.vn",[110,331]],["mphim14.com",[111,112]],["phimmoinay.tv",[112,162,264]],["muabanraovat.com",113],["muaxegiatot.com",114],["nettruyenus.com",115],["nhattruyenmin.com",115],["nhattruyenplus.com",115],["nhattruyenup.com",115],["tin2.news25link.com",116],["nhaccuatui.com",117],["ophimhay.com",[118,119]],["phim202.com",121],["player.phimbocn.com",[122,123]],["cliphotvn.2tenz.top",[122,123]],["hls.playerfb.xyz",122],["phimchat2.com",124],["saytruyenmoi.com",124],["phimbo88vn.net",124],["truyentuan.com",[127,158]],["tenovi.net",127],["phimhaymoi.com",129],["phimnhua.com",132],["phimyeuthichz.com",[135,136]],["boophim.net",[135,233]],["lxmanga.net",[135,136,252]],["phimnet.vip",[135,183,324]],["truyensextv.com",[136,156]],["truyensextv.me",[136,156]],["truyensextv.org",136],["photoshoponlinemienphi.com",137],["gameviet.mobi",137],["phuongtrinhhoahoc.com",[138,139,140]],["ketqua247vn.org",138],["tructiepbongda29.com",140],["thanhnien.vn",[140,402]],["quantrimang.com",[141,142,143]],["vndoc.com",[143,170]],["khoahoc.tv",143],["download.com.vn",143],["download.vn",[143,363]],["gamevui.vn",[143,363,372]],["meta.vn",143],["sexhay2023.com",144],["sieutamphim.com",147],["tailieungon.com",148],["tailieuvang.com",148],["giavang.net",148],["romgoc.net",148],["tctruyen.com",149],["tctruyen.net",149],["thoctv.com",150],["thuthuatjb.com",151],["thuthuattienich.com",152],["toithuthuat.com",153],["truyenqqvn.com",155],["tvso1.com",160],["bongdaso66.net",[160,232]],["blog.abit.vn",[160,190,198,327]],["tvzinghd.com",[161,162]],["vailonxx.com",163],["vatlypt.com",164],["vesotantai.com",165],["vietcetera.com",166],["vietgiaitri.com",167],["vietjack.com",168],["vietyo.com",169],["vtruyen.com",171],["webhoctienganh.com",173],["webtretho.com",175],["xosodaiphat.com",177],["hayghe.fan",179],["motphim1.info",[184,185]],["phimhaytv.info",186],["maclife.io",188],["gavang.link",189],["90phut9.live",[190,195,196,197,199,200]],["khomuc9.live",[190,198,201]],["thapcam.live",[190,192,195,198,206,207]],["vebotv.net",[193,195,196,197,273,274]],["vebo4.org",[193,195,196,197,273]],["mannhan2.live",[202,203]],["thichxemphim1.net",[203,269]],["baoxaydung.com.vn",203],["oj.husc.edu.vn",203],["tienphong.vn",[203,331,406,407]],["toquoc.vn",203],["zingnews.vn",[203,381,429]],["vaoroi365.live",[208,209,210,211]],["chotlo.me",218],["ngaytho.me",219],["thethao12h.me",221],["javhay.media",223],["mephimnhe1.net",[224,253]],["sieukhung.name",226],["3dchill.net",[227,228]],["bantincongnghe.net",230],["blogkiienthuc.net",231],["chodansinh.net",234],["daominhha.net",235],["designervn.net",236],["dongphim3s.net",237],["dongchill.tv",237],["gamenoob.net",238],["gockhuat.net",241],["gocphimk.net",242],["hoc247.net",245],["iphimchilla.net",246],["vn.javbabe.net",247],["kienviet.net",249],["laptrinhvb.net",250],["linkneverdie.net",251],["mitub.net",256],["nhacpro.net",258],["phimbom.net",260],["phimmoichillg.net",262],["phimtho.net",264],["chillhay-net.pro",264],["protruyen.xyz",[264,435]],["qthang.net",265],["sachmoi.net",266],["zophim.net",268],["phimvietsub.pro",[271,292]],["vietmoz.net",275],["vnexpress.net",277],["vtipster.net",278],["phimbathu.one",280],["tut4ktream.online",281],["bongdahomnay.org",284],["btcvn.org",285],["vn.phym18.org",287],["traderviet.org",288],["xemtivingon.org",289],["keonhacai5.top",[289,300]],["sex.ngonvcl.pro",291],["phim.sex24h.pro",291],["phim.sexabc.pro",291],["tuoi69.pro",293],["javhd.shop",294],["vlxx.studio",294],["filemoon.sx",295],["phim.heo69.top",296],["viet69.tube",301],["buomtv.tv",307],["hhhkungfu.tv",308],["phimdacap.tv",312],["vieclam.tv",[314,315]],["xskt.com.vn",315],["vlxyz.tv",317],["khiphach.vip",322],["2banh.vn",325],["2game.vn",326],["afamily.vn",328],["sport5.vn",328],["m.afamily.vn",329],["autodaily.vn",330],["xehay.vn",[330,427]],["blogtruyen.vn",332],["cafebiz.vn",333],["cafef.vn",334],["ttvn.toquoc.vn",334],["careerlink.vn",335],["chap.vn",336],["24h.com.vn",337],["autopro.com.vn",338],["baohaugiang.com.vn",339],["congan.com.vn",341],["daklak24h.com.vn",342],["dantri.com.vn",343],["ecci.com.vn",344],["fptshop.com.vn",345],["haiquanonline.com.vn",346],["nld.com.vn",347],["tamlinh247.com.vn",348],["tapchikientruc.com.vn",349],["thanhtra.com.vn",350],["thoidai.com.vn",351],["petrotimes.vn",351],["thuongtruong.com.vn",352],["thuysanvietnam.com.vn",353],["trithuc24h.com.vn",354],["voh.com.vn",356],["congluan.vn",[357,358]],["congly.vn",359],["thitruongtaichinhtiente.vn",[359,405]],["dangtinbatdongsan.vn",360],["realty.vn",[360,394]],["danviet.vn",361],["docnhanh.vn",362],["kienthucykhoa.edu.vn",364],["eva.vn",365],["fshare.vn",366],["game24h.vn",367],["game8.vn",368],["gameio.vn",369],["gamek.vn",370],["soha.vn",370],["gametv.vn",371],["genk.vn",373],["giaoducthoidai.vn",374],["vnews.gov.vn",375],["plus.gtv.vn",376],["hoc24.vn",378],["hosocongty.vn",379],["kenh14.vn",380],["kinhtedothi.vn",381],["minhngoc.net.vn",381],["vn-z.vn",381],["lazi.vn",382],["luatvietnam.vn",383],["lucloi.vn",384],["muare.vn",385],["myeva.vn",386],["phunumoi.net.vn",388],["nhipcaudautu.vn",388],["nhacdj.vn",389],["nhatrangclub.vn",390],["olug.vn",391],["phapluatplus.vn",392],["qdnd.vn",393],["reatimes.vn",395],["rung.vn",396],["sharecode.vn",398],["softonic.vn",399],["startalk.vn",400],["stockbiz.vn",401],["thethao247.vn",403],["thethaovanhoa.vn",404],["tinnhanhchungkhoan.vn",407],["tiin.vn",408],["timdaily.vn",409],["tinhte.vn",410],["tintucvietnam.vn",411],["truyenfull.vn",412],["tuyengiao.vn",414],["tvphapluat.vn",415],["v4u.vn",416],["vietfones.vn",417],["vietnamgsm.vn",418],["vietq.vn",421],["viettelstore.vn",422],["voz.vn",423],["vtc.vn",424],["vungoctuan.vn",425],["webthethao.vn",426],["yellowpages.vn",428],["plvb.xyz",434],["truyen18.xyz",436]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["livescore.com",[0]],["msn.com",[0]],["dm.de",[0]],["medium.com",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
