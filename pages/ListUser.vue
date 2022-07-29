<template>
    <fetch-data-component :users="users"></fetch-data-component>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'


import FetchDataComponent from '~/components/FetchData.vue'
import { Users } from '~/models'
import { UserModule } from '~/store/modules'


@Component({
    components: {
        FetchDataComponent
    }
})
export default class ListUserPage extends Vue  {

    public users : Users[] = []
    public userModule : UserModule;
    public mounted(): void {

    }

    public created() : void {
        console.log(this.$store)
        this.userModule = getModule(UserModule, this.$store)
    }

    public fetchUser() : void {
        this.users  = this.userModule.users
    }
}
</script>