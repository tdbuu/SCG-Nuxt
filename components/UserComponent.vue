<template>
    <div>
        <v-list-item-content>
        <v-list-item-title v-text="user.name"></v-list-item-title>
        <v-list-item-subtitle v-text="user.email"></v-list-item-subtitle>
      </v-list-item-content>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Users } from '~/models'

@Component
export default class UserComponent extends Vue {
    @Prop({
        type: Object,
        required: true
    }) readonly user!: Users
}
</script>
