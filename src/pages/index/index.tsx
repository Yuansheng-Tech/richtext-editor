import React, { useState } from 'react';
import { useRichTextEditor, RichTextEditor } from '../../Tiptap';
import { MenuBar } from '../../MenuBar';

const App = () => {
  const [content, setContent] = useState('<p>Richtext</p>')
  const editor = useRichTextEditor({
    contenteditable: true,
    content,
    setContent: (value) => setContent(value)
  })
  return (
    <div className='App'>
      <RichTextEditor
        editor={editor}
        contenteditable
        content={content}
        setContent={(value) => setContent(value)}
      />
    </div>
  );
}

export default App;
