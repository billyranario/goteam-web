import { defineNuxtPlugin } from '#app';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faList,
  faTasks,
  faCheck,
  faArchive,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faSpinner, faList, faTasks, faCheck, faArchive);
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
