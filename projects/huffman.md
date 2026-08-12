# Huffman Coding and Decoding System

> 面向文本、图像与音频数据的无损编码实践

<p class="project-abstract">该项目基于 Huffman 编码算法，实现文本、RGB 图像数据和音频字节流的编码、存储与恢复，并通过 Huffman Tree 可视化和压缩结果统计分析不同数据类型的编码效果。项目用于理解最小堆、树结构、变长编码和位级存储等算法与工程实现方法。</p>

## 项目信息

<div class="info-grid">
  <div class="info-item">
    <span class="info-label">项目类型</span>
    <span class="info-value">算法与程序设计实践</span>
  </div>
  <div class="info-item">
    <span class="info-label">编程语言</span>
    <span class="info-value">Python</span>
  </div>
  <div class="info-item">
    <span class="info-label">核心算法</span>
    <span class="info-value">Huffman Coding</span>
  </div>
  <div class="info-item">
    <span class="info-label">数据处理</span>
    <span class="info-value">Bitarray、NumPy</span>
  </div>
  <div class="info-item">
    <span class="info-label">图像处理</span>
    <span class="info-value">Pillow</span>
  </div>
  <div class="info-item">
    <span class="info-label">可视化</span>
    <span class="info-value">Matplotlib</span>
  </div>
  <div class="info-item">
    <span class="info-label">项目状态</span>
    <span class="info-value">已完成核心功能</span>
  </div>
  <div class="info-item">
    <span class="info-label">个人角色</span>
    <span class="info-value">参与算法实现、编码流程开发与结果验证</span>
  </div>
</div>

## 项目背景与目标

Huffman 编码是经典的变长无损压缩算法，通过对频率较高的符号分配较短的编码实现数据压缩。本项目通过实现文本、RGB 图像和音频字节流的编码与解码，用于理解最小堆、树结构、变长编码和位级存储等算法与工程实现方法。

<div class="problem-cards">
  <div class="problem-card">
    <div class="problem-card-num">目标一</div>
    <p>实现文本、RGB 图像和音频字节流的 Huffman 编码与解码恢复。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">目标二</div>
    <p>通过 Huffman Tree 可视化直观展示编码过程与树结构。</p>
  </div>
  <div class="problem-card">
    <div class="problem-card-num">目标三</div>
    <p>统计不同数据类型的压缩率，分析编码效果与数据分布的关系。</p>
  </div>
</div>

## 个人角色与贡献

<div class="role-list">
  <div class="role-item">参与 Huffman 编码算法实现</div>
  <div class="role-item">参与最小堆与 Huffman Tree 构建</div>
  <div class="role-item">参与位级编码存储与解码恢复</div>
  <div class="role-item">参与文本、图像和音频数据处理</div>
  <div class="role-item">参与 Huffman Tree 可视化</div>
  <div class="role-item">参与压缩结果统计与验证</div>
</div>

## 技术方案

<div class="method-chain">
  <span class="chain-item">原始数据</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">频率统计</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">最小堆建树</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">编码表生成</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">位流写入</span>
  <span class="chain-arrow">→</span>
  <span class="chain-item">压缩文件</span>
</div>

<div class="method-tags">
  <span class="method-tag">Python</span>
  <span class="method-tag">Huffman Coding</span>
  <span class="method-tag">Bitarray</span>
  <span class="method-tag">NumPy</span>
  <span class="method-tag">Pillow</span>
  <span class="method-tag">Matplotlib</span>
</div>

<p>项目使用 Python 实现 Huffman 编码算法。首先统计输入数据的符号或字节频率，使用最小堆构建 Huffman Tree 以保证最优编码，递归生成变长编码表。编码结果通过 Bitarray 写入位流，并将解码所需的编码信息一并保存。解码时根据编码树恢复原始数据。图像数据通过 Pillow 读取为 RGB 像素，Matplotlib 用于 Huffman Tree 可视化和压缩结果展示。</p>

## 核心实现

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>符号频率统计</h4>
    <p>统计文本字符、图像 RGB 像素或音频字节的频率分布。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>最小堆构建 Huffman Tree</h4>
    <p>使用最小堆按频率合并节点，构建最优二叉编码树。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>变长编码表生成</h4>
    <p>递归遍历 Huffman Tree 生成符号到变长编码的映射表。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>位流编码存储</h4>
    <p>使用 Bitarray 将编码结果按位写入位流，并保存解码所需的编码信息。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>文本编码与解码</h4>
    <p>对文本文件进行 Huffman 编码压缩，并可根据编码树恢复原始文本。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>RGB 图像编码与解码</h4>
    <p>对 RGB 图像数据进行 Huffman 编码，解码后可恢复原始 RGB 图像数据。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>音频字节流编码与解码</h4>
    <p>对音频字节流进行 Huffman 编码与恢复。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>Huffman Tree 可视化</h4>
    <p>使用 Matplotlib 绘制 Huffman Tree，直观展示编码结构。</p>
  </div>
  <div class="feature-card">
    <div class="feature-status feature-status-done">已实现</div>
    <h4>压缩率统计</h4>
    <p>统计原始文件与编码后文件大小，计算并展示压缩率。</p>
  </div>
</div>

## 项目截图

<div class="screenshot-gallery">
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project1Huffman%20Coding%20and%20Decoding%20System/1文件压缩.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project1Huffman%20Coding%20and%20Decoding%20System/1文件压缩.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">文件压缩</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project1Huffman%20Coding%20and%20Decoding%20System/2文件解压.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project1Huffman%20Coding%20and%20Decoding%20System/2文件解压.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">文件解压</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project1Huffman%20Coding%20and%20Decoding%20System/3数据分析.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project1Huffman%20Coding%20and%20Decoding%20System/3数据分析.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">数据分析</p>
  </div>
  <div class="screenshot-card">
    <a href="/assets/project_screenshots/project1Huffman%20Coding%20and%20Decoding%20System/4huffman树.png" target="_blank" rel="noopener noreferrer">
      <img src="/assets/project_screenshots/project1Huffman%20Coding%20and%20Decoding%20System/4huffman树.png" alt="" loading="lazy" />
    </a>
    <p class="screenshot-name">Huffman Tree</p>
  </div>
</div>

## 结果与验证

<div class="result-cards">
  <div class="result-card">
    <div class="result-card-title">文本编码验证</div>
    <p>对文本文件完成 Huffman 编码与解码，程序输出原始文件大小、编码后文件大小和压缩率，解码后数据与原始文本一致。</p>
  </div>
  <div class="result-card">
    <div class="result-card-title">RGB 图像编码验证</div>
    <p>对 RGB 图像数据完成编码与解码，程序输出压缩率等统计结果，解码后可恢复原始 RGB 图像数据。</p>
  </div>
  <div class="result-card">
    <div class="result-card-title">音频字节流编码验证</div>
    <p>对音频字节流进行 Huffman 编码与恢复，程序统计压缩结果，解码后数据与原始字节流一致。</p>
  </div>
  <div class="result-card">
    <div class="result-card-title">可视化验证</div>
    <p>Huffman Tree 可视化正常生成，数据分析界面展示不同数据类型的压缩结果统计。</p>
  </div>
</div>

<p>说明：Huffman 编码效果与数据的符号频率分布有关，对频率分布不均匀的数据通常具有更明显的压缩效果。具体的压缩率、编码时间和解码时间以程序实际运行结果为准，详见上方"数据分析"截图。</p>

## 项目不足与改进

<div class="eval-grid">
  <div class="eval-col">
    <h4>当前不足</h4>
    <ul>
      <li>未与 ZIP、PNG、MP3 等成熟压缩格式直接比较</li>
      <li>编码表需要额外存储，对小文件的压缩收益可能有限</li>
      <li>当前主要用于算法学习，不替代专业压缩标准</li>
      <li>对大文件的处理效率和内存占用仍有优化空间</li>
      <li>缺少自动化测试用例覆盖</li>
    </ul>
  </div>
  <div class="eval-col">
    <h4>后续改进</h4>
    <ul>
      <li>增加与标准压缩格式的对比测试</li>
      <li>优化大文件的分块编码处理</li>
      <li>补充编码表存储的体积优化</li>
      <li>增加多组数据的压缩率对比分析</li>
      <li>补充单元测试和结果校验</li>
    </ul>
  </div>
</div>

## 项目总结

本项目通过实现 Huffman 编码算法对文本、RGB 图像和音频字节流进行无损编码与恢复，加深了对最小堆、Huffman Tree、变长编码和位级存储等算法原理的理解。通过 Huffman Tree 可视化和压缩率统计，直观验证了编码效果与数据频率分布的关系。项目在压缩性能对比和工程化处理方面仍有改进空间。
