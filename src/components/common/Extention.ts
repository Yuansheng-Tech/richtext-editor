import { ReactNodeViewRenderer } from "@tiptap/react"
import { Node, mergeAttributes } from '@tiptap/core'
import _mapValues from 'lodash.mapvalues';

export const WebExtension = ({
  title,
  attributes,
  setComponent
}) => Node.create<ComponentOptions>({
  name: title,

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

  addAttributes() {
    return attributes
  },

  parseHTML() {
    return [
      {
        tag: title,
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [title, mergeAttributes(_mapValues(HTMLAttributes, (v) => typeof v === 'object' ? JSON.stringify(v) : v))]
  },

  addCommands() {
    return {
      [setComponent]: options => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        })
      },
    }
  },
})

export const CommonExtension = ({
  title,
  component,
  attributes,
  setComponent
}) => Node.create<ComponentOptions>({
  name: title,
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
    return attributes
  },

  parseHTML() {
    return [
      {
        tag: title,
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [title, mergeAttributes(_mapValues(HTMLAttributes, (v) => typeof v === 'object' ? JSON.stringify(v) : v))]
  },

  addNodeView() {
    return ReactNodeViewRenderer(component)
  },

  addCommands() {
    return {
      [setComponent]: options => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        })
      },
    }
  },
})

export interface ComponentOptions {
  inline: boolean,
  HTMLAttributes: Record<string, any>,
}