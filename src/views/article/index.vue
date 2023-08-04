<template>
    <UiHeader></UiHeader>
    <ColumnList :list="data"></ColumnList>
    <BackTop></BackTop>
</template>
<script lang="ts" setup>
    import UiHeader from '@/components/UiHeader.vue'
    import ColumnList, { IColumnProperties } from '@/components/ColumnList.vue'
    import BackTop from '@/components/BackTop.vue'
    const avatar =
        'https://t7.baidu.com/it/u=2120278017,1515660604&fm=218&app=126&size=f242,150&n=0&f=JPEG&fmt=auto?s=1281B14C1BE4B36C5E53F4030300F0C9&sec=1690477200&t=8c88db3e56590d6df7f0601f755952ba'
    const data: IColumnProperties[] = [
        {
            id: 1,
            title: '测试1',
            description: '简介1111111111111111111111111111111111111111111',
            avatar
        },
        {
            id: 2,
            title: '测试2',
            description: '简介1111111111111111111111111111111111111111111',
            avatar
        },
        {
            id: 3,
            title: '测试3',
            description: '简介1111111111111111111111111111111111111111111',
            avatar
        }
    ]
</script>
