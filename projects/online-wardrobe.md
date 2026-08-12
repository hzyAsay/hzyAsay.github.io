# Online Wardrobe

> 基于 Java Servlet 与 Vue3 的在线服装商城系统

<p class="project-abstract">Online Wardrobe 是一个包含用户端和管理后台的在线服装商城系统。项目使用 Java Servlet、Vue3 和 MySQL，实现商品浏览、搜索筛选、购物车、订单创建、用户认证和后台管理等基础功能，用于实践商城业务流程、接口设计和权限控制。</p>

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
    <span class="info-value">Java Servlet</span>
  </div>
  <div class="info-item">
    <span class="info-label">前端</span>
    <span class="info-value">Vue3、Element Plus</span>
  </div>
  <div class="info-item">
    <span class="info-label">数据库</span>
    <span class="info-value">MySQL</span>
  </div>
  <div class="info-item">
    <span class="info-label">身份认证</span>
    <span class="info-value">JWT</span>
  </div>
  <div class="info-item">
    <span class="info-label">密码处理</span>
    <span class="info-value">BCrypt</span>
  </div>
  <div class="info-item">
    <span class="info-label">项目状态</span>
    <span class="info-value">已完成主要功能开发</span>
  </div>
  <div class="info-item">
    <span class="info-label">个人角色</span>
    <span class="info-value">参与商城功能开发、用户认证及订单模块实现</span>
  </div>
</div>

## 项目背景与目标

服装商城业务涉及商品展示、搜索筛选、购物车、订单管理、用户认证和后台维护等环节。本项目通过前后端分离方式实现服装商城的基础功能，用于实践 Servlet 接口开发、JWT 身份认证、商城业务流程和后台权限控制。

<div class="problem-cards">
  <div class="problem-card">
    <div class="problem-card-num">目标一</div>
    <p>实现用户端商品浏览、搜索筛选、购物车和订单提交等基础流程。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">目标二</div>
    <p>实现管理后台的商品维护、订单处理和基础数据管理功能。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">目标三</div>
    <p>实践 JWT 身份认证、BCrypt 密码哈希和后台接口权限判断。</p>
  </div>
</div>

## 个人角色与贡献

<div class="role-list">
  <div class="role-item">参与商品模块开发</div>
  <div class="role-item">参与搜索和筛选功能实现</div>
  <div class="role-item">参与购物车和订单流程开发</div>
  <div class="role-item">参与用户注册登录与 JWT 身份验证</div>
  <div class="role-item">参与管理后台页面开发</div>
  <div class="role-item">参与数据库设计与接口联调</div>
</div>

## 技术方案

<div class="method-chain">
  <span class="chain-item">Vue3 前端</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">RESTful API</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">Java Servlet</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">Service 业务层</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">MySQL</span>
</div>

<div class="method-tags">
  <span class="method-tag">Java Servlet</span>
  <span class="method-tag">Vue3</span>
  <span class="method-tag">Element Plus</span>
  <span class="method-tag">MySQL</span>
  <span class="method-tag">JWT</span>
  <span class="method-tag">BCrypt</span>
</div>

<p>后端使用 Java Servlet 处理 HTTP 请求，按功能划分接口，业务逻辑由 Service 层实现，数据持久化到 MySQL。前端使用 Vue3 和 Element Plus 构建页面，通过 RESTful API 与后端通信。用户登录后由后端签发 JWT 令牌，前端在后续请求中携带令牌，后端校验令牌并判断访问权限。用户密码使用 BCrypt 进行哈希存储，不保存明文。</p>

## 核心实现

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>用户注册与登录</h4>
    <p>实现用户注册、登录和 JWT 令牌签发，密码使用 BCrypt 哈希存储。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>商品浏览与详情</h4>
    <p>用户端展示商品列表和商品详情，支持查看商品图片与基本信息。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>搜索与筛选</h4>
    <p>支持按关键字搜索商品，并按分类等条件进行筛选。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>购物车</h4>
    <p>用户可添加商品到购物车，修改数量并提交结算。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>订单提交与状态管理</h4>
    <p>实现订单提交、结算流程与状态管理，记录订单基本信息。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>管理后台</h4>
    <p>管理后台实现商品管理、订单管理和用户管理的基础操作。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>JWT 身份验证</h4>
    <p>登录后签发 JWT 令牌，后端校验令牌并控制接口访问权限。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>后台权限判断</h4>
    <p>后台接口根据用户角色判断访问权限，区分普通用户与管理员入口。</p>
  </div>
</div>

## 项目截图

<div class="screenshot-gallery">
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project5Online%20Wardrobe/1商城首页.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project5Online%20Wardrobe/1商城首页.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">商城首页</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project5Online%20Wardrobe/2商品详情页.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project5Online%20Wardrobe/2商品详情页.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">商品详情</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project5Online%20Wardrobe/3管理员后台首页.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project5Online%20Wardrobe/3管理员后台首页.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">管理员后台</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project5Online%20Wardrobe/4购物车页面.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project5Online%20Wardrobe/4购物车页面.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">购物车</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project5Online%20Wardrobe/5用户订单页面.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project5Online%20Wardrobe/5用户订单页面.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">用户订单</p>
  </div>
</div>

## 结果与验证

<div class="result-cards">
  <div class="result-card">
    <div class="result-card-title">已完成模块</div>
    <p>用户端注册登录、商品浏览、搜索筛选、购物车、订单提交；管理后台商品管理、订单管理、用户管理；JWT 身份验证与后台权限判断。</p>
  </div>
  <div class="result-card">
    <div class="result-card-title">接口联调</div>
    <p>前后端接口完成联调，商品浏览、购物车、订单提交和后台管理流程正常运行。</p>
  </div>
  <div class="result-card">
    <div class="result-card-title">认证与权限验证</div>
    <p>JWT 令牌签发与校验流程正常，BCrypt 密码哈希存储有效，后台接口权限判断符合设计预期。</p>
  </div>
  <div class="result-card">
    <div class="result-card-title">数据库验证</div>
    <p>MySQL 各表增删改查操作正常，订单状态变更和商品数据更新保持一致。</p>
  </div>
</div>

## 项目不足与改进

<div class="eval-grid">
  <div class="eval-col">
    <h4>当前不足</h4>
    <ul>
      <li>未接入真实支付平台，订单结算仅为流程模拟</li>
      <li>权限控制以角色判断为主，未实现细粒度权限</li>
      <li>缺少自动化测试，主要依赖手动测试验证</li>
      <li>未处理高并发场景下的库存与订单一致性问题</li>
      <li>商品搜索功能较为基础，未引入全文检索</li>
    </ul>
  </div>
  <div class="eval-col">
    <h4>后续改进</h4>
    <ul>
      <li>完善订单结算流程与状态异常处理</li>
      <li>补充接口权限校验和安全性测试</li>
      <li>增加单元测试和接口测试覆盖</li>
      <li>优化商品搜索与筛选性能</li>
      <li>改进前端交互细节和响应速度</li>
    </ul>
  </div>
</div>

## 项目总结

本项目通过实现服装商城的用户端和管理后台基础功能，实践了 Java Servlet 接口开发、Vue3 前端构建、MySQL 数据库设计以及 JWT 身份认证和 BCrypt 密码哈希。在购物车、订单提交和后台权限判断等模块的开发中，加深了对商城业务流程和接口安全控制的理解。系统在支付流程、权限粒度和测试覆盖方面仍有改进空间。
