<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const services = [
  {
    id: 1,
    title: '学业规划',
    path: '/service/study-planning',
    shortDesc: '科学制定学业发展方案',
    fullDescription: '针对学生个体特征提供全面的学业发展规划服务。通过系统的评估与诊断，帮助您发现学科优势、识别学习瓶颈，并制定切实可行的阶段性目标。我们的方案涵盖学习方法优化、时间管理策略、考试规划等多个维度，确保每一个阶段都有明确的方向与可衡量的成果。',
    features: [
      { title: '学科能力评估', desc: '基于标准化测试分析各学科强项与弱项' },
      { title: '学习风格诊断', desc: '识别最适合个人的知识吸收方式' },
      { title: '阶段性目标设定', desc: '制定可量化、可执行的短期与长期计划' },
      { title: '定期跟进调整', desc: '根据实际进展动态优化规划方案' }
    ]
  },
  {
    id: 2,
    title: '职业规划',
    path: '/service/career-planning',
    shortDesc: '匹配个人特质的职业路径',
    fullDescription: '结合霍兰德职业兴趣理论、MBTI 性格分析及市场趋势研究，为不同年龄段人群提供精准的职业发展方向建议。不仅关注当下的岗位匹配，更重视长期的职业发展潜力，帮助您建立清晰的职业愿景与实现路径。',
    features: [
      { title: '职业能力测评', desc: '运用成熟量表评估职业技能与潜力' },
      { title: '行业前景分析', desc: '提供目标行业的市场规模与发展趋势报告' },
      { title: '技能差距诊断', desc: '识别当前能力与理想职位之间的差距' },
      { title: '发展路径规划', desc: '设计分阶段的职业进阶路线图' }
    ]
  },
  {
    id: 3,
    title: '性格测试',
    path: '/service/personality-test',
    shortDesc: '深入了解自身人格特质',
    fullDescription: '采用国际通行的心理测量工具，对您的性格特征进行深度解析。测试结果将揭示您在人际交往、决策方式、压力应对等方面的行为模式，帮助您更好地理解自己的内在动机与外在表现之间的关系。专业的解读报告配合一对一咨询，让每一次测评都成为自我认知的深化过程。',
    features: [
      { title: '多维度人格画像', desc: '涵盖情绪稳定性、外向性、开放性等多重维度' },
      { title: '人际风格分析', desc: '了解您在团队中的角色定位与沟通偏好' },
      { title: '决策模式识别', desc: '洞察您做决定时的思维习惯与影响因素' },
      { title: '专业咨询师解读', desc: '由持证心理咨询师提供个性化反馈' }
    ]
  },
  {
    id: 4,
    title: '天赋测试',
    path: '/service/talent-test',
    shortDesc: '发掘被忽视的潜能',
    fullDescription: '通过科学的认知能力评估体系，发现那些尚未被充分开发和利用的天赋潜能。测试覆盖逻辑推理、空间想象、语言理解、数学运算等核心认知领域，为您提供一份全面的能力图谱。无论您是为子女选择兴趣班，还是为自己寻找第二职业方向，都能获得有价值的参考依据。',
    features: [
      { title: '多维认知测评', desc: '全面评估各项基础认知能力的发展水平' },
      { title: '天赋潜能挖掘', desc: '识别具有高度发展潜力的高分项' },
      { title: '教育指导建议', desc: '基于测评结果提供针对性的教育资源推荐' },
      { title: '终身学习规划', desc: '构建与个人天赋匹配的长期学习框架' }
    ]
  }
];

const goToTest = (path: string) => {
  router.push(path);
};

const expertInfo = {
  name: '徐立峰 博士',
  title: '首席心理学家 | 教育心理学专家',
  quote: '我们坚信，每个人都有自己的独特天赋与发展轨迹。我们的使命，就是通过科学的评估与专业的指导，帮助您发现自己的光芒所在，并为它找到最合适的土壤。',
  stats: [
    { value: '15+', label: '年从业经验' },
    { value: '10000+', label: '个案咨询' },
    { value: '98%', label: '客户满意度' }
  ]
};
</script>

<template>
  <div class="service-page">
    <!-- Header -->
    <header class="page-header">
      <h1 class="page-title">专业服务</h1>
      <p class="page-subtitle">基于心理学原理的评估体系，为您提供科学、专业的自我认知与发展指导</p>
    </header>

    <!-- Services List -->
    <section class="services-section">
      <article 
        v-for="(service, index) in services" 
        :key="service.id"
        class="service-item clickable"
        :class="{ 'alternate': index % 2 === 1 }"
        @click="goToTest(service.path)"
      >
        <div class="service-image">
          <template v-if="service.id === 1">
            <img src="/images/study-planning.jpg" alt="学业规划" />
          </template>
          <template v-else-if="service.id === 2">
            <img src="/images/career-planning.jpg" alt="职业规划" />
          </template>
          <template v-else-if="service.id === 3">
            <img src="/images/personality-test.jpg" alt="天赋测试" />
          </template>
          <template v-else-if="service.id === 4">
            <img src="/images/talent-test.jpg" alt="性格测试" />
          </template>
          <template v-else>
            {{ service.id }}
          </template>
        </div>
        <div class="service-content">
          <span class="service-number">{{ String(service.id).padStart(2, '0') }}</span>
          <h2 class="service-title">{{ service.title }}</h2>
          <p class="service-short-desc">{{ service.shortDesc }}</p>
          
          <div class="service-body">
            <p class="full-description">{{ service.fullDescription }}</p>
            
            <div class="features-list">
              <div 
                v-for="(feature, idx) in service.features" 
                :key="idx"
                class="feature-item"
              >
                <div class="feature-marker">✓</div>
                <div class="feature-detail">
                  <strong>{{ feature.title }}</strong>
                  <span>{{ feature.desc }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>

    <!-- Expert Section -->
    <section class="expert-section">
      <div class="expert-container">
        <div class="expert-info">
          <span class="label">专业支持</span>
          <h2 class="expert-title">专家团队</h2>
          <p class="expert-subtitle">由资深心理学专家领衔的服务团队</p>
          <blockquote class="expert-quote">{{ expertInfo.quote }}</blockquote>
        </div>
        
        <div class="expert-stats">
          <div class="stat-box">
            <div class="stat-value">{{ expertInfo.stats[0].value }}</div>
            <div class="stat-label">{{ expertInfo.stats[0].label }}</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">{{ expertInfo.stats[1].value }}</div>
            <div class="stat-label">{{ expertInfo.stats[1].label }}</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">{{ expertInfo.stats[2].value }}</div>
            <div class="stat-label">{{ expertInfo.stats[2].label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="page-footer">
      <p class="footer-text">如有任何疑问或需要个性化建议，欢迎随时联系我们的专业团队</p>
      <button class="btn-primary">预约免费咨询</button>
    </footer>
  </div>
</template>

<style scoped>
.service-page {
  min-height: 100vh;
  background: #fafafa;
}

/* Header */
.page-header {
  padding: 80px 24px 60px;
  background: linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%);
  border-bottom: 1px solid #e8e8e8;
  text-align: center;
}

.page-title {
  font-size: 42px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -1px;
  margin-bottom: 16px;
}

.page-subtitle {
  font-size: 18px;
  color: #666666;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

/* Services Section */
.services-section {
  padding: 80px 24px;
  background: #ffffff;
}

.service-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto 80px;
  align-items: start;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-item.clickable {
  cursor: pointer;
}

.service-item.clickable:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}

.service-content {
  pointer-events: none;
}

.service-image {
  width: 100%;
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%);
  border-radius: 12px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.service-number {
  font-size: 14px;
  font-weight: 600;
  color: #999999;
}

.service-title {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
}

.service-short-desc {
  font-size: 18px;
  color: #666666;
}

.full-description {
  font-size: 16px;
  line-height: 1.8;
  color: #333333;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.feature-marker {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #1a1a1a;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  margin-top: 2px;
}

.feature-detail strong {
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 4px;
}

.feature-detail span {
  font-size: 14px;
  color: #666666;
}

/* Expert Section */
.expert-section {
  padding: 80px 24px;
  background: #fafafa;
  border-top: 1px solid #e8e8e8;
}

.expert-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.label {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  color: #1a1a1a;
  background: #f0f0f0;
  padding: 6px 14px;
  border-radius: 20px;
  margin-bottom: 20px;
}

.expert-title {
  font-size: 28px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.expert-subtitle {
  font-size: 17px;
  color: #666666;
  margin-bottom: 24px;
}

.expert-quote {
  font-size: 18px;
  color: #333333;
  line-height: 1.7;
  font-style: italic;
  margin: 0;
  padding-left: 20px;
  border-left: 3px solid #1a1a1a;
}

.stat-box {
  text-align: center;
  padding: 24px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e8e8e8;
}

.stat-value {
  font-size: 36px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #666666;
}

/* Footer */
.page-footer {
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

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  background: #1a1a1a;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #333333;
}

@media (max-width: 768px) {
  .page-header {
    padding: 60px 24px 40px;
  }

  .page-title {
    font-size: 32px;
  }

  .service-item {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .service-item.alternate .study-planning,
  .service-item.alternate .service-content {
    order: 1;
  }

  .expert-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .stat-box {
    padding: 20px;
  }

  .service-image {
    aspect-ratio: 16/9;
  }
}
</style>
