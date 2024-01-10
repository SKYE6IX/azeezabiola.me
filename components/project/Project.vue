<script setup lang="ts">
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
const queryKeys = useState("query-key", () => []);
const queryTexts = useState("query-text", () => "");
const filteredProjects = useState<ProjectData[] | null>("filterdProject");
const addSemiColumn = (queries: string[]) => {};
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
</script>
<template>
   <div class="project-header">
      <h3><ArrowDownFilled /> projects</h3>
      <h3>{{ queryTexts }} <span></span></h3>
   </div>
   <div class="project-main">
      <aside class="project-main__aside">
         <ProjectNavs v-model="queryKeys" />
      </aside>
      <div class="project-main__content">
         <Card
            v-for="project in filteredProjects"
            :key="project.id"
            :title="project.title"
            :image="project.image"
            :description="project.description"
            :links="project.links"
         />
      </div>
   </div>
</template>

<style scoped lang="scss">
@import "./assets/project.scss";
</style>
