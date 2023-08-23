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

// ruleset: irn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".banner-cafe,\n.center-talgh",".col-xs-12.col-md-6.main-sidebar > center,\ncenter:nth-of-type(2)","[href^=\"/advertisements/\"]",".widget_custom_html.widget.container-wrapper.widget_text",".ads-title",".stream-item-above-post.stream-item,\n.stream-item-mag.mag-box",".ads-post",".link-paeen",".adcontainer,\n.enhanced-text-widget.widget_text.vc-widget.widget.w-nt.h-ni,\n.insert-post-ads,\n.widget_better_rss_widget.widget.primary-sidebar-widget.w-t.h-ni,\n.xjehomzgnw",".ads-text-sid,\n.pt-3.text-center.py-2.bg-all-box,\n.text-center.py-3.bg-all-box","#text-25",".main-zxc","#footer_js_d1,\n.banner-container","#left2","#ads",".yn-bnr","#pos-article-display-66259",".ag-agah",".ads_place,\n.app_introduce","#toshare-dl-link",".announce,\n.dsp-ad,\n.promote-puls",".side-ads",".baner",".header-ad",".top-ad",".mks_ads_widget",".webgardi",".bottom-ad","a[href*=\"nobitex.ir\"]","#kaprila_linktable",".box[class^=\"asan\"],\n.content-box,\n.text-asan",".right-sidebar > p > a > img[title=\"رپورتاژ\"]",".advRemove,\n.click1000_allcontent,\n.webgardi_main > #txtadv5 > a[href*=\"asriran.com/fa/ads/redirect/\"]","figure.size-full.wp-block-image",".alert-dismissible,\ndiv.text-center.col-md-3 > .paddingAll10.panel-success.panel","#middlead",".medicaldirectory-sidebar:nth-of-type(5) > .claims.sidebar-content > .cbp-l-project-details-title > span",".pix_of_day,\ndiv[style=\"margin-top:4px;overflow:hidden;\"],\ndiv[style=\"margin-top:5px;margin-bottom:3px; overflow:hidden;\"]","#bil_fix_top_pc,\n#headerbar,\n.c-ads-banner,\n.content-slider,\n.countclick,\n.hamsan-container,\n.m-banner-r,\ndiv[class^=\"pcfadv\"]",".ads_link8,\n.blog-home-ads-blog,\n.blog_center_bar > center > a[href*=\"eramblog.com/action/static_ads\"],\n.hamsandiv",".col-md-3 > .panel > .tarh-forosh,\n.col-md-3 > .panel > center,\n.leftads",".parent_txt_adv_container2","figcaption","#custom_html-51",".mtn-ads-content-sticky,\nimg[alt=\"ad banner\"]",".widget_custom_html.widget.primary-sidebar-widget.w-t.h-ni.widget_text",".widget_text.widget.primary-sidebar-widget.w-t.h-i","[href*=\"/banners/click/\"]",".weblink",".bd-adsbar,\n.delta-content-ads,\n.delta-top-content-ads",".digiBannerArea,\n.homeMainBanner,\n.todaysNewsList__sidebar",".ADS_wrapper,\n.WK_ads,\n.blog_list,\n.home_mid_ads,\na[href*=\"dlfox.com/adspage\"] > img,\na[href*=\"gameriver.ir\"]","#home-2-col > .bs-vc-wrapper > .vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column,\n.widget_nav_menu.widget.primary-sidebar-widget.w-t.h-ni",".zxc","[href^=\"/advertisements/triggered/\"]",".custom-ad-one,\n.zxc-m",".adsfix_box",".ads_txtcv,\naside.lefts_sides:nth-of-type(6)",".ads","#ADbox-2,\n.popup-ads","a[href^=\"https://zaya.io/\"]","div.medicaldirectory-sidebar:nth-of-type(6) > .claims.sidebar-content > .cbp-l-project-details-title > span",".advs-wrapper",".backlink,\n.shopping_list,\n.talfighat-BS,\n.tiny_linky_boxes,\n[href*=\"/advertisements/triggered/\"]",".adv",".adv-ttl","#ad640a,\n#head728,\n#sidebar300 > .mywidget > .titles,\ndiv.mywidget:nth-of-type(6)","#middle a > img[title*=\"تبلیغات\"],\n#sidebar a:not([href*=\"elmevarzesh.com/\"]) > img[width=\"300\"][height=\"200\"],\n.col-md-8 a:not([href*=\"elmevarzesh.com/\"]) > img[width=\"728\"][height=\"90\"]",".stream-item-widget",".widget-ad-image",".centernews_soc,\n.left_pos_mod > .l_box.imgs,\n.newstopads",".text-ads","#ynpos-10831,\n.ezp30-ads,\n.fix-ez",".advertisement",".kpl_linktable",".clearfix.boxed-content-wrapper img[alt=\"Advertising\"],\n.top-banner-ads",".news_slider_sec2,\n.webgardi_adv",".header-adv,\n.others_media,\n.sticky_notify2,\n.zxc-stik",".txt-adv-box",".zxc-visible-fixed",".ads-dashed-banner,\n.cas-pubg.cas,\n.gtm-farsroid-ads,\n.site-middle-banners",".download-link-ads-below",".inline-news-box,\n.talfighat-row,\n.ul-talfigh-con",".results__a","section.player-container div.filimo-logo-filimo","div.ad-cat:not(div.ad-custom-size)","#fix-advertise,\n#image-advertise,\n#top-banners,\n.content-ads",".bottom-ads,\n.card-ads",".tads","#ads-main-home,\n.ads-img","ul#tabligh,\nul#tablighc",".sticky-ad",".sidebar-right","div[class^=\"cr-banner-\"]",".q2am-page-advert","#topAdver,\n.Top2Adssss,\ndiv.CBS.CenterBlock:nth-of-type(2),\ndiv.CBS.CenterBlock:nth-of-type(3),\ndiv.CBS.CenterBlock:nth-of-type(5),\ndiv.CBS.CenterBlock:nth-of-type(6)","#floating-region-zone,\n.ads-div-block",".sin-part","#banners-position-14,\n#slideshow[class=\"rounded\"]",".ads-box","#NR-Ads","script[id^=\"wccp_\"]",".col-xs-36.col-sm-4.col-md-4.col-lg-4,\n.hidden-xs.col-sm-4.col-md-4.col-lg-4",".stream-item-top-wrapper","#block-3,\n#block-4",".widget_custom_html,\naside:nth-of-type(2)","#table10,\n#table10 > tbody > tr > .textBoldColor,\n#table4 > tbody > tr > td > table > tbody > tr > td > center,\n.bgleftmenu > div > div,\ntable#table9.bgtable:nth-of-type(13)","div.white-block:nth-of-type(2)","[href^=\"/nf/sponsor/\"]","[class^=\"zxc\"]",".sticky_notify",".news-bottom-link","#ads_f,\n#banners_120_top_1,\n#block-block-120,\n.track-click",".peyvand,\n[href*=\"/advertisements/\"]",".inline_ads",".ads.box","#box358,\n#top-ad",".zxc_home",".mrauto,\n.position-g5",".mobile-fixed-banner","a[href^=\"/advertisements/triggered/\"]",".ads-placment",".advertisement-in-topic,\n.banner-wrapper,\n.bannercontainer,\n.homepage-content",".msg_ad_explain,\n.msg_ad_pictorial,\n.msg_ad_subject","a[href^=\"https://bit.ly/\"]","#custom_html-4,\n#text-31,\n#text-35,\n.adbar","div.ads_fix_top,\ndiv.text_ads_box","#text-13,\n.adwrap-widget","#ads-container",".alert-new,\n.text-center.mt-3.py-3.bg-all-box",".mdiaad,\nsection.sidebox:nth-of-type(4)",".widget_text.widget",".sponsors","#sponsor_wrapper,\ndiv.banner_v",".srjtbaungo","#ads__bottom_of_the_header",".news-col-2 .related-news",".opanel-ads",".ads-banner","#advertise,\n#promotion",".Dr.D2.Cu.o",".stream-item-above-post","#text-5",".banner_sidebar,\n.box-ads-single,\n.box-custom.box_other,\ndiv.box-tag-single:nth-of-type(2)","div.all_adv_mrg,\ndiv.fixed_box_adv,\ndiv.padding_news_right_adv","#forum-native-ad,\n.ad-wrapper",".advertorial",".ADS_header_all","#header-ad1,\n#p30konkor-ads-p a[rel=\"follow\"]",".post-ads",".sidebar-ads",".ad_global_header","#ad_global_below_navbar","#ads-120,\n.block-ads,\n.block-ads2,\n.block-ads4",".Res005,\n.WCBC,\n.topadver",".adv_img,\n.agahi-view",".widget_whmcs_ads_widget.widget,\n.wpb_content_element.sidebar.wpb_widgetised_column",".topbanners",".multi-ads-container","div.tab.sidebar-box:nth-of-type(2) > .sidebar-box-content,\ndiv.tab.sidebar-box:nth-of-type(2) > h3",".ads_box",".aa-container",".download-dialog",".ads.big_post,\n.cat","#block-block-22.ads",".bannermiddle,\n.mybannerimg",".adv-box",".adloc-is-banner,\n.widget_better-ads",".advertising","#middle-ads",".fara-main","#header-banner-4,\n#rt-backlinks-pos,\n.mb-3.top-1.sticky-top,\n.w-100.justify-content-center.d-flex",".bannersHome","#header-ads",".bannergroup",".ads2",".ush_image_2",".GSAdsLR,\n.OpenTable5",".adv_top",".bannergroupsam-full-width",".cyt-ad-content,\n.homebar a[href=\"https://setare.com/%d8%aa%d8%a8%d9%84%db%8c%d8%ba%d8%a7%d8%aa/\"] > img,\n.pb0.stickyscroll_widget","#block-views-ad-link-block-2,\n#block-views-shabake2-clone-of-ad-link-block,\n.field-name-ads-under-summery,\n.popup-box-wrapper","#g-top,\n.ads2col,\n.flexbanneritem",".qxsbniv",".header_adv",".side_adv",".top_adv",".b_box","#inline_agahi_z0,\n.generalBoxStyle[data-element-name=\"FRONT_M\"],\n.generalBoxStyle[data-element-name=\"SHARE_NEWS\"],\n.mauto_div,\n.mnb_wrapper,\n.noagahi.otherMedia",".banner9,\n.bannerLarge","#PopAlert,\n#RightPan,\n#advBan,\n.AdvertiseD2Ban,\n.DTOPBan,\n.adv_text",".ads-link",".middle-ads",".adss,\n.container_ads","div.mask",".adcbar",".link-ads",".ad-item,\n.ads-footer",".baners,\n.left-ads",".right-ads",".tab-cpc,\n.tab-dpd-post,\ndiv[class^=\"ads\"]",".full-width-tabligh,\n.home-web-surfing,\n.tj-ad-box,\n.tj-ad-wrapper,\ndiv.widget.aside-widget:nth-of-type(5) > .section-title--dotted.section-title > .section-title__h",".rmp-ad-container",".fade,\n.popup_block",".slider-banners.partial,\n.sponsor-link",".ads-box-green,\n.ads-box-red",".light-text.footer-widgets","div#popupModal,\ndiv.ads,\ndiv.modal-backdrop",".upbu","div.style-text-adv",".zxc_matni",".zxc_top",".adbox:not(.adbar),\n.left-side-ad-col","div.side22:nth-of-type(1)",".tabligh","#text-12,\n#text-24",".top-ads",".ads-block,\n.row.fixed-post.post,\n.sidebar-textads","#BannerHome,\n.BannerA,\n.DetailArea > .AdAreaDetail,\ndiv[id^=\"BehinAva\"]","#sidebar-alt","div[id^=\"tabligh\"]",".no-mobile.out-container:nth-of-type(3)",".adsside,\n.elementor-element-d41b3d1,\n.size-large.attachment-large","[class^=\"RequireAuth_mainBox\"]",".js-userLogin-popup",".col-md-offset-6.col-md-3,\n.kanban-col",".khp-site-info p,\n.left.col-md-4",".phoenixad,\na[rel=\"dofollow\"]",".e3lan","#text-2,\n#text-3,\n#text-4,\n#text-6,\n#text-7",".meta-ad",".links_footer",".main22,\n.up_submit > span","x",".adv_l,\n.adv_r_news2",".co-ads","#popular,\n.lolo",".tab_news > a[href*=\"gameup.ir\"]",".app_ads_banner",".ads-side",".asiatech","a[onclick^=\"increase_ad_click_count\"]",".banner",".abox","#featured > .owl-stage-outer",".all_adv,\n.others_web,\n.reportage","#ad-hoc-2,\n.bdaia-e3-container,\n.widget_text.bdaia-widget.widget",".stream-item","#iddivtoplevelscript,\ndiv[style]:nth-of-type(3)",".ads-margin-bot,\n[href*=\"bourse24.ir/ads/click/\"]",".linkbox",".block-simpleads",".clads-inner","script[id^=\"wpcp_\"]","#ADbox-1,\n.ads-sidebar,\n.ads-sticky",".after-post-ads",".Js_Div5",".adsboxfix","div[id^=\"ads\"]","#mediaad-vFkp","#header-bar,\n.sidebar-digiads","div[itemtype=\"https://schema.org/WPAdBlock\"]",".index-adstop > a:not([href*=\"dlrozaneh.ir\"])",".top-full-ads,\naside img[alt=\"جایگاه تبلیغات\"]",".d1yekta,\n[id^=\"pos-article-display-\"]","#faradars",".ads-fix-post,\n.ads-matni",".advertise-place,\n.province-advertise",".all_ads","#ContentPlaceHolder1_divBanner","[class*=\"text_ads\"]",".emojo-ad,\n.pzbkcvuqrn",".news-web",".list,\n.t-adv,\ndiv.post:nth-of-type(2)",".header-mdh,\n.pull-right.zm-post-lay-a-area",".ad-mobile-none,\n.ads-native",".custom,\n.customads",".FixedAdvertising,\n.left.sidebar_widget:nth-of-type(3),\n.left_ads,\n.right_ads,\n.top_ads",".post-ad-box","#next1-231,\n.asd_top,\n.fl.block_right > div.box_sh.ads_2","div[class*=\"linkads\"]",".sidebar_tabliq,\n[href^=\"/ads/\"]",".doctor-ads-item","#header_ad,\n.sb_ad",".banner468,\n.tab_box","[href^=\"/redirect/ads/\"]","div[data-testid=\"more-Button-TestId\"],\ndiv[data-testid^=\"filterItem_tab\"]","#mainadv,\n#pos-article-display-70266,\n.biga,\n.htmlad","section.box.ads",".advertise_default",".c-forceToLogin__message.o-box,\n.c-forceToLogin__overlay",".im-header-ad",".textads",".go-left.main > div.row.box:nth-of-type(1),\n.middle.inner-el.container > div.row.box:nth-of-type(2),\ndiv.black.row.box","#textads-contents,\n.ads-containter","#ads-container > .list-thumbs.title-only.list.box,\n#header-ad,\n.bg-gray-links.box",".ads_bt_box,\n.ads_singles_post,\n.top_img_ads",".type-sticky.status-publish",".ads-widget",".down-box-ads,\n.down-box1",".singleads","[id^=\"ad\"]","a[href=\"http://www.asalchat.skin\"],\na[href=\"https://www.tarhpardaz.ir\"]","#bottombanner,\n.apnl,\n.b","#sezfvg-2,\n.sezfvg",".txt-ads-sl",".eb-inst",".adspanel",".adsblockpop,\n.afc_popup,\n.banners,\n.textAds","#fxp,\n#kaprila_p30download_ir_related,\n#kaprila_p30download_ir_related-top-post,\n.basic-list-linkdump,\n.sidebar-tabliq,\n.text-tabliq",".body_wrapper > div:nth-of-type(4)","div.block-simpleads","#custom_html-108,\n.stream-item-top","div > div > a.toolt > .onsc",".dlbtnhidden",".ad--content","div.ssad",".ytn-hamsan","script[src^=\"data:text/javascript;base64,ZG9jdW\"][src$=\"hdWx0KCl9fQ==\"]",".c-advertisement",".banner-box",".center.body_c > div > div,\n.center.body_c > div:nth-of-type(2),\n.txtad","#ad7_40,\n.footer-ads","[href*=\"/fa/ads/\"]",".left_banner,\n.links","#arasideadvertising","#ads3,\n.main-ads,\n.morders,\n.textads2",".heading-ads,\n.sidebar-right > div.box:nth-of-type(1)",".adv_mobile",".textwidget,\naside:nth-of-type(5)",".backoritybase,\n.news-box,\n.text-ads-1,\n.widgets.bg-custom.box","#cycle_adv_tabnak","section#LeftPanel > div.leftads","[class^=\"adv\"]:not(.adv8, .adv19)",".inner-wrapper-sticky > .mb-3,\n.sidebar-banners",".type-resource-image",".advertisment","#fpc-banner-top,\n#top-right-ad",".full2.box.right,\ndiv.sideheader2:nth-of-type(3)",".ad-link",".footer-back-link,\n.free_ad_con,\n.logo_full_view","a[href*=\"utm_source=uptrack\"]","#tabligh",".ads120,\n.ads468,\n.fixpost,\n.gsh,\n.headads",".bottom_ads,\n.fix_ads",".textad,\n[href^=\"/ad/\"]","#kaprila_linktable_left,\n.left-block-top","#slider-box,\n.mortabet-links,\ndiv.row:nth-of-type(2) > .col-xs-12 > .category-side-ads",".advertisements",".home-ads",".sideads",".main-top-ads,\n.wide-ad-row,\ndiv.a1-banner","div.price-sticky,\ndiv[class^=\"AdvertisingParser\"]",".flex-ad-body","#ads-sticky","#ads-text",".box-title,\n.moreads.widget_text,\n.pm",".mom_custom_text.widget,\n.widget_custom_html.widget.widget_text",".ads-container,\n.ads-row,\n.ads-row-left,\n.mediaad-row,\n.mediaad-row-top,\n.mediaad-top-row,\n.top-ad-row","#ad14,\n.ad-cell,\n.widget_text",".sidebar-area .image",".adpar30,\n.adsidimg",".fixedbanner,\n.sidebar-box-shop,\n.top-large-ads,\n[href^=\"https://playpod.ir/\"]",".my-single-t-p",".dailylink,\nbody > div > font,\ncenter > center > center > center,\ncenter:nth-of-type(2) > center,\ndiv > font > font > .menuheader,\ndiv > font > font > font > p",".adv-cnt,\n.home-zxc,\n.padding-bottom-8,\n.sanjagh,\n.side_txt_zxc,\n.zxc-header-zxc,\n.zxc-padding-custom","#box_1398,\n#popbox-blackout",".AdsContainer",".special_links,\n.text_adds_container",".zxc_news",".featured_news",".zxc_left",".ads-full-banner-img",".vebgardi",".jmb_banner",".inline-4d",".adrightPanel,\n.container55,\narticle > .box > a[href*=\"salampnu.com\"]",".vfozk",".aligncenter.wp-image-9273.size-full,\n.size-full.attachment-full",".Topadver",".behtarinseo",".myside.right-sidebar",".advertise,\n.bottom-left-ad,\n.bottom-right-ad",".adsBanner,\n.two-ad-banners,\n.widget_media_image.widget.container-wrapper","div.zoomtech-banner","div.back_links","#titr-box,\n.maincontent > center,\ntbody","#sidebar_ad,\n.b-hd,\n.hidden-xs.hidden-sm.block,\n.hideOnMobile",".new-banner",".abvertise > .container > a:not(a[href=\"https://t.me/filmha_top\"])",".tabliq"];

const hostnamesMap = new Map([["cannews.aero",0],["myhastidl.cam",1],["mojnews.co",2],["eghtesadnews.com",[2,53,62]],["fartaknews.com",[2,82]],["moroornews.com",[2,53,78]],["parsnews.com",[2,155]],["ilna.ir",[2,53]],["tinn.ir",[2,335]],["borna.news",[2,26,185]],["tourismonline.co",[3,4,5]],["koolakmag.ir",3],["skinak.ir",[4,326]],["1abzar.com",[6,7]],["gadgetnews.net",[6,359]],["1pezeshk.com",8],["abipic.com",9],["mihandownload.com",[9,129]],["accpress.com",10],["afkarnews.com",11],["aftabir.com",12],["akharinnews.com",[13,14]],["harmonydl.us",[14,390]],["alamto.com",[15,16]],["power-music.ir",[15,317]],["androidgozar.com",17],["androidha.com",18],["androidsharp.com",19],["aparat.com",[20,21]],["mihanvideo.com",21],["applicationha.com",22],["arga-mag.com",[23,24,25,26,27]],["icivil.ir",23],["plus.ir",24],["beautyhome.ir",[25,246]],["arzcenter.com",28],["asandl.com",[29,30]],["alldriver.ir",[29,236]],["cafejozve.ir",29],["dehlinks.ir",[29,259]],["khoshamoz.ir",29],["p30day.ir",[29,58,308]],["20file.org",[29,376]],["asemooni.com",31],["asriran.com",32],["avapedia.com",33],["barsadic.com",34],["bazimag.com",35],["brain.be-teb.com",36],["benawa.com",37],["beytoote.com",38],["blogsazan.com",39],["boyernews.com",40],["bultannews.com",41],["charbzaban.com",42],["chetor.com",43],["chibepoosham.com",44],["delbaraneh.com",[45,46]],["rouzegar.com",[46,167]],["delgarm.com",[47,48]],["payamekhabar.ir",48],["deltapayam.com",49],["digiato.com",50],["dlfox.com",51],["doctorwp.com",52],["donya-e-eqtesad.com",[53,54,55]],["ecoiran.com",[53,54]],["eghtesadonline.com",[53,63]],["etemadonline.com",53],["fardanews.com",[53,77,78,79]],["khabarerooz.com",[53,111]],["khabarfoori.com",[53,113]],["khanefootball.com",[53,117,118]],["mojnews.com",[53,78]],["mosalasonline.com",[53,79,110,136]],["sharghdaily.com",[53,117,184]],["shayanews.com",[53,185,186]],["shomavaeghtesad.com",[53,64]],["varandaz.com",[53,79,210,211]],["bartarinha.ir",[53,245]],["rokna.net",[53,365]],["55online.news",[53,117,210,369,370]],["sobhtazeh.news",[53,373]],["doostihaa.com",[56,57]],["mer30download.com",[56,58]],["downloadha.com",[58,59]],["e-teb.com",58],["elmefarda.com",[58,66]],["mehrnews.com",[58,128]],["salameno.com",58],["shabakeh-mag.com",[58,181]],["tasnimnews.com",[58,197]],["vipofilm.com",[58,214]],["4tools.ir",58],["imna.ir",[58,128,285]],["khabaronline.ir",[58,285,295]],["shahraranews.ir",[58,323]],["shmi.ir",[58,324]],["androidina.net",[58,354,355]],["par30games.net",[58,362]],["tebyan.net",58],["drdmag.com",60],["ravan.e-teb.com",61],["ejiga.com",[64,65]],["fa-tools.ir",[64,273]],["elmevarzesh.com",67],["ensafnews.com",[68,69]],["netpaak.com",[68,141,142]],["bikarsho.ir",[68,247]],["wikihoax.org",[68,69,383]],["mag.khanoumi.com",69],["etelanews.com",[70,71]],["gahar.ir",[71,278]],["mihand.ir",71],["ezp30.com",72],["faaltarin.com",73],["faceit.ir",[73,274]],["farachart.com",[74,75]],["androidzoom.ir",[74,228]],["fararu.com",76],["farsroid.com",[80,81]],["p30afzar.com",[81,147]],["fastdic.com",83],["filimo.com",84],["footofan.com",85],["gamefa.com",86],["gharbtv.com",87],["ghatreh.com",88],["gooyait.com",89],["graphiran.com",90],["hamgardy.com",91],["harfetaze.com",92],["imvbox.com",93],["irancircle.com",94],["irannaz.com",95],["iranstar.com",96],["itarfand.com",97],["itbazar.com",98],["itgheymat.com",99],["itresan.com",100],["jafekri.com",101],["jahannews.com",102],["jalebamooz.com",[103,104]],["vgdl.ir",[103,141,344]],["jesarat.com",105],["k2cod.com",106],["ketabesabz.com",107],["khabarban.com",108],["khabareazad.com",[109,110]],["khabarfarsi.com",112],["khabarpu.com",114],["khabarvarzeshi.com",[115,116]],["salamatnews.com",115],["hamshahrionline.ir",115],["irna.ir",115],["gostaresh.news",[117,369,371]],["khodrobank.com",119],["khodrotak.com",120],["kilipo.com",121],["kojaro.com",122],["lamtakam.com",123],["learnparsi.com",124],["lenzak.com",125],["magbazi.com",126],["majalesalamat.com",127],["mihanfal.com",130],["mihangame.com",131],["mihanmarket.com",132],["news.mihanmarket.com",133],["minevisam.com",134],["moderndl.com",135],["movienama.com",137],["mybia4music.com",138],["namayesh.com",139],["namnak.com",140],["20tayi.ir",[142,228,229]],["niksalehi.com",143],["niniban.com",144],["ninisite.com",145],["nodud.com",146],["p30konkor.com",148],["p30world.com",[149,150]],["zendegionline.ir",[150,349]],["forum.p30world.com",[151,152]],["parsipet.ir",[151,310]],["parsfootball.com",153],["parsnaz.com",154],["parstools.com",[156,157]],["taktemp.com",[157,196]],["peivast.com",158],["persiangfx.com",159],["persianv.com",160],["radiojavan-iran.com",[160,163]],["picofile.com",161],["podbean.com",162],["rajanews.com",164],["rayamag.com",165],["roozno.com",166],["rozblog.com",[168,169]],["sid.ir",[168,325]],["rozmusic.com",170],["saednews.com",171],["sakhtafzar.com",172],["sakhtafzarmag.com",[173,174]],["seemorgh.com",[174,179]],["sargarme.com",175],["sariasan.com",176],["sarzamindownload.com",177],["sedayiran.com",178],["setare.com",180],["shahrsakhtafzar.com",182],["shanbemag.com",183],["shereno.com",187],["shomanews.com",188],["simcart.com",189],["softgozar.com",190],["sourceiran.com",[191,192]],["dolatebahar.ir",191],["tak3da.com",193],["takhfifan.com",194],["takhfife.com",195],["techfars.com",[198,199]],["varzesh3.com",[199,212]],["techrato.com",200],["tejaratnews.com",201],["telewebion.com",202],["tigatravel.com",203],["tiwall.com",204],["top2download.com",205],["topnaz.com",206],["uploadboy.com",207],["upmusics.com",208],["vananews.com",209],["vazeh.com",213],["wikisemnan.com",215],["yasdl.com",[216,217]],["downloadsoftware.ir",[216,266]],["zibamoon.com",218],["icoff.ee",219],["konkur.in",220],["shirazsong.in",221],["konkur.info",222],["rasm.io",223],["virgool.io",224],["1000site.ir",225],["1da.ir",226],["1ea.ir",227],["7ganj.ir",230],["8pic.ir",[231,232]],["imgurl.ir",[231,284]],["uupload.ir",[231,342]],["abadis.ir",233],["aftabnews.ir",234],["aftabyazdonline.ir",235],["anaj.ir",237],["androidparsi.ir",238],["artmusics.top",238],["anzalweb.ir",239],["apktops.ir",240],["appreview.ir",241],["b2n.ir",[242,243]],["timecity.ir",[242,334]],["barato.ir",244],["softsaaz.ir",247],["youc.ir",247],["bils.ir",248],["bourse24.ir",249],["buzdid.ir",250],["citna.ir",251],["click.ir",252],["coffeeapps.ir",[253,254]],["sclinic.ir",253],["computeruser.ir",255],["dabi.ir",256],["dailymobile.ir",257],["daneshchi.ir",258],["digiboy.ir",260],["digiro.ir",261],["dlrozaneh.ir",262],["download.ir",263],["download1music.ir",264],["downloadly.ir",265],["econews.ir",267],["eghtesadepooya.ir",268],["rastannews.ir",268],["emalls.ir",269],["emeil.ir",270],["emojo.ir",271],["entekhab.ir",272],["farsnews.ir",275],["freedownload.ir",276],["freescript.ir",277],["gamesib.ir",279],["getandroid.ir",280],["gsm.ir",281],["hidoctor.ir",282],["imemar.icivil.ir",283],["my.irancell.ir",286],["iranjib.ir",287],["isna.ir",288],["itna.ir",289],["jobinja.ir",290],["kafebook.ir",291],["kalakamuz.ir",[292,293]],["varoone.ir",[292,343]],["ariapix.net",292],["tarfandha.org",[292,380]],["my-film.pw",[292,386]],["khaandaniha.ir",294],["khodropluss.ir",296],["languagedownload.ir",297],["lastsecond.ir",298],["listen2music.ir",299],["loudmusic.ir",300],["mashreghnews.ir",301],["maxstars.ir",302],["mobile.ir",303],["modirnameh.ir",304],["montiego.ir",305],["moviemag.ir",306],["omidnamehnews.ir",307],["p30download.ir",309],["payju.ir",311],["pedal.ir",312],["pgnews.ir",313],["phonroid.ir",314],["plaza.ir",315],["pluginyab.ir",316],["public-psychology.ir",318],["rahnamato.ir",319],["rond.ir",320],["rozup.ir",321],["sena.ir",322],["smusic.ir",327],["snn.ir",328],["sornamusic.ir",329],["subf2m.ir",330],["tabnak.ir",331],["taknaz.ir",332],["tehranrasaneh.ir",333],["iranart.news",335],["topseda.ir",336],["toranji.ir",337],["up44.ir",338],["uploadkon.ir",339],["uplod.ir",340],["uptrack.ir",341],["vista.ir",345],["webgoo.ir",346],["webii.ir",347],["yun.ir",348],["zohur12.ir",350],["zoomg.ir",351],["zoomit.ir",352],["filmino.me",353],["salamdl.rip",[355,387]],["cooldl.net",356],["dlbook.net",357],["footballi.net",358],["jeyran.net",360],["par30dl.net",361],["parsroid.net",363],["pichak.net",364],["takblog.net",366],["yektablog.net",366],["article.tebyan.net",367],["uplooder.net",368],["mobo.news",372],["techna.news",374],["titr.online",375],["bazdeh.org",377],["gold-team.org",378],["talab.org",379],["texahang.org",381],["tgju.org",382],["zoomtech.org",384],["ana.press",385],["oila.tj",388],["filmha.top",389]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/