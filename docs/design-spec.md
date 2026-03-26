# 未来法域 · 设计规范

> 版本：2026-03-26
> 范围：微信公众号文章排版（WeChat 粘贴安全格式）

---

## 一、栏目系统

| 栏目 | 发布时段 | 主色 | 浅背景色 | 边框色 |
|---|---|---|---|---|
| 全图 PANORAMA | 周一 08:30 | `#2d5a27` 松绿 | `#e8f5e3` | `#a8c8a5` |
| 降噪 Distill | 周二 16:30 | `#c9a54e` 金色 | `#fdf6e3` | `#e0c88a` |
| 法度 LEX | 周三 12:30 | `#1a4a6e` 深海蓝 | `#eef4fa` | `#b5c8d8` |
| 业相 | 周四 16:30 | `#6b5fa0` 紫色 | `#eeeaf8` | `#c4bde8` |
| 归档实录 ARCHIVAL ECHOES | 周五 19:30 | `#8b4a2e` 暗砖红 | `#f5ece6` | `#d4a898` |
| ALL未来所 | 周六 19:30 | `#3a3a3a` 炭黑 | `#f5f5f4` | `#c0bdb8` |

### 子标签

| 栏目 | 子标签列表 |
|---|---|
| 全图 | 观势时局 / 全球法讯 / 行业风向 / 暗涌（固定四板块，无跨期子标签） |
| 降噪 | 无固定子标签（单篇深度，标题即主题） |
| 法度 | 方略 / 布局 / 经纬 / 巴别塔 / 演进 / 史观 |
| 业相 | 格局 / 对话 / 观察 |
| 归档实录 | Memo / Construct / Case / Note / Sandbox |
| ALL未来所 | 实验台 / 逆向舱 / 观测站 / 办公室 / 沉淀池 / 假说集 |

---

## 二、文章标题格式

```
法度·经纬｜AI监管全球版图：主要法域规则坐标与互认逻辑
业相·格局｜全球AI原生律所全景图
ALL未来所·实验台｜试验#0001 AI律所Demo
```

规则：`栏目·子标签｜正文标题`，全图/降噪无子标签时直接 `全图｜` / `降噪｜`。

---

## 三、Header 徽章区结构

```html
<!-- 栏目主色徽章 -->
<span style="display:inline-block;background:[主色];color:#ffffff;font-size:12px;font-weight:600;padding:3px 10px;border-radius:3px;letter-spacing:1px;">法度 LEX</span>

<!-- 子标签芯片（有子标签时插入，浅色底+彩色文字+细边框） -->
<span style="display:inline-block;background:[浅背景色];color:[主色];font-size:11px;font-weight:600;padding:3px 8px;border-radius:3px;margin-left:4px;border:1px solid [边框色];">·经纬</span>

<!-- Vol 编号（灰底灰字） -->
<span style="display:inline-block;background:#f8f7f4;color:#888888;font-size:11px;padding:3px 8px;border-radius:3px;margin-left:4px;">Vol.002</span>
```

---

## 四、Meta 行格式

```
未来法域 · 法度 · 经纬  |  周三 12:30  |  2026.03.23
```

HTML：
```html
<p style="font-size:12px;color:#888888;line-height:1.5;margin:0 0 16px 0;">
  未来法域 · 法度 · 经纬 &nbsp;|&nbsp; 周三 12:30 &nbsp;|&nbsp; 2026.03.23
</p>
```

---

## 五、通用色彩系统

| 用途 | 颜色 |
|---|---|
| 正文标题 | `#222222` |
| 正文 | `#333333` |
| 次要文字 / 标签 | `#888888` |
| 注释 / 小字 | `#999999` |
| 页面背景 | `#f8f7f4` |
| 通用边框 / 分割线 | `#e0ddd6` |

---

## 六、组件样式（全部内联，WeChat 安全）

### 顶部/底部 accent bar
```html
<hr style="border:none;height:6px;background-color:[主色];margin:0;">
```

### H2 节标题
```html
<h2 style="font-size:17px;font-weight:700;color:#222222;line-height:1.5;margin:28px 0 4px 0;padding:0;border:none;">
  <span style="display:inline-block;width:4px;height:18px;background:[主色];border-radius:2px;margin-right:8px;vertical-align:middle;"></span>
  一、节标题
</h2>
<hr style="border:none;height:1px;background-color:[边框色];margin:0 0 18px 0;">
```

### H3 小标题
```html
<h3 style="font-size:14px;font-weight:700;color:[主色];line-height:1.5;margin:20px 0 8px 0;padding:0;">（一）小节标题</h3>
```

### 引述块（blockquote）
```html
<section style="border-left:3px solid [主色];background:[浅背景色];padding:14px 16px;margin:0 0 16px 0;border-radius:0 6px 6px 0;">
  <p style="font-size:14px;color:#444444;line-height:1.8;margin:0;">引述内容</p>
</section>
```

### 信息卡（card）
```html
<section style="background:[浅背景色];border:1px solid [边框色];border-radius:8px;padding:14px 16px;margin:0 0 10px 0;">
  <p style="font-size:13px;font-weight:700;color:[主色];line-height:1.5;margin:0 0 6px 0;">卡片标题</p>
  <p style="font-size:13px;color:#444444;line-height:1.75;margin:0;">卡片内容</p>
</section>
```

### 关键词芯片 pill
```html
<span style="display:inline-block;background:[浅背景色];color:[主色];font-size:11px;font-weight:600;border-radius:20px;padding:3px 12px;margin:2px 4px 2px 0;">关键词</span>
```

### 横向双列表格（WeChat 不支持 flex，用 display:table）
```html
<section style="display:table;width:100%;border-collapse:separate;border-spacing:6px 0;">
  <section style="display:table-cell;width:50%;padding:12px 14px;background:[浅背景色];border:1px solid [边框色];border-radius:6px;vertical-align:top;">
    左列内容
  </section>
  <section style="display:table-cell;width:50%;padding:12px 14px;background:[主色];border-radius:6px;vertical-align:top;">
    右列内容（深色背景）
  </section>
</section>
```

### 时间轴条目
```html
<section style="border-left:2px solid [边框色];padding:0 0 16px 16px;">
  <p style="font-size:12px;font-weight:700;color:[主色];margin:0 0 4px 0;">XXXX年XX月</p>
  <p style="font-size:14px;color:#333333;line-height:1.75;margin:0;">事件描述</p>
</section>
```

---

## 七、正文排版规则

- 正文段落：`font-size:15px;color:#333333;line-height:1.85;margin:0 0 16px 0;text-align:justify`
- 注释小字：`font-size:12px;color:#999999;line-height:1.85;padding-left:16px;text-indent:-16px`
- 粗体强调：`<strong style="color:[主色];">关键词</strong>`
- 段间距：16px，节间距：28px（h2 上方 margin）
- 不使用 CSS class，不使用 @import，不使用 web font

---

## 八、声明区（每篇固定结尾）

```html
<!-- AI声明：用栏目主色左边框 -->
<section style="border-left:3px solid [主色];background:[浅背景色];padding:14px 16px;margin:24px 0 12px 0;border-radius:0 6px 6px 0;">
  <p style="font-size:12px;color:#888888;line-height:1.75;margin:0 0 4px 0;"><strong style="color:#333333;font-size:13px;">AI辅助声明</strong></p>
  <p style="font-size:12px;color:#888888;line-height:1.75;margin:0;">本文由AI辅助完成信息采集与初稿生成，经人工审校、调序与深度改写后发布。事实性内容以原始来源为准。AI工具：Claude、豆包。</p>
</section>

<!-- 通用声明：灰色边框 -->
<section style="border-left:3px solid #e0ddd6;background:#f8f7f4;padding:14px 16px;margin:0 0 24px 0;border-radius:0 6px 6px 0;">
  <p style="font-size:12px;color:#888888;line-height:1.75;margin:0 0 4px 0;"><strong style="color:#333333;font-size:13px;">声明</strong></p>
  <p style="font-size:12px;color:#888888;line-height:1.75;margin:0;">本文仅代表作者个人观察与分析，不构成任何法律意见或投资建议。文中引用的法律法规以官方公布文本为准。</p>
</section>
```

---

## 九、页脚（每篇固定）

```html
<section style="text-align:center;padding:0 0 8px;">
  <p style="font-size:15px;color:[主色];font-weight:700;line-height:2;margin:0;">未来法域 · 全局观察</p>
  <p style="font-size:12px;color:#888888;line-height:1.8;margin:0 0 4px 0;">全图 · 降噪 · 法度 · 业相 · 归档实录 · ALL未来所</p>
  <p style="font-size:13px;color:#222222;font-weight:600;line-height:2;margin:0;">关注「未来法域」，不错过每一期</p>
</section>
```

---

## 十、模板文件索引

| 文件 | 用途 |
|---|---|
| `fadu-vol001-wechat.html` | 法度·演进 Vol.001（红筹模式）内容文件 |
| `fadu-vol002-jingwei-wechat.html` | 法度·经纬 Vol.002（金融法）内容文件 |
| `jiangzao-vol001-wechat.html` | 降噪 Vol.001（OpenClaw）内容文件 |
| `quantu-vol0001-wechat.html` | 全图 Vol.001 内容文件 |
| `quantu-vol0002-wechat.html` | 全图 Vol.002 内容文件 |
| `yexiang-vol001-wechat.html` | 业相 格式模板 |
| `guidang-vol001-wechat.html` | 归档实录 格式模板 |
| `all-vol001-wechat.html` | ALL未来所 格式模板 |
| `chart-generator.html` | 全图关键词坐标图生成工具 |
