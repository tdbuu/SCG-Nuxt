export interface ITodo {
    text: string;
    done: boolean;
}

interface ITodoState {
    list: ITodo[];
}

export const state: () => ITodoState = () => ({
    list: []
})

export const mutations = {
    add(state: ITodoState, text: string) {
        state.list.push({
            text,
            done: false
        })
    },
    remove(state: ITodoState, { todo }: { todo: ITodo }) {
        state.list = state.list.filter(t => t.text !== todo.text);
    },
    toggle(state: ITodoState, todo: ITodo) {
        state.list = state.list.map(t => {
            if (t.text === todo.text) {
                return {
                    ...t,
                    done: !t.done
                }
            }
            return t
        })
    }
}