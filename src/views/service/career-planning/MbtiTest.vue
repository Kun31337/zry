<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const title = "MBTI 职业性格测试"
const subtitle = "了解你的性格特征与职业匹配"

// MBTI 四个维度的选项
const dimensions = [
  { id: 'EI', label: '精力支配', left: { code: 'E', name: '外向 (E)', desc: '善于交际、行动派、喜欢热闹' }, right: { code: 'I', name: '内向 (I)', desc: '独立思考、反省型、喜欢安静' } },
  { id: 'SN', label: '认知方式', left: { code: 'S', name: '实感 (S)', desc: '注重事实、现实派、关注细节' }, right: { code: 'N', name: '直觉 (N)', desc: '富有想象力、理想派、关注整体' } },
  { id: 'TF', label: '判断方式', left: { code: 'T', name: '思考 (T)', desc: '逻辑分析、客观公正、讲求原则' }, right: { code: 'F', name: '情感 (F)', desc: '善解人意、主观关怀、注重和谐' } },
  { id: 'JP', label: '生活态度', left: { code: 'J', name: '判断 (J)', desc: '计划性强、条理清晰、喜欢掌控' }, right: { code: 'P', name: '感知 (P)', desc: '灵活应变、随性而为、喜欢开放' } }
]

// 测试题目（每题对应一个维度）
const questions = [
  { id: 1, text: '参加聚会时，你更喜欢与很多人交流，而不是只和少数人深聊', dimension: 'EI', direction: 'E' },
  { id: 2, text: '你更倾向于关注事实和具体细节，而不是想象各种可能性', dimension: 'SN', direction: 'S' },
  { id: 3, text: '做决定时，你更依赖逻辑分析，而不是考虑他人感受', dimension: 'TF', direction: 'T' },
  { id: 4, text: '你更喜欢按计划行事，而不是随性而为', dimension: 'JP', direction: 'J' },
  { id: 5, text: '你更喜欢独自度过周末，而不是参加社交活动', dimension: 'EI', direction: 'I' },
  { id: 6, text: '你常常思考未来的可能性，而不是只关注眼前的事情', dimension: 'SN', direction: 'N' },
  { id: 7, text: '你更注重维护团队和谐，而不是坚持自己的观点', dimension: 'TF', direction: 'F' },
  { id: 8, text: '你享受 Deadline 带来的压力，认为它能提高效率', dimension: 'JP', direction: 'J' },
  { id: 9, text: '你是那种"说干就干"的人，而不是深思熟虑后再行动', dimension: 'JP', direction: 'P' },
  { id: 10, text: '你更擅长理论思考，而不是动手实践', dimension: 'SN', direction: 'N' },
  { id: 11, text: '你更在意事情是否正确，而不是是否让人开心', dimension: 'TF', direction: 'T' },
  { id: 12, text: '你更喜欢自由灵活的工作方式，而不是严格的规章制度', dimension: 'JP', direction: 'P' },
  { id: 13, text: '在团队中，你往往是主动发言的那个人', dimension: 'EI', direction: 'E' },
  { id: 14, text: '你更喜欢抽象的概念讨论，而不是具体的事务处理', dimension: 'SN', direction: 'N' },
  { id: 15, text: '做决定时，你会考虑这个决定对每个人的影响', dimension: 'TF', direction: 'F' },
  { id: 16, text: '你的房间/办公桌通常保持整洁有序', dimension: 'JP', direction: 'J' },
  { id: 17, text: '你更喜欢小范围的朋友圈，而不是广泛的社交网络', dimension: 'EI', direction: 'I' },
  { id: 18, text: '你相信"眼见为实"，而不是相信直觉', dimension: 'SN', direction: 'S' },
  { id: 19, text: '你更容易被逻辑说服，而不是被情感打动', dimension: 'TF', direction: 'T' },
  { id: 20, text: '你喜欢同时处理多个任务，而不是专注于一件事', dimension: 'JP', direction: 'P' },
  { id: 21, text: '你享受成为众人焦点的感觉', dimension: 'EI', direction: 'E' },
  { id: 22, text: '你更关注事物的发展趋势，而不是当前状态', dimension: 'SN', direction: 'N' },
  { id: 23, text: '你更重视公平公正，而不是人情世故', dimension: 'TF', direction: 'T' },
  { id: 24, text: '你倾向于提前规划假期行程', dimension: 'JP', direction: 'J' },
  { id: 25, text: '你更喜欢听而不是说', dimension: 'EI', direction: 'I' },
  { id: 26, text: '你更信赖经验而非理论', dimension: 'SN', direction: 'S' },
  { id: 27, text: '你认为"己所不欲，勿施于人"是最重要的原则', dimension: 'TF', direction: 'F' },
  { id: 28, text: '你享受说走就走的旅行', dimension: 'JP', direction: 'P' }
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

// 计算每个维度的得分
const dimensionScores = computed(() => {
  const scores: Record<string, { left: number, right: number }> = {
    EI: { left: 0, right: 0 },
    SN: { left: 0, right: 0 },
    TF: { left: 0, right: 0 },
    JP: { left: 0, right: 0 }
  }

  Object.entries(answers.value).forEach(([questionId, score]) => {
    const question = questions.find(q => q.id === parseInt(questionId))
    if (question) {
      if (question.direction === dimensions.find(d => d.id === question.dimension)?.left.code) {
        scores[question.dimension].left += score
      } else {
        scores[question.dimension].right += score
      }
    }
  })

  return scores
})

// 计算 MBTI 类型
const mbtiType = computed(() => {
  let type = ''
  
  // E/I 维度
  const ei = dimensionScores.value.EI
  type += ei.left > ei.right ? 'E' : 'I'
  
  // S/N 维度
  const sn = dimensionScores.value.SN
  type += sn.left > sn.right ? 'S' : 'N'
  
  // T/F 维度
  const tf = dimensionScores.value.TF
  type += tf.left > tf.right ? 'T' : 'F'
  
  // J/P 维度
  const jp = dimensionScores.value.JP
  type += jp.left > jp.right ? 'J' : 'P'
  
  return type
})

// 计算是否全部完成
const allCompleted = computed(() => {
  return questions.every(q => answers.value[q.id] !== undefined)
})

// 计算完成数量
const completedCount = computed(() => {
  return Object.keys(answers.value).length
})

// MBTI 类型描述映射
const typeDescriptions: Record<string, { name: string, desc: string, traits: string[], careers: string[] }> = {
  'ISTJ': { name: '检查员型', desc: '细致、务实、有责任感，是可靠的问题解决者。', traits: ['实事求是', '有条理', '责任心强', '注重细节'], careers: ['会计', '审计师', '图书管理员', '律师'] },
  'ISFJ': { name: '保护者型', desc: '友善、负责、有耐心，默默关心他人。', traits: ['忠诚可靠', '细心周到', '有耐心', '乐于助人'], careers: ['护士', '教师', '行政助理', '图书馆员'] },
  'INFJ': { name: '倡导者型', desc: '有远见、富有创造力，追求有意义的事业。', traits: ['理想主义', '有洞察力', '富有创意', '执着'], careers: ['作家', '心理咨询师', '社会工作者', '设计师'] },
  'INTJ': { name: '战略家型', desc: '独立、理性、善于规划，是出色的战略家。', traits: ['战略性思维', '独立自主', '高标准', '理性分析'], careers: ['科学家', '工程师', '战略顾问', '架构师'] },
  'ISTP': { name: '冒险家型', desc: '灵活、务实，擅长解决实际问题。', traits: ['动手能力强', '冷静', '适应力强', '务实'], careers: ['工程师', '飞行员', '体育教练', '技术专家'] },
  'ISFP': { name: '艺术家型', desc: '敏感、友善，追求美与和谐。', traits: ['艺术天赋', '敏感细腻', '友善随和', '活在当下'], careers: ['艺术家', '音乐家', '设计师', '兽医'] },
  'INFP': { name: '治愈者型', desc: '理想主义、忠于价值观，是善良的治愈者。', traits: ['理想主义', '忠于价值观', '富有同情心', '创造力'], careers: ['作家', '心理咨询师', '演员', '社会工作者'] },
  'INTP': { name: '思考者型', desc: '逻辑性强、好奇，是创新的思想家。', traits: ['逻辑分析', '好奇心', '独立思考', '创新能力'], careers: ['科学家', '程序员', '哲学家', '研究员'] },
  'ESTP': { name: '实践者型', desc: '精力充沛、务实，善于即兴发挥。', traits: ['行动派', '适应力强', '善于谈判', '务实'], careers: ['销售', '企业家', '运动员', '警察'] },
  'ESFP': { name: '表演者型', desc: '热情、乐观，享受生活的表演者。', traits: ['热情开朗', '善于交际', '乐观', '即兴'], careers: ['演员', '公关', '活动策划', '导游'] },
  'ENFP': { name: '激励者型', desc: '热情、富有创意，能激励他人的倡导者。', traits: ['热情洋溢', '创造力', '善于沟通', '适应力强'], careers: ['广告人', '心理咨询师', '记者', '演员'] },
  'ENTP': { name: '辩论家型', desc: '机智、好奇，善于挑战和创新的辩论家。', traits: ['机智敏锐', '创新思维', '善于辩论', '好奇心'], careers: ['律师', '市场营销', '发明家', '分析师'] },
  'ESTJ': { name: '监督者型', desc: '务实、有条理，是高效的管理者。', traits: ['领导力', '务实', '有条理', '责任感'], careers: ['经理', '法官', '警察', '项目经理'] },
  'ESFJ': { name: '支持者型', desc: '友善、合作，关心他人需求的支持者。', traits: ['乐于助人', '善于合作', '有责任感', '热情'], careers: ['教师', '护士', '销售', '行政经理'] },
  'ENFJ': { name: '教育者型', desc: '有魅力、善于沟通，能激励他人的教育者。', traits: ['有魅力', '善于沟通', '同理心强', '领导力'], careers: ['教师', '公关', '咨询师', '人力资源'] },
  'ENTJ': { name: '指挥官型', desc: '果断、有领导力，是天生的指挥官。', traits: ['领导力', '战略思维', '果断', '自信'], careers: ['CEO', '管理者', '企业家', '律师'] }
}

// 获取当前类型信息
const currentTypeInfo = computed(() => {
  return typeDescriptions[mbtiType.value] || { name: '待定', desc: '完成所有题目后显示您的MBTI类型', traits: [], careers: [] }
})

// 选择得分
const selectScore = (questionId: number, score: number) => {
  answers.value[questionId] = score
}

// 获取报告
const getReport = () => {
  if (!allCompleted.value) return
  alert(`功能开发中 🚧\n您的MBTI类型是：${mbtiType.value} - ${currentTypeInfo.value.name}`)
  console.log('MBTI测试结果:', {
    answers: answers.value,
    dimensionScores: dimensionScores.value,
    mbtiType: mbtiType.value
  })
}

// 重置测试
const resetTest = () => {
  answers.value = {}
}
</script>

<template>
  <div class="page-container">
    <!-- 面包屑导航 -->
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

    <!-- 第一部分：MBTI 四个维度介绍 -->
    <section class="dimensions-intro">
      <h2 class="section-title">📖 MBTI 四个维度</h2>
      <div class="dimensions-grid">
        <div v-for="dim in dimensions" :key="dim.id" class="dimension-card">
          <div class="dimension-label">{{ dim.label }}</div>
          <div class="dimension-poles">
            <div class="pole left">
              <span class="pole-code">{{ dim.left.code }}</span>
              <span class="pole-name">{{ dim.left.name }}</span>
              <span class="pole-desc">{{ dim.left.desc }}</span>
            </div>
            <div class="pole-vs">VS</div>
            <div class="pole right">
              <span class="pole-code">{{ dim.right.code }}</span>
              <span class="pole-name">{{ dim.right.name }}</span>
              <span class="pole-desc">{{ dim.right.desc }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第二部分：测试问卷 -->
    <section class="question-section">
      <h2 class="section-title">📝 MBTI 测评问卷</h2>
      <p class="question-hint">请根据您的真实情况，为每个描述选择最符合的选项（共 {{ questions.length }} 题）</p>
      
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

      <!-- 进度条 -->
      <div class="progress-bar">
        <div 
          class="progress-fill" 
          :style="{ width: (completedCount / questions.length * 100) + '%' }"
        ></div>
        <span class="progress-text">{{ completedCount }}/{{ questions.length }}</span>
      </div>
    </section>

    <!-- 第三部分：实时结果预览 -->
    <section v-if="completedCount > 0" class="preview-section">
      <h2 class="section-title">📊 实时测评结果</h2>
      
      <!-- 维度得分 -->
      <div class="dimension-scores">
        <div v-for="dim in dimensions" :key="dim.id" class="dimension-score-item">
          <div class="dimension-score-header">
            <span class="dimension-name">{{ dim.label }}</span>
            <div class="dimension-values">
              <span class="left-value">{{ dim.left.code }}: {{ dimensionScores[dim.id].left || 0 }}</span>
              <span class="right-value">{{ dim.right.code }}: {{ dimensionScores[dim.id].right || 0 }}</span>
            </div>
          </div>
          <div class="dimension-bar">
            <div class="bar-left" :style="{ width: (dimensionScores[dim.id].left / (dimensionScores[dim.id].left + dimensionScores[dim.id].right) * 100) + '%' }">
              <span v-if="dimensionScores[dim.id].left > dimensionScores[dim.id].right" class="bar-indicator">●</span>
            </div>
            <div class="bar-right" :style="{ width: (dimensionScores[dim.id].right / (dimensionScores[dim.id].left + dimensionScores[dim.id].right) * 100) + '%' }">
              <span v-if="dimensionScores[dim.id].right > dimensionScores[dim.id].left" class="bar-indicator">●</span>
            </div>
          </div>
        </div>
      </div>

      <!-- MBTI 类型展示 -->
      <div v-if="completedCount === questions.length" class="mbti-result">
        <h3>您的 MBTI 类型</h3>
        <div class="type-badge">
          <span class="type-code">{{ mbtiType }}</span>
          <span class="type-name">{{ currentTypeInfo.name }}</span>
        </div>
        <p class="type-desc">{{ currentTypeInfo.desc }}</p>
        
        <div class="type-details" v-if="currentTypeInfo.traits.length">
          <div class="detail-block">
            <h4>✨ 性格特质</h4>
            <div class="tags">
              <span v-for="trait in currentTypeInfo.traits" :key="trait" class="tag">{{ trait }}</span>
            </div>
          </div>
          <div class="detail-block">
            <h4>💼 适合职业</h4>
            <div class="tags">
              <span v-for="career in currentTypeInfo.careers" :key="career" class="tag career-tag">{{ career }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="incomplete-hint">
        <p>完成全部 {{ questions.length }} 道题目后，将显示您的完整 MBTI 类型分析</p>
        <p class="small-hint">已完成 {{ completedCount }} 题，还需 {{ questions.length - completedCount }} 题</p>
      </div>
    </section>

    <!-- 第四部分：操作按钮 -->
    <section class="action-section">
      <div class="action-buttons">
        <button class="btn-reset" @click="resetTest" :disabled="completedCount === 0">
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

/* 面包屑导航 */
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
  margin-bottom: 15px;
  text-align: center;
}

.subtitle {
  color: #666;
  font-size: 16px;
  margin-bottom: 50px;
  text-align: center;
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

/* 四个维度介绍 */
.dimensions-intro {
  margin-bottom: 50px;
}

.dimensions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.dimension-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
}

.dimension-card:hover {
  transform: translateY(-4px);
}

.dimension-label {
  font-size: 16px;
  font-weight: 600;
  color: #42b883;
  text-align: center;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e0e0e0;
}

.dimension-poles {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.pole {
  flex: 1;
  text-align: center;
}

.pole-code {
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(135deg, #42b883, #35495e);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.pole-name {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin: 8px 0 4px;
}

.pole-desc {
  font-size: 11px;
  color: #999;
}

.pole-vs {
  font-size: 12px;
  color: #ccc;
  font-weight: bold;
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
  font-size: 15px;
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

.score-btn:hover:not(:disabled) {
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
  font-size: 18px;
}

.score-label {
  font-size: 10px;
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

.dimension-scores {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.dimension-score-item {
  width: 100%;
}

.dimension-score-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 8px;
}

.dimension-name {
  font-weight: 600;
  color: #35495e;
  font-size: 14px;
}

.dimension-values {
  display: flex;
  gap: 16px;
  font-size: 12px;
}

.left-value {
  color: #42b883;
  font-weight: 500;
}

.right-value {
  color: #ff9f4a;
  font-weight: 500;
}

.dimension-bar {
  display: flex;
  height: 24px;
  border-radius: 12px;
  overflow: hidden;
  background: #f0f0f0;
}

.bar-left {
  background: linear-gradient(135deg, #42b883, #5ece9a);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;
  transition: width 0.3s ease;
}

.bar-right {
  background: linear-gradient(135deg, #ff9f4a, #ffb86c);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 8px;
  transition: width 0.3s ease;
}

.bar-indicator {
  font-size: 12px;
  color: white;
}

/* MBTI 结果展示 */
.mbti-result {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.mbti-result h3 {
  font-size: 18px;
  color: #35495e;
  margin-bottom: 16px;
}

.type-badge {
  display: inline-flex;
  align-items: baseline;
  gap: 12px;
  background: linear-gradient(135deg, #42b883, #35495e);
  padding: 12px 24px;
  border-radius: 50px;
  margin-bottom: 16px;
}

.type-code {
  font-size: 32px;
  font-weight: bold;
  color: white;
  letter-spacing: 4px;
}

.type-name {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
}

.type-desc {
  color: #666;
  font-size: 14px;
  margin-bottom: 24px;
}

.type-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  text-align: left;
}

.detail-block h4 {
  font-size: 14px;
  color: #35495e;
  margin-bottom: 12px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: #f0f0f0;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  color: #666;
}

.career-tag {
  background: #e8f5e9;
  color: #42b883;
}

.incomplete-hint {
  text-align: center;
  padding: 20px;
  color: #999;
}

.small-hint {
  font-size: 12px;
  margin-top: 8px;
  color: #42b883;
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

.btn-reset:hover:not(:disabled) {
  border-color: #ff6b6b;
  color: #ff6b6b;
  background: #fff0f0;
}

.btn-reset:disabled {
  opacity: 0.4;
  cursor: not-allowed;
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

  .dimension-poles {
    flex-direction: column;
    gap: 16px;
  }

  .pole-vs {
    display: none;
  }

  .score-btn {
    min-width: 65px;
    padding: 8px 8px;
  }

  .score-emoji {
    font-size: 16px;
  }

  .score-label {
    font-size: 9px;
  }

  .action-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-reset, .btn-report {
    width: 200px;
  }

  .type-code {
    font-size: 24px;
    letter-spacing: 2px;
  }

  .type-name {
    font-size: 14px;
  }
}
</style>