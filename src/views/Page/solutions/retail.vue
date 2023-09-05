<template>
  <div class="page">
    <div class="page-banner" id="banner">
      <div class="banner-content">
        <div class="banner-title">新零售</div>
        <div class="banner-text">
          高质高效的标注识别能力，加速企业实现零售生态重构
        </div>
      </div>
    </div>
    <div class="data-serve-box" id="annotation" style="">
      <div class="box-model">
        <div class="box-module-mod">
          <div class="module-name">
            <div class="module-name-title">平台能力</div>
            <div class="module-name-en">PLATFORM CAPABILITY</div>
          </div>
          <div class="moudle-content">
            <div class="data-card-list">
              <div
                style="
                  padding: 0;
                  width: 494px;
                  height: 370px;
                  margin-bottom: 64px;
                "
                class="data-card-item card-item"
                v-for="item in annotationData"
                :key="item.title"
              >
                <div class="image-container">
                  <div class="common-single-platform">
                    <img :src="item.url" alt="" class="image" />
                    <div class="common-single-platform-cover">
                      <div class="common-single-platform single-platform-move">
                        <div class="platform-title">{{ item.title }}</div>
                        <div class="platform-text">{{ item.desc }}</div>
                        <div class="platform-button" @click="openDialog">
                          <button class="buttonStyle">需求咨询</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dialog-form" v-if="dialogvisiable">
      <div class="top">
        <div class="top-title">需求咨询</div>
        <div class="top-close" @click="closeDialog">
          <img src="../../../assets/images/menu/close.png" alt="" />
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
      annotationData: [
        {
          url: require('../../../assets/images/card/data/解决方案/新零售/1.png'),
          title: '货品属性标注',
          desc: '货品结构化属性信息呈现。',
          tag: ['智能客服', '新零售', '安全防护'],
        },
        {
          url: require('../../../assets/images/card/data/解决方案/新零售/2.png'),
          title: '人脸识别（刷脸支付）',
          desc: '对顾客的人脸特征进行识别标注，提供个性化的服务体验。',
          tag: ['自动驾驶', '安全防护'],
        },
        {
          url: require('../../../assets/images/card/data/解决方案/新零售/3.png'),
          title: '变形/被遮挡物商品识别',
          desc: '协助建立预测模型，识别被遮挡物品。',
          tag: ['文字转录', '内容分析', '情绪分析'],
        },
        {
          url: require('../../../assets/images/card/data/解决方案/新零售/4.png'),
          title: '语音识别',
          desc: '对顾客语音智能识别，提供更便捷的交互体验。',
          tag: [],
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
    background-image: url('../../../assets/images/banner/solutins/2.jpg');
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
      text-align: center;
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
          .data-card-list {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-wrap: wrap;

            .data-card-item {
              margin-bottom: 8px;
              box-sizing: border-box;
              width: 526px;
              padding: 16px;
              height: 528px;
              background: #fff;
              &:hover {
                background: #f5f5f5;
              }
              .image-container {
                width: 100%;
                height: 370px;
                background: #fff;
                .common-single-platform {
                  position: relative;
                  width: 494px;
                  height: 370px;
                  box-sizing: border-box;
                  color: #fff;
                  text-align: center;
                  background-position: 50%;
                  background-size: 100% 100%;
                  background-repeat: no-repeat;
                  overflow: hidden;
                  &:hover {
                    background-size: 120% 120%;
                    .image {
                      width: 120%;
                    }
                    .platform-button {
                      display: inline-block !important;
                    }
                    .platform-text {
                      display: block !important;
                    }
                    .single-platform-move {
                      padding: 140px 31px 0;
                      -webkit-animation: slideUp 0.6s ease-in;
                      animation: slideUp 0.6s ease-in;
                      animation-fill-mode: forwards;
                      overflow: hidden;
                    }
                  }
                  .image {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    -webkit-transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    width: 100%;
                    -webkit-transition: width 0.6s;
                    transition: width 0.6s;
                  }
                  .common-single-platform-cover {
                    height: 100%;
                    width: 100%;

                    .common-single-platform {
                      padding: 164px 31px 0;
                      position: relative;
                      width: 494px;
                      height: 370px;
                      box-sizing: border-box;
                      color: #fff;
                      text-align: center;
                      background-position: 50%;
                      background-size: 100% 100%;
                      background-repeat: no-repeat;
                      overflow: hidden;
                      &:hover {
                        background-size: 120% 120%;
                      }
                      .platform-title {
                        font-size: 28px;
                        line-height: 42px;
                        margin-bottom: 16px;
                      }
                      .platform-text {
                        display: none;
                        font-size: 22px;
                        line-height: 33px;
                      }
                      .platform-button {
                        display: none;
                        padding: 30px;
                        .buttonStyle {
                          cursor: pointer;
                          font-size: 16px;
                          background-color: #ff452d;
                          color: #fff;
                          width: 180px;
                          height: 33px;
                          border-radius: 6px;
                          border: none;
                          box-shadow: none;
                          font-weight: 700;
                        }
                      }
                    }
                  }
                }
              }
              .text-content {
                padding-top: 24px;
                font-size: 18px;
                color: #333;
                text-align: justify;
              }
              .text-tag {
                padding-top: 6px;
                font-size: 18px;
                color: #333;
                text-align: justify;
                span {
                  padding-right: 24px;
                }
              }
            }
          }
        }
      }
    }
  }
}
.dialog-form {
  z-index: 999;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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

@keyframes slideUp {
  0% {
    height: 206px;
    padding: 164px 31px 0;
  }
  100% {
    height: 100%;
    padding: 140px 31px 0;
  }
}
</style>
