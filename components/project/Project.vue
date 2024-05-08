<script setup lang="ts">
import gsap from "gsap";
export interface ProjectData {
   id: number;
   title: string;
   description: string;
   links: {
      live_link: string;
      git_hub_link: string;
   };
   tags: string[];
   image: string;
}
let ctx: gsap.Context;
let tl: gsap.core.Timeline;
const scopeRef = ref();
const queryKeys = useState("query-key", () => []);
const queryTexts = useState("query-text", () => "");
const filteredProjects = useState<ProjectData[] | null>("filterdProject");
const isNavOpen = useState(() => false);
watch(
   queryKeys,
   async (newQueries) => {
      const { data } = await useAsyncData("projects", async () => {
         const query = newQueries.length
            ? { tags: { $contains: newQueries } }
            : {};
         const filterData = await queryContent<ProjectData>("/projects")
            .where(query)
            .find();
         return filterData;
      });
      filteredProjects.value = data.value;
      if (newQueries.length) {
         queryTexts.value = newQueries.toString();
      } else {
         queryTexts.value = "projects";
      }
   },
   {
      immediate: true
   }
);
onMounted(() => {
   ctx = gsap.context(() => {
      tl = gsap
         .timeline()
         .from(".card-animate", {
            y: 100,
            duration: 1.5,
            stagger: 0.5,
            opacity: 0
         });
   });
});
onUnmounted(() => {
   ctx.revert();
});
const setIsNavOpen = () => {
   isNavOpen.value = !isNavOpen.value;
};
</script>
<template>
   <div class="project">
      <aside class="project__aside">
         <h5
            class="project__aside-header"
            :class="{ open: isNavOpen }"
            @click="setIsNavOpen"
         >
            <ArrowDownFilled /> projects
         </h5>
         <ProjectNavs v-model="queryKeys" :is-nav-open="isNavOpen" />
      </aside>
      <main class="project__main">
         <h3 class="project__main-header">{{ queryTexts }} <span></span></h3>
         <div class="project__main-content" ref="scopeRef">
            <Card
               v-for="(project, index) in filteredProjects"
               :key="project.id"
               :title="project.title"
               :image="project.image"
               :description="project.description"
               :links="project.links"
               :class-name="`card-animate`"
            />
         </div>
      </main>
   </div>
</template>

<style scoped lang="scss">
@import "./assets/project.scss";
</style>
