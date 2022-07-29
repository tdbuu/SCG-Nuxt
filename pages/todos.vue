<template>
    <ul>
        <li v-for="todo in todos" :key="todo.text">
            <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </li>
        <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex'
import { ITodo } from '@/store/todos';

export default defineComponent({
    computed: {
        todos(): ITodo[] {
            return this.$store.state.todos.list
        }
    },
    methods: {
        addTodo(e: Event) {
            this.$store.commit('todos/add', (e.target as HTMLInputElement).value);
            (e.target as HTMLInputElement).value = ''
        },
        ...mapMutations({
            toggle: 'todos/toggle'
        })
    }
});
</script>

<style>
.done {
    text-decoration: line-through;
}
</style>