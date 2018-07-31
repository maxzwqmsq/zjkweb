<template>
    <!-- <body> -->
        <div class="body">
            <header id="header" class="header-transparent header-with-borders header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 1, 'stickyHeaderContainerHeight': 72, 'stickyChangeLogo': true}">
                <div class="header-body">
                    <div class="header-container">
                        <div class="header-row">
                            <div class="header-column justify-content-start">
                                <div class="header-logo border-right-0 px-3">
                                    <a href="index.html">
                                            <img alt="" width="300" height="50" data-change-src="http://pbuclgf1t.bkt.clouddn.com/images/logo-page.png" src="http://pbuclgf1t.bkt.clouddn.com/images/logo.png">
                                        </a>
                                </div>
                            </div>
                            <div class="header-column justify-content-end">
                                <div class="header-nav justify-content-lg-end ml-0">
                                    <div class="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">
                                        <nav class="collapse">
                                            <ul class="nav flex-column flex-lg-row" id="mainNav">
                                                <li class="dropdown dropdown-mega">
                                                    <a class="dropdown-item dropdown-toggle" href="index.html">
                                                            首  页
                                                    </a>
                                                </li>
                                                <li class="dropdown">
                                                    <a class="dropdown-item dropdown-toggle" href="projects.html">
                                                            产品与方案
                                                    </a>
                                                </li>
                                                <li class="dropdown">
                                                    <a class="dropdown-item dropdown-toggle" href="news.html">
                                                            新闻中心
                                                    </a>
                                                </li>
                                                <li class="dropdown dropdown-mega dropdown-mega-style-2">
                                                    <a class="dropdown-item dropdown-toggle" href="careers.html">
                                                            招贤纳士
                                                    </a>
                                                </li>
                                                <li class="dropdown dropdown-mega dropdown-mega-style-2">
                                                    <a class="dropdown-item dropdown-toggle" href="about.html">
                                                            关于我们
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <button class="header-btn-collapse-nav mr-3" data-toggle="collapse" data-target=".header-nav-main nav">
                                    <span class="hamburguer">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                    <span class="close">
                                        <span></span>
                                        <span></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div role="main" class="main">
                <div class="slider-container slider-container-full-height rev_slider_wrapper">
                    <div id="revolutionSlider" class="slider rev_slider" data-version="5.4.7" data-plugin-revolution-slider data-plugin-options="{'delay': 9000, 'sliderLayout': 'fullscreen', 
                    'gridwidth': [1140,960,720,540], 
                    'disableProgressBar': 'on', 
                    'responsiveLevels': [4096,1200,992,576], 
                    'navigation' : {'arrows':{ 'enable': true, 'hide_under': 767, 'style': 'slider-arrows-style-1' }, 
                    'bullets': {'enable': true, 'style': 'bullets-style-1', 'h_align': 'center', 'v_align': 'bottom', 'space': 7, 'v_offset': 35, 'h_offset': 35}}}">
                        <ul>
                            <li class="slide-overlay-level-6" data-transition="fade">
                                    <img src="http://pbuclgf1t.bkt.clouddn.com/images/banner_01.png"  
                                        alt=""
                                        data-bgposition="center center" 
                                        data-bgfit="cover" 
                                        data-bgrepeat="no-repeat" 
                                        data-kenburns="on" 
                                        data-duration="20000" 
                                        data-ease="Linear.easeNone" 
                                        data-scalestart="110" 
                                        data-scaleend="100" 
                                        data-offsetstart="250 100" 
                                        data-offsetend="-250 -150" 
                                        class="rev-slidebg">
                            </li>
                            <li class="slide-overlay-level-6" data-transition="fade" onclick="window.location.href='projects-controller.html'" style="cursor:pointer">
                                    <img src="http://pbuclgf1t.bkt.clouddn.com/images/banner_02.png"  
                                        alt=""
                                        data-bgposition="center center" 
                                        data-bgfit="cover" 
                                        data-bgrepeat="no-repeat" 
                                        data-kenburns="on" 
                                        data-duration="20000" 
                                        data-ease="Linear.easeNone" 
                                        data-scalestart="110" 
                                        data-scaleend="100" 
                                        data-offsetstart="250 100" 
                                        data-offsetend="-250 -150" 
                                        class="rev-slidebg">
                            </li>
                            <li class="slide-overlay-level-6" data-transition="fade" onclick="window.location.href='projects-behavior.html'" style="cursor:pointer">
                                    <img src="http://pbuclgf1t.bkt.clouddn.com/images/banner_03.png"  
                                        alt=""
                                        data-bgposition="center center" 
                                        data-bgfit="cover" 
                                        data-bgrepeat="no-repeat" 
                                        data-kenburns="on" 
                                        data-duration="20000" 
                                        data-ease="Linear.easeNone" 
                                        data-scalestart="110" 
                                        data-scaleend="100" 
                                        data-offsetstart="250 100" 
                                        data-offsetend="-250 -150" 
                                        class="rev-slidebg">
                            </li>
                            <li class="slide-overlay-level-6" data-transition="fade" onclick="window.location.href='projects-dataModify.html'" style="cursor:pointer">
                                    <img src="http://pbuclgf1t.bkt.clouddn.com/images/banner_04.png"  
                                        alt=""
                                        data-bgposition="center center" 
                                        data-bgfit="cover" 
                                        data-bgrepeat="no-repeat" 
                                        data-kenburns="on" 
                                        data-duration="20000" 
                                        data-ease="Linear.easeNone" 
                                        data-scalestart="110" 
                                        data-scaleend="100" 
                                        data-offsetstart="250 100" 
                                        data-offsetend="-250 -150" 
                                        class="rev-slidebg">
                            </li>
                            <li class="slide-overlay-level-6" data-transition="fade" onclick="window.location.href='projects-bigData.html'" style="cursor:pointer">
                                    <img src="http://pbuclgf1t.bkt.clouddn.com/images/banner_05.png"  
                                        alt=""
                                        data-bgposition="center center" 
                                        data-bgfit="cover" 
                                        data-bgrepeat="no-repeat" 
                                        data-kenburns="on" 
                                        data-duration="20000" 
                                        data-ease="Linear.easeNone" 
                                        data-scalestart="110" 
                                        data-scaleend="100" 
                                        data-offsetstart="250 100" 
                                        data-offsetend="-250 -150" 
                                        class="rev-slidebg">
                            </li>
                        </ul>
                    </div>
                </div>
                <section id="aboutus" class="section pb-lg-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="overflow-hidden mb-3">
                                    <h2 class="font-weight-bold mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200">
                                        务实高效的企业级服务平台
                                    </h2>
                                </div>
                                <div class="overflow-hidden mb-3">
                                    <p class="lead mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="400">中兴金融科技有限公司是中兴通讯股份有限公司于2015年全资成立的高科技公司，是中兴通讯集团在金融行业业务板块的一个重要的战略布局，是整个中兴通讯集团面向金融行业的市场运作平台、创新技术孵化平台和合作生态建设平台。</p>
                                </div>
                            </div>
                            <div class="col-md-3"></div>
                            <div class="col-md-4">
                                <img src="http://pbuclgf1t.bkt.clouddn.com/images/gsms.png" width="600" height="500" class="img-fluid concept-pos-2 ml-6 mb-3" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section bg-light-5 pt-4 pb-5">
                        <div class="container">
                            <div class="row mb-5">
                                    <div class="col-md-10 text-left mt-3">
                                        <h2 class="font-weight-bold mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200">我们提供</h2>
                                    </div>
                                    <div class="col-md-1"></div>
                                    <div class="col-md-1 mt-3">
                                        <div class="call-to-action-btn appear-animation" data-appear-animation="fadeInRightShorter">
                                            <a href="projects.html" data-hash data-hash-offset="120" class="font-weight-bold learn-more text-4">
                                                更多
                                                <i class="fas fa-angle-double-right" aria-label="Read more"></i>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                            <!-- 产品 -->
                            <div class="row align-items-baseline pt-2">
                                <div class="col-sm-6 col-lg-4 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
                                    <div class="icon-box-animation-1">
                                        <div class="icon-box icon-box-style-6" onclick="window.location.href='projects-controller.html'" style="cursor:pointer">
                                            <div class="icon-box-icon">
                                                <img width="42" height="42" src="static/images/fengk.svg" alt="" data-icon data-plugin-options="{'color': '#2388ED', 'animated': true}" />
                                            </div>
                                            <div class="icon-box-info">
                                                <div class="icon-box-info-title">
                                                    <h4>交易实时风控</h4>
                                                </div>
                                                <p class="lead mb-0 text-left">利用大数据技术实时分析风险事件，实现对交易的全面监控，建立动态的反欺诈监控体系</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 appear-animation" data-appear-animation="fadeInUpShorter">
                                    <div class="icon-box-animation-1">
                                        <div class="icon-box icon-box-style-6" onclick="window.location.href='projects-dataModify.html'" style="cursor:pointer">
                                            <div class="icon-box-icon">
                                                <img width="42" height="42" src="static/images/fengx.svg" alt="" data-icon data-plugin-options="{'color': '#2388ED', 'animated': true, 'delay': 600}" />
                                            </div>
                                            <div class="icon-box-info">
                                                <div class="icon-box-info-title">
                                                    <h4>运营风险监控</h4>
                                                </div>
                                                <p class="lead mb-0 text-left">加强对金融风险的防御能力和监控范围，以构建“公共运营”+“专业运营”的大运营格局为目标</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400">
                                    <div class="icon-box-animation-1">
                                        <div class="icon-box icon-box-style-6" onclick="window.location.href='projects-behavior.html'" style="cursor:pointer">
                                            <div class="icon-box-icon">
                                                <img width="42" height="42" src="static/images/select.svg" alt="" data-icon data-plugin-options="{'color': '#2388ED', 'animated': true, 'delay': 1200}" />
                                            </div>
                                            <div class="icon-box-info">
                                                <div class="icon-box-info-title">
                                                    <h4>用户行为分析</h4>
                                                </div>
                                                <p class="lead mb-0 text-left">国内领先的智能数据分析平台，目标是对用户在移动APP、微信含小程序、网站等各场景上的用户行为</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div class="row align-items-baseline pt-2">
                                <div class="col-sm-6 col-lg-4 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
                                    <div class="icon-box-animation-1">
                                        <div class="icon-box icon-box-style-6" onclick="window.location.href='projects-bigData.html'" style="cursor:pointer">
                                            <div class="icon-box-icon">
                                                <img width="42" height="42" src="static/images/bigdata.svg" alt="" data-icon data-plugin-options="{'color': '#2388ED', 'animated': true}" />
                                            </div>
                                            <div class="icon-box-info">
                                                <div class="icon-box-info-title">
                                                    <h4>统一大数据SQL查询服务系统</h4>
                                                </div>
                                                <p class="lead mb-0 text-left">先进的分布式内存计算架构设计，针对多种大数据和关系型数据库组件支持标准的ANIS SQL语法查询</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 appear-animation" data-appear-animation="fadeInUpShorter">
                                    <div class="icon-box-animation-1">
                                        <div class="icon-box icon-box-style-6" onclick="window.location.href='projects.html'" style="cursor:pointer">
                                            <div class="icon-box-icon">
                                                <img width="42" height="42" src="static/images/shengj.svg" alt="" data-icon data-plugin-options="{'color': '#2388ED', 'animated': true, 'delay': 600}" />
                                            </div>
                                            <div class="icon-box-info">
                                                <div class="icon-box-info-title">
                                                    <h4>大数据行为审计系统</h4>
                                                </div>
                                                <p class="lead mb-0 text-left">提供强大是的数据采集加工引擎，支持多种数据类型的采集，实现异构数据资源整合</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400">
                                    <div class="icon-box-animation-1">
                                        <div class="icon-box icon-box-style-6" onclick="window.location.href='projects-history.html'" style="cursor:pointer">
                                            <div class="icon-box-icon">
                                                <img width="42" height="42" src="static/images/history.svg" alt="" data-icon data-plugin-options="{'color': '#2388ED', 'animated': true, 'delay': 1200}" />
                                            </div>
                                            <div class="icon-box-info">
                                                <div class="icon-box-info-title">
                                                    <h4>历史数据查询系统</h4>
                                                </div>
                                                <p class="lead mb-0 text-left">基于Hadoop分布式计算存储技术，结合先进的行业历史数据存储方案，对历史数据进行深度整合、快速加工</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
                <section class="parallax section py-0 call-to-action  overlay-color-primary overlay-show overlay-op-8 call-to-action-text-light call-to-action-text-background" data-plugin-parallax data-plugin-options="{'speed': 1.5, 'parallaxHeight': '180%'}" data-image-src="http://pbuclgf1t.bkt.clouddn.com/images/gsfz.png">
                        <div class="container min-height-200">
                             <div class="col-sm-12 col-md-12 col-xl-12 text-center mt-3">
                                <div class="overflow-hidden">
                                    <p class="text-5 mt-5 appear-animation text-color-light" data-appear-animation="maskUp" data-appear-animation-delay="300">
                                        服务全面可靠&emsp;助力企业成长
                                    </p>
                                </div>
                            </div>
                        </div>
                </section>
                <!-- 新闻 -->
                <section class="section bg-light-1 py-0">
                    <div class="container mb-5 pb-3 pt-3">
                         <div class="row mb-5">
                                <div class="col-md-10 overflow-hidden mt-4">
                                    <h2 class="font-weight-bold mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200">新闻中心</h2>
                                </div>
                                <div class="col-md-1"></div>
                                <div class="col-md-1 mt-3">
                                    <div class="call-to-action-btn appear-animation" data-appear-animation="fadeInRightShorter">
                                        <a href="news.html" data-hash data-hash-offset="120" class="font-weight-bold learn-more text-4">
                                            更多
                                            <i class="fas fa-angle-double-right" aria-label="Read more"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        <div class="row justify-content-center mb-5">
                            <div class="col-md-6 col-lg-4" onclick="window.location.href='page-fk.html'" style="cursor:pointer">
                                <h4 class="mb-4"></h4>
                                <div class="card card-style-5 bg-light-5 rounded border-0 p-3" data-plugin-image-background data-plugin-options="{'imageUrl': 'http://pbuclgf1t.bkt.clouddn.com/images/news-fk.png'}">
                                    <div class="card-body p-4">
                                        <h3 class="font-weight-bold text-4 mb-1">中兴金融科技成功中标中信银行运营风险监控数据加工系统</h3>
                                        <p>
                                            <i class="far fa-clock mt-1 text-color-primary"></i>
                                            <time class="text-1" datetime="2018-07-17">2018年7月17日</time>
                                        </p>
                                        <p>中兴金融科技成功中标中信银行运营风险监控数据加工系统，充分体现了中兴金融科技在数据处理技术、数据价值挖掘方面的雄厚技术实力。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4" onclick="window.location.href='page-ls.html'" style="cursor:pointer">
                                <h4 class="mb-4"></h4>
                                <div class="card card-style-5 bg-light-5 rounded border-0 p-3" data-plugin-image-background data-plugin-options="{'imageUrl': 'http://pbuclgf1t.bkt.clouddn.com/images/zxbanck.png'}">
                                    <div class="card-body p-4" >
                                        <h3 class="font-weight-bold text-4 mb-1">中兴金融科技承建中信银行历史数据查询平台建设</h3>
                                        <p>
                                            <i class="far fa-clock mt-1 text-color-primary"></i>
                                            <time class="text-1" datetime="2018-07-10">2018年7月10日</time>
                                        </p>
                                        <p>随着金融科技的迅猛发展，银行机构的业务和服务不断创新，新技术、新方案的大量应用，使得传统技术架构的瓶颈不断被打破，为银行的经营发展提供新的动力。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4" onclick="window.location.href='page-yk.html'" style="cursor:pointer">
                                <h4 class="mb-4"></h4>
                                <div class="card card-style-5 bg-light-5 rounded border-0 p-3" data-plugin-image-background data-plugin-options="{'imageUrl': 'http://pbuclgf1t.bkt.clouddn.com/images/sjzx.png'}">
                                    <div class="card-body p-4">
                                        <h3 class="font-weight-bold text-4 mb-1">中兴金融科技承建营口银行云数据中心建设项目</h3>
                                        <p>
                                            <i class="far fa-clock mt-1 text-color-primary"></i>
                                            <time class="text-1" datetime="2017-10-08">2017年10月8日</time>
                                        </p>
                                        <p>2017年10月，根据双方共同探索银行IT架构云化转型升级的战略合作意向，中兴金融科技与营口银行签订了《营口银行云数据中心建设项目》总包集成合同。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="section pt-6" style="background-color: #1A8CE6;">
                    <div class="container">
                        <div class="row align-items-center justify-content-center appear-animation" data-appear-animation="fadeInUpShorter">
                            <div class="col-4 col-md-1-5 text-center text-md-left" style="cursor: pointer;">
                                <img src="http://pbuclgf1t.bkt.clouddn.com/images/zte.png" 
                                onclick="window.open('http://www.zte.com.cn')" width="150" alt="" class="img-fluid">
                            </div>
                            <div class="col-4 col-md-1-5 text-center text-md-left" style="cursor: pointer;">
                                <img src="http://pbuclgf1t.bkt.clouddn.com/images/zx_bank.png" 
                                onclick="window.open('http://www.citicbank.com')" width="150" alt="" class="img-fluid">
                            </div>
                            <div class="col-4 col-md-1-5 text-center text-md-left" style="cursor: pointer;">
                                <img src="http://pbuclgf1t.bkt.clouddn.com/images/yk_bank.png"
                                onclick="window.open('http://www.bankofyk.com')" width="140" alt="" class="img-fluid">
                            </div>
                            <div class="col-4 col-md-1-5 text-center text-md-left mt-5 mt-md-0" style="cursor: pointer;">
                                <img src="http://pbuclgf1t.bkt.clouddn.com/images/ln_bank.png"
                                onclick="window.open('http://www.lnrcc.com')" width="150" alt="" class="img-fluid">
                            </div>
                           <!--  <div class="col-4 col-md-1-5 text-center text-md-right mt-5 mt-md-0">
                                <img src="http://pbuclgf1t.bkt.clouddn.com/images/sj_bank.png" width="140" alt="" class="img-fluid">
                            </div>
                            <div class="col-4 col-md-1-5 text-center text-md-right mt-5 mt-md-0">
                                <img src="http://pbuclgf1t.bkt.clouddn.com/images/jz_bank.png" width="170" alt="" class="img-fluid">
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <footer id="footer" class="footer-hover-links-light mt-0">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 mb-4 mb-lg-0">
                            <a href="index.html" class="">
                                 <img alt="" width="300" height="50" class="mb-3" src="http://pbuclgf1t.bkt.clouddn.com/images/logo.png">
                            </a>
                            <p></p>
                            <ul class="list list-icon list-unstyled">
                                <li class="mb-2">
                                    <i class="fas fa-angle-right mr-2 ml-1"></i>
                                    <span class="text-color-light">地址:</span> 
                                    <a href="javascript:;">辽宁省沈阳市沈河区悦宾街1号方圆大厦19层
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <i class="fas fa-angle-right mr-2 ml-1"></i>
                                    <span class="text-color-light">电话:</span>
                                    <a href="javascript:;">024-22505560</a>
                                </li>
                                <li class="mb-2">
                                    <i class="fas fa-angle-right mr-2 ml-1"></i>
                                    <span class="text-color-light">Email:</span>
                                    <a href="javascript:;">yin.jianfang@zte.com.cn</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 mb-4 mb-lg-0">
                            <h2 class="text-3 mb-3">常用链接</h2>
                            <ul class="list list-icon list-unstyled">
                                <li class="mb-2">
                                    <i class="fas fa-angle-right mr-2 ml-1"></i>
                                    <a href="projects.html">产品列表</a>
                                </li>
                                <li class="mb-2">
                                    <i class="fas fa-angle-right mr-2 ml-1"></i>
                                    <a href="news.html">新闻动态</a>
                                </li>
                                <li class="mb-2">
                                    <i class="fas fa-angle-right mr-2 ml-1"></i>
                                    <a href="projects.html">得到支持</a>
                                </li>
                                <li class="mb-2">
                                    <i class="fas fa-angle-right mr-2 ml-1"></i>
                                    <a href="careers.html">加入我们</a>
                                </li>
                                <li class="mb-2">
                                    <i class="fas fa-angle-right mr-2 ml-1"></i>
                                    <a href="about.html">联系我们</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="col-lg-3">
                            <h2 class="text-3 mb-3">最新消息</h2>
                            <div class="mb-3">
                                <p class="mb-1"><a href="page-fk.html" class="d-block"> 中兴金融科技成功中标中信银行运营风险监控数据加工系统</a></p>
                                <a class="text-color-light">2018年7月17日</a>
                            </div>
                            <div>
                                <p class="mb-1"><a href="page-ls.html" class="d-block">中兴金融科技承建中信银行历史数据查询平台建设</a></p>
                                <a class="text-color-light">
                                    2018年7月10日
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        <div class="row text-center text-md-left">
                            <div class="col-md-7 col-lg-8">
                                <img class="ml-lg-3 ml-xs-3" width="100" height="100" src="http://pbuclgf1t.bkt.clouddn.com/images/zjkwx.png" alt="">
                            </div>
                        </div>
                        <div class="row text-center text-md-left align-items-center">
                            <div class="col-md-7 col-lg-8">
                                <p class="text-md-left pb-0 mb-0">关注中兴金融科技公众号</p>
                            </div>
                            <div class="col-md-5 col-lg-4">
                                <p class="text-md-left pb-0 mb-0">Copyrights © 2018. 版权所有</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    <!-- </body> -->
</template>

<script>


export default {
    name: 'home',
    mounted () {

    }
}
</script>

<style scoped>




</style>
