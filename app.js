const app = Vue.createApp({
  data() {
    return {
      currentStep: 0,
      hideBackButton: true,
      steps: [
        { title: "Основы", content: "Это шаг про основы Vue." },
        { title: "Компоненты", content: "Это шаг про компоненты." },
        { title: "Роутер", content: "Это шаг про Vue Router." },
        { title: "Vuex", content: "Это шаг про Vuex." },
        { title: "Composition API", content: "Это шаг про Composition API." },
      ],
      btns: [{ name: "Назад" }, { name: "Вперед" }],
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
        if (this.currentStep === this.steps.length - 1) {
          this.btns[1].name = "Закончить";
        }
      } else if (this.btns[1].name === "Закончить") {
        this.btns[1].name = "Начать заново";
        this.hideBackButton = false;
      } else if (this.btns[1].name === "Начать заново") {
        this.currentStep = 0;
        this.btns[1].name = "Вперед";
        this.hideBackButton = true;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
      if (this.currentStep < this.steps.length - 1) {
        this.btns[1].name = "Вперед";
      }
    },
    goToStep(index) {
      this.currentStep = index;
      if (index === this.steps.length - 1) {
        this.btns[1].name = "Закончить";
      }
      if (this.currentStep < this.steps.length - 1) {
        this.btns[1].name = "Вперед";
      }
    },
  },
}).mount("#app");
