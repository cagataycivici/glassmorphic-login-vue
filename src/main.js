import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import StyleClass from "primevue/styleclass";
import MyPreset from "./mypreset";

const app = createApp(App);
app.component("InputText", InputText);
app.component("Button", Button);
app.directive("styleclass", StyleClass);
app.use(PrimeVue, { unstyled: true, pt: MyPreset });
app.mount("#app");
