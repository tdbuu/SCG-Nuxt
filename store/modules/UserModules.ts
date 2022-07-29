import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Users } from '../../models';

@Module({
    name: 'modules/UserModules',
    namespaced: true,
    stateFactory: true
})
export class UserModule extends VuexModule {
    public users: Users[] = [];

    get userState(): Users[] {
        return this.users;
    }
    @Mutation
    setUsers(users: Users[]) {
        this.users = users;
    }

    @Action
    async getUser() {
       const response = await fetch('http://localhost:3004/Users/');
       const users = await response.json();
       this.setUsers(users);
   }
}