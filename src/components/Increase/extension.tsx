import { ReactNodeViewRenderer } from "@tiptap/react"
import { Node, mergeAttributes } from '@tiptap/core'
import { Increase } from "."

export interface ComponentOptions {
  inline: boolean,
  HTMLAttributes: Record<string, any>,
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    IncreaseComponent: {
      /**
       * Add an image
       */
      setIncreaseComponent: (options: { src: string, alt?: string, title?: string }) => ReturnType,
    }
  }
}

export const IncreaseComponent = Node.create<ComponentOptions>({
  name: 'IncreaseComponent',
  defaultOptions: {
    inline: false,
    HTMLAttributes: {},
  },
  inline() {
    return this.options.inline
  },
  group() {
    return this.options.inline ? 'inline' : 'block'
  },
  draggable: true,
  atom: true,
  addAttributes() {
    return {
      count: {
        default: 0,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'IncreaseComponent',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['IncreaseComponent', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Increase)
  },

  addCommands() {
    return {
      setIncreaseComponent: options => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        })
      },
    }
  },
})