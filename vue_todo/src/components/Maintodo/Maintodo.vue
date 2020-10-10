<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="what to do"
      autofocus
      @keyup.enter="addTodo"
      v-model="content"
    />
    <Todoitem
      v-for="(item, index) of filterData"
      :key="index"
      :todo="item"
      @del="handlerDele"
    >{{item}}</Todoitem>
    <Maininfo :total="total" @clear="clear" @toggleState="toggleState"></Maininfo>
  </div>
</template>
<script>
import Todoitem from "./comment/Todoitem.vue";
import Maininfo from "./comment/Maininfo.vue";

var id = 0;
export default {
  name: "MainTodo",
  data() {
    return {
      todoData: [],
      content: '',
      filter: 'all',
      total: 0
    };
  },
    watch: {
    todoData: {
      deep: true,
      handler() {
        this.total = this.todoData.filter(
          item => item.compelted === false
        ).length;
      }
    }
  },
  methods: {
    addTodo: fAddToDo,
    handlerDele: fHandlerDele,
    clear: fClear,
    toggleState: fToggleState
  },
  components: {
    Todoitem,
    Maininfo,
  },
  computed: {
    filterData() {
      var that = this;
      switch (that.filter) {
        case "all":
          return that.todoData;
          break;
        case "active":
          return that.todoData.filter((item) => item.compelted === false);
          break;
        case "compelted":
          return that.todoData.filter((item) => item.compelted === true);
          break;
      }
    },
  },
};

function fAddToDo() {
  var that = this;
  if (that.content === "") return;
  that.todoData.unshift({
    id: id++,
    content: that.content,
    compelted: false,
  });
  that.content = "";
}

function fHandlerDele(sId) {
  var that = this;
  that.todoData.splice(
    that.todoData.findIndex((item) => item.id === sId),
    1
  );
}

function fClear() {
  var that = this;
  that.todoData = [];
}

function fToggleState(sState) {
  var that = this;
  that.filter = sState;
}
</script>

<style scoped>
.main-todo {
  margin: 0 auto;
  width: 600px;
  background-color: #B0C4DEff;
  box-shadow: 0 0 5px #666;
}

.add-todo {
  padding: 16px 16px 16px 36px;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  background-color: #B0C4DEff;
  font-weight: inherit;
  color: inherit;
  border: none;
  outline: none;
  box-sizing: border-box;
}
</style>