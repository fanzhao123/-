<template>
    <div>
        父组件：
        <input type="text" v-model="name">
        <br>
        <br>
        <!-- 引入子组件 -->
        <child :input="name"></child>
    </div>
</template>
<script>
import child from './2.child.vue'
export default {
    components:{
        child
    },
    data(){
        return {
            name:""
        }
    }
}
</script>