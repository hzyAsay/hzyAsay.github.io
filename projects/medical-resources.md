# 人口老龄化背景下江西省医疗资源适配性研究

> 基于 IAR 指数、空间分析与面板数据模型的实证研究

<p class="project-abstract">本项目基于江西省 11 个设区市 2016—2024 年面板数据，研究人口老龄化需求与医疗资源供给之间的空间适配关系。通过重心迁移、偏移距离和 Moran's I 分析供需空间格局，基于每千老年人口机构数、床位数和卫生技术人员数构建医疗资源适配指数（IAR），并进行风险分层。在此基础上，采用随机效应面板模型分析城镇化、财政卫生投入和老龄压力等因素与适配水平的统计关联，并通过替代指标、滞后变量、分项回归及固定效应模型进行稳健性检验。</p>

<div class="project-notice">本项目属于统计建模竞赛研究成果，相关结果反映样本期内的统计关联，不等同于严格的因果识别结论。</div>

## 项目信息

<div class="info-grid">
  <div class="info-item">
    <span class="info-label">项目类型</span>
    <span class="info-value">统计建模与公共卫生资源分析</span>
  </div>
  <div class="info-item">
    <span class="info-label">研究区域</span>
    <span class="info-value">江西省 11 个设区市</span>
  </div>
  <div class="info-item">
    <span class="info-label">数据期间</span>
    <span class="info-value">2016—2024 年</span>
  </div>
  <div class="info-item">
    <span class="info-label">样本规模</span>
    <span class="info-value">99 个城市—年份观测值</span>
  </div>
  <div class="info-item">
    <span class="info-label">个人角色</span>
    <span class="info-value">队长</span>
  </div>
  <div class="info-item">
    <span class="info-label">项目成果</span>
    <span class="info-value">2026 年全国大学生统计建模大赛省级二等奖</span>
  </div>
  <div class="info-item">
    <span class="info-label">主要方法</span>
    <span class="info-value">熵权法、IAR 指数、重心迁移、Moran's I、随机效应模型、稳健性检验</span>
  </div>
  <div class="info-item">
    <span class="info-label">项目状态</span>
    <span class="info-value">已完成</span>
  </div>
</div>

## 研究背景与核心问题

<div class="problem-cards">
  <div class="problem-card">
    <div class="problem-card-num">问题一</div>
    <p>分析老龄人口、床位资源和卫生技术人员的空间重心是否同步迁移，以及资源重心与需求重心的偏离程度。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">问题二</div>
    <p>构建面向老龄人口需求的医疗资源适配指数 IAR，比较江西省 11 个设区市的适配水平及风险等级演变。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">问题三</div>
    <p>通过面板数据模型分析城镇化率、财政卫生支出、人口密度和老龄压力等变量与 IAR 指数的统计关联。</p>
  </div>
</div>

## 数据来源与变量体系

### 数据来源

<div class="data-source-list">
  <div class="data-source-item">《江西省统计年鉴》</div>
  <div class="data-source-item">《中国卫生健康统计年鉴》</div>
  <div class="data-source-item">各设区市国民经济和社会发展统计公报</div>
  <div class="data-source-item">各设区市卫生健康事业发展公报</div>
  <div class="data-source-item">公开地理信息资料</div>
</div>

<p>研究范围：11 个设区市，2016—2024 年，9 个年度，共 99 个城市—年份样本。</p>

### 变量体系

<div class="variable-groups">
  <div class="variable-group">
    <h4>老龄人口需求</h4>
    <div class="method-tags">
      <span class="method-tag">65 岁及以上人口</span>
      <span class="method-tag">老龄化率</span>
      <span class="method-tag">老年抚养比</span>
    </div>
  </div>
  <div class="variable-group">
    <h4>医疗资源供给</h4>
    <div class="method-tags">
      <span class="method-tag">卫生机构数</span>
      <span class="method-tag">床位数</span>
      <span class="method-tag">卫生技术人员数</span>
    </div>
  </div>
  <div class="variable-group">
    <h4>老龄导向资源指标</h4>
    <div class="method-tags">
      <span class="method-tag">每千老年人口机构数</span>
      <span class="method-tag">每千老年人口床位数</span>
      <span class="method-tag">每千老年人口卫生技术人员数</span>
    </div>
  </div>
  <div class="variable-group">
    <h4>经济社会变量</h4>
    <div class="method-tags">
      <span class="method-tag">人均 GDP</span>
      <span class="method-tag">城镇化率</span>
      <span class="method-tag">政府卫生支出</span>
      <span class="method-tag">人口密度</span>
    </div>
  </div>
</div>

## 数据预处理

<div class="process-flow">
  <div class="process-step">
    <div class="process-step-num">1</div>
    <div class="process-step-text">统一人口、床位、财政支出等变量的数据单位和统计口径</div>
  </div>
  <div class="process-step">
    <div class="process-step-num">2</div>
    <div class="process-step-text">核验核心变量完整性，研究数据不存在需要插值的核心缺失值</div>
  </div>
  <div class="process-step">
    <div class="process-step-num">3</div>
    <div class="process-step-text">对人均 GDP、政府卫生支出和人口密度进行对数处理</div>
  </div>
  <div class="process-step">
    <div class="process-step-num">4</div>
    <div class="process-step-text">对构建 IAR 的指标进行极差标准化</div>
  </div>
  <div class="process-step">
    <div class="process-step-num">5</div>
    <div class="process-step-text">对人口密度进行残差化，剔除城镇化率能够线性解释的部分</div>
  </div>
  <div class="process-step">
    <div class="process-step-num">6</div>
    <div class="process-step-text">使用相关系数和 VIF 检查多重共线性</div>
  </div>
  <div class="process-step">
    <div class="process-step-num">7</div>
    <div class="process-step-text">残差化处理后各模型变量 VIF 均降至 5 以下</div>
  </div>
</div>

<p class="project-note">残差化人口密度用于保留人口集聚信息，同时缓解其与城镇化率之间的共线性问题。</p>

## 研究技术路线

<div class="method-chain">
  <span class="chain-item">数据整理</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">空间格局识别</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">IAR 指数构建</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">风险分层</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">面板模型分析</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">稳健性检验</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">结论与建议</span>
</div>

## 空间格局分析

### 1. 重心迁移

<div class="insight-list">
  <div class="insight-item">老龄人口重心整体向东南方向小幅偏移</div>
  <div class="insight-item">床位资源重心向西南方向偏移</div>
  <div class="insight-item">卫生技术人员重心向东北方向偏移</div>
  <div class="insight-item">三者迁移方向并未保持同步，存在空间错位</div>
</div>

### 2. 重心偏离度

<div class="stat-cards">
  <div class="stat-card">
    <div class="stat-card-value">10.61 → 3.09 km</div>
    <div class="stat-card-label">技术人员偏离度（2016→2024）</div>
  </div>
</div>

<div class="insight-list">
  <div class="insight-item">技术人员资源空间响应性相对较强</div>
  <div class="insight-item">床位资源偏离度长期处于中偏高区间</div>
  <div class="insight-item">床位资源空间响应存在一定滞后</div>
</div>

### 3. 空间自相关

<div class="insight-list">
  <div class="insight-item">老龄化率的 Moran's I 整体在 0 附近波动，未表现出稳定的显著空间集聚</div>
  <div class="insight-item">每千老年人口床位数长期表现为负向空间分化</div>
  <div class="insight-item">卫生技术人员指标整体为负，但多数年份未通过显著性检验</div>
  <div class="insight-item">医疗资源配置呈现一定区域分化和协同性不足</div>
</div>

## IAR 指数构建

<p>IAR 指数构建逻辑如下：</p>

<div class="process-flow">
  <div class="process-step">
    <div class="process-step-num">1</div>
    <div class="process-step-text">使用三项指标：每千老年人口机构数、床位数和卫生技术人员数</div>
  </div>
  <div class="process-step">
    <div class="process-step-num">2</div>
    <div class="process-step-text">使用熵权法确定权重</div>
  </div>
  <div class="process-step">
    <div class="process-step-num">3</div>
    <div class="process-step-text">计算各市年度医疗资源供给综合得分</div>
  </div>
  <div class="process-step">
    <div class="process-step-num">4</div>
    <div class="process-step-text">除以当年全省平均综合得分，形成相对适配指数 IAR</div>
  </div>
</div>

<div class="iar-legend">
  <div class="iar-legend-item">
    <span class="iar-legend-value">IAR > 1</span>
    <span class="iar-legend-desc">适配水平高于全省平均水平</span>
  </div>
  <div class="iar-legend-item">
    <span class="iar-legend-value">IAR = 1</span>
    <span class="iar-legend-desc">处于全省平均水平</span>
  </div>
  <div class="iar-legend-item">
    <span class="iar-legend-value">IAR < 1</span>
    <span class="iar-legend-desc">适配水平低于全省平均水平</span>
  </div>
</div>

<p class="project-note">熵权法权重反映指标在样本中的差异信息贡献，不代表其在医学服务中的绝对重要程度。</p>

## 风险分层

<div class="risk-levels">
  <div class="risk-level risk-high">
    <span class="risk-level-name">高风险失配区</span>
    <span class="risk-level-range">IAR < 0.90</span>
  </div>
  <div class="risk-level risk-mid">
    <span class="risk-level-name">中风险失配区</span>
    <span class="risk-level-range">0.90 ≤ IAR < 1.00</span>
  </div>
  <div class="risk-level risk-low">
    <span class="risk-level-name">低风险或基本适配区</span>
    <span class="risk-level-range">IAR ≥ 1.00</span>
  </div>
</div>

<div class="stat-cards">
  <div class="stat-card">
    <div class="stat-card-value">1.45</div>
    <div class="stat-card-label">南昌市年均 IAR（全省前列）</div>
  </div>
  <div class="stat-card">
    <div class="stat-card-value">0.65</div>
    <div class="stat-card-label">抚州市年均 IAR（持续高风险）</div>
  </div>
  <div class="stat-card">
    <div class="stat-card-value">3 → 7</div>
    <div class="stat-card-label">高风险失配城市数（2016→2024）</div>
  </div>
  <div class="stat-card">
    <div class="stat-card-value">5 → 4</div>
    <div class="stat-card-label">低风险或基本适配城市数（2016→2024）</div>
  </div>
</div>

<p>区域适配风险呈现"固化"与"恶化"并存的特征。</p>

<p class="project-note">IAR 为相对指标，不得解释为医疗服务的绝对充足或绝对不足。</p>

## 城市类型展示

<div class="city-type-grid">
  <div class="city-type-card">
    <h4>高适配、低波动</h4>
    <div class="city-tags">
      <span class="city-tag">南昌</span>
      <span class="city-tag">赣州</span>
      <span class="city-tag">新余</span>
    </div>
  </div>
  <div class="city-type-card">
    <h4>高适配、高波动</h4>
    <div class="city-tags">
      <span class="city-tag">萍乡</span>
      <span class="city-tag">上饶</span>
    </div>
  </div>
  <div class="city-type-card">
    <h4>低适配、高波动</h4>
    <div class="city-tags">
      <span class="city-tag">景德镇</span>
      <span class="city-tag">抚州</span>
    </div>
  </div>
  <div class="city-type-card">
    <h4>低适配、低波动</h4>
    <div class="city-tags">
      <span class="city-tag">九江</span>
      <span class="city-tag">鹰潭</span>
      <span class="city-tag">宜春</span>
      <span class="city-tag">吉安</span>
    </div>
  </div>
</div>

<p class="project-note">城市类型依据样本期年均 IAR 与波动程度划分，用于描述相对水平与稳定性，不代表官方风险评级。</p>

## 影响因素分析

### 模型选择

<div class="insight-list">
  <div class="insight-item">估计固定效应模型与随机效应模型</div>
  <div class="insight-item">Hausman 检验 p 值为 0.41，未拒绝随机效应模型的一致性假设</div>
  <div class="insight-item">以随机效应模型作为主要结果</div>
  <div class="insight-item">同时使用双向固定效应模型进行对照</div>
</div>

<p class="project-note">本研究主要识别变量之间的条件相关关系，不进行严格因果推断。</p>

### 主要结果

<div class="result-cards">
  <div class="result-card">
    <div class="result-card-num">正向关联</div>
    <p>城镇化率与 IAR 指数显著正相关；加入老龄压力变量后，政府卫生支出与 IAR 指数显著正相关。</p>
  </div>
  <div class="result-card">
    <div class="result-card-num">负向关联</div>
    <p>老年抚养比与 IAR 指数显著负相关；老龄化率与 IAR 指数显著负相关。</p>
  </div>
  <div class="result-card">
    <div class="result-card-num">需谨慎解释</div>
    <p>人均 GDP 在控制其他变量后未表现出稳定显著关系；残差化人口密度的系数方向在不同模型中发生变化，反映人口集聚与老龄压力之间可能存在复杂关系。</p>
  </div>
</div>

## 稳健性检验

<div class="robustness-grid">
  <div class="robustness-card">
    <div class="robustness-num">检验一</div>
    <h4>替代指标检验</h4>
    <div class="method-tags">
      <span class="method-tag">等权 IAR</span>
      <span class="method-tag">剔除机构数后的 IAR</span>
      <span class="method-tag">未相对化的综合得分</span>
      <span class="method-tag">IAR 对数形式</span>
    </div>
  </div>
  <div class="robustness-card">
    <div class="robustness-num">检验二</div>
    <h4>滞后变量检验</h4>
    <div class="method-tags">
      <span class="method-tag">滞后一期老年抚养比</span>
      <span class="method-tag">滞后一期老龄化率</span>
    </div>
  </div>
  <div class="robustness-card">
    <div class="robustness-num">检验三</div>
    <h4>分项指标回归</h4>
    <div class="method-tags">
      <span class="method-tag">每千老年人口床位数</span>
      <span class="method-tag">每千老年人口卫生技术人员数</span>
    </div>
  </div>
  <div class="robustness-card">
    <div class="robustness-num">检验四</div>
    <h4>模型与标准误对照</h4>
    <div class="method-tags">
      <span class="method-tag">不同控制变量组合</span>
      <span class="method-tag">城市聚类稳健标准误</span>
      <span class="method-tag">Bootstrap 标准误</span>
      <span class="method-tag">双向固定效应模型</span>
    </div>
  </div>
</div>

<p>核心结论：老龄压力变量的负向系数在多种指标构造、变量滞后和模型设定下总体保持一致，研究结论具有一定稳健性。</p>

## 个人角色与贡献

<div class="role-list">
  <div class="role-item">担任项目队长</div>
  <div class="role-item">参与整体研究框架设计</div>
  <div class="role-item">负责团队任务协调与进度管理</div>
  <div class="role-item">参与数据整理、指标体系设计和结果汇总</div>
  <div class="role-item">参与空间分析、IAR 指数评价和面板模型结果讨论</div>
  <div class="role-item">参与图表设计和论文撰写</div>
</div>

## 研究特色与局限

<div class="eval-grid">
  <div class="eval-col">
    <h4>研究特色</h4>
    <ul>
      <li>构建地级市尺度的老龄需求导向 IAR 指数</li>
      <li>形成"空间识别—指数评价—因素分析"的研究链条</li>
      <li>使用残差化处理缓解人口密度与城镇化率共线性</li>
      <li>通过替代指标、滞后变量和分项回归缓解机械相关质疑</li>
    </ul>
  </div>
  <div class="eval-col">
    <h4>研究局限</h4>
    <ul>
      <li>样本仅包含江西省 11 个设区市</li>
      <li>时间跨度为 2016—2024 年</li>
      <li>IAR 主要反映资源数量适配，未充分覆盖医疗质量、服务效率和可及性</li>
      <li>熵权结果受到样本分布影响</li>
      <li>面板模型识别的是统计关联，不是严格因果关系</li>
      <li>空间分析主要用于描述格局，未建立空间计量因果模型</li>
    </ul>
  </div>
</div>

## 政策建议

<div class="policy-cards">
  <div class="policy-card">
    <div class="policy-num">建议一</div>
    <p>对长期 IAR < 0.90 的城市实施精准资源倾斜。</p>
  </div>
  <div class="policy-card">
    <div class="policy-num">建议二</div>
    <p>建立以老龄需求为导向的动态监测与预警机制。</p>
  </div>
  <div class="policy-card">
    <div class="policy-num">建议三</div>
    <p>优化医疗资源空间布局和跨区域协同。</p>
  </div>
  <div class="policy-card">
    <div class="policy-num">建议四</div>
    <p>强化财政卫生投入的适老导向。</p>
  </div>
</div>

<p class="project-note">以上政策建议基于研究结果提出，尚未被政府部门正式采纳。</p>

## 项目总结

本项目基于江西省 11 个设区市 2016—2024 年面板数据，构建了老龄需求导向的 IAR 适配指数，结合重心迁移、Moran's I 空间自相关分析和随机效应面板模型，系统研究了人口老龄化背景下医疗资源供需的空间适配关系及影响因素。研究发现供需重心存在空间错位，高风险失配城市数量增加，老龄压力与适配水平显著负相关且在多种稳健性检验下保持一致。研究为区域医疗资源优化配置提供了数据支撑，同时在样本范围、指标覆盖和因果识别方面存在一定局限。
