import { Extension } from '@tiptap/core'
import { Plugin, PluginKey } from 'prosemirror-state'

export const EventHandler = Extension.create({
  name: 'eventHandler',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('eventHandler'),
        props: {
          handleClick(view, pos, event) {
            // console.log('view, pos, event', view, pos, event);
            return true
          },
          handleDoubleClick(view, pos, event) {
            return true
          },
          handlePaste(view, event, slice) {
            return true
          },
          // … and many, many more.
          // Here is the full list: https://prosemirror.net/docs/ref/#view.EditorProps
        },
      }),
    ]
  },
})