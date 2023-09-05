<template>
  <div class="container" ref="container" @scroll="scrollChange">
    <div
      class="layout-header"
      :class="scrolltop > 0 ? 'header-color-bottom' : 'header-color-top'"
    >
      <div class="content-box">
        <div class="header-logo" @click="goto('/', {})">
          <img class="logo" src="../assets/images/logo/logo.png" alt="" />
        </div>
        <div class="header-navbar">
          <div
            class="nav-item"
            v-for="item in navData"
            :key="item.name"
            @click="goto(item.path, item.query)"
          >
            {{ item.name }}
            <div class="nav-child" v-if="item.children.length > 0">
              <div
                class="nav-child-list"
                v-for="childitem in item.children"
                :key="childitem.name"
                @click.stop="goto(childitem.path, childitem.query)"
              >
                {{ childitem.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="layout-footer">
      <div class="layout-footer-contact">
        <div class="content">
          <div class="contact-main">
            <img
              src="../assets/images/logo/logo.png"
              alt=""
              class="contact-main-image"
            />
            <div class="contact-main-text">
              一站式AI数据解决方案提供商 助燃AI行业高速发展
            </div>
          </div>
          <div
            class="contact-button"
            @click="goto('/company', { id: 'banner' })"
          >
            联系我们
          </div>
        </div>
      </div>
      <div class="layout-footer-nav">
        <div class="content">
          <div class="nav-box">
            <div
              class="nav-item"
              v-for="item in footernavData"
              :key="item.name"
            >
              <div
                class="nav-item-text"
                @click.stop="goto(item.path, item.query)"
              >
                {{ item.name }}
              </div>
              <div
                :class="
                  childitem.path ? 'nav-item-child' : 'nav-item-child-none'
                "
                v-for="childitem in item.children"
                :key="childitem.name"
                @click.stop="goto(childitem.path, childitem.query)"
              >
                {{ childitem.name }}
              </div>
            </div>
          </div>
          <div class="layout-footer-email">咨询热线：400-800-3800</div>
          <div class="layout-footer-address">
            <a
              id="_xinchacharenzheng_cert_vip_kexinweb"
              target="_blank"
              href="https://xyt.xinchacha.com/getpcInfo?sn=1459037613673697280&amp;certType=8"
              style="text-decoration: none"
              ><img
                src="https://xyt.xinchacha.com/img/icon/icon8.png"
                style="height: 25px; width: 82px"
            /></a>
            <span>copyright 2022 37degreedata.com 京ICP备19029953号</span>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar" v-if="scrolltop >= 1080">
      <div
        class="sidebar-child"
        v-for="(item, index) in sidebarData"
        :key="index"
        @click="fn(item.fuc)"
      >
        <img :src="item.url" alt="" class="img-hddb" />
        <div class="tips" v-if="item.text">
          <div class="tip-text" :style="{ width: item.width + 'px' }">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="dialog-form" v-if="dialogvisiable">
      <div class="top">
        <div class="top-title">需求咨询</div>
        <div class="top-close" @click="closeDialog">
          <img src="../assets/images/menu/close.png" alt="" />
        </div>
      </div>
      <div class="center">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="80px"
          class="demo-ruleForm"
        >
          <el-form-item label="公司" prop="name">
            <el-input
              placeholder="请输入您的公司名称"
              v-model="ruleForm.name"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="person">
            <el-input
              placeholder="请输入联系人"
              v-model="ruleForm.person"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-input
              placeholder="请输入您的联系电话"
              v-model="ruleForm.phone"
            ></el-input>
          </el-form-item>
          <el-form-item label="需求描述" prop="desc">
            <el-input
              placeholder="请输入您的需求"
              type="textarea"
              resize="none"
              v-model="ruleForm.desc"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer">
        <div class="footer-text">咨询热线: 400-893-3880</div>
        <div class="footer-text">联系邮箱: business@37degreedata.com</div>
        <button class="footer-button" @click="submitForm('ruleForm')">
          提交
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolltop: 0,
      navData: [
        {
          name: '首页',
          path: '/',
          query: {},
          children: [],
        },
        {
          name: '数据服务',
          path: '/data',
          query: {},
          children: [
            {
              name: '数据采集',
              path: '/data',
              query: { id: 'collection' },
            },
            {
              name: '数据标注',
              path: '/data',
              query: { id: 'annotation' },
            },
          ],
        },
        {
          name: '标注平台',
          path: '/platform',
          query: {},
          children: [
            {
              name: '平台功能',
              path: '/platform',
              query: { id: 'paltFunction' },
            },
            {
              name: '私有化部署',
              path: '/platform',
              query: { id: 'privatization' },
            },
            {
              name: '成功案例',
              path: '/platform',
              query: { id: 'successDemo' },
            },
          ],
        },
        {
          name: '解决方案',
          path: '/',
          query: { id: 'solutions' },
          children: [
            {
              name: '自动驾驶',
              path: '/solutions/driving',
              query: {},
            },
            {
              name: '新零售',
              path: '/solutions/retail',
              query: {},
            },
            {
              name: '智能制造',
              path: '/solutions/manufacturing',
              query: {},
            },
            {
              name: '智能家居',
              path: '/solutions/shome',
              query: {},
            },
            {
              name: '安全防护',
              path: '/solutions/protection',
              query: {},
            },
          ],
        },
        {
          name: '产品优势',
          path: '/',
          query: { id: 'advantages' },
          children: [],
        },
        {
          name: '关于我们',
          path: '/company',
          query: { id: 'company' },
          children: [],
        },
      ],
      footernavData: [
        {
          name: '数据服务',
          path: '/data',
          query: {},
          children: [
            {
              name: '数据采集',
              path: '/data',
              query: { id: 'collection' },
            },
            {
              name: '数据标注',
              path: '/data',
              query: { id: 'annotation' },
            },
          ],
        },
        {
          name: '标注平台',
          path: '/platform',
          query: {},
          children: [
            {
              name: '平台功能',
              path: '/platform',
              query: { id: 'paltFunction' },
            },
            {
              name: '私有化部署',
              path: '/platform',
              query: { id: 'privatization' },
            },
            {
              name: '成功案例',
              path: '/platform',
              query: { id: 'successDemo' },
            },
          ],
        },
        {
          name: '解决方案',
          path: '/',
          query: { id: 'solutions' },
          children: [
            {
              name: '自动驾驶',
              path: '/solutions/driving',
              query: {},
            },
            {
              name: '新零售',
              path: '/solutions/retail',
              query: {},
            },
            {
              name: '智能制造',
              path: '/solutions/manufacturing',
              query: {},
            },
            {
              name: '智能家居',
              path: '/solutions/shome',
              query: {},
            },
            {
              name: '安全防护',
              path: '/solutions/protection',
              query: {},
            },
          ],
        },
        {
          name: '产品优势',
          path: '/',
          query: { id: 'advantages' },
          children: [
            {
              name: '安全稳定',
              path: '',
              query: {},
            },
            {
              name: '高效快捷',
              path: '',
              query: {},
            },
            {
              name: '覆盖广泛',
              path: '',
              query: {},
            },
          ],
        },
        {
          name: '关于我们',
          path: '/company',
          query: {},
          children: [
            {
              name: '合作伙伴',
              path: '/',
              query: { id: 'partners' },
            },
            {
              name: '联系我们',
              path: '/company',
              query: {},
            },
            {
              name: '公司简介',
              path: '/company',
              query: { id: 'company' },
            },
          ],
        },
      ],
      sidebarData: [
        {
          text: '点我留言哦',
          url: require('../assets/images/menu/icon/icon1.png'),
          width: '140',
          fuc: 'openDialog',
        },
        {
          text: '咨询热线: 400-893-3880',
          url: require('../assets/images/menu/icon/icon2.png'),
          width: '200',
          fuc: '',
        },
        {
          text: '联系邮箱:business@37degreedata.com',
          url: require('../assets/images/menu/icon/icon3.png'),
          width: '260',
          fuc: '',
        },
        {
          text: '',
          url: require('../assets/images/menu/icon/icon4.png'),
          width: '0',
          fuc: 'top',
        },
      ],
      dialogvisiable: false,
      ruleForm: {
        name: '',
        person: '',
        phone: '',
        desc: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入您的公司名称', trigger: 'blur' },
        ],
        person: [{ required: true, message: '请输入联系人', trigger: 'blur' }],
        phone: [
          { required: true, message: '请输入您的联系电话', trigger: 'blur' },
        ],
      },
    }
  },

  mounted() {},

  methods: {
    scrollChange(event) {
      this.scrolltop = event.target.scrollTop
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$api.search.submit(this.ruleForm).then((res) => {
            this.$message({
              message: '提交成功',
              type: 'success',
              duration: 1000,
            })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    openDialog() {
      this.dialogvisiable = true
    },
    closeDialog() {
      this.dialogvisiable = false
    },

    fn(fuc) {
      if (fuc) {
        this[fuc]()
      }
    },
    goto(path, query) {
      this.$router.push({
        path: path,
        query: query,
      })
    },
    //置顶
    top() {
      this.$refs.container.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  min-width: 80%;
  overflow: auto;
}
.layout-header {
  position: fixed;
  z-index: 1024;
  width: 100%;
  min-width: 1080px;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  font-family: PingFang-SC-Regular, Helvetica Neue, Helvetica, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif;
  .content-box {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header-logo {
      width: 200px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      .logo {
        width: 200px;
        cursor: pointer;
      }
    }
    .header-navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .nav-item {
        height: 64px;
        margin-left: 40px;
        position: relative;
        padding: 21px 0;
        .nav-child {
          display: block;
          overflow: hidden;
          -webkit-animation: slideDown-data-v-783f5fa4 0.2s ease-in;
          animation: slideDown-data-v-783f5fa4 0.2s ease-in;
          position: absolute;
          z-index: 1024;
          list-style: none;
          padding: 36px 0 37px 40px;
          margin: 0;
          width: 200px;
          left: -40px;
          top: 64px;
          display: none;
          cursor: auto;

          .nav-child-list {
            margin-bottom: 14px;
            &:hover {
              cursor: pointer;
              color: #f94d26;
            }
          }
        }

        &:hover {
          cursor: pointer;
          border-bottom: 2px solid #f94d26;
          .nav-child {
            display: block;
            overflow: hidden;
            -webkit-animation: slideDown 0.2s ease-in;
            animation: slideDown 0.2s ease-in;
          }
        }
      }
    }
  }
}
.header-color-top {
  background: transparent;
  .nav-child {
    background: rgba(0, 0, 0, 0.3);
  }
}
.header-color-bottom {
  background: #333;
  .nav-child {
    background: #333;
  }
}
.layout-footer {
  width: 100%;
  background: #333;
  font-size: 16px;
  line-height: 22px;
  color: hsla(0, 0%, 100%, 0.7);
  .layout-footer-contact {
    width: 100%;
    background: url('../assets/images/banner/banner3.png');
    background-position: 50%;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      width: 1080px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .contact-main {
        .contact-main-image {
          width: 200px;
        }
        .contact-main-text {
          font-size: 16px;
          line-height: 22px;
          color: #fff;
          display: inline-block;
          margin-left: 8px;
          cursor: default;
        }
      }

      .contact-button {
        font-size: 18px;
        line-height: 28px;
        padding: 6px 20px;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        cursor: pointer;
        &:hover {
          background: hsla(0, 0%, 100%, 0.3);
        }
      }
    }
  }
  .layout-footer-nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      width: 1080px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      .nav-box {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        .nav-item {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          .nav-item-text {
            cursor: pointer;
            font-size: 22px;
            line-height: 33px;
            color: #fff;
            margin: 42px 0 24px;
            display: block;
          }

          .nav-item-child {
            margin-bottom: 16px;
            &:hover {
              cursor: pointer;
              color: #fff;
            }
          }
          .nav-item-child-none {
            margin-bottom: 16px;
          }
        }
      }
      .layout-footer-email {
        width: 100%;
        text-align: center;
        margin: 22px 0 16px;
        font-size: 18px;
        font-weight: 600;
      }
      .layout-footer-address {
        width: 100%;
        border-top: 1px solid #979797;
        text-align: center;
        padding: 13px 0 14px;
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
      }
    }
  }
}
.sidebar {
  position: fixed;
  z-index: 200;
  width: 40px;
  height: 80px;
  right: 10px;
  bottom: 200px;
  .sidebar-child {
    width: 40px;
    height: 40px;
    background: #f94d26;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      .tips {
        display: flex;
      }
    }
    .tips {
      z-index: 999;
      position: absolute;
      right: 40px;
      background: #fff;
      border-radius: 10px 10px 10px 10px;
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.16);
      padding: 5px 10px;
      font-size: 14px;
      color: #333;
      text-align: center;
      line-height: 40px;
      display: none;
      align-items: center;
      justify-content: center;
      .tip-text {
        flex-shrink: 0;
        display: block;
      }
    }
  }
}
.dialog-form {
  z-index: 999;
  position: fixed;
  right: 60px;
  bottom: 210px;
  width: 463px;
  height: 460px;
  background: #fff;
  box-shadow: 0 2px 20px 0 hsla(0deg, 0%, 80%, 0.5);
  border-radius: 4px 4px 4px 4px;
  padding: 20px 25px 20px 34px;
  .top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .top-title {
      text-align: center;
      line-height: 33px;
      font-size: 18px;
      color: #333;
    }
  }
  .center {
    margin-top: 7px;
    /deep/ .el-input .el-input__inner {
      background: #f8f8fa;
      width: 310px;
      height: 32px;
      border: none;
      border-radius: 4px 4px 4px 4px;
      padding: 0 0 0 10px;
      outline: none;
      font-size: 16px;
      color: #333;
      box-sizing: border-box;
      &:hover {
        border: 0.5px solid #f2403d;
      }
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #757575;
      }
      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #757575;
      }
      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #757575;
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #757575;
      }
    }
    /deep/ .el-textarea__inner {
      background: #f8f8fa;
      width: 310px;
      height: 80px;
      border: none;
      border-radius: 4px 4px 4px 4px;
      padding: 0 0 0 10px;
      outline: none;
      font-size: 16px;
      color: #333;
      box-sizing: border-box;
      &:hover {
        border: 0.5px solid #f2403d;
      }
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #757575;
      }
      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #757575;
      }
      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #757575;
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #757575;
      }
    }
  }
  .footer {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    .footer-text {
      margin-bottom: 10px;
      margin-left: 10px;
      color: #666;
    }
    .footer-button {
      width: 310px;
      height: 32px;
      border: none;
      background: #f94d26;
      color: #fff;
      font-size: 16px;
      border-radius: 4px 4px 4px 4px;
      margin-left: 83px;
      outline: none;
    }
  }
}

@keyframes slideDown {
  0% {
    height: 0;
    padding: 0 0 0 40px;
  }
  100% {
    height: 100%;
    padding: 36px 0 37px 40px;
  }
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
}

a {
  color: rgb(51, 122, 183);
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 3px;
}
.outContainer {
  -ms-overflow-style: none;
}
</style>
