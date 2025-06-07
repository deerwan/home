# 个人主页

## ✨ 特色功能

- 🚀 使用 [Cloudflare Pages](https://dash.cloudflare.com) 一键部署
- 🌐 支持自定义域名和 SSL 证书
- 🌓 基于东八区时间自动切换明暗主题
- 🎨 精美动画和过渡效果
- 📱 响应式设计，支持移动端
- ⚡ 性能优化，快速加载
- ♿ 支持无障碍访问（减少动画）
- 💪 原生技术栈，零依赖

## 🚀 性能优化

- 内联关键CSS，提高首屏加载速度
- 使用预加载和异步加载CSS
- 延迟加载非关键JavaScript
- GPU加速的平滑动画
- 优化图片加载策略
- 开发模式性能监控

## 💻 快速开始

### Cloudflare Pages 部署

1. Fork 此项目到你的 GitHub 账号
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
3. 进入 Pages 页面，点击「创建项目」
4. 选择「从 Git 连接」，授权并选择你 fork 的仓库
5. 部署配置：
   - 构建命令：留空
   - 输出目录：留空
6. 点击「保存并部署」

### 本地开发

1. 克隆仓库到本地
   ```bash
   git clone https://github.com/yourusername/home.git
   cd home
   ```

2. 使用任意HTTP服务器运行项目，例如：
   ```bash
   npx serve
   ```

3. 开发模式
   在URL后添加`?dev=true`可以启用开发模式，显示FPS计数器和控制台性能日志

### 自定义域名设置

1. 在项目部署完成后，进入「自定义域」标签
2. 点击「设置自定义域」
3. 输入你的域名，按提示完成 DNS 解析设置

## 📁 项目结构

```
/
├── index.html              # 主页面（含内联关键CSS和预加载逻辑）
├── css/                    # 样式文件夹
│   ├── style.css           # 主样式文件
│   ├── background.css      # 背景样式文件
│   └── cursor-styles.css   # 自定义光标样式
├── js/                     # 脚本文件夹
│   ├── theme.js            # 优化的主题切换
│   └── fps.js             # FPS计数器（开发模式）
└── assets/                 # 资源文件夹
    ├── images/             # 图片资源
    │   └── backgrounds/    # 背景图片
    ├── icons/              # 图标资源
    └── top.png             # 网站图标
```

## 🔧 自定义配置

1. 修改个人信息
   - 编辑 `index.html` 更新个人信息
   - 替换 `assets/images` 中的图片资源

2. 主题定制
   - 在 `css/style.css` 文件中修改 `:root` 和 `[data-theme="dark"]` 变量

3. 项目卡片
   - 在 `index.html` 的 `.projects` 部分添加更多项目卡片

## 🎨 主题切换

网站支持自动和手动两种主题切换模式：

- **自动模式**：根据东八区（北京时间）自动在日出和日落时切换
- **手动模式**：点击主题图标手动切换，偏好会保存在localStorage

## 🧠 技术栈

- HTML5
- CSS3 (变量、动画、过渡)
- JavaScript ES6+

## 🙏 鸣谢

- [Remix Icon](https://remixicon.com/) - 图标库
- [faviconextractor](https://www.faviconextractor.com/) - 图标库
- [Cloudflare Pages](https://pages.cloudflare.com/) - 部署平台
- [Hippopx](https://www.hippopx.com/) - 背景图片网站

## 📄 许可证

MIT License © 2025 Deer