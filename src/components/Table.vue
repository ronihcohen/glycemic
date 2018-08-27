<template>
  <div>
    <p v-if="data.length === 0">Loading...</p>
    <table v-if="data.length  > 0">
      <tr>
        <td colspan="2">
          <div class="searchContainer">
            <input v-model="searchString" placeholder="Search">
            <span @click="clear()" v-if="searchString.length  > 0">Clear Search</span>
          </div>
        </td>
      </tr>
      <tr class="header">
        <th @click="sort('name')">Name </th>
        <th class="GI" @click="sort('gi')">GI</th>
      </tr>
      <tr v-for="(value, key) in sortedData" v-bind:key="key">
        <td>{{value.name}}</td>
        <td class="GI" v-bind:class="{ backGreen: parseGI(value.gi) <= 55,
                            backRed: parseGI(value.gi) >= 70 }">{{value.gi}}</td>
      </tr>
      <tr>
        <td colspan="2" v-if="sortedData.length === 0">
          Your search - {{searchString}} - did not match any GI.
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
    },
    parseGI: function(x) {
      return typeof x === "string" ? parseInt(x) : x;
    }
  },
  computed: {
    sortedData: function() {
      return this.data
        .slice()
        .sort((a, b) => {
          a = a[this.currentSort];
          b = b[this.currentSort];
          if (this.currentSort === "gi") {
            a = this.parseGI(a);
            b = this.parseGI(b);
          }
          let modifier = 1;
          if (this.currentSortDir === "desc") modifier = -1;
          if (a < b) return -1 * modifier;
          if (a > b) return 1 * modifier;
          return 0;
        })
        .filter(item => {
          return item.name
            .toLowerCase()
            .includes(this.searchString.toLowerCase());
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  min-width: 600px;
  margin: 0 auto;
  background-color: white;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  table {
    min-width: 100%;
  }
}

th {
  cursor: pointer;
  padding: 5px;
  outline: none;
}

.searchContainer {
  display: flex;
}

input {
  border: none;
  display: inline-block;
  outline: none;
  font-size: 16px;
  flex: 2;
}

span {
  cursor: pointer;
  user-select: none;
  font-weight: bold;
  float: right;
  text-decoration: underline;
  flex: 1;
  text-align: right;
  font-size: 10px;
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
  width: 55px;
  text-align: center;
  font-weight: bold;
}

td.GI {
  background-color: lightgoldenrodyellow;
}

.GI.backGreen {
  background-color: lightgreen;
}

.GI.backRed {
  background-color: lightcoral;
}

p {
  padding: 30px;
  text-align: center;
  font-size: 24px;
}
</style>
