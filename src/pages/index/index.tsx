import React, { useState } from 'react';
import { useRichTextEditor, RichTextEditor } from '../../Tiptap';
import { MenuBar } from '../../MenuBar';

import './index.scss';

const App = () => {
  const [content, setContent] = useState('<p>Richtext</p>')
  const editor = useRichTextEditor({
    contenteditable: true,
    content,
    setContent: (value) => setContent(value)
  })

  const imgmatch = content.match(/<img(.*?)src="(.*?)"(.*?)>/) || []
  return (
    <>
      <div className='top-warning'>
        <button
          onClick={() => {
            // https://www.wechatsync.com/?utm_source=syncicon#howtouse
            window.syncPost({
              title: content.replace(/<\/?(.*?)>/g, '').slice(0, 200),
              desc: content.replace(/<\/?(.*?)>/g, '').slice(0, 200),
              content: content,
              thumb: imgmatch[2] || ''
            })
          }}
          style={{
            padding: '3px',
            backgroundColor: '#fff',
            border: '1px solid #aaa',
            margin: '5px',
          }}
        >文章同步</button>
        <a target="_blank" href="https://airtable.com/shrLSJMnTC2BlmP29/tblApDW0GjKuWiLKU">支持的平台</a>
      </div>
    <div className='App'>
      <RichTextEditor
        editor={editor}
        contenteditable
        content={content}
        setContent={(value) => setContent(value)}
      />
    </div>
    </>
  );
}

export default App;
