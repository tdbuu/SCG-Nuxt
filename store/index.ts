import Vuex from 'vuex';
import { UserModule } from './modules';


export default function createStore() {
    return new Vuex.Store({
        modules: {
            UserModule
        }
    });
}