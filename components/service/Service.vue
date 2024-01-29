<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";

const serviceLists = [
   {
      price: "from <span class='bold'>$250</span>",
      title: "business card website",
      description:
         "A business card website is a simple little web resource consisting of a few blocks of information about a company, product, service or person.",
      duration: "3-5 days",
      features: [
         "Up to 3 blocks",
         "6 months support",
         "Responsive to only mobile",
         "Basic UI/UX enhancement"
      ]
   },
   {
      price: "from <span class='bold'>$500</span>",
      title: "landing page",
      description:
         "A one-page website that focuses all the attention on a product or service and effectively presents their benefits to potential customers.",
      duration: "5-7 days",
      features: [
         "Unlimited blocks",
         "1 year support",
         "Responsive to mulitple device",
         "Interactive element and animations",
         "Cross-browser compability"
      ]
   },
   {
      price: "from <span class='bold'>$700</span>",
      title: "multipage website",
      description:
         "Creating a site with a more complex structure: several pages that are combined menus or other blocks with links.",
      duration: "10-14 days",
      features: [
         "Unlimited pages",
         "1 year support",
         "Responsive to mulitple device",
         "Interactive element and animations",
         "Cross-browser compability"
      ]
   },
   {
      price: "from <span class='bold'>$1000</span>",
      title: "online store",
      description:
         "Creating a website for selling products with a storefront, payment system, shopping cart and notification of the seller and buyer of the order.",
      duration: "14-28 days",
      features: [
         "Unlimited pages",
         "2 year support",
         "Responsive to mulitple device",
         "Interactive element and animations",
         "Cross-browser compability",
         "Payment gateway integration"
      ]
   },
   {
      price: "<span class='bold'>$10</span>/hour",
      title: "website modification",
      description:
         "Revision. A small change to the site. For example, edit the design, connect the payment system or adjust various forms.",
      duration: "Hourly",
      features: [
         "Design Enhancements",
         "Navigation Optimization",
         "Perfomance Optimization",
         "Integration of new features",
         "Content update",
         "And many more..."
      ]
   }
];
</script>

<template>
   <Vue3Marquee :pause-on-hover="true" :duration="40">
      <div class="services">
         <ServiceCard
            v-for="service in serviceLists"
            :price="service.price"
            :title="service.title"
            :description="service.description"
            :duration="service.duration"
            :features="service.features"
            :key="service.title"
         />
      </div>
   </Vue3Marquee>
</template>

<style scoped lang="scss">
.services {
   width: 100%;
   display: flex;
   gap: 30px;
}
</style>
