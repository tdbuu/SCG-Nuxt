/* eslint-disable */
import { Store } from '~/store';

declare module 'vue/types/vue' {
    interface Vue {
        $store: Store<State>
    }
}