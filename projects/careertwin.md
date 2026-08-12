# CareerTwin CampusOS

> 面向高校学生的求职成长与能力分析平台

<p class="project-abstract">CareerTwin CampusOS 面向高校学生求职成长场景，围绕个人资料管理、能力信息展示、求职资讯和成长辅助等需求进行系统设计。项目采用前后端分离方式开发，并尝试将 Python 数据处理或 AI 服务与 Spring Boot 业务系统结合，探索从信息输入、能力分析到结果展示的完整应用流程。</p>

## 项目信息

<div class="info-grid">
  <div class="info-item">
    <span class="info-label">项目类型</span>
    <span class="info-value">AI 应用与软件系统</span>
  </div>
  <div class="info-item">
    <span class="info-label">项目状态</span>
    <span class="info-value">持续开发中</span>
  </div>
  <div class="info-item">
    <span class="info-label">个人角色</span>
    <span class="info-value">参与平台功能设计、前后端模块开发及 AI 服务集成</span>
  </div>
  <div class="info-item">
    <span class="info-label">前端</span>
    <span class="info-value">Vue3、TypeScript</span>
  </div>
  <div class="info-item">
    <span class="info-label">业务后端</span>
    <span class="info-value">Spring Boot</span>
  </div>
  <div class="info-item">
    <span class="info-label">AI 或数据服务</span>
    <span class="info-value">FastAPI、Python</span>
  </div>
  <div class="info-item">
    <span class="info-label">数据库</span>
    <span class="info-value">MySQL</span>
  </div>
</div>

## 项目背景与目标

高校学生在求职准备过程中，个人资料、能力信息、学习记录和职位信息通常分散在不同平台。该项目尝试通过统一系统整理学生信息，并结合数据分析或 AI 服务，为能力展示和求职准备提供辅助。

<div class="problem-cards">
  <div class="problem-card">
    <div class="problem-card-num">目标一</div>
    <p>统一管理个人资料、学习记录和求职信息。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">目标二</div>
    <p>将文档或结构化数据转化为可展示的能力信息。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">目标三</div>
    <p>探索 AI 服务与传统业务系统的接口集成。</p>
  </div>
</div>

## 个人角色与贡献

<div class="role-list">
  <div class="role-item">参与需求分析与系统功能设计</div>
  <div class="role-item">参与 Vue3 前端页面开发</div>
  <div class="role-item">参与 Spring Boot 后端接口开发</div>
  <div class="role-item">参与 MySQL 数据表设计</div>
  <div class="role-item">参与 FastAPI 服务接口设计</div>
  <div class="role-item">参与前后端及 AI 服务联调</div>
</div>

## 系统方案

<div class="method-chain">
  <span class="chain-item">用户资料或文档</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">前端交互</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">Spring Boot 业务服务</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">MySQL 数据存储</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">FastAPI 分析服务</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">结果返回与页面展示</span>
</div>

<p>AI 分析模块采用独立 FastAPI 服务，与 Spring Boot 业务系统通过接口进行数据交互。前端使用 Vue3 和 TypeScript 构建页面，通过 RESTful API 与后端通信。</p>

## 核心功能

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>求职资讯展示</h4>
    <p>展示求职相关资讯内容，支持信息浏览和分类查看。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>专业能力信息管理</h4>
    <p>展示和管理学生专业能力相关信息，提供结构化信息录入与展示。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>表达能力信息展示</h4>
    <p>展示学生表达能力相关内容，支持信息查看与管理。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>求职科普</h4>
    <p>提供求职相关知识普及内容，帮助学生了解求职流程和注意事项。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>个人主页</h4>
    <p>展示学生个人基本信息、能力摘要和成长记录。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-proto">原型</div>
    <h4>文档信息提取</h4>
    <p>通过 FastAPI 服务尝试对文档进行信息提取，目前为原型阶段。</p>
  </div>
</div>

## 项目截图

<div class="screenshot-gallery">
  <div class="screenshot-card">
    <img src="/assets/project_screenshots/project6CareerTwin%20CampusOS/1求职资讯.png" alt="" loading="lazy" />
    <p class="screenshot-name">求职资讯</p>
  </div>
  <div class="screenshot-card">
    <img src="/assets/project_screenshots/project6CareerTwin%20CampusOS/2专业能力.png" alt="" loading="lazy" />
    <p class="screenshot-name">专业能力</p>
  </div>
  <div class="screenshot-card">
    <img src="/assets/project_screenshots/project6CareerTwin%20CampusOS/3表达能力.png" alt="" loading="lazy" />
    <p class="screenshot-name">表达能力</p>
  </div>
  <div class="screenshot-card">
    <img src="/assets/project_screenshots/project6CareerTwin%20CampusOS/4求职科普.png" alt="" loading="lazy" />
    <p class="screenshot-name">求职科普</p>
  </div>
  <div class="screenshot-card">
    <img src="/assets/project_screenshots/project6CareerTwin%20CampusOS/5个人主页.png" alt="" loading="lazy" />
    <p class="screenshot-name">个人主页</p>
  </div>
</div>

## 完成情况与不足

<div class="eval-grid">
  <div class="eval-col">
    <h4>当前完成情况</h4>
    <ul>
      <li>完成基础用户页面和信息展示</li>
      <li>完成前后端接口交互</li>
      <li>完成求职资讯、专业能力、表达能力等核心页面</li>
      <li>完成 FastAPI 服务原型</li>
    </ul>
  </div>
  <div class="eval-col">
    <h4>后续改进</h4>
    <ul>
      <li>完善文档解析准确性</li>
      <li>增加真实岗位数据</li>
      <li>优化能力评价规则</li>
      <li>补充自动化测试</li>
      <li>完善权限与数据安全</li>
      <li>增加模型效果评价</li>
    </ul>
  </div>
</div>

## 项目总结

本项目尝试将 AI 分析服务与传统 Spring Boot 业务系统结合，实践了前后端分离架构和跨服务接口设计。通过求职资讯、能力信息和个人主页等模块的实现，初步完成了学生信息统一管理的基础功能。当前 AI 分析能力仍需进一步验证和完善，文档解析和智能推荐等功能尚处于原型阶段。
