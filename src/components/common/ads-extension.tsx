import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import { AdsWraper } from './ads'

export default Node.create({
  name: 'AdsWraper',

  group: 'block',

  content: 'inline*',

  parseHTML() {
    return [
      {
        tag: 'AdsWraper',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['AdsWraper', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(AdsWraper)
  },
})