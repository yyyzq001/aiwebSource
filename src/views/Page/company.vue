<template>
  <div class="page">
    <div class="page-banner" id="banner">
      <div class="banner-content">
        <div class="dialog-form">
          <div class="top">
            <div class="top-title"></div>
            <div class="top-close"></div>
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
    </div>
    <div class="data-serve-box" id="company">
      <div class="box-model">
        <div class="box-module-mod">
          <div class="module-name">
            <div class="module-name-title">公司简介</div>
            <div class="module-name-en">Company Brief Introduction</div>
          </div>
          <div class="moudle-content">
            <img
              src="../../assets/images/card/company/1.png"
              alt=""
              class="content-img"
            />
            <img
              src="../../assets/images/card/company/2.png"
              alt=""
              class="content-img"
            />
            <div class="content_text">
              {{ text }}
            </div>
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
      text: '37度数据成立于2019年4月，由金山云投资，聚焦为AI行业提供一站式AI数据解决方案。\n方案包括AI数据解决方案、AI数据安全解决方案。服务能力包括AI数据标注和采集服务、AI数据标注平台私有化服务、AI数据整体培训和考核体系。加速AI在各行业落地，让AI更有温度。\n团队均来自于业内一线的AI及AI数据服务公司，具备10年以上的专业数据服务经验。\n自研的AI数据生产平台，综合能力行业领先，已经帮助小米、宁德时代、阳光保险、汽车之家、航天恒星等客户，提供私有化部署方案，解决AI数据安全生产问题。我们通过AI技术的融入，颠覆行业数据生产模式，在业内率先完成了AI辅助标注体系，提升数据生产效率，有效降低成本。\n目前已经服务于字节跳动、快手、汽车之家、小鹏汽车、OPPO、旷视、B站、海信、好未来、中科院等上百家客户。行业覆盖AI、互联网、自动驾驶、银行、保险、传统制造业等。语音标注采集累计超过2万小时，图像标注采集累计超过1亿张。\n公司地址：中关村科技装备创新创业基地西三旗昌临801号27号四层南401\n咨询热线：400-893-3880 联系邮箱：business@37degreedata.com',
    }
  },
  watch: {
    '$route.query.id': {
      handler(val, oldVal) {
        if (val) {
          this.gotoId(val)
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
    background-image: url('../../assets/images/banner/banner6.jpg');
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
      .dialog-form {
        position: absolute;
        right: 70px;
        top: -85px;
        opacity: 0.8;
        width: 493px;
        height: 444px;
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
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;

          .content-img {
            width: 494px;
            height: 371px;
          }
          .content_text {
            text-indent: 2em;
            position: relative;
            margin-top: 24px;
            line-height: 58px;
            font-size: 22px;
            white-space: pre-wrap;
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
