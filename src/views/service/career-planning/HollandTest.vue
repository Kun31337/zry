<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const title = '霍兰德职业兴趣测试'
const subtitle = '探索你的职业兴趣类型'

// 霍兰德六种职业类型
const hollandTypes = [
  { value: 'R', label: '实际型', emoji: '🔧', color: '#FF6B6B', desc: '动手操作、技术导向，喜欢与工具、机器打交道。' },
  { value: 'I', label: '研究型', emoji: '🔬', color: '#4ECDC4', desc: '思考探索、理论分析，喜欢科学研究与解决问题。' },
  { value: 'A', label: '艺术型', emoji: '🎨', color: '#FFE66D', desc: '创意表达、感性思维，喜欢艺术创作与自由发挥。' },
  { value: 'S', label: '社会型', emoji: '🤝', color: '#95E77E', desc: '助人合作、沟通交流，喜欢教育、咨询与服务他人。' },
  { value: 'E', label: '企业型', emoji: '💼', color: '#FF9F4A', desc: '领导说服、目标导向，喜欢管理、销售与影响他人。' },
  { value: 'C', label: '常规型', emoji: '📊', color: '#B5A8E8', desc: '有条不紊、细节规范，喜欢数据处理与组织安排。' }
]

// 测试题目
const questions = [
  { id: 1, text: '我喜欢动手修理电器或组装家具', type: 'R' },
  { id: 2, text: '我对科学探索和理论研究很感兴趣', type: 'I' },
  { id: 3, text: '我喜欢绘画、写作或音乐创作', type: 'A' },
  { id: 4, text: '我喜欢帮助他人解决问题', type: 'S' },
  { id: 5, text: '我喜欢领导团队或组织活动', type: 'E' },
  { id: 6, text: '我喜欢按照规范流程处理数据', type: 'C' },
  { id: 7, text: '我擅长操作机械或使用工具', type: 'R' },
  { id: 8, text: '我喜欢分析数据和做实验', type: 'I' },
  { id: 9, text: '我喜欢在自由环境中发挥创意', type: 'A' },
  { id: 10, text: '我喜欢教书、培训或咨询他人', type: 'S' },
  { id: 11, text: '我喜欢谈判或推销产品', type: 'E' },
  { id: 12, text: '我喜欢整理文件和归档系统', type: 'C' }
]

// 评分选项
const scoreOptions = [
  { value: 1, label: '非常不同意', emoji: '😞' },
  { value: 2, label: '不同意', emoji: '😕' },
  { value: 3, label: '中立', emoji: '😐' },
  { value: 4, label: '同意', emoji: '🙂' },
  { value: 5, label: '非常同意', emoji: '😄' }
]

// 存储每个问题的得分
const answers = ref<Record<number, number>>({})

// 计算各类型总分
const typeScores = computed(() => {
  const scores: Record<string, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 }
  
  Object.entries(answers.value).forEach(([questionId, score]) => {
    const question = questions.find(q => q.id === parseInt(questionId))
    if (question) {
      scores[question.type] += score
    }
  })
  
  return scores
})

// 计算是否全部完成
const allCompleted = computed(() => {
  return questions.every(q => answers.value[q.id] !== undefined)
})

// 获取前三类型
const topThreeTypes = computed(() => {
  const sorted = Object.entries(typeScores.value)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
  
  return sorted.map(([type, score]) => {
    const typeInfo = hollandTypes.find(t => t.value === type)
    return { type, score, ...typeInfo }
  })
})

// 选择得分
const selectScore = (questionId: number, score: number) => {
  answers.value[questionId] = score
}

// 获取报告
const getReport = () => {
  if (!allCompleted.value) return
  alert('功能开发中 🚧')
  console.log('测试结果:', {
    answers: answers.value,
    typeScores: typeScores.value,
    topThree: topThreeTypes.value
  })
}

// 重置测试
const resetTest = () => {
  answers.value = {}
}
</script>

<template>
  <div class="page-container">
    <!-- 面包屑导航 - 与指纹测试页面一致 -->
    <nav class="breadcrumb-nav">
      <RouterLink to="/" class="breadcrumb-item">🏠 首页</RouterLink>
      <span class="separator">/</span>
      <RouterLink to="/service" class="breadcrumb-item">⚙️ 服务</RouterLink>
      <span class="separator">/</span>
      <RouterLink to="/service/career-planning" class="breadcrumb-item">🎯 职业规划</RouterLink>
      <span class="separator">/</span>
      <span class="breadcrumb-current">{{ title }}</span>
    </nav>

    <h1 class="title">{{ title }}</h1>
    <p class="subtitle">{{ subtitle }}</p>

    <!-- 第一部分：霍兰德类型介绍 -->
    <section class="types-intro">
      <h2 class="section-title">📖 六种职业兴趣类型</h2>
      <div class="types-grid">
        <div 
          v-for="type in hollandTypes" 
          :key="type.value"
          class="type-card"
          :style="{ borderTopColor: type.color }"
        >
          <div class="type-emoji" :style="{ background: type.color + '20', color: type.color }">
            {{ type.emoji }}
          </div>
          <h3>{{ type.label }} <span class="type-code">({{ type.value }})</span></h3>
          <p>{{ type.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 第二部分：测试问卷 -->
    <section class="question-section">
      <h2 class="section-title">📝 兴趣测评问卷</h2>
      <p class="question-hint">请根据您的真实情况，为每个描述选择最符合的选项</p>
      
      <div class="questions-list">
        <div 
          v-for="question in questions" 
          :key="question.id"
          class="question-card"
        >
          <div class="question-header">
            <span class="question-num">{{ question.id }}</span>
            <span class="question-text">{{ question.text }}</span>
          </div>
          <div class="score-options">
            <button
              v-for="option in scoreOptions"
              :key="option.value"
              class="score-btn"
              :class="{ selected: answers[question.id] === option.value }"
              @click="selectScore(question.id, option.value)"
            >
              <span class="score-emoji">{{ option.emoji }}</span>
              <span class="score-label">{{ option.label }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 进度提示 -->
      <div class="progress-bar">
        <div 
          class="progress-fill" 
          :style="{ width: (Object.keys(answers).length / questions.length * 100) + '%' }"
        ></div>
        <span class="progress-text">{{ Object.keys(answers).length }}/{{ questions.length }}</span>
      </div>
    </section>

    <!-- 第三部分：实时结果预览 -->
    <section v-if="Object.keys(answers).length > 0" class="preview-section">
      <h2 class="section-title">📊 实时测评结果</h2>
      <div class="scores-grid">
        <div 
          v-for="type in hollandTypes" 
          :key="type.value"
          class="score-item"
        >
          <div class="score-header">
            <span class="score-emoji">{{ type.emoji }}</span>
            <span class="score-label">{{ type.label }}</span>
            <span class="score-value">{{ typeScores[type.value] || 0 }}</span>
          </div>
          <div class="score-bar-bg">
            <div 
              class="score-bar-fill" 
              :style="{ width: ((typeScores[type.value] || 0) / 60 * 100) + '%', background: type.color }"
            ></div>
          </div>
        </div>
      </div>

      <div v-if="topThreeTypes.length === 3" class="top-three">
        <h3>🏆 您的优势类型</h3>
        <div class="top-three-badges">
          <div 
            v-for="(type, index) in topThreeTypes" 
            :key="type.type"
            class="badge"
            :style="{ background: type.color }"
          >
            <span class="badge-rank">{{ index + 1 }}</span>
            <span class="badge-emoji">{{ type.emoji }}</span>
            <span class="badge-label">{{ type.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 第四部分：操作按钮 -->
    <section class="action-section">
      <div class="action-buttons">
        <button class="btn-reset" @click="resetTest">
          🔄 重置所有
        </button>
        <button 
          class="btn-report"
          :class="{ ready: allCompleted }"
          @click="getReport"
          :disabled="!allCompleted"
        >
          📄 获取完整报告
        </button>
      </div>
      <p v-if="!allCompleted" class="hint-text">请完成所有 {{ questions.length }} 道题目后再查看报告</p>
    </section>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 20px 40px;
  background: linear-gradient(135deg, #f5f7fa 0%, #eef2f7 100%);
  min-height: 100vh;
}

/* 面包屑导航 - 与指纹测试页面一致 */
.breadcrumb-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
  flex-wrap: wrap;
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

.title {
  font-size: 32px;
  color: #35495e;
  text-align: center;
  margin-bottom: 12px;
}

.subtitle {
  text-align: center;
  color: #666;
  font-size: 16px;
  margin-bottom: 50px;
}

/* 通用章节样式 */
.section-title {
  font-size: 24px;
  color: #35495e;
  margin-bottom: 25px;
  text-align: center;
  position: relative;
  padding-bottom: 10px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #42b883, #35495e);
  border-radius: 2px;
}

/* 类型介绍 */
.types-intro {
  margin-bottom: 50px;
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.type-card {
  background: white;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-top: 4px solid;
  transition: transform 0.3s, box-shadow 0.3s;
}

.type-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.type-emoji {
  width: 64px;
  height: 64px;
  line-height: 64px;
  font-size: 32px;
  border-radius: 50%;
  margin: 0 auto 16px;
}

.type-card h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
}

.type-code {
  font-size: 12px;
  color: #999;
  font-weight: normal;
}

.type-card p {
  color: #666;
  font-size: 13px;
  line-height: 1.5;
}

/* 问卷部分 */
.question-section {
  margin-bottom: 50px;
}

.question-hint {
  text-align: center;
  color: #888;
  font-size: 14px;
  margin-bottom: 30px;
}

.questions-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.question-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s;
}

.question-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.question-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.question-num {
  width: 28px;
  height: 28px;
  background: #42b883;
  color: white;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  flex-shrink: 0;
}

.question-text {
  font-size: 16px;
  color: #333;
  line-height: 1.5;
}

.score-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.score-btn {
  flex: 1;
  min-width: 80px;
  padding: 10px 12px;
  background: #f5f5f5;
  border: 2px solid #e0e0e0;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.score-btn:hover {
  border-color: #42b883;
  background: #f0faf5;
  transform: translateY(-2px);
}

.score-btn.selected {
  background: linear-gradient(135deg, #42b883, #35495e);
  border-color: #42b883;
  color: white;
}

.score-emoji {
  font-size: 20px;
}

.score-label {
  font-size: 11px;
}

.score-btn.selected .score-label {
  color: white;
}

/* 进度条 */
.progress-bar {
  margin-top: 30px;
  background: #e0e0e0;
  border-radius: 20px;
  height: 8px;
  position: relative;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #42b883, #35495e);
  border-radius: 20px;
  transition: width 0.3s ease;
}

.progress-text {
  position: absolute;
  right: 0;
  top: -24px;
  font-size: 12px;
  color: #666;
}

/* 实时结果预览 */
.preview-section {
  margin-bottom: 50px;
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.scores-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;
}

.score-item {
  width: 100%;
}

.score-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.score-header .score-emoji {
  width: 32px;
  font-size: 20px;
}

.score-header .score-label {
  width: 60px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.score-value {
  margin-left: auto;
  font-weight: 600;
  color: #42b883;
}

.score-bar-bg {
  flex: 1;
  height: 10px;
  background: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.score-bar-fill {
  height: 100%;
  border-radius: 10px;
  transition: width 0.3s ease;
}

.top-three {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.top-three h3 {
  font-size: 18px;
  color: #35495e;
  margin-bottom: 16px;
}

.top-three-badges {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 40px;
  color: white;
  position: relative;
}

.badge-rank {
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.badge-emoji {
  font-size: 18px;
}

.badge-label {
  font-size: 14px;
  font-weight: 500;
}

/* 操作按钮 */
.action-section {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-reset {
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 500;
  color: #666;
  background: #f5f5f5;
  border: 2px solid #e0e0e0;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-reset:hover {
  border-color: #ff6b6b;
  color: #ff6b6b;
  background: #fff0f0;
}

.btn-report {
  padding: 14px 40px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #42b883, #35495e);
  border: none;
  border-radius: 50px;
  cursor: not-allowed;
  opacity: 0.5;
  transition: all 0.3s;
}

.btn-report.ready {
  cursor: pointer;
  opacity: 1;
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.3);
}

.btn-report.ready:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(66, 184, 131, 0.4);
}

.hint-text {
  color: #999;
  font-size: 13px;
  margin-top: 16px;
}

/* 响应式 */
@media (max-width: 768px) {
  .page-container {
    padding: 60px 15px 30px;
  }

  .title {
    font-size: 26px;
  }

  .section-title {
    font-size: 20px;
  }

  .types-grid {
    grid-template-columns: 1fr;
  }

  .score-btn {
    min-width: 65px;
    padding: 8px 8px;
  }

  .score-emoji {
    font-size: 18px;
  }

  .score-label {
    font-size: 10px;
  }

  .action-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-reset, .btn-report {
    width: 200px;
  }

  .top-three-badges {
    flex-direction: column;
    align-items: center;
  }
}
</style>