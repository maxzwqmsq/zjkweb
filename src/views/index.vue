<style scoped lang="less">
.box-border{
    border:1px solid #ddd;
}
.header{
    background: #01366A;
}
.heder-menu{
    background: #01366A;
}
.top{
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
}
.footList a{
    float: left;
    display: inline-block;
    margin-left: 30px;
    border-right:1px solid #ddd;
    padding-right: 30px;
}


</style>
<template>
    <div class="layout">
        <Layout>
            <Header class="header">
                <Row type="flex">
                    <Col span="5" offset="3" justify="center" align="middle">
                        <img :src="logourl" alt="" height='50'>
                    </Col>
                    <Col span="13" offset="1" justify="center" align="middle">
                        <Menu class="heder-menu" mode="horizontal" :theme="theme1" active-name="1" >
                            <MenuItem name="1">
                                首页
                            </MenuItem>
                             <MenuItem name="2">
                                关于我们
                            </MenuItem>
                             <MenuItem name="3">
                                产品与方案
                            </MenuItem>
                            <MenuItem name="4">
                                新闻中心
                            </MenuItem>
                            <MenuItem name="5">
                                投资者关系
                            </MenuItem>
                            <MenuItem name="6">             
                                招贤纳士
                            </MenuItem>
                        </Menu>
                    </Col>
                </Row>
            </Header>
            <Content>
                <Row type="flex">
                    <Col span="24">
                        <Carousel v-model="value2" 
                                :autoplay="setting.autoplay"
                                :autoplay-speed="setting.autoplaySpeed"
                                :dots="setting.dots"
                                :radius-dot="setting.radiusDot"
                                :trigger="setting.trigger"
                                :arrow="setting.arrow"
                                :easing="setting.easing">
                            <CarouselItem v-for='x in banners' :key="x.id">
                                <div class="demo-carousel">
                                    <img :src="x.url" alt="" width='100%' height='500'>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </Col>
                </Row>
                <Row type="flex" height="600">
                    <Col span="24">
                        <Card>
                            <p slot="title">The standard card</p>
                            <p>Content of card</p>
                            <p>Content of card</p>
                            <p>Content of card</p>
                        </Card>
                    </Col>
                    <Col span="24">
                            <Card>
                                <p slot="title">The standard card</p>
                                <p>Content of card</p>
                                <p>Content of card</p>
                                <p>Content of card</p>
                            </Card>
                    </Col>
                    <Col span="24">
                        <Card>
                            <p slot="title">The standard card</p>
                            <p>Content of card</p>
                            <p>Content of card</p>
                            <p>Content of card</p>
                        </Card>
                    </Col>
                </Row>
                <Row type="flex" justify="center" style="background: #eee">
                    <Col span="6" offset="1">
                        <Card>
                            <p slot="title">The standard card</p>
                            <p>Content of card</p>
                            <p>Content of card</p>
                            <p>Content of card</p>
                        </Card>
                    </Col>
                    <Col span="6" offset="1">
                        <Card>
                            <p slot="title">The standard card</p>
                            <p>Content of card</p>
                            <p>Content of card</p>
                            <p>Content of card</p>
                        </Card>
                    </Col>
                    <Col span="6" offset="1">
                        <Card>
                            <p slot="title">The standard card</p>
                            <p>Content of card</p>
                            <p>Content of card</p>
                            <p>Content of card</p>
                        </Card>
                    </Col>
                </Row>
            </Content>
            <Footer class="header">
                <Row type="flex" justify="center" style="margin-top:30px;">
                    <Col span="17" offset="7" class="footList">
                        <a href="">关于我们</a>
                        <a href="">产品与方案</a>
                        <a href="">新闻中心</a>
                        <a href="">投资者关系</a>
                        <a href="">招贤纳士</a>
                    </Col>
                </Row>
                <Row type="flex" justify="center" style="margin-top:30px;">
                    <Col span="3">
                       <a href="">版权所有: 123456</a>
                    </Col>
                    <Col span="3">
                        <a href="">备案号: 123456</a>
                    </Col>
                </Row>
            </Footer>
            <BackTop :height="100" :bottom="50">
                    <div class="top">返回顶端</div>
            </BackTop>
        </Layout>
    </div>
</template>
<script>
export default {
    data() {
        return {
            theme1: 'primary',
            logourl: require('../images/logo.png'),
            value2: 0,
            banners:[
            { url:require('../images/banner_01.png'), id:1 },
            { url:require('../images/banner_02.png'), id:2 },
            { url:require('../images/banner_03.png'), id:3 },
            { url:require('../images/banner_04.png'), id:4 }
            ],
            setting: {
                    autoplay: true,
                    autoplaySpeed: 4000,
                    dots: 'inside',
                    radiusDot: true,
                    trigger: 'click',
                    arrow: 'hover',
                    easing: 'ease'
                }
        }
    }
}
</script>