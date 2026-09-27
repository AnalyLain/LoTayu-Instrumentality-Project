# 🎵 LoTayu-Instrumentality-Project | 罗大佑补完计划

<p center>
  <img src="https://raw.githubusercontent.com/placeholder/lotayu-banner.jpg" alt="LoTayu Instrumentality Project Banner" width="100%"/>
</p>

<p align="center">
  <em>“用音乐补完时代，用档案记录声音。”</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Project-Open_Source-brightgreen" alt="Open Source">
  <img src="https://img.shields.io/badge/Site-Static-blue" alt="Static Site">
  <img src="https://img.shields.io/badge/Focus-Lo_Tayu_Discography-red" alt="Focus">
  <img src="https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey" alt="License">
</p>

---

## 📌 项目简介 (About The Project)

**LoTayu-Instrumentality-Project（罗大佑补完计划）** 是一个专注于华语音乐教父——**罗大佑**曲目收录、学术级词曲解构与文化背景分析的开源静态网站项目。

项目的名称灵感来源于《新世纪福音战士》（EVA）中的“人类补完计划”。我们希望借由“补完”这一隐喻，跨越时间与空间的隔阂，系统性地拼凑、梳理与还原罗大佑在两岸三地（台湾、香港、大陆）不同历史时期创作的音乐全貌。

项目重点关注并收录其音乐生涯中的**“特异歌曲”**（包括政治讽刺曲目、被禁歌曲、跨区域多版本演绎等），并整理配套的 MIDI 音乐文件、MV 资源及分轨/乐谱资料，打造华语流行乐坛极具研究价值的数字档案库。

---

## 🌟 核心特色 (Key Features)

```
                       ┌─────────────────────────┐
                       │   罗大佑补完计划 (LTIP)  │
                       └────────────┬────────────┘
                                    │
         ┌──────────────────────────┼──────────────────────────┐
         ▼                          ▼                          ▼
┌─────────────────┐        ┌─────────────────┐        ┌─────────────────┐
│  📻 特异歌曲分析  │        │  🌏 三地版本对照  │        │  🎼 乐曲资源归档  │
│ Anomalies & Analysis │    │ Regional Versions │    │ MIDI & Resources│
└─────────────────┘        └─────────────────┘        └─────────────────┘
```

* **🔍 “特异歌曲”深度解构**：针对《之乎者也》《未来的主人翁》《亚细亚的孤儿》《现象七十二变》《首都》等具有高度社会批判性与特定时代隐喻的歌曲进行词曲与背景分析。
* **🌏 两岸三地版本演变**：梳理“音乐工厂”时期及不同发行渠道下，同一曲目的词曲修改、意涵演变（如《爱人同志》《东方之珠》《侏儒之歌》等）。
* **🎹 音乐技术与编曲透视**：分析其如何将西方摇滚/民谣与中国传统五声调式、戏曲元素相结合，以及早期电子合成器与后期大编制交响乐的运用。
* **📁 乐曲资源库 (Media Archive)**：提供 MIDI 文件下载、多轨分析、乐谱整理以及相关 MV / 现场音源的外链索引。

---

## 🗺️ 网站结构与模块 (Site Architecture)

```
LoTayu-Instrumentality-Project/
├── 🗂️ docs/              # 站点文稿与分析文章
│   ├── 01-Anomalies/     # 特异歌曲与禁歌专题
│   ├── 02-Versions/      # 两岸三地多版本对照分析
│   ├── 03-Musicology/    # 编曲、曲式与乐理分析
│   └── 04-Chronology/    # 编年史与专辑档案
├── 🎼 static/ resources/ # MIDI、乐谱与配器图表
└── 🌐 site/              # 静态网站生成器源码 (Astro / Hugo)
```

---

## 🖼️ 音乐图谱与时代轨迹 (Visual Insights)

### 1. 台北 - 香港 - 北京 的创作转移
罗大佑的音乐轨迹不仅是个人创作的演进，更是两岸三地时代变迁的缩影：

```
[台北时期: 黑衣摇滚与社会批判] ──> [香港时期: 音乐工厂与政治寓言] ──> [北京/融入时期: 归乡与宏大叙事]
 (1982-1985: 《之乎者也》)           (1990-1997: 《皇后大道东》)          (2000s+: 《北京之夜》)
```

### 2. 多版本对比示例：《爱人同志》
| 比较维度 | 台湾首发版 | 香港/引进版 |
| :--- | :--- | :--- |
| **唱片包装与视觉** | 黑色冷峻风格 | 调整后的封面配色 |
| **部分歌词修改** | 包含特定历史语境词汇 | 部分敏感词汇替代/删减 |
| **编曲与混音** | 侧重摇滚三大件撞击 | 增加更多电声与修饰 |

---

## 🛠️ 技术栈 (Tech Stack)

* **Static Site Generator**: Astro / Hugo / Docusaurus
* **Styling**: Tailwind CSS
* **Hosting**: GitHub Pages / Cloudflare Pages
* **Audio/MIDI Visualization**: Web Audio API / MIDI.js (规划中)

---

## 🚀 参与贡献 (Contributing)

本项目完全开源，欢迎所有华语乐迷、音乐学研究者以及前端开发者加入“补完”行列！

1. **Fork** 本仓库
2. 新建你的特性分支 (`git checkout -b feature/song-analysis-xxx`)
3. 提交你的修改（补充曲目分析、提供 MIDI 或修正错别字）
4. 提交 **Pull Request**

> 💡 **贡献方向推荐**：
> * 补充未收录特异曲目的背景故事或词曲分析 Markdown 文本。
> * 制作或上传高品质的罗大佑曲目 MIDI 文件。
> * 完善跨版本歌词差异对比表。

---

## ⚠️ 版权与免责声明 (Disclaimer & Copyright)

1. 本项目涉及的所有歌曲歌词、音视频链接版权均归原作者（罗大佑及其所属唱片公司/版权方）所有。
2. 本项目收录的 MIDI、文本分析等内容仅供**学术交流、音乐分析与个人学习**使用，严禁用于任何商业用途。
3. 音视频资源尽量采用嵌入（Embed）或第三方链接形式展示，不直接提供有版权争议的无损音频文件下载。

---

## 🤝 致敬 (Acknowledgments)

* 感谢罗大佑先生为华语乐坛留下的时代巨作。
* 感谢所有参与“补完计划”的贡献者与华语乐迷。

<p align="center">
  <strong>Let's complete the musical puzzle together. 🧩</strong>
</p>
