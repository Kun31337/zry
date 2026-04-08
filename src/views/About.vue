<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

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
    id: 1,
    title: '专业技术',
    description: '拥有多项指纹识别技术专利，结合AI算法精准分析'
  },
  {
    id: 2,
    title: '科学依据',
    description: '基于遗传学、皮纹学等多学科研究成果'
  },
  {
    id: 3,
    title: '精准测评',
    description: '通过10个手指指纹全面分析先天潜能'
  },
  {
    id: 4,
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
  { 
    id: 1,
    name: '专业', 
    desc: '以科学为根基' 
  },
  { 
    id: 2,
    name: '真诚', 
    desc: '以用户为中心' 
  },
  { 
    id: 3,
    name: '创新', 
    desc: '以技术为驱动' 
  },
  { 
    id: 4,
    name: '责任', 
    desc: '以品质为承诺' 
  }
]
</script>

<template>
  <div class="about-page">
    <!-- Hero Section -->
    <header class="hero-section">
      <div class="hero-content">
        <div class="breadcrumb-nav">
          <a @click="router.push('/')" class="breadcrumb-item">首页</a>
          <span class="separator">/</span>
          <span class="breadcrumb-current">关于我们</span>
        </div>
        <h1 class="hero-title">关于 {{ companyInfo.name }}</h1>
        <p class="hero-subtitle">{{ companyInfo.slogan }}</p>
        <p class="hero-desc">{{ companyInfo.description }}</p>
        <div class="hero-badge">{{ companyInfo.website }}</div>
      </div>
    </header>

    <!-- Advantages Section -->
    <section class="advantages-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">核心优势</h2>
          <p class="section-desc">四大核心竞争力，打造专业的天赋测评体系</p>
        </div>
        
        <div class="advantages-grid">
          <article 
            v-for="advantage in advantages" 
            :key="advantage.id"
            class="advantage-card"
          >
            <div class="card-number">{{ String(advantage.id).padStart(2, '0') }}</div>
            <h3 class="card-title">{{ advantage.title }}</h3>
            <p class="card-description">{{ advantage.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="mission-vision-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">使命与愿景</h2>
          <p class="section-desc">以专业精神，成就每个人的天赋未来</p>
        </div>
        
        <div class="mission-vision-grid">
          <div class="mission-card">
            <h3 class="card-title">我们的使命</h3>
            <p class="card-content">{{ companyInfo.mission }}</p>
          </div>
          <div class="vision-card">
            <h3 class="card-title">我们的愿景</h3>
            <p class="card-content">{{ companyInfo.vision }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">核心价值观</h2>
          <p class="section-desc">引领我们前行的四大价值准则</p>
        </div>
        
        <div class="values-grid">
          <article 
            v-for="value in values" 
            :key="value.id"
            class="value-card"
          >
            <div class="card-number">{{ String(value.id).padStart(2, '0') }}</div>
            <h3 class="card-title">{{ value.name }}</h3>
            <p class="card-description">{{ value.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Milestones Section -->
    <section class="milestones-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">发展历程</h2>
          <p class="section-desc">稳步前行，持续创新的成长之路</p>
        </div>
        
        <div class="timeline">
          <div v-for="(item, index) in milestones" :key="item.year" class="timeline-item">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-dot"></div>
            <div class="timeline-event">{{ item.event }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="about-footer">
      <div class="container">
        <p class="footer-text">© 2024 {{ companyInfo.name }} | {{ companyInfo.website }}</p>
        <p class="contact-text">服务热线：400-123-4567 | 邮箱：contact@wenmai.com</p>
        <button class="btn btn-primary" @click="router.push('/service')">预约咨询</button>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  background: #fafafa;
}

/* Breadcrumb */
.breadcrumb-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 14px;
}

.breadcrumb-item {
  color: #666666;
  cursor: pointer;
  text-decoration: none;
}

.breadcrumb-item:hover {
  color: #1a1a1a;
}

.separator {
  color: #999999;
}

.breadcrumb-current {
  color: #1a1a1a;
  font-weight: 500;
}

/* Hero Section */
.hero-section {
  padding: 100px 24px 80px;
  background: linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%);
  border-bottom: 1px solid #e8e8e8;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -1px;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 20px;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 24px;
}

.hero-desc {
  font-size: 16px;
  color: #666666;
  line-height: 1.8;
  margin-bottom: 32px;
}

.hero-badge {
  display: inline-block;
  background: #1a1a1a;
  color: #ffffff;
  padding: 8px 24px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 500;
}

/* Common Section Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.5px;
  margin-bottom: 12px;
}

.section-desc {
  font-size: 17px;
  color: #666666;
  line-height: 1.5;
}

/* Advantages Section */
.advantages-section {
  padding: 80px 24px;
  background: #fafafa;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.advantage-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 32px 28px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.advantage-card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
  border-color: #d0d0d0;
}

.card-number {
  font-size: 14px;
  font-weight: 600;
  color: #999999;
  margin-bottom: 16px;
}

.card-title {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.card-description {
  font-size: 15px;
  color: #666666;
  line-height: 1.6;
}

/* Mission & Vision Section */
.mission-vision-section {
  padding: 80px 24px;
  background: #ffffff;
  border-top: 1px solid #e8e8e8;
}

.mission-vision-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.mission-card, .vision-card {
  background: #1a1a1a;
  color: #ffffff;
  border-radius: 12px;
  padding: 40px 32px;
  transition: all 0.3s ease;
}

.mission-card:hover, .vision-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.mission-card .card-content, .vision-card .card-content {
  font-size: 16px;
  line-height: 1.8;
  color: #f0f0f0;
}

/* Values Section */
.values-section {
  padding: 80px 24px;
  background: #fafafa;
  border-top: 1px solid #e8e8e8;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.value-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 32px 28px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.value-card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
  border-color: #d0d0d0;
}

/* Milestones Section */
.milestones-section {
  padding: 80px 24px;
  background: #ffffff;
  border-top: 1px solid #e8e8e8;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 16px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e8e8e8;
}

.timeline-item {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  padding: 24px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-year {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  min-width: 80px;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  background: #1a1a1a;
  border-radius: 50%;
  margin: 0 24px;
  position: relative;
  z-index: 1;
}

.timeline-event {
  flex: 1;
  font-size: 15px;
  color: #666666;
  line-height: 1.6;
}

/* Footer */
.about-footer {
  padding: 60px 24px;
  background: #fafafa;
  border-top: 1px solid #e8e8e8;
  text-align: center;
}

.footer-text {
  font-size: 15px;
  color: #666666;
  margin-bottom: 8px;
}

.contact-text {
  font-size: 14px;
  color: #999999;
  margin-bottom: 24px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-primary {
  background: #1a1a1a;
  color: #ffffff;
}

.btn-primary:hover {
  background: #333333;
  transform: translateY(-1px);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 60px 24px;
  }

  .hero-title {
    font-size: 32px;
  }

  .section-title {
    font-size: 28px;
  }

  .timeline {
    padding-left: 24px;
  }

  .timeline-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .timeline-year {
    min-width: auto;
    margin-bottom: 8px;
  }

  .timeline-dot {
    display: none;
  }

  .advantages-section,
  .mission-vision-section,
  .values-section,
  .milestones-section {
    padding: 60px 24px;
  }
}
</style>