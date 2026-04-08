<script setup lang="ts">
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

// 指纹类型选项
const fingerprintTypes = [
  { value: "左簸箕", label: "左簸箕", desc: "指纹纹路呈弧形，开口向左。" },
  { value: "右簸箕", label: "右簸箕", desc: "指纹纹路呈弧形，开口向右。" },
  {
    value: "斗",
    label: "斗",
    desc: "指纹纹路呈同心圆或螺旋状，如漩涡般中心聚拢。",
  },
  { value: "弓", label: "弓", desc: "指纹纹路如弓形弯曲，从一侧流向另一侧。" },
  { value: "双斗", label: "双斗", desc: "指纹纹路中有两个斗纹。" },
];

// 图片基础尺寸
const IMG_WIDTH = 1116;
const IMG_HEIGHT = 1488;

// 计算百分比
const calcPercent = (value: number, total: number) =>
  ((value / total) * 100).toFixed(2);

// 手指基础坐标
const getFingerBaseCoords = () => [
  {
    idSuffix: "1",
    nameSuffix: "大拇指",
    x: (48 + 224) / 2,
    y: (560 + 742) / 2,
  },
  { idSuffix: "2", nameSuffix: "食指", x: (353 + 475) / 2, y: (126 + 288) / 2 },
  { idSuffix: "3", nameSuffix: "中指", x: (580 + 703) / 2, y: (63 + 253) / 2 },
  {
    idSuffix: "4",
    nameSuffix: "无名指",
    x: (773 + 897) / 2,
    y: (121 + 316) / 2,
  },
  {
    idSuffix: "5",
    nameSuffix: "小拇指",
    x: (938 + 1063) / 2,
    y: (322 + 508) / 2,
  },
];

// 生成左右手手指坐标
const baseCoords = getFingerBaseCoords();
const leftFingers = baseCoords.map((item) => ({
  id: `left-${item.idSuffix}`,
  name: `左手${item.nameSuffix}`,
  x: calcPercent(item.x, IMG_WIDTH),
  y: calcPercent(item.y, IMG_HEIGHT),
}));

const rightFingers = baseCoords.map((item) => ({
  id: `right-${item.idSuffix}`,
  name: `右手${item.nameSuffix}`,
  x: calcPercent(IMG_WIDTH - item.x, IMG_WIDTH),
  y: calcPercent(item.y, IMG_HEIGHT),
}));

// 选择状态
const fingerSelections = ref<Record<string, string>>(
  Object.fromEntries([...rightFingers, ...leftFingers].map((f) => [f.id, ""])),
);

// 计算属性
const allFingerIds = [
  ...rightFingers.map((f) => f.id),
  ...leftFingers.map((f) => f.id),
];
const allSelected = computed(() =>
  allFingerIds.every((id) => fingerSelections.value[id]),
);
const completedCount = computed(
  () => allFingerIds.filter((id) => fingerSelections.value[id]).length,
);
const progressPercent = computed(() =>
  Math.round((completedCount.value / 10) * 100),
);

// 模态框
const selectedFingerId = ref("");
const selectedFingerName = ref("");

// 选择指纹
const selectFingerprint = (fingerId: string, type: string) => {
  fingerSelections.value[fingerId] = type;
};

// 打开选择器
const showTypeSelector = (fingerId: string) => {
  const finger = [...rightFingers, ...leftFingers].find(
    (f) => f.id === fingerId,
  );
  if (finger) {
    selectedFingerId.value = fingerId;
    selectedFingerName.value = finger.name;
  }
};

// 关闭选择器
const closeTypeSelector = () => {
  selectedFingerId.value = "";
  selectedFingerName.value = "";
};

// 获取报告（弹出JSON）
const handleGetReport = () => {
  if (!allSelected.value) {
    alert("请完成所有 10 个手指的选择！");
    return;
  }

  const result = {};
  const allFingers = [...rightFingers, ...leftFingers];
  allFingers.forEach((f) => {
    result[f.name] = fingerSelections.value[f.id];
  });

  alert(JSON.stringify(result, null, 2));
};
</script>

<template>
  <div class="fingerprint-test-page">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <RouterLink to="/" class="breadcrumb-item">首页</RouterLink>
      <span class="separator">/</span>
      <RouterLink to="/service" class="breadcrumb-item">服务</RouterLink>
      <span class="separator">/</span>
      <RouterLink to="/service/talent-test" class="breadcrumb-item">天赋测试</RouterLink>
      <span class="separator">/</span>
      <span class="breadcrumb-current">指纹测试</span>
    </nav>

    <!-- 页面头部 -->
    <header class="page-header">
      <h1 class="page-title">指纹测试</h1>
      <p class="page-subtitle">点击图片中的 10 个手指，然后选择对应的指纹类型</p>
    </header>

    <!-- 指纹类型介绍 -->
    <section class="type-intro">
      <h2 class="section-title">5 种指纹类型</h2>
      <div class="types-grid">
        <div
          v-for="type in fingerprintTypes"
          :key="type.value"
          class="type-card"
        >
          <h3>{{ type.label }}</h3>
          <p>{{ type.desc }}</p>
          <img
            :src="`/src/assets/images/${type.label}.png`"
            :alt="type.label"
            class="type-image"
            @error="$event.target.style.display = 'none'"
          />
        </div>
      </div>
    </section>

    <!-- 指纹选择区域 -->
    <section class="palm-diagram">
      <h2 class="section-title">选择你的指纹</h2>
      <div class="diagram-container">
        <div class="hands-wrapper">
          <!-- 左手 -->
          <div class="hand-container">
            <h4 class="hand-label">左手</h4>
            <div class="palm-image-wrapper">
              <img
                src="/src/assets/images/left hand.png"
                alt="左手图示"
                class="palm-hand"
                @error="$event.target.style.display = 'none'"
              />
              <div class="finger-layer">
                <div
                  v-for="finger in leftFingers"
                  :key="finger.id"
                  class="finger-pointer"
                  :style="{ left: finger.x + '%', top: finger.y + '%' }"
                  @click.stop="showTypeSelector(finger.id)"
                >
                  <span class="pointer-dot"></span>
                  <span
                    v-if="fingerSelections[finger.id]"
                    class="selected-indicator"
                  >
                    <span class="selected-text">
                      {{
                        fingerprintTypes.find(
                          (t) => t.value === fingerSelections[finger.id],
                        )?.label
                      }}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- 右手 -->
          <div class="hand-container">
            <h4 class="hand-label">右手</h4>
            <div class="palm-image-wrapper">
              <img
                src="/src/assets/images/right hand.png"
                alt="右手图示"
                class="palm-hand"
                @error="$event.target.style.display = 'none'"
              />
              <div class="finger-layer">
                <div
                  v-for="finger in rightFingers"
                  :key="finger.id"
                  class="finger-pointer"
                  :style="{ left: finger.x + '%', top: finger.y + '%' }"
                  @click.stop="showTypeSelector(finger.id)"
                >
                  <span class="pointer-dot"></span>
                  <span
                    v-if="fingerSelections[finger.id]"
                    class="selected-indicator"
                  >
                    <span class="selected-text">
                      {{
                        fingerprintTypes.find(
                          (t) => t.value === fingerSelections[finger.id],
                        )?.label
                      }}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: progressPercent + '%' }"
          ></div>
          <span class="progress-text">
            {{ completedCount }} / 10 个手指已选择
          </span>
        </div>
      </div>
    </section>

    <!-- 报告获取区域 -->
    <section class="report-section" :class="{ enabled: allSelected }">
      <button
        class="report-btn"
        :class="{ ready: allSelected }"
        @click="handleGetReport"
        :disabled="!allSelected"
      >
        <span class="btn-text">获取测试报告</span>
      </button>
      <p v-if="!allSelected" class="hint-text">
        还剩 {{ 10 - completedCount }} 个手指待选择
      </p>
    </section>

    <!-- 指纹类型选择模态框 -->
    <div
      v-if="selectedFingerId"
      class="modal-overlay"
      @click.self="closeTypeSelector"
    >
      <div class="modal-content">
        <h3 class="modal-title">请选择{{ selectedFingerName }}的指纹类型</h3>
        <div class="type-selector-grid">
          <button
            v-for="type in fingerprintTypes"
            :key="type.value"
            class="type-selector-btn"
            :class="{
              selected: fingerSelections[selectedFingerId] === type.value,
            }"
            @click="
              selectFingerprint(selectedFingerId, type.value);
              closeTypeSelector();
            "
          >
            <img
              :src="`/src/assets/images/${type.value}.png`"
              :alt="type.label"
              class="selector-image"
              @error="$event.target.style.display = 'none'"
            />
            <span class="selector-label">{{ type.label }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fingerprint-test-page {
  min-height: 100vh;
  background: #ffffff;
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

/* 面包屑导航 - 统一StudyPlanning风格 */
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
  color: #1a1a1a;
}
.separator {
  color: #ccc;
  font-size: 14px;
}
.breadcrumb-current {
  color: #1a1a1a;
  font-weight: 600;
  font-size: 14px;
}

/* 页面头部 - 统一StudyPlanning风格 */
.page-header {
  text-align: center;
  margin-bottom: 60px;
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

/* 通用区块标题 */
.section-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 25px;
  text-align: center;
  position: relative;
  padding-bottom: 10px;
}
.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #1a1a1a;
  border-radius: 2px;
}

/* 指纹类型介绍 */
.type-intro {
  margin-bottom: 60px;
}
.types-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  max-width: 1000px;
  margin: 0 auto;
}
.type-card {
  background: #fafafa;
  border-radius: 12px;
  padding: 15px 10px;
  text-align: center;
  border: 1px solid #e8e8e8;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.type-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  background: #ffffff;
}
.type-card h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
  font-weight: 600;
}
.type-card p {
  color: #666;
  font-size: 13px;
  line-height: 1.5;
}
.type-image {
  width: 100%;
  max-height: 120px;
  object-fit: contain;
  border-radius: 6px;
}

/* 指纹选择区域 */
.palm-diagram {
  margin-bottom: 60px;
}
.diagram-container {
  background: #fafafa;
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #e8e8e8;
  max-width: 1000px;
  margin: 0 auto;
}
.hands-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}
.hand-container {
  flex: 1;
  min-width: 280px;
  max-width: 350px;
}
.hand-label {
  font-size: 18px;
  color: #1a1a1a;
  margin-bottom: 15px;
  font-weight: 600;
  text-align: center;
}

.palm-image-wrapper {
  position: relative;
  width: 100%;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e8e8e8;
}
.palm-hand {
  height: 100%;
  width: auto;
  object-fit: contain;
  pointer-events: none;
}
.finger-layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.finger-pointer {
  position: absolute;
  width: 30px;
  height: 30px;
  transform: translate(-50%, -50%);
  cursor: pointer;
  pointer-events: all;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pointer-dot {
  width: 20px;
  height: 20px;
  background: #1a1a1a;
  border: 3px solid white;
  border-radius: 50%;
  transition: all 0.3s;
}
.finger-pointer:hover .pointer-dot {
  transform: scale(1.3);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
.selected-indicator {
  position: absolute;
  top: -25px;
  animation: popIn 0.3s ease-out;
}

.selected-text {
  color: #000;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
}
@keyframes popIn {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* 进度条 */
.progress-bar {
  position: relative;
  height: 30px;
  background: #fafafa;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 20px;
  border: 1px solid #e8e8e8;
}
.progress-fill {
  height: 100%;
  background: #1a1a1a;
  transition: width 0.5s ease-out;
}
.progress-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 600;
  z-index: 2;
}

/* 报告区域 */
.report-section {
  text-align: center;
  padding: 30px;
  opacity: 0.6;
  pointer-events: none;
  max-width: 1000px;
  margin: 0 auto;
}
.report-section.enabled {
  opacity: 1;
  pointer-events: auto;
}
.report-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 48px;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
.report-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
.report-btn.ready {
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
  50% {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
}
.hint-text {
  color: #999;
  margin-top: 15px;
  font-size: 14px;
}

/* 模态框 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  border-radius: 16px;
  padding: 30px;
  max-width: 500px;
  width: 90%;
  border: 1px solid #e8e8e8;
}
.modal-title {
  font-size: 22px;
  color: #1a1a1a;
  margin-bottom: 25px;
  text-align: center;
  font-weight: 600;
}
.type-selector-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
}
.type-selector-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
}
.type-selector-btn:hover {
  border-color: #1a1a1a;
  background: #fafafa;
}
.type-selector-btn.selected {
  border-color: #1a1a1a;
  background: #1a1a1a;
  color: white;
}
.selector-image {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin-bottom: 8px;
}
.selector-label {
  font-size: 14px;
  font-weight: 600;
}

/* 响应式适配 */
@media (max-width: 900px) {
  .types-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .page-title {
    font-size: 32px;
  }
}

@media (max-width: 768px) {
  .fingerprint-test-page {
    padding: 60px 24px;
  }
  .hands-wrapper {
    gap: 20px;
  }
  .hand-container {
    min-width: 100%;
    max-width: 100%;
  }
}
</style>