<template>
  <v-card>
    <v-toolbar color="purple" dark prominent>
      <template v-slot:extension>
        <v-tabs v-model="tabs" centered>
          <v-tab> Notebook</v-tab>
          <v-tab> Archive</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-form>
              <v-autocomplete
                :items="exercises"
                dense
                solo
                autofocus
                cache-items
                clearable
                :return-object="obj"
              ></v-autocomplete>
              <v-slider
                v-model="weight"
                label="weight"
                thumb-color=""
                thumb-label="always"
              ></v-slider>
              <v-slider
                v-model="repeats"
                label="repeats"
                thumb-color=""
                thumb-label="always"
              ></v-slider>
            </v-form>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Exercise</th>
                    <th class="text-center">Repeats</th>
                    <th class="text-center">Set</th>
                    <th class="text-center">Weight</th>
                    <th class="text-center">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="training in trainings_archive"
                    :key="training.name"
                  >
                    <td class="text-left">{{ training.exercise }}</td>
                    <td class="text-center">{{ training.repeats }}</td>
                    <td class="text-center">{{ training.set }}</td>
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
    exercises: [
      "Выпады с гантелями",
      "Гильотина",
      "Отжимания на брусьях",
      "Гиперэкстензии",
      "Дэнчик (плечи)",
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
      "Кроссоверы на верхних блоках",
      "Кроссоверы на средних блоках",
      "Подтягивания обратным хватом",
      "Подтягивания",
      "Предплечья",
      "Подъем штанги на бицепс (Cкотт)",
      "Подъем штанги на бицепс обратным хватом",
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
      "Тяга гантели одной рукой стоя в наклоне",
      "Тяга штанги на прямых ногах",
      "Французкий жим",
    ],
    trainings: [],
    trainings_archive: [],
    weight: "",
    login: localStorage.getItem("login"),
    tabs: null,
    obj: "",
  }),
  methods: {},
  async created() {
    let response = await Sportsman.allTrainings({
      jwt: localStorage.getItem("jwt"),
    });
    if (response.err) {
      this.$router.push("/login");
    } else {
      this.trainings = response;
    }
    let response_archive = await Sportsman.Archive({
      jwt: localStorage.getItem("jwt"),
    });
    if (response_archive.err) {
      this.$router.push("/login");
    } else {
      this.trainings_archive = response_archive.reverse();
    }
  },
};
</script>