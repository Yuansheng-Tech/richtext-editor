import { Node } from '@tiptap/core'

export interface IframeOptions {
  allowFullscreen: boolean,
  HTMLAttributes: {
    [key: string]: any
  },
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    iframe: {
      /**
       * Add an iframe
       */
      setIframe: (options: { src: string }) => ReturnType,
    }
  }
}

export const Iframe = Node.create({
  name: 'iframe',

  group: 'block',

  atom: true,

  defaultOptions: {
    allowFullscreen: true,
    HTMLAttributes: {
      class: 'iframe-wrapper',
    },
  },

  addAttributes() {
    return {
      src: {
        default: null,
      },
      frameborder: {
        default: 0,
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => {
          return {
            allowfullscreen: this.options.allowFullscreen,
          }
        },
      },
    }
  },

  parseHTML() {
    return [{
      tag: 'iframe',
    }]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', this.options.HTMLAttributes, ['iframe', HTMLAttributes]]
  },

  addCommands() {
    return {
      setIframe: (options: { src: string }) => ({ tr, dispatch }) => {
        const { selection } = tr
        const node = this.type.create(options)

        if (dispatch) {
          tr.replaceRangeWith(selection.from, selection.to, node)
        }

        return true
      },
    }
  },
})