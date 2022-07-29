<template>
   <v-list two-line subheader>
    <user-component
      v-for="user in users"
      :key="user.id"
      :user="user"
    ></user-component>
  </v-list>
</template>
<script lang="ts">

import { Vue, Component, Prop} from 'vue-property-decorator'
import UserComponent from './UserComponent.vue';
import { Users } from '~/models'

@Component({
    components: {
        UserComponent
    }
})
export default class FetchDataComponent extends Vue {
    @Prop({
        type: Array,
        required: true
    }) readonly users!: Users[];
}
</script>