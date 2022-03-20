import React from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import {Controlled as CodeMirror} from 'react-codemirror2';

import { View } from '@tarojs/components';
import '@ysyp/ui/dist/src/web-components';

import StarterKit from '@tiptap/starter-kit';
import { Document } from '@tiptap/extension-document';
import { Highlight } from '@tiptap/extension-highlight'
import { Typography } from '@tiptap/extension-typography'
import { TableRow } from '@tiptap/extension-table-row'
import { Table } from '@tiptap/extension-table'
import { TableCell } from '@tiptap/extension-table-cell'
import { TableHeader } from '@tiptap/extension-table-header'
import { Image } from '@tiptap/extension-image'
import { TextAlign } from '@tiptap/extension-text-align'
import { TaskList } from '@tiptap/extension-task-list'
import { TaskItem } from '@tiptap/extension-task-item'
import { Link } from '@tiptap/extension-link'
import { TextStyle } from '@tiptap/extension-text-style'
import { FontFamily } from '@tiptap/extension-font-family'
import { Dropcursor } from '@tiptap/extension-dropcursor'
import { CodeBlock } from '@tiptap/extension-code-block'

import 'codemirror/mode/haml/haml'

// import Paragraph from '@tiptap/extension-paragraph'
// import Bold from '@tiptap/extension-bold'
// import Text from '@tiptap/extension-text'
// import Document from '@tiptap/extension-document'
// // Option 1: Browser + server-side
// import { generateJSON, generateHTML } from '@tiptap/html'
// Option 2: Browser-only (lightweight)
// import { generateHTML } from '@tiptap/core'

import { Video, FontColor, FontSize, Iframe } from './extensions/';
import { IncreaseComponent } from './components/Increase/extension'

import { MenuBar } from './MenuBar';
import AdsWraper from './components/common/ads-extension';
import { YYSwiperExtension, YYTitleExtension } from './components/yyui/extension';
// import { EventHandler } from './components/eventHandler';


export const tpl = `
<h2>
Hi there,
</h2>
<p>
this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
<li>
    That’s a bullet list with one …
</li>
<li>
    … or two list items.
</li>
</ul>
<p>
Isn’t that great? And all of that is contenteditable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
Wow, that’s amazing. Good work, boy! 👏
<br />
— Mom
</blockquote>
<IncreaseComponent count="0"></IncreaseComponent>
<table>
<tbody>
  <tr>
    <th>Name</th>
    <th colspan="3">Description</th>
  </tr>
  <tr>
    <td>Cyndi Lauper</td>
    <td>singer</td>
    <td>songwriter</td>
    <td>actress</td>
  </tr>
  <tr>
    <td>Philipp Kühn</td>
    <td>designer</td>
    <td>developer</td>
    <td>maker</td>
  </tr>
  <tr>
    <td>Hans Pagel</td>
    <td>wrote this</td>
    <td colspan="2">that’s it</td>
  </tr>
</tbody>
</table>
`

const CustomTaskItem = TaskItem.extend({
  content: 'inline*',
})

export const useRichTextEditor = (props: {
  contenteditable: boolean,
  content: string,
  setContent?: Function,
}) => {
  const {
    contenteditable = false,
    content = '',
    setContent = (data: string)  => {}
  } = props

  return useEditor({
    extensions: [
      StarterKit,
      Document,
      Highlight,
      Typography,
      Table.configure({
          resizable: true,
      }),
      TextAlign.configure({
          types: ['heading', 'paragraph'],
      }),
      TableRow,
      TableCell,
      TableHeader,
      Image,
      TaskList,
      Link,
      Iframe,
      Video,
      FontColor,
      FontSize,
      TextStyle,
      FontFamily,
      Dropcursor,
      // TaskItem,
      CustomTaskItem,
      AdsWraper,
      CodeBlock,

      IncreaseComponent,
      YYTitleExtension,
      YYSwiperExtension,

      // EventHandler
    ],
    editorProps: {
      attributes: {
        // class: 'md:prose md:prose-sm prose-sm m-5 focus:outline-none',
      },
    },
    editable: contenteditable,
    content: content,
    // onSelectionUpdate({ editor }) {
    //     if (richTextMainSource === editor.getHTML()) return
    //     editor.commands.setContent(richTextMainSource, true)
    // },
    // onFocus({ event }) {
    //   console.log('onFocus event', event);
    // },
    // onBlur({ event }) {
    //   console.log('onBlur event', event);
    // },
    onUpdate({ editor }) {
        setContent(editor.getHTML())
    }
  })
}

export const RichTextEditor = (props: {
  editcode?: boolean,
  menuBarShow?: boolean;
  editor: Editor | null;

  contenteditable?: boolean,
  content?: string,
  setContent?: Function,
}) => {
  const {
    editcode = false,
    menuBarShow = true,
    editor,

    content = '',
    setContent = (data) => {}
  } = props
  
  return (
    <>
      {menuBarShow && <View className='richtext-menu-bar'><MenuBar editor={editor} /></View> }
      <View className='richtext-content'>
        {editcode && <CodeMirror
          value={content}
          // value={prettier.format(content, { parser: "html" })}
          options={{
            mode: 'html',
            theme: 'material',
            lineNumbers: true
          }}
          onBeforeChange={(editors, data, value) => {
            console.log('editor onBeforeChange, data, value', editor, data, value)
            setContent(value)
          }}
          onChange={(editors, data, value) => {
            console.log('editor onChange, data, value', editor, data, value)
            // setContent(value)
          }}
        />}
        {!editcode && <EditorContent editor={editor} />}
      </View>
    </>
  )
}

export default RichTextEditor;