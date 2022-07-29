<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import { UserModule } from '~/store/modules';

@Component
export default class extends Vue {
    public created() {
        const MyModuleInstance = getModule(UserModule, this.$store);
    }
}
</script>