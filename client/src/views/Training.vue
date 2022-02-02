<template>
  <v-card>
    <v-toolbar
      class="overflow-hidden"
      color="#6A76AB"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1000/300?random"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.1)"
      fade-img-on-scroll
    >
      <template v-slot:extension>
        <v-tabs v-model="tabs" centered>
          <v-tab> Дневник</v-tab>
          <v-tab> Архив</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Упражнение</th>
                    <th class="text-center">Подход</th>
                    <th class="text-center">Повторения</th>
                    <th class="text-center">Вес</th>
                    <th class="text-center">Дата</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="training in trainings" :key="training.name">
                    <td class="text-left">{{ training.exercise }}</td>
                    <td class="text-center">{{ training.set }}</td>

                    <td class="text-center">{{ training.repeats }}</td>
                    <td class="text-center">{{ training.weight }}</td>
                    <td class="text-center">{{ training.date }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-form ref="form">
              <v-list dense v-show="maxsetVisible">
                <v-list-item class="text-h6">
                  Подход - {{ controls.set }}
                </v-list-item>
                <v-list-item class="text">
                  Максимальный вес: {{ max.weight }} на {{ max.repeats }} раз(а)
                </v-list-item>
              </v-list>
              <v-list three-line>
                <v-list-item>
                  <v-autocomplete
                    v-model="controls.exercise"
                    :items="exercisesArray"
                    :rules="rules"
                    @change="loadMaxSet()"
                    dense
                    solo
                    autofocus
                    cache-items
                    clearable
                  ></v-autocomplete>
                </v-list-item>
                <v-list-item>
                  <v-slider
                    v-model="controls.weight"
                    label="Вес"
                    thumb-color=""
                    thumb-label="always"
                  ></v-slider>
                </v-list-item>
                <v-list-item>
                  <v-slider
                    v-model="controls.repeats"
                    label="Повторения"
                    thumb-color=""
                    thumb-label="always"
                    max="40"
                  ></v-slider>
                </v-list-item>

                <v-btn-toggle large>
                  <v-btn
                    style="width: 50%"
                    fab
                    color="red"
                    @click="nextExercise()"
                  >
                    след. упражнение</v-btn
                  >
                  <v-btn style="width: 50%" color="green" @click="nextSet()">
                    след. подход
                  </v-btn>
                </v-btn-toggle>
              </v-list>
            </v-form>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-simple-table dense max-width="100%">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Упражнение</th>
                    <th class="text-center">Подход</th>
                    <th class="text-center">Повторения</th>

                    <th class="text-center">Вес</th>
                    <th class="text-center">Дата</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="training in trainings_archive"
                    :key="training.name"
                  >
                    <td class="text-left">{{ training.exercise }}</td>
                    <td class="text-center">{{ training.set }}</td>
                    <td class="text-center">{{ training.repeats }}</td>
                    <td class="text-center">{{ training.weight }}</td>
                    <td class="text-center">{{ training.date }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-title class="text-h5"> An even better title </v-card-title>
          <v-card-text> 33 </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { Sportsman } from "../services/training.service.js";

export default {
  data: () => ({
    trainings: [],
    trainings_archive: [],
    exercisesArray: [
      "Выпады с гантелями",
      "Гильотина",
      "Отжимания на брусьях",
      "Отжимания на брусьях с наклоном",
      "Гиперэкстензии",
      "Горизонтальная протяжка",
      "Жим гантелей лежа на горизонтальной скамье",
      "Жим гантелей лежа на наклонной скамье",
      "Жим гантелей стоя",
      "Жим ногами",
      "Жим штанги лежа на горизонтальной скамье",
      "Жим штанги лежа на наклонной скамье",
      "Жим штанги лежа узким хватом на горизонтальной скамье",
      "Жим штанги лежа узким хватом на наклонной скамье",
      "Жим штанги сидя",
      "Жим штанги стоя",
      "Сведение и разведение рук (бабочка)",
      "3D Кроссовер (Кавальер)",
      "Кроссоверы на верхних блоках",
      "Кроссоверы на средних блоках",
      "Подтягивания обратным хватом",
      "Подтягивания",
      "Подъем гантели на предплечья",
      "Подъем штанги на предплечья",
      "Подъем штанги на бицепс (Cкотт)",
      "Подъем штанги на бицепс обратным хватом",
      "Пуловер на верхнем блоке (Кавальер)",
      "Гакк приседания",
      "Подъем штанги на бицепс",
      "Подъемы гантелей (махи) через стороны вверх",
      "Подъемы гантелей через стороны вверх в наклоне",
      "Подъемы на носки сидя ",
      "Приседания со штангой на спине",
      "Разведения гантелей лежа на горизонтальной скамье",
      "Разведения гантелей лежа на наклонной скамье",
      "Разгибание ног в тренажере",
      "Разгибания рук на верхнем блоке",
      "Становая тяга",
      "Становая тяга с широкой постановкой ног (Сумо)",
      "Тяга гантели одной рукой стоя в наклоне",
      "Тяга штанги к поясу в наклоне",
      "Тяга штанги на прямых ногах (Румынская тяга)",
      "Французкий жим",
    ],
    rules: [(value) => !!value || "Обязательное поле."],
    maxsetVisible: false,
    controls: {
      set: 1,
      exercise: "",
      weight: 0,
      repeats: 0,
    },
    max: {
      set: 0,
      exercise: 0,
      weight: 0,
      repeats: 0,
    },

    weight: "",
    login: localStorage.getItem("login"),
    tabs: null,
    obj: "",
  }),
  methods: {
    async loadTodayTrainings() {
      let response = await Sportsman.allTrainings({
        jwt: localStorage.getItem("jwt"),
      });
      if (response.err) {
        console.log("Empty training list");
      } else {
        this.trainings = response;
      }
    },

    async nextSet() {
      if (this.$refs.form.validate()) {
        await this.sendData();
        await this.loadMaxSet();
        await this.loadArchiveTraining();
        this.controls.set++;
        this.controls.repeats = 0;
      }
    },
    async nextExercise() {
      this.controls.set = 1;
      this.controls.weight = 0;
      this.controls.repeats = 0;
      this.controls.exercise = "";
    },
    async sendData() {
      let response = await Sportsman.addSet({
        jwt: localStorage.getItem("jwt"),
        set: this.controls.set,
        exercise: this.controls.exercise,
        weight: this.controls.weight,
        repeats: this.controls.repeats,
      });
      this.trainings = response;
    },
    async loadMaxSet() {
      let response = await Sportsman.maxSet({
        jwt: localStorage.getItem("jwt"),
        exercise: this.controls.exercise,
      });
      if (!response.err) {
        this.max.exercise = response.exercise;
        this.max.weight = response.weight;
        this.max.set = response.set;
        this.max.repeats = response.repeats;
        this.maxsetVisible = true;
      } else {
        this.maxsetVisible = false;
      }
    },
    async loadArchiveTraining() {
      let response_archive = await Sportsman.Archive({
        jwt: localStorage.getItem("jwt"),
      });
      if (response_archive.err) {
        console.log("Empty archive list");
      } else {
        this.trainings_archive = response_archive.reverse();
      }
    },
  },

  async created() {
    await this.loadArchiveTraining();
    await this.loadTodayTrainings();
  },
};
</script>

<style scoped>
.v-btn-toggle {
  width: 100% !important;
}
.v-btn {
  font-size: 0.8rem;
  color: #fff !important;
}
.v-card__text {
  background: linear-gradient(90deg, #ebeaea, #ffffff);
}

/* .v-list.v-sheet.theme--light.v-list--three-line {
  background-color: transparent !important;
} */
.v-tab {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50;
}
.v-tab v-tab--active {
}
</style>