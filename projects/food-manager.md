# Food Manager

> 基于 Spring Boot 与 Vue3 的前后端分离餐饮管理系统

<p class="project-abstract">Food Manager 是一个包含用户端和管理端的餐饮业务管理系统。项目采用 Spring Boot、MyBatis Plus、Vue3 和 MySQL 实现菜单展示、用户点餐、订单管理、菜品管理及数据统计等功能，用于实践前后端分离架构、数据库设计和业务模块开发。</p>

## 项目信息

<div class="info-grid">
  <div class="info-item">
    <span class="info-label">项目类型</span>
    <span class="info-value">软件系统开发</span>
  </div>
  <div class="info-item">
    <span class="info-label">系统结构</span>
    <span class="info-value">前后端分离</span>
  </div>
  <div class="info-item">
    <span class="info-label">后端</span>
    <span class="info-value">Spring Boot、MyBatis Plus</span>
  </div>
  <div class="info-item">
    <span class="info-label">前端</span>
    <span class="info-value">Vue3</span>
  </div>
  <div class="info-item">
    <span class="info-label">数据库</span>
    <span class="info-value">MySQL</span>
  </div>
  <div class="info-item">
    <span class="info-label">可视化</span>
    <span class="info-value">ECharts</span>
  </div>
  <div class="info-item">
    <span class="info-label">项目状态</span>
    <span class="info-value">已完成主要功能开发</span>
  </div>
  <div class="info-item">
    <span class="info-label">个人角色</span>
    <span class="info-value">参与系统功能设计、后端接口开发及前后端联调</span>
  </div>
</div>

## 项目背景与目标

餐饮业务涉及菜单管理、用户点餐、订单处理和数据分析等多个环节。本项目通过前后端分离方式实现餐饮管理系统的核心功能，用于实践数据库设计、RESTful API 开发和业务模块实现。

<div class="problem-cards">
  <div class="problem-card">
    <div class="problem-card-num">目标一</div>
    <p>实现用户端菜单浏览、点餐和购物车等基础功能。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">目标二</div>
    <p>实现管理端菜品维护、订单处理和数据统计功能。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">目标三</div>
    <p>实践前后端分离架构和 Controller-Service-Mapper 分层开发。</p>
  </div>
</div>

## 个人角色与贡献

<div class="role-list">
  <div class="role-item">参与需求分析与功能设计</div>
  <div class="role-item">参与数据库表设计</div>
  <div class="role-item">参与后端接口开发</div>
  <div class="role-item">参与管理端和用户端页面开发</div>
  <div class="role-item">参与订单和菜品模块实现</div>
  <div class="role-item">参与前后端联调与系统测试</div>
</div>

## 技术方案

<div class="method-chain">
  <span class="chain-item">Vue3 前端</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">RESTful API</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">Spring Boot</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">Service 业务层</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">MyBatis Plus</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">MySQL</span>
</div>

<div class="method-tags">
  <span class="method-tag">Spring Boot</span>
  <span class="method-tag">MyBatis Plus</span>
  <span class="method-tag">Vue3</span>
  <span class="method-tag">MySQL</span>
  <span class="method-tag">ECharts</span>
</div>

<p>后端采用 Controller-Service-Mapper 三层架构，通过 MyBatis Plus 简化数据库操作。前端使用 Vue3 构建页面，通过 RESTful API 与后端通信。ECharts 用于管理端销售数据可视化展示。用户登录后根据角色判断访问权限，控制管理端和用户端的功能入口。</p>

## 核心实现

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>用户注册与登录</h4>
    <p>实现用户注册、登录和角色判断，区分用户端和管理端入口。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>菜单和菜品展示</h4>
    <p>用户端展示可用菜品列表，支持分类浏览和详情查看。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>购物车与点餐流程</h4>
    <p>用户可添加菜品到购物车，确认后提交订单。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>订单管理</h4>
    <p>管理端查看和处理订单，管理订单状态变更。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>菜品管理</h4>
    <p>管理端实现菜品的增删改查操作。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>餐桌预约</h4>
    <p>用户可预约餐桌，管理端查看预约信息。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>数据统计可视化</h4>
    <p>管理端使用 ECharts 展示销售数据和业务指标。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>管理员 Dashboard</h4>
    <p>管理端首页展示关键业务数据和快捷操作入口。</p>
  </div>
</div>

## 项目截图

<div class="screenshot-gallery">
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project3Food%20Manager/1登录页面截图.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project3Food%20Manager/1登录页面截图.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">登录页面</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project3Food%20Manager/2管理员首页%20Dashboard.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project3Food%20Manager/2管理员首页%20Dashboard.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">管理员 Dashboard</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project3Food%20Manager/3购物车页面.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project3Food%20Manager/3购物车页面.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">购物车</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project3Food%20Manager/4订单管理页面.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project3Food%20Manager/4订单管理页面.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">订单管理</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project3Food%20Manager/5菜品管理页面.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project3Food%20Manager/5菜品管理页面.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">菜品管理</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project3Food%20Manager/6餐桌预约页面.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project3Food%20Manager/6餐桌预约页面.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">餐桌预约</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project3Food%20Manager/7用户点餐页面.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project3Food%20Manager/7用户点餐页面.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">用户点餐</p>
  </div>
</div>

## 结果与验证

<div class="result-cards">
  <div class="result-card">
    <div class="result-card-title">已完成模块</div>
    <p>用户端登录注册、菜单浏览、购物车点餐、餐桌预约；管理端 Dashboard、菜品管理、订单管理、数据统计可视化。</p>
  </div>
  <div class="result-card">
    <div class="result-card-title">接口联调</div>
    <p>前后端接口完成联调，订单创建、状态变更和菜品增删改查流程正常运行。</p>
  </div>
  <div class="result-card">
    <div class="result-card-title">数据库验证</div>
    <p>MySQL 数据库各表增删改查操作正常，数据一致性保持良好。</p>
  </div>
</div>

## 项目不足与改进

<div class="eval-grid">
  <div class="eval-col">
    <h4>当前不足</h4>
    <ul>
      <li>角色权限控制较为基础，未实现细粒度权限管理</li>
      <li>缺少自动化测试，主要依赖手动测试验证</li>
      <li>未处理高并发场景下的数据一致性问题</li>
      <li>前端页面交互细节仍有优化空间</li>
    </ul>
  </div>
  <div class="eval-col">
    <h4>后续改进</h4>
    <ul>
      <li>完善权限体系和接口安全校验</li>
      <li>补充单元测试和接口测试</li>
      <li>优化订单流程异常处理</li>
      <li>改进前端用户体验和响应速度</li>
    </ul>
  </div>
</div>

## 项目总结

本项目通过实现餐饮管理系统的用户端和管理端核心功能，实践了 Spring Boot 后端开发、Vue3 前端开发、MySQL 数据库设计和前后端分离架构。在订单管理、菜品维护和数据可视化等模块的开发中，加深了对业务流程设计和 RESTful API 接口开发的理解。系统在权限控制和测试覆盖方面仍有改进空间。
