# Big Fish Eat Small Fish

> 基于 Java Swing 的双人休闲游戏

<p class="project-abstract">该项目使用 Java Swing 和 AWT 实现双人休闲游戏，包含角色移动、鱼类生成、碰撞判断、分数变化、技能机制、关卡流程以及开始、暂停和结束状态管理，用于实践面向对象设计、事件监听和图形界面开发。</p>

## 项目信息

<div class="info-grid">
  <div class="info-item">
    <span class="info-label">项目类型</span>
    <span class="info-value">Java 程序设计实践</span>
  </div>
  <div class="info-item">
    <span class="info-label">编程语言</span>
    <span class="info-value">Java</span>
  </div>
  <div class="info-item">
    <span class="info-label">GUI 框架</span>
    <span class="info-value">Swing、AWT</span>
  </div>
  <div class="info-item">
    <span class="info-label">核心机制</span>
    <span class="info-value">碰撞检测、双缓冲渲染、状态管理</span>
  </div>
  <div class="info-item">
    <span class="info-label">游戏模式</span>
    <span class="info-value">双人模式</span>
  </div>
  <div class="info-item">
    <span class="info-label">项目状态</span>
    <span class="info-value">已完成核心功能</span>
  </div>
  <div class="info-item">
    <span class="info-label">个人角色</span>
    <span class="info-value">参与游戏逻辑设计、界面开发与功能实现</span>
  </div>
</div>

## 项目背景与目标

Java Swing 是 Java 平台的桌面图形界面开发工具包，适合用于练习面向对象设计、事件监听和图形绘制。本项目通过实现一款双人休闲游戏，用于实践面向对象设计、事件驱动编程和图形界面开发。

<div class="problem-cards">
  <div class="problem-card">
    <div class="problem-card-num">目标一</div>
    <p>实现双人角色控制、鱼类生成移动和碰撞判断等游戏基础玩法。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">目标二</div>
    <p>实现分数成长、隐身技能和关卡切换等游戏机制。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">目标三</div>
    <p>实现开始、暂停和结束状态管理，并使用双缓冲渲染保证画面流畅。</p>
  </div>
</div>

## 个人角色与贡献

<div class="role-list">
  <div class="role-item">参与游戏功能设计与逻辑实现</div>
  <div class="role-item">参与双人角色控制和键盘事件监听</div>
  <div class="role-item">参与鱼类对象生成与移动逻辑</div>
  <div class="role-item">参与碰撞判断与分数成长机制</div>
  <div class="role-item">参与隐身技能和关卡流程实现</div>
  <div class="role-item">参与游戏状态管理和界面绘制</div>
</div>

## 技术方案

<div class="method-chain">
  <span class="chain-item">键盘事件</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">角色控制</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">鱼类生成移动</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">碰撞判断</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">分数与状态更新</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">双缓冲绘制</span>
</div>

<div class="method-tags">
  <span class="method-tag">Java</span>
  <span class="method-tag">Swing</span>
  <span class="method-tag">AWT</span>
  <span class="method-tag">事件监听</span>
  <span class="method-tag">双缓冲渲染</span>
</div>

<p>项目使用 Java Swing 和 AWT 构建游戏窗口和图形界面。通过键盘事件监听实现双人角色控制，游戏循环中更新鱼类对象的位置和状态。碰撞判断基于角色边界或碰撞区域进行检测，触发分数变化和成长机制。绘制阶段使用双缓冲技术，先将画面绘制到缓冲图像再统一显示，避免画面闪烁。游戏通过状态变量管理开始、暂停和结束等流程切换。</p>

## 核心实现

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>键盘事件监听</h4>
    <p>监听键盘输入，实现双人角色的方向控制和技能触发。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>双人角色控制</h4>
    <p>支持两名玩家同时操作各自角色，独立控制移动和技能。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>鱼类生成与移动</h4>
    <p>游戏过程中生成不同大小的鱼类对象，并按设定逻辑移动。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>碰撞判断</h4>
    <p>基于角色边界或碰撞区域进行鱼类碰撞判断，触发吃鱼或被吃结果。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>分数与成长机制</h4>
    <p>角色吃鱼后增加分数并成长，体型变化影响后续碰撞结果。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>隐身技能</h4>
    <p>角色可触发隐身技能，在一定时间内躲避碰撞判定。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>关卡切换</h4>
    <p>根据分数或条件切换关卡，调整难度和鱼类生成规则。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>游戏状态管理</h4>
    <p>实现开始、暂停和结束状态的切换与对应界面显示。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>双缓冲绘制</h4>
    <p>使用双缓冲技术绘制游戏画面，避免画面闪烁。</p>
  </div>
</div>

## 项目截图

<div class="screenshot-gallery">
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project2Big%20Fish%20Eat%20Small%20Fish/1游戏主菜单.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project2Big%20Fish%20Eat%20Small%20Fish/1游戏主菜单.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">游戏主菜单</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project2Big%20Fish%20Eat%20Small%20Fish/2游戏运行.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project2Big%20Fish%20Eat%20Small%20Fish/2游戏运行.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">游戏运行界面</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project2Big%20Fish%20Eat%20Small%20Fish/3隐身技能.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project2Big%20Fish%20Eat%20Small%20Fish/3隐身技能.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">隐身技能</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project2Big%20Fish%20Eat%20Small%20Fish/4双人模式%20.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project2Big%20Fish%20Eat%20Small%20Fish/4双人模式%20.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">双人模式</p>
  </div>
</div>

## 结果与验证

<div class="result-cards">
  <div class="result-card">
    <div class="result-card-title">已完成功能</div>
    <p>双人角色控制、鱼类生成移动、碰撞判断、分数成长、隐身技能、关卡切换和开始/暂停/结束状态管理。</p>
  </div>
  <div class="result-card">
    <div class="result-card-title">游戏流程验证</div>
    <p>游戏可从主菜单进入运行状态，双人模式下角色控制、吃鱼成长和技能触发流程正常。</p>
  </div>
  <div class="result-card">
    <div class="result-card-title">渲染验证</div>
    <p>双缓冲绘制生效，游戏运行过程中画面无明显闪烁，角色和鱼类对象显示正常。</p>
  </div>
  <div class="result-card">
    <div class="result-card-title">状态切换验证</div>
    <p>开始、暂停和结束状态切换正常，对应界面显示符合设计预期。</p>
  </div>
</div>

## 项目不足与改进

<div class="eval-grid">
  <div class="eval-col">
    <h4>当前不足</h4>
    <ul>
      <li>游戏画面和资源较为简单，美术效果有限</li>
      <li>碰撞判断基于边界区域，未实现更精细的形状检测</li>
      <li>关卡数量和难度曲线较为基础</li>
      <li>缺少音效和背景音乐</li>
      <li>未持久化历史最高分等游戏数据</li>
    </ul>
  </div>
  <div class="eval-col">
    <h4>后续改进</h4>
    <ul>
      <li>优化游戏美术资源和动画效果</li>
      <li>增加更多关卡和游戏模式</li>
      <li>加入音效和背景音乐提升体验</li>
      <li>增加分数持久化和排行榜功能</li>
      <li>优化代码结构，提升可维护性</li>
    </ul>
  </div>
</div>

## 项目总结

本项目通过使用 Java Swing 和 AWT 实现双人休闲游戏，实践了面向对象设计、事件驱动编程和图形界面开发。在键盘事件监听、碰撞判断、双缓冲绘制和游戏状态管理等模块的实现中，加深了对 Java 图形界面开发和游戏流程控制的理解。项目在美术资源、关卡设计和功能完整性方面仍有改进空间。
