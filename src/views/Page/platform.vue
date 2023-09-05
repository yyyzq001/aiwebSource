<template>
  <div class="page">
    <div class="page-banner" id="banner">
      <div class="banner-content">
        <div class="banner-title">标注平台</div>
        <div class="banner-text">功能全面 灵活部署 效率领先</div>
        <button class="buttonStyle" @click="openDialog">平台试用</button>
      </div>
      <div class="banner-imgist">
        <div class="picDiv" v-for="item in bannerlistData" :key="item.name">
          <img :src="item.url" alt="" class="image" />
          <div class="text">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="platformModule" id="paltFunction">
      <div class="platformTitle">
        <div class="title-ch">平台功能</div>
        <img src="../../assets/images/menu/line.png" alt="" class="title-img" />
      </div>
      <div class="tabBox">
        <div class="tabs">
          <div class="tabs-list">
            <div
              class="tab-item"
              :class="index === tabindex ? 'tab-acive' : ''"
              v-for="(item, index) in tabData"
              :key="item.title"
              @click="tabswith(index)"
            >
              {{ item.title }}
            </div>
            <div
              class="tab-line"
              :style="{ transform: 'translateX(' + tabindex * 400 + 'px)' }"
            ></div>
          </div>
        </div>
      </div>
      <div class="platformContainer" style="background-color: #f4f5f6">
        <div class="button-box" style="padding: 50px 0 40px 0">
          <div
            class="button-item-2"
            :class="
              index === tabData[tabindex].data.index ? 'button2-active' : ''
            "
            v-for="(item, index) in tabData[tabindex].data.data"
            :key="item.name"
            @click="functionChange(index)"
          >
            <img
              :src="
                index === tabData[tabindex].data.index
                  ? item.icon_l
                  : item.icon_n
              "
              alt=""
              class="buton-icon"
            />
            <div class="button-text">{{ item.name }}</div>
          </div>
        </div>
        <div
          class="carouseBox"
          :style="{ height: tabData[tabindex].height + 'px' }"
        >
          <div class="preview-box">
            <img
              :src="
                tabData[tabindex].data.data[tabData[tabindex].data.index].img
              "
              class="preview-img"
              alt=""
            />
            <div class="preview-textBox">
              <div class="bigTitle">适用场景</div>
              <div class="underline"></div>
              <div class="text-content">
                {{
                  tabData[tabindex].data.data[tabData[tabindex].data.index].desc
                }}
              </div>
            </div>
          </div>
          <img
            :src="left()"
            alt=""
            class="left-Carouse-button"
            @click="
              functionChange(getIndex(tabData[tabindex].data.index - 1), 'left')
            "
          />
          <div
            class="leftCarouse"
            @click="
              functionChange(getIndex(tabData[tabindex].data.index - 1), 'left')
            "
          >
            <img
              :src="
                tabData[tabindex].data.data[
                  getIndex(tabData[tabindex].data.index - 1)
                ].img
              "
              alt=""
              class="Carouse-img"
            />
            <div class="smallBox">
              <div class="smallTitle">适用场景</div>
              <div class="smallUnderline"></div>
              <div class="smallContent">
                {{
                  tabData[tabindex].data.data[
                    getIndex(tabData[tabindex].data.index - 1)
                  ].desc
                }}
              </div>
            </div>
          </div>
          <img
            :src="right()"
            alt=""
            class="right-Carouse-button"
            @click="
              functionChange(
                getIndex(tabData[tabindex].data.index + 1),
                'right'
              )
            "
          />
          <div
            class="rightCarouse"
            @click="
              functionChange(
                getIndex(tabData[tabindex].data.index + 1),
                'right'
              )
            "
          >
            <img
              :src="
                tabData[tabindex].data.data[
                  getIndex(tabData[tabindex].data.index + 1)
                ].img
              "
              alt=""
              class="Carouse-img"
            />
            <div class="smallBox">
              <div class="smallTitle">适用场景</div>
              <div class="smallUnderline"></div>
              <div class="smallContent">
                {{
                  tabData[tabindex].data.data[
                    getIndex(tabData[tabindex].data.index + 1)
                  ].desc
                }}
              </div>
            </div>
          </div>
        </div>
        <div class="navDiv">
          <div
            class="navBlack"
            :class="index === tabData[tabindex].data.index ? 'nav-active' : ''"
            v-for="(item, index) in tabData[tabindex].data.data"
            :key="item.name"
            @click="functionChange(index)"
          ></div>
        </div>
      </div>
    </div>
    <div class="platformModule" id="privatization">
      <div class="platformTitle" style="padding-bottom: 62px">
        <div class="title-ch">私有化部署</div>
        <img src="../../assets/images/menu/line.png" alt="" class="title-img" />
      </div>
      <div class="platformContainer">
        <div class="button-box">
          <div
            class="button-item-1"
            :class="index === privateData.index ? 'button1-active' : ''"
            v-for="(item, index) in privateData.data"
            :key="item.name"
            @click="privateChange(index)"
          >
            <img
              :src="
                index === privateData.index ? item.icon_l_url : item.icon_n_url
              "
              alt=""
              class="buton-icon"
            />
            <div class="button-text">{{ item.name }}</div>
          </div>
        </div>
        <div class="yun-box">
          <div class="topBox">
            <div class="leftPic">
              <img
                src="../../assets/images/list/platform/private/icon/left.png"
                alt=""
                class="image"
              />
            </div>
            <div class="textSty">
              {{ privateData.data[privateData.index].user }}
            </div>
            <div class="rightPic">
              <img
                src="../../assets/images/list/platform/private/icon/right.png"
                alt=""
                class="image"
              />
            </div>
          </div>
          <div class="containerBox">
            <img :src="privateData.data[privateData.index].icon_url" alt="" />
            <div class="ssyFooter">
              {{ privateData.data[privateData.index].desc }}
            </div>
          </div>
          <div class="moreBox">
            <div
              class="pic-item"
              v-for="(item, index) in privateData.data[privateData.index]
                .process"
              :key="index"
            >
              <div class="picBox">
                <div class="textdata">{{ item.textdata }}</div>
                <div class="picicon-box">
                  <div
                    class="iconBlock"
                    v-for="(iconitem, iconindex) in item.icons"
                    :key="iconindex"
                  >
                    <img :src="iconitem.url" alt="" />
                    <div class="iconTitle">{{ iconitem.text }}</div>
                  </div>
                </div>
                <div class="textTitle">{{ item.title }}</div>
                <div class="pic-line"></div>
                <div class="textDesc">{{ item.desc }}</div>
              </div>
              <div
                class="nexticon"
                v-if="
                  index !==
                  privateData.data[privateData.index].process.length - 1
                "
              >
                <img
                  src="../../assets/images/list/platform/private/icon/next.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="platformModule" id="successDemo">
      <div class="platformTitle">
        <div class="title-ch">成功案例</div>
        <img src="../../assets/images/menu/line.png" alt="" class="title-img" />
      </div>
      <div class="sameSty-box">
        <div class="sameSty" v-for="item in sameStyData" :key="item.title">
          <img :src="item.url" alt="" class="imgSty" />
          <div class="brand">{{ item.title }}</div>
          <div class="container">
            <div class="textBox">
              {{ item.desc }}
            </div>
            <hr />
            <div class="buttonBox">
              <button
                type="button"
                class="button"
                v-for="tagitem in item.tag"
                :key="tagitem"
              >
                <span>{{ tagitem }}</span>
              </button>
            </div>
            <div class="singleText">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dialog-form" v-if="dialogvisiable">
      <div class="top">
        <div class="top-title">平台试用</div>
        <div class="top-close" @click="closeDialog">
          <img src="../../assets/images/menu/close.png" alt="" />
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
      direction: '',
      tabindex: 0,
      tabData: [
        {
          title: '图像',
          height: 484,
          data: {
            index: 0,
            data: [
              {
                name: '3D点云',
                icon_l: require('../../assets/images/list/platform/function/image/icon/1_l.png'),
                icon_n: require('../../assets/images/list/platform/function/image/icon/1_n.png'),
                img: require('../../assets/images/list/platform/function/image/preview/1.png'),
                desc: '智能辅助驾驶、无人驾驶',
              },
              {
                name: '语义分割',
                icon_l: require('../../assets/images/list/platform/function/image/icon/2_l.png'),
                icon_n: require('../../assets/images/list/platform/function/image/icon/2_n.png'),
                img: require('../../assets/images/list/platform/function/image/preview/2.png'),
                desc: '适用智能手机、智能驾驶、智能安防、新零售、智能制造等',
              },
              {
                name: 'OCR标注',
                icon_l: require('../../assets/images/list/platform/function/image/icon/3_l.png'),
                icon_n: require('../../assets/images/list/platform/function/image/icon/3_n.png'),
                img: require('../../assets/images/list/platform/function/image/preview/3.png'),
                desc: '适用智能手机、智能驾驶、智能安防、新零售、智能制造等',
              },
              {
                name: '检测框',
                icon_l: require('../../assets/images/list/platform/function/image/icon/4_l.png'),
                icon_n: require('../../assets/images/list/platform/function/image/icon/4_n.png'),
                img: require('../../assets/images/list/platform/function/image/preview/4.png'),
                desc: '适用智能驾驶、智能手机、智能安防、新零售、DMS智能驾仓等场景',
              },
              {
                name: '关键点',
                icon_l: require('../../assets/images/list/platform/function/image/icon/5_l.png'),
                icon_n: require('../../assets/images/list/platform/function/image/icon/5_n.png'),
                img: require('../../assets/images/list/platform/function/image/preview/5.png'),
                desc: '智能手机 自动美颜、直播互动、短视频特效、身份认证、智能安防、新零售、DMS智能驾仓',
              },
            ],
          },
        },
        {
          title: '语音',
          height: 516,
          data: {
            index: 0,
            data: [
              {
                name: '单段落语音',
                icon_l: require('../../assets/images/list/platform/function/voice/icon/1_l.png'),
                icon_n: require('../../assets/images/list/platform/function/voice/icon/1_n.png'),
                img: require('../../assets/images/list/platform/function/voice/preview/1.png'),
                desc: '智能家具:智能音响，智能家电，陪护机器人等.智能手机:语音助手，语音搜索，智能读书，语音输入法等智能车载:智能后视镜，智能中控',
              },
              {
                name: '多段落语音',
                icon_l: require('../../assets/images/list/platform/function/voice/icon/2_l.png'),
                icon_n: require('../../assets/images/list/platform/function/voice/icon/2_n.png'),
                img: require('../../assets/images/list/platform/function/voice/preview/2.png'),
                desc: '智能客服：机器人客服，电话营销 智能会议：会议速记录，实时上屏智能医疗：医疗麦克风，电子病例，医疗机器人',
              },
            ],
          },
        },
        {
          title: '文本',
          height: 484,
          data: {
            index: 0,
            data: [
              {
                name: '文本意图标注',
                icon_l: require('../../assets/images/list/platform/function/text/icon/1_l.png'),
                icon_n: require('../../assets/images/list/platform/function/text/icon/1_n.png'),
                img: require('../../assets/images/list/platform/function/text/preview/1.png'),
                desc: '意图理解、自动问答、智能家居、陪护机器人、智能车载',
              },
              {
                name: '实体关系标注',
                icon_l: require('../../assets/images/list/platform/function/text/icon/2_l.png'),
                icon_n: require('../../assets/images/list/platform/function/text/icon/2_n.png'),
                img: require('../../assets/images/list/platform/function/text/preview/2.png'),
                desc: '内容推荐、评价分析、篇章理解、智能学习机',
              },
              {
                name: '文本分类',
                icon_l: require('../../assets/images/list/platform/function/text/icon/3_l.png'),
                icon_n: require('../../assets/images/list/platform/function/text/icon/3_n.png'),
                img: require('../../assets/images/list/platform/function/text/preview/3.png'),
                desc: '信息检索、自动摘要、评价分析、内容推荐、篇章理解、市场预测',
              },
              {
                name: '语言生成',
                icon_l: require('../../assets/images/list/platform/function/text/icon/4_l.png'),
                icon_n: require('../../assets/images/list/platform/function/text/icon/4_n.png'),
                img: require('../../assets/images/list/platform/function/text/preview/4.png'),
                desc: '信息检索、自动摘要、评价分析、内容推荐、篇章理解、市场预测景',
              },
              {
                name: '指代消解',
                icon_l: require('../../assets/images/list/platform/function/text/icon/5_l.png'),
                icon_n: require('../../assets/images/list/platform/function/text/icon/5_n.png'),
                img: require('../../assets/images/list/platform/function/text/preview/5.png'),
                desc: '信息检索、智能推荐、智能家居、智能客服、智能会议、智能医疗',
              },
            ],
          },
        },
      ],
      privateData: {
        index: 0,
        data: [
          {
            icon_l_url: require('../../assets/images//list/platform/private/icon/1_l.png'),
            icon_n_url: require('../../assets/images//list/platform/private/icon/1_n.png'),
            icon_url: require('../../assets/images//list/platform/private/icon/3.png'),
            name: '私有云部署',
            user: '客户',
            desc: '私有云环境',
            process: [
              {
                textdata: '已有数据存储',
                icons: [
                  {
                    url: require('../../assets/images//list/platform/private/icon/1/1.png'),
                    text: '',
                  },
                ],
                title: '安全技术',
                desc: '提供整套安全部署技术方案',
              },
              {
                textdata: '标注平台私有化',
                icons: [
                  {
                    url: require('../../assets/images//list/platform/private/icon/1/2.png'),
                    text: '生产流程',
                  },
                  {
                    url: require('../../assets/images//list/platform/private/icon/1/3.png'),
                    text: 'AI辅助',
                  },
                  {
                    url: require('../../assets/images//list/platform/private/icon/1/4.png'),
                    text: '标注能力',
                  },
                ],
                title: '私有化标准平台',
                desc: '灵活高效私有化部署',
              },
              {
                textdata: '驻场数据标注',
                icons: [
                  {
                    url: require('../../assets/images//list/platform/private/icon/1/5.png'),
                    text: '',
                  },
                ],
                title: '专业驻场数据服务',
                desc: '高质量标注人员和管理体系服务',
              },
              {
                textdata: '数据资产管理',
                icons: [
                  {
                    url: require('../../assets/images//list/platform/private/icon/1/6.png'),
                    text: '',
                  },
                ],
                title: 'AI数据资产管理',
                desc: 'AI数据资产安全存储和分类管理i',
              },
            ],
          },
          {
            icon_l_url: require('../../assets/images//list/platform/private/icon/2_l.png'),
            icon_n_url: require('../../assets/images//list/platform/private/icon/2_n.png'),
            icon_url: require('../../assets/images//list/platform/private/icon/4.png'),
            name: '公有云部署',
            user: 'AI行业',
            desc: '公网异地生产',
            process: [
              {
                textdata: '项目标准确认',
                icons: [
                  {
                    url: require('../../assets/images//list/platform/private/icon/2/1.png'),
                    text: '数据采集',
                  },
                  {
                    url: require('../../assets/images//list/platform/private/icon/2/2.png'),
                    text: '数据标注',
                  },
                ],
                title: '免费试标',
                desc: '确认标准·提供报价',
              },
              {
                textdata: '公有云存储',
                icons: [
                  {
                    url: require('../../assets/images//list/platform/private/icon/2/3.png'),
                    text: '',
                  },
                ],
                title: '数据加密',
                desc: '数据加密/处理/存储/隔离',
              },
              {
                textdata: '标注平台',
                icons: [
                  {
                    url: require('../../assets/images//list/platform/private/icon/2/4.png'),
                    text: '生产流程',
                  },
                  {
                    url: require('../../assets/images//list/platform/private/icon/2/5.png'),
                    text: 'AI辅助',
                  },
                  {
                    url: require('../../assets/images//list/platform/private/icon/2/6.png'),
                    text: '标注能力',
                  },
                ],
                title: '生产流程安全',
                desc: '入场管控/设备监控/数据质量管理',
              },
              {
                textdata: '公网跨地域标注',
                icons: [
                  {
                    url: require('../../assets/images//list/platform/private/icon/2/7.png'),
                    text: '',
                  },
                ],
                title: '数据销毁',
                desc: '已验收项目直接销毁\n并签署数据销毁协议',
              },
            ],
          },
        ],
      },
      sameStyData: [
        {
          url: require('../../assets/images/card/success/1.png'),
          title: '小米 · 知名互联网企业',
          desc: '提供整套AI数据资产安全解决方案，包含一体化数据服务平台的私有化部署及各项定制功能的开发。为客户在数据采集、标注、验收、提取、提取等各个环节的安全、质量、效率保驾护航，帮助客户持续夯实互联网人工智能领域核心竞争力',
        },
        {
          url: require('../../assets/images/card/success/2.png'),
          title: '汽车之家 · 顶级流量汽车网站',
          desc: '通过数据标注平台私有化部署，推动数据-标注-验收-训练的高效流程，辅以多维度精细化实时数据统计查看功能，并对整体数据服务的进度、质量、人员提供完善的管理方法及工具，为客户在3.0智能化时代蓬勃发展不断助力',
          text: '累计完成近8000小时语音标注服务，超百万张图像及文本标注服务',
          tag: ['私有化平台部署', '定制开发'],
        },
        {
          url: require('../../assets/images/card/success/3.png'),
          title: '阳光保险 · 七大保险集团之一',
          desc: '使用私有化标注平台，通过图片、音频、文本等多种标注模板，帮助客户在面向金融类型语音算法、金融票据自动识别算法等方向不断高效产出。同时，在满足数据质量的同时，通过大量专业人员驻场标注服务，大大提升了标注效率及数据安全性',
          text: '累计完成近5000小时语音标注服务，超百万张票据OCR标注服务',
          tag: ['私有化平台部署', '驻场标注'],
        },
        {
          url: require('../../assets/images/card/success/4.png'),
          title: '伟东云 · 教育平台服务商',
          desc: '推出AI数据产教融合方案，打造AI数据培训体系输出大量培训讲师、视频、试题等，搭建数据实训平台配合培训体系为培训人员提供优质的实际联系操作平台场景。目前已在全国高职院校全面推广，并源源不断为业务输入高端AI标注人才',
          text: '累计完成近百课时培训体系，并为行业输出数百名优秀标注人才',
          tag: ['私有化平台部署', '产教融合'],
        },
        {
          url: require('../../assets/images/card/success/5.png'),
          title: '能源领域 · 某知名新能源企业',
          desc: '提供多节点私有化标注平台，实现客户多地区、多子公司均可管理、标注、查看、使用训练数据，打造数据引入、数据处理、数据资产等多个管理流程，为地方子公司数据管理，集团公司人工智能模型训练提供有力支撑和安全可控的技术保障',
          text: '为流水线产品质量监控算法、园区安防监控算法、产品检测算法等提供数据标注支撑',
          tag: ['私有化平台部署', '多节点部署'],
        },
        {
          url: require('../../assets/images/card/success/6.png'),
          title: '金融领域 · 某上市商业银行',
          desc: '对接集团大数据中心，针对基础票据数据、客服语音数据分别提供文字识别及转写标注、语音识别及转写标注，同时对接客户已有算法模型进行辅助标注以提高效率。通过高质量的标注数据训练优质算法模型，从而全面支撑客户智能化平台建设。',
          text: '累计完成近百万框的票据OCR标注服务',
          tag: ['私有化平台部署', 'OCR标注', '语音ASR标注'],
        },
        {
          url: require('../../assets/images/card/success/7.png'),
          title: '电网领域 · 某电网科技公司',
          desc: '建设电力数据智能化平台，针对电表读数、电网运检等图像数据进行检测及转写标注，通过模型不断训练形成专业领域内优质算法，促进智能化平台辅助行业人员日常工作，提升电网整体智能化水平',
          text: '累计完成数十万框的电表及运检图像标注服务',
          tag: ['私有化平台部署', 'OCR标注', '检测识别标注'],
        },
        {
          url: require('../../assets/images/card/success/8.png'),
          title: '制造领域 · 某国家级研究院',
          desc: '利用图像、文本、音频、视频等全方位标注能力，面向客户多维度数据提供驻场人员标注。并与客户已有数据平台、训练平台进行对接，完成数据的提取、标注、验收、回传等一系列闭环流程，实现多领域算法模型的高效产出，加快客户人工智能领域核心能力的不断沉淀',
          text: '累计已完成500小时视频标注服务，数十万张图像检测及识别标注服务',
          tag: ['私有化平台部署', '平台对接', '驻场标注'],
        },
        {
          url: require('../../assets/images/card/success/9.png'),
          title: '智慧城市领域 · 某城市大脑指挥中心',
          desc: '对接智慧城市数据中心，利用图像标注能力，针对多维度图像进行标注服务，在提高标注效率保障数据安全的同时，监控数据标注质量并提供多种管理流程辅助提升算法识别准确率及模型服务性能，为智慧城市平台落地提供坚实的数据基础',
          text: '累计已完成近百万框的图像检测及识别标注服务',
          tag: ['私有化平台部署', '图像标注 '],
        },
      ],
      swiperData: {
        swiperindex: 0,
        swiperdata: [
          {
            url: require('../../assets/images/card/card1.png'),
            title: '智能家居',
            desc: '家居场景实地采集识别，助力人机交互体验再升级',
          },
          {
            url: require('../../assets/images/card/card2.png'),
            title: '安全防护',
            desc: '覆盖全场景的音视频标记采集，推进安防智能化发展',
          },
          {
            url: require('../../assets/images/card/card3.png'),
            title: '自动驾驶',
            desc: '提供全面个性化的标注服务，让出行更安全更省时',
          },
          {
            url: require('../../assets/images/card/card4.png'),
            title: '新零售',
            desc: '高质高效的标注识别能力，加速企业实现零售生态重构',
          },
          {
            url: require('../../assets/images/card/card5.png'),
            title: '智能制造',
            desc: '结构化的数据处理服务，全面提高生产效能和安全性',
          },
        ],
      },
      bannerlistData: [
        {
          url: require('../../assets/images/list/platform/1.png'),
          name: '多边形',
        },
        {
          url: require('../../assets/images/list/platform/2.png'),
          name: '矩形框',
        },
        {
          url: require('../../assets/images/list/platform/3.png'),
          name: '语音转写',
        },
        {
          url: require('../../assets/images/list/platform/4.png'),
          name: 'NLP',
        },
        {
          url: require('../../assets/images/list/platform/5.png'),
          name: '语义分割',
        },
        {
          url: require('../../assets/images/list/platform/6.png'),
          name: '人脸打点',
        },
        {
          url: require('../../assets/images/list/platform/7.png'),
          name: '实时监控',
        },
        {
          url: require('../../assets/images/list/platform/8.png'),
          name: '3D标框',
        },
      ],
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
    right() {
      if (this.direction === 'right') {
        return require('../../assets/images/list/platform/function/image/icon/right_n.png')
      } else {
        return require('../../assets/images/list/platform/function/image/icon/right_l.png')
      }
    },
    left() {
      if (this.direction === 'left') {
        return require('../../assets/images/list/platform/function/image/icon/left_n.png')
      } else {
        return require('../../assets/images/list/platform/function/image/icon/left_l.png')
      }
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
    tabswith(index) {
      this.tabindex = index
    },
    functionChange(index, type) {
      if (type) {
        this.direction = type
      }
      this.tabData[this.tabindex].data.index = index
    },
    privateChange(index) {
      this.privateData.index = index
    },
    getIndex(index) {
      if (index < 0) {
        return this.tabData[this.tabindex].data.data.length - 1
      }
      if (index === this.tabData[this.tabindex].data.data.length) {
        return 0
      }
      return index
    },

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
  .buttonStyle {
    cursor: pointer;
    margin-top: 4%;
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
  .page-banner {
    width: 100%;
    background-image: url('../../assets/images/banner/banner5.png');
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
    .banner-imgist {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      top: 51%;
      .picDiv {
        width: 150px;
        display: inline-block;
        .image {
          width: 150px;
        }
        .text {
          text-align: center;
          height: 16px;
          font-size: 16px;
          font-family: 微软雅黑;
          font-weight: 400;
          color: #fff;
          line-height: 7px;
        }
      }
    }
  }
  .platformModule {
    background-color: #fff;
    .platformTitle {
      width: 1080px;
      text-align: center;
      margin: 0 auto;
      padding-top: 79px;
      .title-ch {
        font-size: 50px;
        font-family: 微软雅黑;
        font-weight: 600;
        color: #444;
        line-height: 50px;
      }
      .title-img {
        margin-top: 20px;
      }
    }
    .tabBox {
      width: 100%;
      margin: 0 auto;
      .tabs {
        width: 1200px;
        margin: 0 auto;
        .tabs-list {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          .tab-item {
            width: 400px;
            height: 151px;
            font-size: 30px;
            font-family: 微软雅黑;
            font-weight: 400;
            color: #888;
            padding-bottom: 36px;
            padding-top: 75px;
            text-align: center;
            cursor: pointer;
          }
          .tab-acive {
            color: #4b4d54 !important;
            font-weight: 500 !important;
          }
          .tab-line {
            width: 400px;
            height: 2px;
            background-color: #4b4d54;
            position: absolute;
            transition: all 0.3s;
            transform: translateX(0px);
            bottom: 0;
            left: 0;
          }
        }
      }
      .picBox {
        width: 100%;
        height: 100px;
      }
    }
    .platformContainer {
      width: 100%;
      padding-bottom: 80px;
      background-color: #e6e7e8;
      .button-box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 19px;
        .button-item-1 {
          position: relative;
          cursor: pointer;
          width: 358px;
          height: 162px;
          margin: 0 1.5px;
          padding: 0 70px 0 40px;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .buton-icon {
            margin-bottom: 20px;
          }
          .button-text {
            margin-bottom: 20px;
            font-size: 28px;
            font-family: 微软雅黑;
            font-weight: 400;
            vertical-align: bottom;
            line-height: 46px;
          }
        }
        .button1-active {
          background: url('../../assets/images/menu/button2.png') no-repeat;
          color: #fff;
        }
        .button-item-2 {
          position: relative;
          cursor: pointer;
          width: 230px;
          height: 80px;
          border-radius: 40px;
          margin: 0 1.5px;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0 0 0 30px;
          .buton-icon {
          }
          .button-text {
            width: 142px;
            text-align: center;
            line-height: 55px;
            font-size: 22px;
            font-family: 微软雅黑;
            font-weight: 400;
          }
        }
        .button2-active {
          background: url('../../assets/images/menu/button1.png') no-repeat 50%;
          color: #fff;
        }
      }
      .carouseBox {
        width: 100%;
        height: 484px;
        margin-bottom: 22px;
        position: relative;
        .preview-box {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%, 0);
          width: 900px;
          height: 100%;
          z-index: 2;
          background-color: #fff;
          border-radius: 20px;
          display: flex;
          align-items: flex-start;
          // justify-content: space-between;
          flex-direction: column;
          padding: 20px 20px 0 20px;
          .preview-img {
            width: 860px;
          }
          .preview-textBox {
            width: 100%;
            height: 75px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            .bigTitle {
              font-size: 28px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #000;
              line-height: 32px;
            }
            .underline {
              margin-top: 7px;
              width: 30px;
              border-top: 4px solid #000;
            }
            .text-content {
              font-size: 18px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #777;
              line-height: 32px;
            }
          }
        }
        .left-Carouse-button {
          position: absolute;
          bottom: 70px;
          left: 50%;
          transform: translate(-650px, 0);
        }
        .leftCarouse {
          cursor: pointer;
          width: 350px;
          height: 196px;
          background: #b4aeae;
          border-radius: 10px;
          padding: 10px 10px 0 10px;
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translate(-550px, 0);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-direction: column;
          .Carouse-img {
            width: 330px;
          }
          .smallBox {
            width: 100%;
            height: 32px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            .smallTitle {
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #000;
              line-height: 12px;
            }
            .smallUnderline {
              margin-top: 0;
              width: 13px;
              border-top: 1px solid #000;
            }
            .smallContent {
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #777;
              line-height: 12px;
              width: 330px;
              height: 13px;
              overflow: hidden;
            }
          }
        }
        .right-Carouse-button {
          position: absolute;
          bottom: 70px;
          right: 50%;
          transform: translate(650px, 0);
        }
        .rightCarouse {
          cursor: pointer;
          width: 350px;
          height: 196px;
          background: #b4aeae;
          border-radius: 10px;
          padding: 10px 10px 0 10px;
          position: absolute;
          bottom: 5px;
          right: 50%;
          transform: translate(550px, 0);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-direction: column;
          .Carouse-img {
            width: 330px;
          }
          .smallBox {
            width: 100%;
            height: 32px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            .smallTitle {
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #000;
              line-height: 12px;
            }
            .smallUnderline {
              margin-top: 0;
              width: 13px;
              border-top: 1px solid #000;
            }
            .smallContent {
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #777;
              line-height: 12px;
              width: 330px;
              height: 13px;
              overflow: hidden;
            }
          }
        }
      }
      .navDiv {
        cursor: pointer;
        padding-top: 50px;
        width: 170px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        .navBlack {
          width: 16px;
          height: 16px;
          border: 1px solid #4b4d54;
          border-radius: 50%;
          margin: 0 5px;
        }
        .nav-active {
          background: #4b4d54;
        }
      }
      .yun-box {
        width: 1200px;
        height: 580px;
        margin: 0 auto;
        position: relative;
        .topBox {
          width: 100%;
          height: 223px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          .leftPic {
            z-index: 2;
            width: 168px;
            height: 133px;
            margin-top: 47px;
            .image {
            }
          }
          .textSty {
            width: 566px;
            height: 80px;
            background: #fff;
            border-radius: 10px;
            display: inline-block;
            text-align: center;
            margin-top: 10px;
            font-size: 24px;
            font-family: 微软雅黑;
            font-weight: 400;
            color: #4b4d54;
            line-height: 80px;
          }
          .rightPic {
            margin-top: 42px;
            z-index: 2;
            width: 160px;
            height: 141px;
          }
        }
        .moreBox {
          // position: absolute;
          margin-top: -420px;
          text-align: center;
          width: 1200px;
          height: 358px;
          background: #fff;
          border-radius: 20px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          .pic-item {
            height: 318px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .picBox {
              vertical-align: top;
              width: 275px;
              height: 318px;
              background: #f4f5f6;
              border-radius: 10px;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              flex-direction: column;
              .textdata {
                display: inline-block;
                margin-top: 30px;
                font-size: 24px;
                font-family: 微软雅黑;
                font-weight: 500;
                color: #4b4d54;
              }
              .picicon-box {
                margin-top: 39px;
                display: flex;
                align-items: center;
                justify-content: center;
                .iconBlock {
                  width: 70px;
                  height: 107px;
                  .iconTitle {
                    font-size: 14px;
                    font-family: 微软雅黑;
                    font-weight: 400;
                    color: #888;
                    line-height: 32px;
                  }
                }
              }
              .textTitle {
                margin-top: 12px;
                font-size: 20px;
                font-family: 微软雅黑;
                font-weight: 400;
                color: #4b4d54;
              }
              .pic-line {
                width: 20px;
                height: 2px;
                background: rgb(75, 77, 84);
                border-radius: 1px;
                margin: 5px auto;
              }
              .textDesc {
                height: 16px;
                font-size: 16px;
                font-family: 微软雅黑;
                font-weight: 400;
                color: #888;
                line-height: 31px;
              }
            }
            .nexticon {
              margin-left: 5px;
              width: 10px;
              height: 318px;
              display: inline-block;
              text-align: center;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
        .containerBox {
          margin-top: 20px;
          width: 1200px;
          height: 359px;
          background: #4b4d54;
          border-radius: 20px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 15px;
          .ssyFooter {
            flex-shrink: 0;
            margin-left: 21px;
            font-size: 24px;
            font-family: 微软雅黑;
            font-weight: 400;
            color: #fff;
            line-height: 32px;
            opacity: 0.5;
          }
        }
      }
    }
    .sameSty-box {
      width: 1200px;
      margin: 20px auto 0;
      padding-bottom: 81px;
      display: flex;
      flex-direction: column;
      .sameSty {
        flex-shrink: 0;
        margin-top: 90px;
        width: 1200px;
        height: 234px;
        background: #f5f6f6;
        border-radius: 20px;
        position: relative;
        .imgSty {
          position: absolute;
          top: -48px;
        }
        .brand {
          margin-left: 8px;
          position: absolute;
          top: -35px;
          left: 450px;
          font-size: 24px;
          height: 23px;
          font-family: 微软雅黑;
          font-weight: 500;
          color: #444;
          line-height: 26px;
        }

        .container {
          margin-left: 9px;
          position: absolute;
          top: 15px;
          left: 450px;
          width: 710px;
          height: 234px;
          .textBox {
            font-size: 18px;
            font-family: 微软雅黑;
            font-weight: 400;
            color: #777;
            line-height: 30px;
          }
          hr {
            height: 1px;
            margin-top: 20px;
            margin-bottom: 20px;
            border: 0;
            border-top: 1px solid #eee;
          }
          .buttonBox {
            .button {
              width: 170px;
              height: 30px;
              background: #4b4d54;
              line-height: 6px;
              border-radius: 20px;
              padding: 12px 23px;
              border-color: #a6a9ad;
              border: 1px;
              color: #fff;
              font-weight: 500;
              font-size: 14px;
              margin-right: 10px;
            }
          }
          .singleText {
            margin-top: 10px;
            width: 700px;
            height: 19px;
            font-size: 18px;
            font-family: 微软雅黑;
            font-weight: 400;
            color: #4b4d54;
            line-height: 24px;
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
</style>
