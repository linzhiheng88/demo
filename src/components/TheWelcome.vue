<template>
    <div>
      <div id="main"></div>
      <div id="maychar"></div>
    </div>
  </template>
   
  <script lang="ts" setup>
  import { defineComponent, onMounted, inject } from "vue";
  import {useCounterStore} from '@/stores/counter' 
    let s=useCounterStore()
   
      onMounted(() => {
        change();
      
      });
      let echarts:any = inject("echarts"); // 主要
      // 基本柱形图
      const change = () => {
        let chartBox= echarts.init(document.getElementById("main")); // 主要
        s.increment(200,'a','b')
        const option = {
          xAxis: {
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {},
          series: [
            {
              type: "bar",
              data: [s.counter, 24, 18, 25, 27, 28, 25],
            },
          ],
        };
        chartBox.setOption(option);
        // 根据页面大小自动响应图表大小
        window.addEventListener("resize", function () {
          chartBox.resize();
        });

      };
      // 折线图
      // const changetype = () => {
      //   // 获取组件实例
      //   const machart = echarts.init(document.getElementById("maychar"));
      //   // 设置配置项
      //   const option = {
      //     xAxis: {
      //       data: ["A", "B", "C", "D", "E"],
      //     },
      //     yAxis: {},
      //     series: [
      //       {
      //         data: [10, 22, 28, 43, 49],
      //         type: "line",
      //         stack: "x",
      //       },
      //       {
      //         data: [5, 4, 3, 5, 10],
      //         type: "line",
      //         stack: "x",
      //       },
      //     ],
      //   };
      //   // 复制
      //   machart.setOption(option);
      //   // 根据页面大小自动响应图表大小
      //   window.addEventListener("resize", function () {
      //     machart.resize();
      //   });
      // };
    
  </script>
   
  <style  scoped>
  #main {
    min-width: 31.25rem;
    min-height: 31.25rem;
     max-height: 500px;
  }
   
  #maychar {
    max-height: 500px;
    max-height: 400px;
    height: 500px;
  }
  </style>
