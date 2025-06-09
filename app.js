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
      nextButton: { name: "Вперед" },
      prevButton: { name: "Назад" },
      finishButton: { name: "Закончить" },
      restartButton: { name: "Начать заново" },
      defaultNextButton: "Вперед",
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
        if (this.currentStep === this.steps.length - 1) {
          this.nextButton.name = this.finishButton.name;
        }
      } else if (this.nextButton.name === this.finishButton.name) {
        this.nextButton.name = this.restartButton.name;
        this.hideBackButton = false;
      } else if (this.nextButton.name === this.restartButton.name) {
        this.currentStep = 0;
        this.nextButton.name = this.defaultNextButton;
        this.hideBackButton = true;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
      if (this.currentStep < this.steps.length - 1) {
        this.nextButton.name = this.defaultNextButton;
      }
    },
    goToStep(index) {
      this.currentStep = index;
      if (index === this.steps.length - 1) {
        this.nextButton.name = this.finishButton.name;
      }
      if (this.currentStep < this.steps.length - 1) {
        this.nextButton.name = this.defaultNextButton;
        this.hideBackButton = true;
      }
    },
  },
}).mount("#app");
