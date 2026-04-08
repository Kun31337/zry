<script setup lang="ts">
// 公司信息
const companyInfo = {
  name: '纹脉生物基因',
  website: '掌如意',
  founded: '2020年',
  slogan: '科技赋能生命，指纹解码天赋',
  description: '纹脉生物基因是一家专注于生物基因技术与天赋潜能研究的高科技企业，致力于通过先进的指纹识别技术和基因分析，为每一位用户提供科学、精准的天赋测评服务。',
  mission: '让每个人都能发现自己的独特天赋，成就更好的自己',
  vision: '成为全球领先的天赋测评与潜能开发服务商'
}

// 公司核心优势
const advantages = [
  {
    icon: '🔬',
    title: '专业技术',
    description: '拥有多项指纹识别技术专利，结合AI算法精准分析'
  },
  {
    icon: '📊',
    title: '科学依据',
    description: '基于遗传学、皮纹学等多学科研究成果'
  },
  {
    icon: '🎯',
    title: '精准测评',
    description: '通过10个手指指纹全面分析先天潜能'
  },
  {
    icon: '💎',
    title: '专业团队',
    description: '由生物学家、心理学家、教育专家组成的研发团队'
  }
]

// 发展历程
const milestones = [
  { year: '2020', event: '公司成立，开启指纹天赋研究' },
  { year: '2021', event: '研发团队组建，建立指纹数据库' },
  { year: '2022', event: '掌如意平台上线，服务首批用户' },
  { year: '2023', event: '获得多项技术专利，用户突破10万' },
  { year: '2024', event: '推出AI智能分析系统，测评更精准' }
]

// 核心价值观
const values = [
  { icon: '🎓', name: '专业', desc: '以科学为根基' },
  { icon: '❤️', name: '真诚', desc: '以用户为中心' },
  { icon: '🚀', name: '创新', desc: '以技术为驱动' },
  { icon: '🤝', name: '责任', desc: '以品质为承诺' }
]
</script>

<template>
  <div class="page-container">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <RouterLink to="/" class="breadcrumb-item">🏠 首页</RouterLink>
      <span class="separator">/</span>
      <span class="breadcrumb-current">关于我们</span>
    </nav>

    <!-- 公司简介区域 -->
    <div class="hero-section">
      <h1 class="title">关于 {{ companyInfo.name }}</h1>
      <p class="website-badge">{{ companyInfo.website }}</p>
      <p class="slogan">{{ companyInfo.slogan }}</p>
      <p class="description">{{ companyInfo.description }}</p>
    </div>

    <!-- 核心优势 -->
    <div class="section">
      <h2 class="section-title">🌟 核心优势</h2>
      <div class="advantages-grid">
        <div v-for="item in advantages" :key="item.title" class="advantage-card">
          <div class="icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

    <!-- 使命与愿景 -->
    <div class="mission-vision">
      <div class="mission-card">
        <div class="icon">🎯</div>
        <h3>我们的使命</h3>
        <p>{{ companyInfo.mission }}</p>
      </div>
      <div class="vision-card">
        <div class="icon">👁️</div>
        <h3>我们的愿景</h3>
        <p>{{ companyInfo.vision }}</p>
      </div>
    </div>

    <!-- 核心价值观 -->
    <div class="section">
      <h2 class="section-title">💎 核心价值观</h2>
      <div class="values-grid">
        <div v-for="value in values" :key="value.name" class="value-card">
          <div class="icon">{{ value.icon }}</div>
          <h3>{{ value.name }}</h3>
          <p>{{ value.desc }}</p>
        </div>
      </div>
    </div>

    <!-- 发展历程 -->
    <div class="section">
      <h2 class="section-title">📅 发展历程</h2>
      <div class="timeline">
        <div v-for="(item, index) in milestones" :key="item.year" class="timeline-item">
          <div class="timeline-year">{{ item.year }}</div>
          <div class="timeline-dot"></div>
          <div class="timeline-event">{{ item.event }}</div>
        </div>
      </div>
    </div>

    <!-- 底部信息 -->
    <div class="footer-info">
      <p>© 2024 {{ companyInfo.name }} | {{ companyInfo.website }}</p>
      <p class="contact">服务热线：400-123-4567 | 邮箱：contact@wenmai.com</p>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  text-align: center;
  padding: 90px 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
}

/* 面包屑导航 */
.breadcrumb-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
}

.breadcrumb-item {
  color: #666;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-item:hover {
  color: #42b883;
}

.separator {
  color: #ccc;
  font-size: 14px;
}

.breadcrumb-current {
  color: #42b883;
  font-weight: 600;
  font-size: 14px;
}

/* 公司简介区域 */
.hero-section {
  margin-bottom: 60px;
}

.title {
  font-size: 36px;
  color: #35495e;
  margin-bottom: 10px;
}

.website-badge {
  display: inline-block;
  background: #42b883;
  color: white;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 14px;
  margin-bottom: 20px;
}

.slogan {
  font-size: 24px;
  color: #42b883;
  font-weight: 500;
  margin-bottom: 20px;
}

.description {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

/* 通用区块样式 */
.section {
  margin-bottom: 60px;
}

.section-title {
  font-size: 28px;
  color: #35495e;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: #42b883;
  border-radius: 2px;
}

/* 核心优势网格 */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 20px;
}

.advantage-card {
  background: #fff;
  border-radius: 16px;
  padding: 30px 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
}

.advantage-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.advantage-card .icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.advantage-card h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.advantage-card p {
  color: #999;
  font-size: 14px;
  line-height: 1.6;
}

/* 使命与愿景 */
.mission-vision {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 60px;
}

.mission-card,
.vision-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  transition: transform 0.3s;
}

.mission-card:hover,
.vision-card:hover {
  transform: translateY(-5px);
}

.mission-card .icon,
.vision-card .icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.mission-card h3,
.vision-card h3 {
  font-size: 24px;
  margin-bottom: 16px;
}

.mission-card p,
.vision-card p {
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.95;
}

/* 核心价值观 */
.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.value-card {
  background: #fff;
  border-radius: 16px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.value-card .icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.value-card h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 6px;
}

.value-card p {
  color: #999;
  font-size: 13px;
}

/* 发展历程时间轴 */
.timeline {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #42b883;
}

.timeline-item {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.timeline-year {
  font-size: 18px;
  font-weight: bold;
  color: #42b883;
  min-width: 80px;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  background: #42b883;
  border-radius: 50%;
  margin: 0 20px;
  position: relative;
}

.timeline-event {
  flex: 1;
  color: #666;
  font-size: 14px;
  text-align: left;
}

/* 底部信息 */
.footer-info {
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  color: #999;
  font-size: 13px;
}

.contact {
  margin-top: 8px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-container {
    padding: 70px 16px 30px;
  }

  .title {
    font-size: 28px;
  }

  .slogan {
    font-size: 18px;
  }

  .description {
    font-size: 14px;
  }

  .section-title {
    font-size: 24px;
  }

  .mission-vision {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .advantages-grid {
    gap: 16px;
  }

  .timeline {
    padding-left: 20px;
  }

  .timeline-year {
    font-size: 14px;
    min-width: 60px;
  }

  .timeline-event {
    font-size: 12px;
  }
}
</style>