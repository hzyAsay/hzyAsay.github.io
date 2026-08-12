# 傩戏 · 千面神灵的召唤

> 基于 Three.js 的非遗文化数字展示与交互实践

<p class="project-abstract">本项目围绕傩戏文化的数字化展示需求，使用 Web 前端与 Three.js 技术呈现傩戏面具、文化资料和交互场景。项目通过三维模型展示、粒子动画、场景切换和文化内容组织，探索非遗文化在网页端的可视化与交互表达方式。</p>

## 项目信息

<div class="info-grid">
  <div class="info-item">
    <span class="info-label">项目类型</span>
    <span class="info-value">数字文化与交互应用</span>
  </div>
  <div class="info-item">
    <span class="info-label">项目主题</span>
    <span class="info-value">傩戏非遗文化数字展示</span>
  </div>
  <div class="info-item">
    <span class="info-label">项目状态</span>
    <span class="info-value">已完成主要功能开发</span>
  </div>
  <div class="info-item">
    <span class="info-label">个人角色</span>
    <span class="info-value">参与前端页面、三维展示及交互功能开发</span>
  </div>
  <div class="info-item">
    <span class="info-label">三维技术</span>
    <span class="info-value">Three.js</span>
  </div>
  <div class="info-item">
    <span class="info-label">前端技术</span>
    <span class="info-value">Vue3、TypeScript</span>
  </div>
  <div class="info-item">
    <span class="info-label">样式工具</span>
    <span class="info-value">Tailwind CSS</span>
  </div>
</div>

## 项目背景与目标

傩戏是中国传统民间艺术形式，具有丰富的文化内涵和视觉特征。本项目尝试通过 Web 技术将傩戏面具、文化背景和互动体验整合到网页端，为非遗文化的数字化展示提供一种实践路径。

<div class="problem-cards">
  <div class="problem-card">
    <div class="problem-card-num">目标一</div>
    <p>使用 Three.js 实现傩戏面具等文化元素的三维模型加载与网页端展示。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">目标二</div>
    <p>通过场景切换、粒子动画和交互控制提升文化内容的展示效果。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">目标三</div>
    <p>组织傩戏历史、面具图谱和传承印记等文化内容，形成完整的展示叙事。</p>
  </div>
</div>

## 个人角色与贡献

<div class="role-list">
  <div class="role-item">参与页面视觉与交互设计</div>
  <div class="role-item">参与前端页面开发</div>
  <div class="role-item">参与 Three.js 场景搭建</div>
  <div class="role-item">参与三维模型加载与控制</div>
  <div class="role-item">参与粒子动画效果实现</div>
  <div class="role-item">参与文化内容整理与页面展示</div>
</div>

## 系统方案与技术实现

<div class="method-tags">
  <span class="method-tag">Vue3</span>
  <span class="method-tag">TypeScript</span>
  <span class="method-tag">Three.js</span>
  <span class="method-tag">Tailwind CSS</span>
</div>

<p>项目早期使用 React 开发部分页面，后续主要采用 Vue3 进行重构。当前项目以 Vue3 作为主要前端框架，配合 TypeScript 进行类型管理，使用 Tailwind CSS 处理页面样式。三维展示部分基于 Three.js 实现，负责模型加载、场景渲染和交互控制。</p>

<div class="method-chain">
  <span class="chain-item">文化内容整理</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">Vue3 页面构建</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">Three.js 场景搭建</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">模型加载与渲染</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">粒子动画与交互</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">场景切换与展示</span>
</div>

## 核心功能

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>三维模型加载与展示</h4>
    <p>基于 Three.js 实现傩戏面具等三维模型的加载与网页端展示。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>模型交互控制</h4>
    <p>支持模型旋转、缩放和视角控制，用户可通过鼠标操作查看模型细节。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>粒子动画效果</h4>
    <p>使用粒子动画增强场景动态效果，配合文化内容营造展示氛围。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>傩戏文化内容展示</h4>
    <p>组织傩戏历史、面具图谱和传承印记等内容，通过页面进行结构化展示。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>场景切换</h4>
    <p>通过场景切换连接不同文化主题页面，提升交互性和内容连贯性。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>多设备响应式适配</h4>
    <p>适配不同屏幕尺寸，保证桌面端和移动端的正常浏览体验。</p>
  </div>
</div>

## 项目截图

<div class="screenshot-gallery">
  <div class="screenshot-card">
    <img src="/assets/project_screenshots/project4傩戏%20·%20千面神灵的召唤/1《五方傩境：千年傩韵的数字新生》.png" alt="" loading="lazy" />
    <p class="screenshot-name">五方傩境</p>
  </div>
  <div class="screenshot-card">
    <img src="/assets/project_screenshots/project4傩戏%20·%20千面神灵的召唤/2《五方寻境：非遗文化的数字交互叙事》.jpg" alt="" loading="lazy" />
    <p class="screenshot-name">五方寻境</p>
  </div>
  <div class="screenshot-card">
    <img src="/assets/project_screenshots/project4傩戏%20·%20千面神灵的召唤/3《千面神灵：傩面之下的文化图谱》.jpg" alt="" loading="lazy" />
    <p class="screenshot-name">千面神灵</p>
  </div>
  <div class="screenshot-card">
    <img src="/assets/project_screenshots/project4傩戏%20·%20千面神灵的召唤/4《古戏流芳：傩戏匠人的传承印记》.jpg" alt="" loading="lazy" />
    <p class="screenshot-name">古戏流芳</p>
  </div>
</div>

## 项目成果

<div class="research-result">
<strong>竞赛获奖：</strong>2026 年未来设计师·全国高校数字艺术设计大赛 · 省级一等奖
</div>

## 完成情况与不足

<div class="eval-grid">
  <div class="eval-col">
    <h4>当前完成情况</h4>
    <ul>
      <li>完成四个主要文化展示页面的开发</li>
      <li>完成 Three.js 三维模型加载与交互控制</li>
      <li>完成粒子动画和场景切换效果</li>
      <li>完成多设备响应式适配</li>
    </ul>
  </div>
  <div class="eval-col">
    <h4>后续改进</h4>
    <ul>
      <li>优化三维模型加载性能和渲染效率</li>
      <li>增加更多文化内容的深度展示</li>
      <li>改进移动端三维交互体验</li>
      <li>补充页面加载优化和资源预加载</li>
    </ul>
  </div>
</div>

## 项目总结

本项目通过 Three.js 实现了傩戏文化元素的网页端三维展示，结合粒子动画和场景切换完成了"五方傩境""千面神灵"等四个主题页面的开发。项目实践了三维模型加载、交互控制和多端适配等技术环节，探索了数字文化内容与交互设计结合的路径。三维模型性能和多端交互体验仍可继续优化。
