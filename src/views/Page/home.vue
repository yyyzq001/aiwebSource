<template>
  <div class="page">
    <div class="page-banner" id="banner">
      <div class="banner-content">
        <div class="banner-title">37度数据 让AI更有温度</div>
        <div class="banner-text">
          一站式AI数据解决方案提供商 助燃AI行业高速发展
        </div>
      </div>
    </div>
    <div class="data-serve-box" id="dataServer">
      <div class="box-model">
        <div class="box-module-mod">
          <div class="module-name">
            <div class="module-name-title">数据服务</div>
            <div class="module-name-en">DATA SERVICES</div>
          </div>
          <div class="moudle-content">
            <div class="home-card-list">
              <div
                class="home-card-item card-item"
                v-for="item in serveData"
                :key="item.title"
              >
                <div
                  class="card-icon-container"
                  style="cursor: pointer"
                  @click.stop="goto(item.path, item.query)"
                >
                  <div class="card-icon-cover"></div>
                  <div
                    class="card-icon"
                    :style="{
                      background:
                        'url(' + item.url + ') center center / 100% no-repeat',
                    }"
                  ></div>
                </div>
                <div
                  class="card-title"
                  style="cursor: pointer"
                  @click.stop="goto(item.path, item.query)"
                >
                  {{ item.title }}
                </div>
                <div class="card-desc">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="solutions-box" id="solutions">
      <div class="solutions-title">
        <div class="solutions-name-title">解决方案</div>
        <div class="solutions-name-en">DATA SERVICES</div>
      </div>
      <div class="solutions-content">
        <div class="swiper-box">
          <div class="swiper-box-container">
            <div class="swiper-group">
              <!-- <div
                class="swiper-item"
                v-for="(item, index) in swiperData.swiperdata"
                :key="index"
                :style="{
                  background: 'url(' + item.url + ') center center / 100%',
                  height: swiperData.swiperindex === index ? '540px' : '464px',
                  left: swiperpos(index) * 365 + 'px',
                  top: swiperData.swiperindex === index ? '0px' : '38px',
                  opacity: swiperop(index) ? '1' : '0',
                }"
              ></div> -->
              <swiper :options="swiperOption" ref="mySwiper" class="swiper">
                <swiper-slide
                  v-for="(item, index) in swiperData.swiperdata"
                  :key="index"
                  class="swiper-item"
                >
                  <div
                    class="img"
                    :style="{
                      background: 'url(' + item.url + ') center center / 100%',
                    }"
                  >
                    <div class="img-cover">
                      <div class="image-title">{{ item.title }}</div>
                      <div class="image-desc">{{ item.desc }}</div>
                      <div
                        class="image-btn"
                        @click.stop="goto(item.path, item.query)"
                      >
                        查看详情
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="swiper-left swiper-button" @click="swiperpre"></div>
            <div class="swiper-right swiper-button" @click="swipernext"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="data-serve-box" id="advantages">
      <div class="box-model">
        <div class="box-module-mod">
          <div class="module-name">
            <div class="module-name-title">产品优势</div>
            <div class="module-name-en">ADVANTAGES</div>
          </div>
          <div class="moudle-content">
            <div class="home-card-list">
              <div
                class="home-card-item card-item"
                v-for="item in advantagesData"
                :key="item.title"
              >
                <div class="card-icon-container">
                  <div
                    class="card-icon"
                    :style="{
                      background:
                        'url(' + item.url + ') center center / 100% no-repeat',
                    }"
                  ></div>
                </div>
                <div class="card-title">{{ item.title }}</div>
                <div class="card-desc">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="data-serve-box"
      id="partners"
      style="background: rgb(244, 244, 244)"
    >
      <div class="box-model">
        <div class="box-module-mod">
          <div class="module-name">
            <div class="module-name-title">合作伙伴</div>
            <div class="module-name-en">PARTNERS</div>
          </div>
          <div class="moudle-content">
            <img
              src="../../assets/images/banner/banner7.jpg"
              alt=""
              class="image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 16,
        slidesPerView: 3, // 一屏显示的slide个数
        centeredSlides: true, // 居中的slide是否标记为active，默认是最左active,这样样式即可生效
        slideToClickedSlide: true, // 点击的slide会居中
        slidesPerView: 'auto',
        loop: true, // 循环播放, 可有无限滚动效果，初始加载即是滚动后的效果
        on: {
          // 该方法中的this都指代swiper本身
          tap: function () {
            console.log('点击的位置', this.activeIndex)
          },
        },
      },
      serveData: [
        {
          url: require('../../assets/images/list/list1.png'),
          title: '数据采集',
          desc: '提供多类型定制化数据采集服务，包括图片、视频、语音、文本等。',
          path: '/data',
          query: { id: 'collection' },
        },
        {
          url: require('../../assets/images/list/list2.png'),
          title: '数据标注',
          desc: '提供多类型定制化数据标注服务，包括语义分割、图片分类、语言理解、物体拉框、语音转写、人体关键点等。',
          path: '/data',
          query: { id: 'annotation' },
        },
        {
          url: require('../../assets/images/list/list3.png'),
          title: '标注平台',
          desc: '私有化部署平台，传输及处理中全程保护客户数据安全性。',
          path: '/platform',
          query: { id: 'paltFunction' },
        },
      ],
      advantagesData: [
        {
          url: require('../../assets/images/list/list4.png'),
          title: '安全稳定',
          desc: '完整DDOS防御、防御带宽防盗链处理，防止数据泄露。',
        },
        {
          url: require('../../assets/images/list/list5.png'),
          title: '高效快捷',
          desc: '300人自建标注团队，多重质检；准确率98%以上/交付0逾期。',
        },
        {
          url: require('../../assets/images/list/list6.png'),
          title: '覆盖广泛',
          desc: '多场景宽领域的数据采集标注，提供海量、全面、专业的数据服务。',
        },
      ],
      swiperData: {
        swiperindex: 0,
        swiperdata: [
          {
            url: require('../../assets/images/card/card1.png'),
            title: '智能家居',
            desc: '家居场景实地采集识别，助力人机交互体验再升级',
            path: '/solutions/shome',
            query: {},
          },
          {
            url: require('../../assets/images/card/card2.png'),
            title: '安全防护',
            desc: '覆盖全场景的音视频标记采集，推进安防智能化发展',
            path: '/solutions/protection',
            query: {},
          },
          {
            url: require('../../assets/images/card/card3.png'),
            title: '自动驾驶',
            desc: '提供全面个性化的标注服务，让出行更安全更省时',
            path: '/solutions/driving',
            query: {},
          },
          {
            url: require('../../assets/images/card/card4.png'),
            title: '新零售',
            desc: '高质高效的标注识别能力，加速企业实现零售生态重构',
            path: '/solutions/retail',
            query: {},
          },
          {
            url: require('../../assets/images/card/card5.png'),
            title: '智能制造',
            desc: '结构化的数据处理服务，全面提高生产效能和安全性',
            path: '/solutions/manufacturing',
            query: {},
          },
        ],
      },
    }
  },
  watch: {
    '$route.query.id': {
      handler(val, oldVal) {
        if (val) {
          this.gotoId(val)
        } else {
          this.gotoId('banner')
        }
      },
      deep: true, //true 深度监听
    },
  },
  props: {},
  mounted() {
    if (!this.$route.query.id) {
      this.gotoId('banner')
    } else {
      this.gotoId(this.$route.query.id)
    }
  },
  components: {},
  methods: {
    // swiperpos(index) {
    //   let { swiperindex, swiperdata } = this.swiperData
    //   let index1, index2, index3, index4
    //   if (swiperindex - 1 < 0) {
    //     index1 = swiperindex - 1 + swiperdata.length
    //   } else {
    //     index1 = swiperindex - 1
    //   }
    //   if (swiperindex - 2 < 0) {
    //     index2 = swiperindex - 2 + swiperdata.length
    //   } else {
    //     index2 = swiperindex - 2
    //   }
    //   if (swiperindex + 1 > swiperdata.length - 1) {
    //     index3 = swiperindex + 1 - swiperdata.length
    //   } else {
    //     index3 = swiperindex + 1
    //   }
    //   if (swiperindex + 2 > swiperdata.length - 1) {
    //     index4 = swiperindex + 2 - swiperdata.length
    //   } else {
    //     index4 = swiperindex + 2
    //   }
    //   switch (index) {
    //     case index1:
    //       return 0
    //       break
    //     case index2:
    //       return -1
    //       break
    //     case swiperindex:
    //       return 1
    //       break
    //     case index3:
    //       return 2
    //       break
    //     case index4:
    //       return 3
    //       break
    //     default:
    //       break
    //   }
    //   return 7
    // },
    // swiperop(index) {
    //   if (this.swiperpos(index) >= -1 && this.swiperpos(index) <= 3) {
    //     return true
    //   } else {
    //     return false
    //   }
    // },
    // 上一个
    swiperpre() {
      this.$refs.mySwiper.swiper.slidePrev()
    },
    //下一个
    swipernext() {
      this.$refs.mySwiper.swiper.slideNext()
    },
    scrollPage(event) {
      this.$emit('scrollChange', event.target.scrollTop)
    },
    goto(path, query) {
      this.$router.push({
        path: path,
        query: query,
      })
    },
    gotoId(id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth', // 平滑过渡
        block: 'start', // 上边框与视窗顶部平齐。默认值
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  // height: 100vh;
  flex-shrink: 0;
  // overflow: auto;
  .page-banner {
    width: 100%;
    background-image: url('../../assets/images/banner/banner1.jpg');
    position: relative;
    height: 1080px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    flex-shrink: 0;
    .banner-content {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      top: 333px;
      animation: bonnerTextAni 2s;
      -moz-animation: bonnerTextAni 2s;
      -webkit-animation: bonnerTextAni 2s;
      -o-animation: bonnerTextAni 2s;
      color: #fff;
      text-align: left;
      .banner-title {
        line-height: 84px;
        font-size: 60px;
      }
      .banner-text {
        color: #fff;
        line-height: 50px;
        font-size: 36px;
      }
    }
  }
  .data-serve-box {
    background: rgb(255, 255, 255);
    color: #666;
    .box-model {
      width: 100%;
      .box-module-mod {
        padding-top: 60px;
        width: 1080px;
        margin: 0 auto;
        .module-name {
          .module-name-title {
            font-size: 36px;
            line-height: 50px;
            color: #333;
          }
          .module-name-en {
            font-size: 24px;
            line-height: 33px;
            color: #999;
          }
        }
        .moudle-content {
          padding-top: 60px;
          padding-bottom: 60px;
          width: 1080px;
          .home-card-list {
            display: flex;
            -webkit-box-orient: horizontal;
            flex-direction: row;
            justify-content: center;
            -webkit-box-pack: center;
            align-items: flex-start;
            flex-wrap: wrap;
            .home-card-item {
              width: 318px;
              .card-icon-container {
                position: relative;
                width: 120px;
                height: 120px;
                margin: 0 auto;

                .card-icon-cover {
                  background: rgb(51, 51, 51);
                  cursor: pointer;
                  width: 120px;
                  height: 120px;
                  border-radius: 120px 120px 120px 120px;
                  opacity: 0;
                  -webkit-transition: opacity 0.4s;
                  transition: opacity 0.4s;
                }
                .card-icon {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  width: 100px;
                  height: 100px;
                  background: #333;
                  -webkit-transform: translate(-50%, -50%);
                  -ms-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
                }
                &:hover .card-icon-cover {
                  opacity: 0.3;
                }
              }
              .card-title {
                padding-top: 20px;
                font-size: 28px;
                color: #333;
                text-align: center;
              }
              .card-desc {
                padding-top: 16px;
                font-size: 18px;
                color: #666;
                text-align: center;
              }
            }
            .card-item {
              margin-right: 63px;
              &:nth-child(3) {
                margin-right: 0;
              }
            }
          }
          .image {
            width: 100%;
            margin-top: -40px;
          }
        }
      }
    }
  }
  .solutions-box {
    width: 100%;
    background: url('../../assets/images/banner/banner2.jpg') center center
      no-repeat;
    .solutions-title {
      width: 1080px;
      margin: 0 auto;
      padding-top: 60px;
      padding-bottom: 50px;
      .solutions-name-title {
        font-size: 36px;
        color: #fff;
      }
      .solutions-name-en {
        opacity: 0.7;
        font-size: 24px;
        color: #fff;
      }
    }
    .solutions-content {
      width: 100%;
      padding-bottom: 60px;
      .swiper-box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .swiper-box-container {
          width: 1080px;
          position: relative;
          .swiper-group {
            width: 100%;
            height: 540px;
            overflow: hidden;
            position: relative;

            .swiper-item {
              width: 350px;
              height: 540px;
              display: flex;
              align-items: center;
              justify-content: center;
              .img {
                width: 100%;
                height: 464px;
                transition: all 0.6s;
                .img-cover {
                  display: flex;
                  -webkit-box-orient: vertical;
                  flex-direction: column;
                  -webkit-box-align: center;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                  color: #fff;
                  -webkit-transition: all 0.6s;
                  transition: all 0.6s;
                  .image-title {
                    box-sizing: border-box;
                    padding-top: 213px;
                    width: 100%;
                    text-align: center;
                    font-size: 28px;
                    -webkit-transition: all 0.6s;
                    transition: all 0.6s;
                  }
                  .image-desc {
                    box-sizing: border-box;
                    width: 100%;
                    padding: 40px 32px 0;
                    text-align: center;
                    font-size: 22px;
                    opacity: 0;
                    -webkit-transition: opacity 1s;
                    transition: opacity 1s;
                  }
                  .image-btn {
                    box-sizing: border-box;
                    padding: 2px 18px;
                    margin: 56px auto 0;
                    border: 1px solid #e5e5e5;
                    border-radius: 4px 4px 4px 4px;
                    background: hsla(0, 0%, 100%, 0);
                    text-align: center;
                    line-height: 38px;
                    font-size: 18px;
                    opacity: 0;
                    -webkit-transition: opacity 1s;
                    transition: opacity 1s;
                    &:hover {
                      background: hsla(0, 0%, 100%, 0.3);
                    }
                  }
                }
              }
            }
            .swiper-slide-active {
              .img {
                width: 100%;
                height: 540px;
                .img-cover {
                  background: hsla(0, 0%, 100%, 0.3);
                  .image-title {
                    padding-top: 134px;
                    opacity: 1;
                  }
                  .image-desc {
                    opacity: 1;
                  }
                  .image-btn {
                    opacity: 1;
                  }
                }
              }
            }
          }
          .swiper-button {
            position: absolute;
            top: 50%;
            width: 77px;
            height: 77px;
            background: hsla(0, 0%, 100%, 0.3);
            border-radius: 77px 77px 77px 77px;
            cursor: pointer;
            z-index: 2;
          }
          .swiper-left {
            left: 0;
            transform: translate(-50%, -50%);
            &:before {
              content: '';
              display: block;
              position: absolute;
              top: 50%;
              left: 50%;
              width: 13px;
              height: 24px;
              -webkit-transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
              background: url('../../assets/images/menu/pre.png') no-repeat 50%;
            }
          }
          .swiper-right {
            right: 0;
            transform: translate(50%, -50%);
            &:before {
              content: '';
              display: block;
              position: absolute;
              top: 50%;
              left: 50%;
              width: 13px;
              height: 24px;
              -webkit-transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
              background: url('../../assets/images/menu/next.png') no-repeat 50%;
            }
          }
        }
      }
    }
  }
}

@keyframes bonnerTextAni {
  0% {
    top: 379px;
    opacity: 0;
  }
  100% {
    top: 333px;
    opacity: 1;
  }
}
</style>
