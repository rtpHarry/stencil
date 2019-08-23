/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  InputData,
  OutputData,
} from './components/stencil-repl/stencil-repl';
import {
  InputData as InputData1,
} from './components/stencil-repl/stencil-repl';

export namespace Components {
  interface ReplHeader {
    'appName': string;
  }
  interface ReplInput {
    'code': string;
    'isSelected': boolean;
    'name': string;
  }
  interface ReplInputSelection {
    'isSelected': boolean;
    'name': string;
  }
  interface ReplInputs {
    'inputs': InputData[];
    'selectedName': string;
  }
  interface ReplOutputs {
    'output': OutputData;
  }
  interface ReplViewport {}
  interface StencilRepl {
    'appName': string;
    'inputs': InputData[];
  }
}

declare global {


  interface HTMLReplHeaderElement extends Components.ReplHeader, HTMLStencilElement {}
  var HTMLReplHeaderElement: {
    prototype: HTMLReplHeaderElement;
    new (): HTMLReplHeaderElement;
  };

  interface HTMLReplInputElement extends Components.ReplInput, HTMLStencilElement {}
  var HTMLReplInputElement: {
    prototype: HTMLReplInputElement;
    new (): HTMLReplInputElement;
  };

  interface HTMLReplInputSelectionElement extends Components.ReplInputSelection, HTMLStencilElement {}
  var HTMLReplInputSelectionElement: {
    prototype: HTMLReplInputSelectionElement;
    new (): HTMLReplInputSelectionElement;
  };

  interface HTMLReplInputsElement extends Components.ReplInputs, HTMLStencilElement {}
  var HTMLReplInputsElement: {
    prototype: HTMLReplInputsElement;
    new (): HTMLReplInputsElement;
  };

  interface HTMLReplOutputsElement extends Components.ReplOutputs, HTMLStencilElement {}
  var HTMLReplOutputsElement: {
    prototype: HTMLReplOutputsElement;
    new (): HTMLReplOutputsElement;
  };

  interface HTMLReplViewportElement extends Components.ReplViewport, HTMLStencilElement {}
  var HTMLReplViewportElement: {
    prototype: HTMLReplViewportElement;
    new (): HTMLReplViewportElement;
  };

  interface HTMLStencilReplElement extends Components.StencilRepl, HTMLStencilElement {}
  var HTMLStencilReplElement: {
    prototype: HTMLStencilReplElement;
    new (): HTMLStencilReplElement;
  };
  interface HTMLElementTagNameMap {
    'repl-header': HTMLReplHeaderElement;
    'repl-input': HTMLReplInputElement;
    'repl-input-selection': HTMLReplInputSelectionElement;
    'repl-inputs': HTMLReplInputsElement;
    'repl-outputs': HTMLReplOutputsElement;
    'repl-viewport': HTMLReplViewportElement;
    'stencil-repl': HTMLStencilReplElement;
  }
}

declare namespace LocalJSX {
  interface ReplHeader extends JSXBase.HTMLAttributes<HTMLReplHeaderElement> {
    'appName'?: string;
  }
  interface ReplInput extends JSXBase.HTMLAttributes<HTMLReplInputElement> {
    'code'?: string;
    'isSelected'?: boolean;
    'name'?: string;
  }
  interface ReplInputSelection extends JSXBase.HTMLAttributes<HTMLReplInputSelectionElement> {
    'isSelected'?: boolean;
    'name'?: string;
    'onInputSelect'?: (event: CustomEvent<string>) => void;
  }
  interface ReplInputs extends JSXBase.HTMLAttributes<HTMLReplInputsElement> {
    'inputs'?: InputData[];
    'selectedName'?: string;
  }
  interface ReplOutputs extends JSXBase.HTMLAttributes<HTMLReplOutputsElement> {
    'output'?: OutputData;
  }
  interface ReplViewport extends JSXBase.HTMLAttributes<HTMLReplViewportElement> {}
  interface StencilRepl extends JSXBase.HTMLAttributes<HTMLStencilReplElement> {
    'appName'?: string;
    'inputs'?: InputData[];
  }

  interface IntrinsicElements {
    'repl-header': ReplHeader;
    'repl-input': ReplInput;
    'repl-input-selection': ReplInputSelection;
    'repl-inputs': ReplInputs;
    'repl-outputs': ReplOutputs;
    'repl-viewport': ReplViewport;
    'stencil-repl': StencilRepl;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


