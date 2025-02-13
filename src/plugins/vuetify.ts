import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'; // Import Vuetify styles

const vuetify = createVuetify({
  components, directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: "000"
        }
      }
    }
  }
});

export default vuetify;
