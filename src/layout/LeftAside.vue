<template>
    <div class="c-green">aya</div>
    <el-tabs :tab-position="tabPosition" class="left-tabs">
        <el-tab-pane label="User"></el-tab-pane>
        <el-tab-pane label="Config"></el-tab-pane>
        <el-tab-pane label="Role"></el-tab-pane>
        <el-tab-pane label="Task"></el-tab-pane>
    </el-tabs>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'

    const tabPosition = ref('left')
</script>
<style lang="scss" scoped>
// 样式调整
    .left-tabs::v-deep{
        .el-tabs__active-bar{
            right: initial;
            left: 0;
            // background-color: var(--ui-blue);
        }
        .el-tabs__nav-wrap.is-left::after{
            display: none;
        }
    }
</style>
