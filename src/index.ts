import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for trallard/jupyter-pitaya-smoothie
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@trallard/jupyter-pitaya-smoothie:plugin',
  requires: [IThemeManager],
  activate: function (app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@trallard/jupyter-pitaya-smoothie/index.css';

    manager.register({
      name: 'Pitaya Smoothie',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
