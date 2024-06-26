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
const queryTexts = useState("query-text", () => "projects");
const filteredProjects = useState<ProjectData[] | null>("filterdProject");
const isNavOpen = useState(() => false);
const { data } = await useAsyncData(
   "projects",
   async () =>
      await queryContent<ProjectData>("projects").sort({ id: 1 }).find(),
   {
      dedupe: "defer"
   }
);

filteredProjects.value = data.value;
watch(queryKeys, async (newQueries) => {
   const { data } = await useAsyncData(
      "projects",
      async () => {
         const query = newQueries.length
            ? { tags: { $contains: newQueries } }
            : {};
         const filterData = await queryContent<ProjectData>("projects")
            .where(query)
            .sort({ id: 1 })
            .find();
         return filterData;
      },
      {
         dedupe: "defer"
      }
   );
   filteredProjects.value = data.value;
   if (newQueries.length) {
      queryTexts.value = newQueries.toString();
   } else {
      queryTexts.value = "projects";
   }
});

onMounted(async () => {
   ctx = gsap.context((self) => {
      tl = gsap.timeline().from(".card", {
         y: 100,
         duration: 1.5,
         stagger: 0.5,
         opacity: 0
      });
   }, scopeRef.value);
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
            class="project__aside-title"
            :class="{ open: isNavOpen }"
            @click="setIsNavOpen"
         >
            <ArrowDownFilled /> filter
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
            />
         </div>
      </main>
   </div>
</template>

<style scoped lang="scss">
@import "./assets/project.scss";
</style>
