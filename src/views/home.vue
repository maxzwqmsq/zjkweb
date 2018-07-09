<template>
	<div>
    <Row type="flex">
        <Col span="24">
        <Carousel v-model="value2" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots" :radius-dot="setting.radiusDot" :trigger="setting.trigger" :arrow="setting.arrow" :easing="setting.easing">
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
    </div>
</template>
<script>
export default {
    data() {
        return {
            theme1: 'primary',
            logourl: require('../images/logo.png'),
            value2: 0,
            banners: [
                { url: require('../images/banner_01.png'), id: 1 },
                { url: require('../images/banner_02.png'), id: 2 },
                { url: require('../images/banner_03.png'), id: 3 },
                { url: require('../images/banner_04.png'), id: 4 }
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