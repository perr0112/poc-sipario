console.log("mounted from main.js file")

import { Modular } from '@perr0112/modular-load';
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';

const $modular = new Modular({
  pages: {
    'home': Home,
    'about': About
  }
});

$modular.init();
