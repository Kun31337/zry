import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Service from "../views/Service.vue";
import About from "@/views/about.vue";
import DrXu from "@/views/about/DrXu.vue";
import Profile from "../views/Profile.vue";
import StudyPlanning from "../views/service/StudyPlanning.vue";
import CareerPlanning from "../views/service/CareerPlanning.vue";
import PersonalityTest from "../views/service/PersonalityTest.vue";
import TalentTest from "../views/service/TalentTest.vue";
import SelfAwareness from "../views/service/study-planning/SelfAwareness.vue";
import ProcessManagement from "../views/service/study-planning/ProcessManagement.vue";
import ExternalExploration from "../views/service/study-planning/ExternalExploration.vue";
import ToolsRecommendation from "../views/service/study-planning/ToolsRecommendation.vue";
import HollandTest from "../views/service/career-planning/HollandTest.vue";
import MbtiTest from "../views/service/career-planning/MbtiTest.vue";
import FingerprintTest from "../views/service/talent-test/FingerprintTest.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/service/study-planning",
    name: "StudyPlanning",
    component: StudyPlanning,
  },
  {
    path: "/service/study-planning/self-awareness",
    name: "SelfAwareness",
    component: SelfAwareness,
  },
  {
    path: "/service/study-planning/process-management",
    name: "ProcessManagement",
    component: ProcessManagement,
  },
  {
    path: "/service/study-planning/external-exploration",
    name: "ExternalExploration",
    component: ExternalExploration,
  },
  {
    path: "/service/study-planning/tools-recommendation",
    name: "ToolsRecommendation",
    component: ToolsRecommendation,
  },
  {
    path: "/service/career-planning",
    name: "CareerPlanning",
    component: CareerPlanning,
  },
  {
    path: "/service/career-planning/holland-test",
    name: "HollandTest",
    component: HollandTest,
  },
  {
    path: "/service/career-planning/mbti-test",
    name: "MbtiTest",
    component: MbtiTest,
  },
  {
    path: "/service/personality-test",
    name: "PersonalityTest",
    component: PersonalityTest,
  },
  {
    path: "/service/talent-test",
    name: "TalentTest",
    component: TalentTest,
  },
  {
    path: "/service/talent-test/fingerprint-test",
    name: "FingerprintTest",
    component: FingerprintTest,
  },
  { path: "/about", name: "About", component: About },
  {
    path: "/about/dr-xu",
    name: "DrXu",
    component: DrXu,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
