# 粉粉打卡 · Pink Check

可爱马卡龙风打卡工作台 PWA 应用。

## 文件说明

| 文件 | 说明 |
|------|------|
| `pink-check.html` | 主应用（单文件，含全部 CSS + JS） |
| `manifest.json` | PWA 配置（App 名称、图标、主题色） |
| `sw.js` | Service Worker（离线缓存） |
| `icon-192.png` | 192×192 App 图标 |
| `icon-512.png` | 512×512 大图标 |
| `apple-touch-icon.png` | 180×180 iPhone 主屏幕图标 |
| `.nojekyll` | 禁用 GitHub Pages 的 Jekyll 处理 |

## GitHub Pages 部署步骤

1. 新建 GitHub 仓库（Public）
2. 把所有文件 push 到仓库根目录
3. 仓库 → Settings → Pages → Source 选 `main` 分支 → `/ (root)` → Save
4. 等待 1-2 分钟，访问 `https://你的用户名.github.io/仓库名/`

## iPhone 安装为 App

1. 用 Safari 打开部署后的链接
2. 点击底部分享按钮 →「添加到主屏幕」
3. 即可像原生 App 一样全屏运行、离线可用

## 功能

- 每日打卡：添加项目、进度环、一键打卡
- 偶尔打卡：月历视图、统计次数与间隔、防误触
- 左侧导航支持拖拽排序
- 数据自动保存到本地
- 设备同步状态实时显示
