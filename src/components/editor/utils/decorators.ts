import MultiDecorator from 'draft-js-plugins-editor/lib/Editor/MultiDecorator';
import { CompositeDecorator } from 'draft-js';

/**
 * Pega todos os decorators dos plugins que estão dentro do Editor
 * @param array plugins
 * @link https://github.com/draft-js-plugins/draft-js-plugins/issues/401
 */
export function getDecorators(plugins = []) {
  let decorators = [];

  plugins.forEach((listedPlugin) => {
    if (
      listedPlugin.decorators !== null &&
      listedPlugin.decorators !== undefined
    ) {
      decorators = decorators.concat(listedPlugin.decorators);
    }
  });

  return decorators;
}

/**
 * Retorna um MultiDecorator com todos os decorators presentes
 * @link https://github.com/draft-js-plugins/draft-js-plugins/issues/401
 */
export function getAllDecorators(plugins = []) {
  return new MultiDecorator([new CompositeDecorator(getDecorators(plugins))]);
}
