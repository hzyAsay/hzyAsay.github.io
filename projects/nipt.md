# 基于多项式回归与 KMeans 聚类的 NIPT 检测时点优化与胎儿 Y 染色体浓度影响因素研究

> NIPT 检测时点优化与染色体异常分类研究

<p class="project-abstract">本项目围绕无创产前检测中的胎儿 Y 染色体浓度、孕周和孕妇 BMI 等因素开展建模分析。通过数据清洗、相关性分析和多模型比较，选取三次多项式回归描述 Y 染色体浓度变化；利用 KMeans 聚类进行 BMI 分组，并结合达标概率、延迟风险和检测误差优化不同群体的检测时点。同时，针对女胎样本构建染色体异常二分类模型，并分析类别不平衡对模型性能的影响。</p>

<div class="project-notice">本项目为数学建模竞赛研究成果，仅用于展示数据分析和模型设计过程，不构成医学诊断或临床建议。</div>

## 项目信息

<div class="info-grid">
  <div class="info-item">
    <span class="info-label">项目类型</span>
    <span class="info-value">数学建模与医疗数据分析</span>
  </div>
  <div class="info-item">
    <span class="info-label">项目时间</span>
    <span class="info-value">2025</span>
  </div>
  <div class="info-item">
    <span class="info-label">个人角色</span>
    <span class="info-value">队长</span>
  </div>
  <div class="info-item">
    <span class="info-label">项目成果</span>
    <span class="info-value">全国大学生数学建模竞赛省级一等奖</span>
  </div>
  <div class="info-item">
    <span class="info-label">主要工具</span>
    <span class="info-value">Python、Pandas、Scikit-learn、Statsmodels</span>
  </div>
  <div class="info-item">
    <span class="info-label">主要方法</span>
    <span class="info-value">多项式回归、KMeans 聚类、保序回归、SVM、SMOTE、风险优化</span>
  </div>
  <div class="info-item">
    <span class="info-label">项目状态</span>
    <span class="info-value">已完成</span>
  </div>
</div>

## 研究背景与问题

<div class="problem-cards">
  <div class="problem-card">
    <div class="problem-card-num">问题一</div>
    <p>分析男胎 Y 染色体浓度与孕周、BMI 等变量之间的关系，并比较不同回归模型。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">问题二</div>
    <p>根据 BMI 对男胎孕妇进行分组，在检测及时性和浓度达标可靠性之间寻找平衡，确定各组检测时点。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">问题三</div>
    <p>进一步综合年龄、身高、体重等因素和检测误差，优化 BMI 分组及检测时点。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">问题四</div>
    <p>利用女胎样本的染色体 Z 值、GC 含量、读段比例和孕妇特征，建立染色体异常二分类模型。</p>
  </div>
</div>

## 数据处理

<div class="process-flow">
  <div class="process-step">
    <div class="process-step-num">1</div>
    <div class="process-step-text">将"周+天"格式的检测孕周转换为连续周数</div>
  </div>
  <div class="process-step">
    <div class="process-step-num">2</div>
    <div class="process-step-text">将年龄、身高、体重、BMI、染色体浓度和 Z 值等转换为数值类型</div>
  </div>
  <div class="process-step">
    <div class="process-step-num">3</div>
    <div class="process-step-text">数值型缺失值使用中位数处理，类别型缺失值使用众数处理</div>
  </div>
  <div class="process-step">
    <div class="process-step-num">4</div>
    <div class="process-step-text">根据孕妇代码和检测日期进行重复记录处理</div>
  </div>
  <div class="process-step">
    <div class="process-step-num">5</div>
    <div class="process-step-text">使用 Z-score 方法识别异常值</div>
  </div>
  <div class="process-step">
    <div class="process-step-num">6</div>
    <div class="process-step-text">分别构建男胎和女胎分析数据集</div>
  </div>
  <div class="process-step">
    <div class="process-step-num">7</div>
    <div class="process-step-text">对分类任务中的特征进行标准化和类别平衡处理</div>
  </div>
</div>

## 方法与模型

### 1. Y 染色体浓度关系建模

<div class="method-tags">
  <span class="method-tag">线性回归</span>
  <span class="method-tag">二次多项式回归</span>
  <span class="method-tag">三次多项式回归</span>
  <span class="method-tag">线性回归与交互项</span>
  <span class="method-tag">岭回归</span>
  <span class="method-tag">主成分回归</span>
</div>

<p>相关性分析表明，孕周和 BMI 与 Y 染色体浓度的简单线性相关程度较弱。多模型交叉验证中，三次多项式回归取得相对较优结果，因此用于后续浓度预测。模型整体显著，但解释度有限，说明 Y 染色体浓度还可能受到未纳入变量和随机误差影响。</p>

<div class="stat-cards">
  <div class="stat-card">
    <div class="stat-card-value">12.041</div>
    <div class="stat-card-label">整体 F 统计量</div>
  </div>
  <div class="stat-card">
    <div class="stat-card-value">3.10×10⁻¹⁸</div>
    <div class="stat-card-label">整体显著性 p 值</div>
  </div>
</div>

### 2. BMI 聚类与检测时点优化

<div class="method-chain">
  <span class="chain-item">KMeans 聚类</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">BMI 分组</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">浓度达标概率估计</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">延迟风险与不达标风险</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">综合风险最小化</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">最优检测时点</span>
</div>

<p>问题二和问题三使用的特征与分组口径不同，页面采用综合考虑多种孕妇特征后的问题三结果作为最终展示结果。</p>

<div class="result-table">
  <div class="result-table-header">
    <span>BMI 分组</span>
    <span>区间</span>
    <span>建议检测时点</span>
  </div>
  <div class="result-table-row">
    <span>低 BMI 组</span>
    <span>[20.7, 30.0)</span>
    <span>第 10 周</span>
  </div>
  <div class="result-table-row">
    <span>中 BMI 组</span>
    <span>[30.0, 33.4)</span>
    <span>第 11.3 周</span>
  </div>
  <div class="result-table-row">
    <span>高 BMI 组</span>
    <span>[33.4, 38.0)</span>
    <span>第 13.3 周</span>
  </div>
</div>

<p>高 BMI 群体通常需要相对更晚的检测时点。</p>

### 3. 误差敏感性分析

<div class="insight-list">
  <div class="insight-item">测量误差会影响 4% 阈值附近样本的达标判断</div>
  <div class="insight-item">随误差增大，各 BMI 组的最优检测时点可能推迟</div>
  <div class="insight-item">高 BMI 组对误差更敏感</div>
  <div class="insight-item">检测误差增大时，最小期望风险总体上升</div>
</div>

<p class="project-note">以上敏感性分析基于模型假设，并非真实临床验证。</p>

### 4. 女胎异常分类

<div class="method-chain">
  <span class="chain-item">特征构造</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">数据标准化</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">类别不平衡处理</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">多模型比较</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">5 折交叉验证</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">测试集评估</span>
</div>

<div class="method-tags">
  <span class="method-tag">逻辑回归</span>
  <span class="method-tag">随机森林</span>
  <span class="method-tag">SVM</span>
  <span class="method-tag">梯度提升</span>
  <span class="method-tag">XGBoost</span>
</div>

<div class="stat-cards">
  <div class="stat-card">
    <div class="stat-card-value">0.805</div>
    <div class="stat-card-label">SVM 5 折交叉验证 AUC</div>
  </div>
  <div class="stat-card">
    <div class="stat-card-value">0.682</div>
    <div class="stat-card-label">SVM 测试集 AUC</div>
  </div>
</div>

<div class="insight-list">
  <div class="insight-item">正常类别预测相对较好</div>
  <div class="insight-item">异常类别预测能力仍然不足</div>
  <div class="insight-item">类别不平衡是主要限制因素</div>
</div>

## 主要结果

<div class="result-cards">
  <div class="result-card">
    <div class="result-card-num">结果一</div>
    <p>三次多项式回归在候选回归模型中取得相对较优表现，但整体解释能力有限。</p>
  </div>
  <div class="result-card">
    <div class="result-card-num">结果二</div>
    <p>低、中、高 BMI 组建议检测时点分别为第 10 周、第 11.3 周和第 13.3 周。</p>
  </div>
  <div class="result-card">
    <div class="result-card-num">结果三</div>
    <p>女胎异常分类的 SVM 交叉验证 AUC 为 0.805，测试集 AUC 为 0.682，少数类识别仍需改进。</p>
  </div>
</div>

<p class="project-note">以上结果来源于竞赛数据和特定建模假设，不能直接替代医学检查规范或临床判断。</p>

## 个人角色与贡献

<div class="role-list">
  <div class="role-item">担任项目队长</div>
  <div class="role-item">负责整体建模方案设计</div>
  <div class="role-item">负责数据清洗与变量构造</div>
  <div class="role-item">参与回归、聚类、分类和优化模型实现</div>
  <div class="role-item">负责模型结果可视化</div>
  <div class="role-item">负责论文结构设计与主要内容撰写</div>
  <div class="role-item">负责团队任务协调和结果汇总</div>
</div>

## 模型评价与局限

<div class="eval-grid">
  <div class="eval-col">
    <h4>优势</h4>
    <ul>
      <li>比较了多种回归和分类模型</li>
      <li>将聚类、概率估计和风险优化结合</li>
      <li>考虑了类别不平衡和测量误差</li>
      <li>使用交叉验证和多项指标评价模型</li>
    </ul>
  </div>
  <div class="eval-col">
    <h4>局限</h4>
    <ul>
      <li>三次多项式回归解释度较低</li>
      <li>高阶项可能带来过拟合和共线性风险</li>
      <li>BMI 分组结果受特征选择和聚类方法影响</li>
      <li>风险函数权重具有一定主观性</li>
      <li>女胎异常样本数量较少</li>
      <li>测试集异常类别识别能力有限</li>
      <li>结果尚未经过外部数据和临床验证</li>
    </ul>
  </div>
</div>

## 项目总结

本项目通过多模型比较和系统化的数据分析流程，围绕 NIPT 检测中的 Y 染色体浓度建模、BMI 分组检测时点优化和女胎染色体异常分类三个核心任务展开研究。项目比较了六种回归模型和五种分类模型，将 KMeans 聚类、达标概率估计和风险优化相结合，并考虑了测量误差和类别不平衡的影响。研究结果为不同 BMI 群体提供了差异化的检测时点建议，同时揭示了模型在解释度和少数类识别方面的局限。
