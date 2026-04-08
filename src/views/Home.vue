<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const services = [
  {
    id: 1,
    title: '学业规划',
    description: '基于个体特征的科学学业发展方案，涵盖学科优势分析与学习策略优化',
    link: '/service/study-planning'
  },
  {
    id: 2,
    title: '职业规划',
    description: '结合个人特质与市场需求的职业发展方向建议与长期路径规划',
    link: '/service/career-planning'
  },
  {
    id: 3,
    title: '性格测试',
    description: '运用标准化心理测量工具评估人格特征与行为模式',
    link: '/service/personality-test'
  },
  {
    id: 4,
    title: '天赋测试',
    description: '通过科学测评发掘认知潜能，为教育决策提供数据支持',
    link: '/service/talent-test'
  }
];

const stats = [
  { value: '10000+', label: '已完成测评' },
  { value: '98%', label: '用户满意度' },
  { value: '15+', label: '年研究经验' }
];
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <header class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">天赋测评系统</h1>
        <p class="hero-subtitle">基于心理学原理的科学评估体系</p>
        <div class="hero-cta">
          <button class="btn btn-primary" @click="router.push('/service')">开始测评</button>
          <button class="btn btn-secondary" @click="router.push('/service')">了解服务</button>
        </div>
      </div>
    </header>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="stats-grid">
        <div v-for="(stat, index) in stats" :key="index" class="stat-item">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">核心服务</h2>
          <p class="section-desc">四大专业评估领域，为您提供全面的自我认知与发展指导</p>
        </div>
        
        <div class="services-grid">
          <article 
            v-for="service in services" 
            :key="service.id"
            class="service-card"
            @click="router.push(service.link)"
          >
            <div class="card-number">{{ String(service.id).padStart(2, '0') }}</div>
            <h3 class="card-title">{{ service.title }}</h3>
            <p class="card-description">{{ service.description }}</p>
            <div class="card-action">
              <span class="action-text">进入评估</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l6 4-6 4V4z" fill="currentColor"/>
              </svg>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="home-footer">
      <p class="footer-text">如需咨询个性化测评方案，请联系我们的专业服务团队</p>
      <button class="btn btn-primary" @click="router.push('/service')">预约咨询</button>
    </footer>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #fafafa;
}

/* Hero Section */
.hero-section {
  padding: 100px 24px 80px;
  background: linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%);
  border-bottom: 1px solid #e8e8e8;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
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
  margin-bottom: 40px;
}

.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
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

.btn-secondary {
  background: #ffffff;
  color: #1a1a1a;
  border: 1px solid #e0e0e0;
}

.btn-secondary:hover {
  background: #f5f5f5;
  border-color: #d0d0d0;
}

/* Stats Section */
.stats-section {
  padding: 60px 24px;
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;
}

.stats-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  text-align: center;
}

.stat-value {
  font-size: 42px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 15px;
  color: #666666;
  font-weight: 500;
}

/* Services Section */
.services-section {
  padding: 80px 24px;
  background: #fafafa;
}

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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.service-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 32px 28px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
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
  margin-bottom: 24px;
}

.card-action {
  display: flex;
  align-items: center;
  gap: 6px;
}

.action-text {
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
  text-decoration: none;
}

/* Footer */
.home-footer {
  padding: 60px 24px;
  background: #fafafa;
  border-top: 1px solid #e8e8e8;
  text-align: center;
}

.footer-text {
  font-size: 15px;
  color: #666666;
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 24px;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-cta {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
