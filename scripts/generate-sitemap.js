const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

// 网站配置
const siteConfig = {
  hostname: 'https://your-domain.com', // 替换为您的域名
  urls: [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/404.html', changefreq: 'monthly', priority: 0.1 }
  ]
};

async function generateSitemap() {
  try {
    const stream = new SitemapStream({ hostname: siteConfig.hostname });
    
    // 添加URL到网站地图
    siteConfig.urls.forEach(url => {
      stream.write(url);
    });
    
    stream.end();
    
    // 生成网站地图XML
    const sitemap = await streamToPromise(stream);
    
    // 确保dist目录存在
    const distDir = path.join(__dirname, '../dist');
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }
    
    // 写入sitemap.xml
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap.toString());
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap(); 