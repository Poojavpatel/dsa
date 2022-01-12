// for (var i = 0; i < 3; i++) {
//   setTimeout(function() { console.log(i); }, 1000 + i);
// }

// (function() {
//   var a = b = 5;
// })();

// console.log(b);
// console.log(a);

const users = [
  {
    firstName : 'Pooja'
  },
  {
    firstName : 'Mayur'
  },
  {
    firstName : 'Swati'
  },
  {
    firstName : 'swati'
  },
  {
    firstName : 'Aaaaa'
  },
  {
    firstName : 'aaaa'
  },
  {
    firstName : 'zzz'
  }
]

const ans = users.sort((a, b) => a.firstName !== b.firstName ? a.firstName < b.firstName ? -1 : 1 : 0);
// console.log('----', ans);

// js sort alphabetically ignore case
const ans2 = users.sort((a, b) => a.firstName.localeCompare(b.firstName))
// console.log('---2-', ans2);

// regex to find all alphabets or spaces between > and <
// / \>[A-Za-z\s]*\< /g

// Check if first letter of string is /
// if (string[0] == '/') {

// }

// problems in app knox coderbyte assignment
{/* <template>
  <div id="app">
    <ul v-for="item in items" :key="item.name">
      <li>
        <span>{{item.name}} </span>
        <span>{{item.age}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        items: [
          {
            name : 'Daniel',
            age : 25
          },
          {
            name : 'John',
            age : 24
          },
          {
            name : 'Jen',
            age : 31
          },
        ]
      };
    }
  };
</script> */}

// import $ from "jquery";

// const rootApp = document.getElementById("root");
// rootApp.innerHTML = `<div id="mainArea">
//   <p>button count: <span class="count">0</span></p>
//   <button id="mainButton">Increase</button>
// </div>`;

// $("#mainButton").click((evt) => {
//   // get current counter
//   const currentCount = $(".count")[0].innerHTML;
//   // increase counter by 1 and set latest counter
//   $(".count")[0].innerHTML = parseInt(currentCount) + 1;
// });

// Recro question
// lucky primes between l and r
// 12 = 2 * 2 * 3 (hence is not a lucky prime as 2 is repeated twice)

// Find a pair of natural numbers who have the least energy among all pairs having sum of n

