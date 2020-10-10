<template>
  <div class="todo-info">
    <span class="tabs">还有{{total}}个待办事项! 加油💪</span>
    <div class="total">
      <a
        :class="state === item ? 'actived' : ''"
        v-for="(item, index) of status"
        :key="index"
        @click="toggleState(item)"
      >{{item | toCH}}</a>
    </div>
    <button class="clear" @click="$emit('clear')">Clear Completed</button>
  </div>
</template>
<script>
export default {
  name: "Maininfo",
  props: { total: Number },
  data() {
    return {
      status: ["all", "active", "compelted"],
      state: "all",
    };
  },
  methods: {
    toggleState: fToggleState,
  },
  filters: {
    toCH: function (val) {
      switch (val) {
        case "all":
          return (val = "全部");
          break;
        case "active":
          return (val = "剩余代办");
          break;
        case "compelted":
          return (val = "已完成");
          break;
      }
    },
  },
};

function fToggleState(sState) {
  var that = this;
  that.state = sState;
  that.$emit("toggleState", sState);
}
</script>
<style >
.todo-info {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  padding: 5px 10px;
  line-height: 30px;
  border-top: 1px solid rgb(0, 0, 0, 0.1);
}
.todo-info .tabs {
  color: greenyellow;
}
.todo-info .total {
  display: flex;
  width: 200px;
  justify-content: space-between;
}
.todo-info .total a {
  padding: 0 5px;
  border: 1px solid #d6a614;
  color: #F5FFFA;
  border-radius: 5px;
}
.todo-info .total a:active {
  color: #fff;
  background-color: #d6a614;
}
.actived {
  background-color: #d6a614;
  color: #fff;
}
.todo-info .clear {
  padding: 0 10px;
  background-color: #FFE4E1;
  border-radius: 5px;
  color: #fff;
  outline: none;
  appearance: none;
  border: none;
}
</style>