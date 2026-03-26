# 未来法域

微信公众号「未来法域」内容管理仓库。法律科技观察，全局视野。

---

## 栏目体系

| 栏目 | 发布 | 主色 | 子标签 |
|---|---|---|---|
| 全图 PANORAMA | 周一 08:30 | 松绿 `#2d5a27` | 观势时局 / 全球法讯 / 行业风向 / 暗涌 |
| 降噪 Distill | 周二 16:30 | 金色 `#c9a54e` | 单篇深度，无固定子标签 |
| 法度 LEX | 周三 12:30 | 深海蓝 `#1a4a6e` | 方略 / 布局 / 经纬 / 巴别塔 / 演进 / 史观 |
| 业相 | 周四 16:30 | 紫色 `#6b5fa0` | 格局 / 对话 / 观察 |
| 归档实录 ARCHIVAL ECHOES | 周五 19:30 | 酒红 `#722F37` | Memo / Construct / Case / Note / Sandbox |
| ALL未来所 | 周六 19:30 | 炭黑 `#3a3a3a` | 实验台 / 逆向舱 / 观测站 / 办公室 / 沉淀池 / 假说集 |

**标题格式**：`栏目·子标签｜正文标题`
**内容边界**：观察 / 分析 / 实验 / 复盘 / 方法论，不写泛普法、业务指引、案源引流

---

## 目录结构

```
├── articles/          已发内容（微信粘贴版 HTML）
│   ├── quantu/        全图 PANORAMA
│   ├── jiangzao/      降噪 Distill
│   ├── fadu/          法度 LEX
│   └── guidang/       归档实录 ARCHIVAL ECHOES
│
├── templates/         空白栏目格式模板（新期直接复制修改）
│   ├── guidang-template.html
│   ├── yexiang-template.html
│   └── all-template.html
│
├── covers/            栏目封面图（2.35:1，flat design）
│   ├── cover-quantu.png
│   ├── cover-jiangzao-v5.png
│   ├── cover-fadu.png
│   ├── cover-yexiang.png
│   ├── cover-guidang.png
│   └── cover-all.png
│
├── tools/             工具文件
│   ├── chart-generator.html   关键词坐标图生成器（每期复用）
│   ├── generate_covers.js     AI封面批量生成脚本
│   └── notion-template.xlsx   Notion 内容管理模板
│
├── assets/            图片资源
│   └── quantu-vol001-keyword-chart.png
│
└── docs/              设计规范与工作流文档
    ├── design-spec.md          设计系统规范（颜色、排版、组件）
    └── quantu-workflow-prompts.md   全图栏目工作流提示词
```

---

## 使用说明

### 新建一期文章

1. 从 `templates/` 复制对应栏目模板
2. 按 `articles/<栏目>/vol00X-<子标签>-wechat.html` 命名
3. 替换标题、日期、正文内容
4. 在浏览器打开，点击「一键复制」，粘贴到微信公众号编辑器

### 关键词坐标图（全图专用）

1. 打开 `tools/chart-generator.html`
2. 编辑顶部 `ISSUE`（期号）和 `KEYWORDS`（关键词数组）
3. 保存后刷新，图即时更新
4. 点「下载 PNG」→ 上传到微信素材库 → 插入文章

### 封面图规格

- 尺寸：940×400px（2.35:1）
- 风格：flat design，纯色色块 + 线条装饰
- 字体：无衬线（正文）+ 衬线（英文标题）

---

## 设计规范

详见 `docs/design-spec.md`

通用底色：`#f8f7f4` | 正文：`#333333` | 次要：`#888888` | 边框：`#e0ddd6`
