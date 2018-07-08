<template>
  <div>
    <table>
      <tr>
        <td colspan="2">
          <span @click="clear()">x</span> <input v-model="searchString" placeholder="Search">
        </td>
      </tr>
      <tr class="header">
        <th @click="sort('Name')">Name</th>
        <th class="GI" @click="sort('GI')">GI</th>
      </tr>
      <tr v-for="(value, key) in sortedData" v-bind:key="key">
        <td>{{value.Name}}</td>
        <td class="GI">{{value.GI}}</td>
      </tr>
      <tr>
        <td colspan="2" v-if="sortedData.length === 0">
          Your search - {{searchString}} - did not match any food.
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCtQu--CnKZk4l45QwwAGBSJqviQZGB47c",
  authDomain: "glycemic-63e94.firebaseapp.com",
  databaseURL: "https://glycemic-63e94.firebaseio.com",
  projectId: "glycemic-63e94"
};
firebase.initializeApp(config);

export default {
  name: "Table",
  data() {
    return {
      data: [],
      currentSort: "Name",
      currentSortDir: "asc",
      searchString: ""
    };
  },
  mounted() {
    firebase
      .database()
      .ref("/")
      .once("value")
      .then(snapshot => {
        this.data = snapshot.val();
      });
  },
  methods: {
    sort: function(s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
    clear: function() {
      this.searchString = "";
    }
  },
  computed: {
    sortedData: function() {
      return this.data
        .slice()
        .sort((a, b) => {
          a = a[this.currentSort];
          b = b[this.currentSort];
          if (this.currentSort === "GI") {
            if (typeof a === "string") {
              a = parseInt(a.substring(0, a.indexOf("±")));
            }
            if (typeof b === "string" && this.currentSort === "GI") {
              b = parseInt(b.substring(0, b.indexOf("±")));
            }
          }
          let modifier = 1;
          if (this.currentSortDir === "desc") modifier = -1;
          if (a < b) return -1 * modifier;
          if (a > b) return 1 * modifier;
          return 0;
        })
        .filter(item => {
          return item.Name.includes(this.searchString);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border-spacing: 10px;
  min-width: 600px;
}

th {
  cursor: pointer;
  padding: 5px;
  outline: none;
}

input {
  border: none;
  width: calc(100% - 16px);
  display: inline-block;
  outline: none;
}

span {
  cursor: pointer;
  user-select: none;
  font-family: sans-serif;
  font-weight: bold;
  float: right;
}

span:hover {
  color: red;
}

.header {
  background-color: lightgray;
  color: black;
  outline: none;
}

th:hover {
  background-color: darkgray;
}

.GI {
  width: 60px;
}
</style>
