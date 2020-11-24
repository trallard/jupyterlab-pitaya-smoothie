import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for trallard/jupyter_pitaya_smoothie
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@trallard/jupyter_pitaya_smoothie:plugin',
  requires: [IThemeManager],
  activate: function (app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@trallard/jupyter_pitaya_smoothie/index.css';

    manager.register({
      name: 'jupyter_pitaya_smoothie',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
