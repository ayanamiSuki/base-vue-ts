<template>
    <ul class="ui-flex row-around w-100p p-10">
        <el-card class="box-card" v-for="item of list" :key="item.id">
            <img :src="item.avatar" :alt="item.title" />
            <p>{{ item.title }}</p>
            <p>{{ item.description }}</p>
            <el-button>确定</el-button>
        </el-card>
    </ul>
</template>

<script lang="ts" setup>
    // import { ref, PropType } from 'vue'
    export interface IColumnProperties {
        id: number
        title: string
        avatar?: string
        description: string
    }
    // defineProps({
    //     list: {
    //         type: Array as PropType<ColumnProperties[]>,
    //         required: true
    //     }
    // })
    defineProps<{
        list: IColumnProperties[]
    }>()
</script>

<style lang="scss" scoped></style>
