import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment }
  
  state:()=>{

    return {
      items: [],
      counter: 2,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
  
  getters: {
    doubleCount(state){
     console.log(this,'想要在getter中获取该store的其他内容则不能用箭头函数，')
     return state.counter * 2
    },
  },

  actions: {
    increment(num:any,test1:any,test2:any) {
     
      this.counter=this.counter+num
      console.log(num,test1,test2)
    },
    
  }

})
