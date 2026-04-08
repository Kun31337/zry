<script setup lang="ts">
import { RouterLink } from 'vue-router'

// 徐博士的简介信息
const drXuInfo = {
  name: '徐博士',
  title: '教育心理学博士',
  avatar: '👨‍⚕️',
  description: '专注青少年心理健康与潜能发展研究十余年，擅长通过科学测评发现孩子的天赋特质，帮助家长和教育者理解孩子的内在需求。'
}

// 专家观点文章列表
const articles = [
  {
    id: 1,
    title: '如何识别孩子的天赋倾向？',
    date: '2024-03-15',
    summary: '天赋不是凭空而来的，它藏在孩子的日常行为、兴趣爱好和解决问题的方式中。本文将带你从三个维度观察和识别孩子的天赋特质...',
    readTime: '8 分钟阅读'
  },
  {
    id: 2,
    title: '指纹背后的性格密码',
    date: '2024-03-10',
    summary: '指纹类型真的能反映性格特征吗？作为心理学研究者，我想告诉你一个科学的视角：指纹测试可以作为自我认知的起点，但不是绝对的标准...',
    readTime: '10 分钟阅读'
  },
  {
    id: 3,
    title: 'MBTI 测试结果到底意味着什么？',
    date: '2024-03-05',
    summary: '很多家长和考生对 MBTI 测试结果充满误解。本文从心理学的角度解读四种维度的真实含义，帮助你正确理解和使用这个工具...',
    readTime: '12 分钟阅读'
  },
  {
    id: 4,
    title: '霍兰德职业兴趣测试的科学性探讨',
    date: '2024-02-28',
    summary: '霍兰德理论是职业规划领域最经典且经过实证检验的工具之一。了解它的优势和局限，才能做出更明智的职业选择...',
    readTime: '15 分钟阅读'
  }
]
</script>

<template>
  <div class="dr-xu-page">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <RouterLink to="/" class="breadcrumb-item">🏠 首页</RouterLink>
      <span class="separator">/</span>
      <span class="breadcrumb-current">徐博士说</span>
    </nav>

    <!-- 头部区域 -->
    <header class="page-header">
      <div class="avatar-section">
        <div class="avatar-large">{{ drXuInfo.avatar }}</div>
        <div class="info-section">
          <h1 class="name">{{ drXuInfo.name }}</h1>
          <h2 class="title">{{ drXuInfo.title }}</h2>
          <p class="description">{{ drXuInfo.description }}</p>
        </div>
      </div>
    </header>

    <!-- 专家寄语 -->
    <section class="message-section">
      <h3 class="section-title">💬 专家寄语</h3>
      <blockquote class="quote">
        <p>"每个孩子的天赋都是独特的，关键在于我们是否懂得如何去发现和引导。科学的测评工具只是起点，真正的成长来自于理解、陪伴和支持。"</p>
        <footer class="quote-author">—— 徐博士</footer>
      </blockquote>
    </section>

    <!-- 最新文章 -->
    <section class="articles-section">
      <h3 class="section-title">📝 最新文章</h3>
      <div class="articles-grid">
        <article 
          v-for="article in articles" 
          :key="article.id"
          class="article-card"
        >
          <div class="article-meta">
            <span class="date">{{ article.date }}</span>
            <span class="read-time">{{ article.readTime }}</span>
          </div>
          <h4 class="article-title">{{ article.title }}</h4>
          <p class="article-summary">{{ article.summary }}</p>
          <button class="read-more-btn">阅读全文 →</button>
        </article>
      </div>
    </section>

    <!-- 研究领域 -->
    <section class="research-section">
      <h3 class="section-title">🔬 研究领域</h3>
      <div class="tags-container">
        <span class="tag">青少年心理健康</span>
        <span class="tag">天赋测评</span>
        <span class="tag">教育心理学</span>
        <span class="tag">职业规划咨询</span>
        <span class="tag">亲子关系指导</span>
        <span class="tag">学习动力激发</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 页面容器 */
.dr-xu-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #eef2f7 100%);
}

/* 面包屑导航 */
.breadcrumb-nav {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  padding: 10px 24px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  z-index: 99;
}

.breadcrumb-item {
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb-item:hover {
  color: #42b883;
}

.separator {
  color: #ccc;
}

.breadcrumb-current {
  color: #42b883;
  font-weight: 500;
}

/* 页面内容容器 */
.page-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 140px 20px 40px;
}

/* 头部区域 */
.page-header {
  margin-bottom: 60px;
}

.avatar-section {
  display: flex;
  align-items: center;
  gap: 40px;
  background: white;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}

.avatar-large {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.info-section h1 {
  font-size: 40px;
  color: #35495e;
  margin: 0 0 10px 0;
}

.info-section h2 {
  font-size: 24px;
  color: #42b883;
  margin: 0 0 15px 0;
  font-weight: 500;
}

.info-section .description {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
  margin: 0;
}

/* 通用章节样式 */
.section-title {
  font-size: 28px;
  color: #35495e;
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #42b883, #35495e);
  border-radius: 2px;
}

/* 专家寄语 */
.message-section {
  margin-bottom: 60px;
  padding: 40px 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.3);
}

.quote {
  margin: 0;
  font-size: 20px;
  font-style: italic;
  line-height: 1.8;
  text-align: center;
}

.quote p {
  margin-bottom: 20px;
}

.quote-author {
  font-size: 16px;
  opacity: 0.9;
  text-align: right;
}

/* 最新文章 */
.articles-section {
  margin-bottom: 60px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.article-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.article-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 13px;
  color: #999;
}

.read-time::before {
  content: '•';
  margin-right: 0;
}

.article-title {
  font-size: 20px;
  color: #35495e;
  margin: 0 0 15px 0;
}

.article-summary {
  color: #666;
  font-size: 14px;
  line-height: 1.8;
  margin: 0 0 20px 0;
}

.read-more-btn {
  background: linear-gradient(135deg, #42b883, #35495e);
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.read-more-btn:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.4);
}

/* 研究领域 */
.research-section {
  margin-bottom: 60px;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.tag {
  background: white;
  color: #42b883;
  padding: 12px 25px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  border: 2px solid transparent;
}

.tag:hover {
  background: #42b883;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.3);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .avatar-section {
    flex-direction: column;
    text-align: center;
    padding: 40px 30px;
  }

  .avatar-large {
    width: 100px;
    height: 100px;
    font-size: 50px;
  }

  .info-section h1 {
    font-size: 32px;
  }

  .info-section h2 {
    font-size: 20px;
  }

  .quote {
    font-size: 16px;
    padding: 0 20px;
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }

  .tag {
    padding: 10px 20px;
    font-size: 13px;
  }
}
</style>
