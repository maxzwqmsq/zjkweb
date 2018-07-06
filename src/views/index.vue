<style scoped lang="less">
.box-border{
    border:1px solid #ddd;
}
.top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Row type="flex" height='100'>
                    <Col span="8">
                        <img :src="logourl" alt="" height='50'>
                    </Col>
                    <Col span="16">
                        <Menu mode="horizontal" :theme="theme1" active-name="1" >
                            <MenuItem name="1">
                                <Icon type="ios-paper"></Icon>
                                首页
                            </MenuItem>
                            <MenuItem name="2">
                                <Icon type="ios-people"></Icon>
                                产品与案例
                            </MenuItem>
                            <Submenu name="3">
                                <template slot="title">
                                    <Icon type="stats-bars"></Icon>
                                    关于我们
                                </template>
                                <MenuGroup title="使用">
                                    <MenuItem name="3-1">新增和启动</MenuItem>
                                    <MenuItem name="3-2">活跃分析</MenuItem>
                                    <MenuItem name="3-3">时段分析</MenuItem>
                                </MenuGroup>
                                <MenuGroup title="留存">
                                    <MenuItem name="3-4">用户留存</MenuItem>
                                    <MenuItem name="3-5">流失用户</MenuItem>
                                </MenuGroup>
                            </Submenu>
                            <MenuItem name="4">
                                <Icon type="settings"></Icon>
                                新闻中心
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
            <Footer>
                footer
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
            theme1: 'light',
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