<template>
  <div id="app-gist">
    <h1 class="app-gist_title no-select">Привет.</h1>
    <p class="app-gist_text no-select">Это моя вторая попытка сделать гистрограмму через много времени после первой
      попытки.
      Думаю я уже достаточно набрал опыта чтоб сделать это крутым ;-)
      Это работает так: берем массив данных, считаем частоту повторения всех символов и строим график.</p>
    <h2 class="app-gist_title no-select">Итак, попробуй:</h2>
    <textarea class="app-gist_input" v-model="inputData" cols="500"></textarea>
    <div class="settings no-select">
      <label v-for="(option, index) in filterOptions" :key="index">
        <input type="checkbox" v-model="filterOptions[index].state"> {{option.value}}
      </label>
    </div>
    <div class="app-graph no-select">
      <div class="app-graph-col" v-for="(item, index) in generateGistData" :key="index">
        <span class="app-graph-col_title">{{index}}</span>
        <div class="app-graph-col_wrapper">
          <span class="app-graph-col_value" :style="'width:'+ Math.round(item / calcFullSize * 100)+'%'">
            {{Math.round(item / calcFullSize * 100)}}%
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "appGist",
    data() {
      return {
        inputData: "",
        currentFilterOption: 0,
        filterOptions: [
          {
            value: "Все символы",
            reg: /./,
            state: true
          },
          {
            value: "Буквы(англ.+рус.)",
            reg: /[a-zA-Zа-яА-ЯёЁ]/,
            state: false
          },
          {
            value: "Цифры",
            reg: /[\d]/,
            state: false
          },
          {
            value: "Пробельные символы",
            reg: /[\s]/,
            state: false
          },
        ]
      }
    },
    methods: {

      checkSame(array, itemNeedToCheck) {
        for (let item in array)
          if (item === itemNeedToCheck) return true;
        return false
      },

      mergeReg(reg1, reg2) {
        return new RegExp(reg1.source + "|" + reg2.source)
      },

      // Проверка на соответвие регулярному выражению
      checkReg(itemNeedToCheck) {
        return itemNeedToCheck.search(this.currentReg) !== -1
      }
    },
    computed: {
      // Проверяет состояния(item.state), сливает все регулярки где item.reg === true и возвращает одну регулярку
      currentReg() {
        let reg = null;
        for (let item of this.filterOptions) {
          if (item.state) {
            if (reg) reg = this.mergeReg(reg, item.reg); // если reg !== null
            else reg = item.reg
          }
        }
        if (reg) {
          return reg;
        }
        else
          return this.filterOptions[0].reg // Если ничего не выбрано разрешает все символы
      },

      // Посчитать все уникальные элементы и сформировать массив
      generateGistData() {
        let calculatedMass = {};
        for (let i = 0; i < this.inputData.length; i++) { // Перебор всех элементов строки по одному
          if (this.checkReg(this.inputData[i])) { // Подходит ли символ под общее ругелярное выражение
            let currentSymbol = this.inputData[i];
            console.log(currentSymbol.search(this.filterOptions[3].reg))
            if (currentSymbol.search(this.filterOptions[3].reg) === 0) // Проверка на пробельные символы
              currentSymbol = "space";
            if (this.checkSame(calculatedMass, currentSymbol)) // Проверка встречался ли уже такой символ ранее
              calculatedMass[currentSymbol]++;
            else
              calculatedMass[currentSymbol] = 1;
          }
        }
        return calculatedMass;
      },

      // Создать процентное соотношение каждого элемента
      calcFullSize() {
        let fullSize = 0;
        for (let i in this.generateGistData) {
          fullSize += Number(this.generateGistData[i]);
        }
        return fullSize;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~reset-css/sass/reset';

  .no-select {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Ubuntu+Condensed');
  #app-gist {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Ubuntu Condensed', sans-serif;
    font-weight: bold;
    font-size: 2em;
  }

  #app-gist {
    margin: 10px;

    .app-gist_title {
      margin-bottom: 10px;
    }

    .app-gist_text {
      margin-bottom: 5px;
    }

    .settings {
      label, label > input {
        cursor: pointer;
      }
    }
    .app-gist_input {
      width: calc(100vw - 40px);
      min-height: 50px;
      border: #bababa 1px solid;
      border-radius: 2px;
      padding: 10px;
      overflow-x: hidden;
      textarea {
        width: 100%;
      }
    }
  }

  @media (min-width: 500px) {
    #app-gist {
      flex-wrap: wrap;
      .app-gist_input {
        width: 50vw;
      }
    }
  }

  // Для графика
  $main-margin: 10px;

  .app-graph {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: $main-margin;
    .app-graph-col {
      margin: $main-margin / 2;
      width: 100%;
      display: flex;
      align-items: center;
      .app-graph-col_title {
        width: 20%;
        font-family: 'Ubuntu Condensed', sans-serif;
        font-weight: bold;
        font-size: 1.2em;
        word-wrap: break-word;
      }
      .app-graph-col_wrapper {
        display: block;
        width: 80%;
        border: #bababa 2px solid;
        .app-graph-col_value {
          background: linear-gradient(to bottom, #000000, #0e3fd1, #dc1f26);
          display: block;
          text-align: center;
          color: #ffffff;
          width: 100%;
        }
      }
    }
  }
</style>
