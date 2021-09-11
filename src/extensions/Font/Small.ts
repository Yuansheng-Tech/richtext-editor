import { Mark, markInputRule, markPasteRule, mergeAttributes } from '@tiptap/core';

export interface SmallOptions {
  HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    small: {
      /** Set an small mark */
      setSmall: () => ReturnType;
      /** Toggle an small mark */
      toggleSmall: () => ReturnType;
      /** Unset an small mark */
      unsetSmall: () => ReturnType;
    };
  }
}

export const starInputRegex = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/gm;
export const starPasteRegex = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/gm;
export const underscoreInputRegex = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/gm;
export const underscorePasteRegex = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/gm;

export const Small = Mark.create({
  name: 'small',

  defaultOptions: {
    HTMLAttributes: {},
  },

  parseHTML() {
    return [
      {
        tag: 's',
      },
      {
        tag: 'small',
        // getAttrs: node => (node as HTMLElement).style.fontStyle !== 'normal' && null,
      },
      {
        style: 'font-style=small',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['small', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },

  addCommands() {
    return {
      setSmall:
        () =>
        ({ commands }) => {
          return commands.setMark('small');
        },
      toggleSmall:
        () =>
        ({ commands }) => {
          return commands.toggleMark('small');
        },
      unsetSmall:
        () =>
        ({ commands }) => {
          return commands.unsetMark('small');
        },
    };
  },

  addKeyboardShortcuts() {
    return {
      'Mod-small': () => this.editor.commands.toggleSmall(),
    };
  },

  addInputRules() {
    return [markInputRule(starInputRegex, this.type), markInputRule(underscoreInputRegex, this.type)];
  },

  addPasteRules() {
    return [markPasteRule(starPasteRegex, this.type), markPasteRule(underscorePasteRegex, this.type)];
  },
});
