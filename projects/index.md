---
prev:
  text: '首页'
  link: '/'
next:
  text: '学习记录'
  link: '/learning'
---

<script setup>
const categories = [
  {
    title: '数据建模与研究实践',
    desc: '围绕真实数据开展问题建模、统计分析、模型验证与决策优化。',
    projects: [
      {
        name: 'NIPT 检测时点优化',
        subtitle: '数据建模与智能分析',
        tag: '数据建模与研究实践',
        desc: '围绕孕周、BMI 与胎儿 Y 染色体浓度之间的关系，开展数据清洗、回归建模、聚类分析、风险分层和检测时点优化。',
        role: '队长，负责整体建模方案设计、数据处理、模型实现、结果可视化及论文撰写。',
        methods: ['数据清洗', '多项式回归', 'KMeans 聚类', '风险分层', '检测时点优化'],
        result: '2025 年全国大学生数学建模竞赛省级一等奖',
        route: '/projects/nipt'
      },
      {
        name: '医疗资源适配性研究',
        subtitle: '统计建模与空间分析',
        tag: '数据建模与研究实践',
        desc: '基于江西省 11 市面板数据，研究人口老龄化背景下医疗资源供给与老年人口需求之间的适配关系。',
        role: '队长',
        methods: ['熵权法', 'IAR 指数', "Moran's I", '空间重心迁移', '面板计量模型', '稳健性分析'],
        result: '2026 年全国大学生统计建模大赛省级二等奖',
        route: '/projects/medical-resources'
      }
    ]
  },
  {
    title: 'AI 应用与智能信息处理',
    desc: '探索文档分析、能力评估和 AI 服务在实际业务系统中的应用。',
    projects: [
      {
        name: 'CareerTwin CampusOS',
        subtitle: '高校学生求职辅助平台',
        tag: 'AI 应用与智能信息处理',
        desc: '面向高校学生的文档分析、能力评估与求职辅助平台。',
        role: '参与平台功能设计、前后端模块开发及 AI 服务集成。',
        methods: ['Spring Boot', 'Vue3', 'TypeScript', 'FastAPI', 'Python', 'MySQL', 'Redis'],
        status: '持续开发中',
        route: '/projects/careertwin'
      }
    ]
  },
  {
    title: '数字文化与交互应用',
    desc: '结合 Web 三维技术和交互设计，探索文化内容的数字化表达。',
    projects: [
      {
        name: '傩戏 · 千面神灵的召唤',
        subtitle: '非遗文化数字展示平台',
        tag: '数字文化与交互应用',
        desc: '基于 Web 与 Three.js 技术实现的非遗文化数字展示平台。',
        role: '参与前端页面开发、三维交互展示及视觉效果实现。',
        methods: ['Vue3', 'React', 'TypeScript', 'Three.js', 'Tailwind CSS', '交互设计'],
        route: '/projects/nuoxi'
      }
    ]
  },
  {
    title: '软件系统开发',
    desc: '通过前后端分离、数据库设计和业务模块开发完成系统实践。',
    projects: [
      {
        name: 'Food Manager',
        subtitle: '前后端分离餐饮管理系统',
        tag: '软件系统开发',
        desc: '基于 Spring Boot、MyBatis Plus、Vue3、MySQL 和 ECharts 开发的餐饮业务管理系统，包含用户端和管理端。',
        role: '参与系统功能设计、后端接口开发及前后端联调。',
        methods: ['Spring Boot', 'MyBatis Plus', 'Vue3', 'MySQL', 'ECharts'],
      },
      {
        name: 'Online Wardrobe',
        subtitle: '在线服装商城系统',
        tag: '软件系统开发',
        desc: '基于 Java Servlet、Vue3 和 MySQL 开发的在线服装商城系统，包含用户端和管理后台。',
        role: '参与商城功能开发、用户认证及订单模块实现。',
        methods: ['Java Servlet', 'Vue3', 'MySQL', 'JWT', 'Element Plus', 'BCrypt'],
        route: '/projects/online-wardrobe'
      }
    ]
  },
  {
    title: '算法与程序设计实践',
    desc: '通过经典算法和程序设计项目巩固数据结构、面向对象与工程实现基础。',
    projects: [
      {
        name: 'Huffman Coding and Decoding System',
        subtitle: '无损压缩算法实现',
        tag: '算法与程序设计实践',
        desc: '基于 Huffman 编码算法实现文本、RGB 图像数据和音频字节流的无损编码与恢复。',
        role: '独立完成算法设计、功能实现和结果可视化。',
        methods: ['Python', 'Huffman Coding', 'Bitarray', 'Pillow', 'NumPy', 'Matplotlib'],
        route: '/projects/huffman'
      },
      {
        name: 'Big Fish Eat Small Fish',
        subtitle: 'Java 双人休闲游戏',
        tag: '算法与程序设计实践',
        desc: '基于 Java Swing 和 AWT 实现的双人休闲游戏，包含碰撞检测、状态管理、双缓冲渲染和关卡机制。',
        role: '参与游戏逻辑、界面交互和碰撞检测功能开发。',
        methods: ['Java', 'Swing', 'AWT', '碰撞检测', '双缓冲渲染', '状态管理'],
        route: '/projects/big-fish'
      }
    ]
  }
]
</script>

# 研究与项目

<p class="projects-intro">围绕数据建模、智能信息处理和软件系统实现，持续开展数学建模、统计分析、AI 应用及程序设计实践。以下项目重点展示问题分析、方法设计、个人贡献和成果验证过程。</p>

<div v-for="cat in categories" :key="cat.title" class="project-category">
  <h2 :id="cat.title">{{ cat.title }}</h2>
  <p class="category-desc">{{ cat.desc }}</p>
  <div class="project-cards">
    <div v-for="p in cat.projects" :key="p.name" class="project-card">
      <div class="project-card-header">
        <h3>{{ p.name }}</h3>
        <span class="project-card-tag">{{ p.tag }}</span>
      </div>
      <p v-if="p.subtitle" class="project-card-subtitle">{{ p.subtitle }}</p>
      <p class="project-card-desc">{{ p.desc }}</p>
      <div class="project-card-role">
        <span class="project-card-label">个人角色</span>
        <span>{{ p.role }}</span>
      </div>
      <div class="project-card-methods">
        <span v-for="m in p.methods" :key="m" class="project-card-method">{{ m }}</span>
      </div>
      <div v-if="p.result" class="project-card-result">
        <span class="project-card-label">项目成果</span>
        <span>{{ p.result }}</span>
      </div>
      <div v-if="p.status" class="project-card-status">
        <span class="project-card-label">项目状态</span>
        <span>{{ p.status }}</span>
      </div>
      <a :href="p.route" class="project-card-link">查看详情 →</a>
    </div>
  </div>
</div>
