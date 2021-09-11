import React from 'react'
import Taro from '@tarojs/taro'
import { Button, View } from '@tarojs/components'
import {
  BubbleMenu,
} from '@tiptap/react'
import classnames from 'classnames'
import Cookies from 'js-cookie'

import { Card } from './Card'

export const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <View className='tiptap-menu-bar'>
      <Card label='基本样式'>
        <HeadingMenu editor={editor} /><br />
        <BaseBar editor={editor} /><br />
        <ListMenu editor={editor} /><br />
      </Card>
      <Card label='媒体样式'>
        <MediaMenu editor={editor} /><br />
      </Card>
      <Card label='基本操作'>
        <FontActionBar editor={editor} /><br />
        <ActionBar editor={editor} /><br />
      </Card>
      <Card label='字体颜色'>
        <FontColor editor={editor} /><br />
      </Card>
      <Card label='字体大小'>
        <FontSize editor={editor} /><br />
      </Card>
      <Card label='字体样式'>
        <FontFamily editor={editor} /><br />
      </Card>
      <Card label='组建样式'>
        <YYSwiper editor={editor} />
        <YYTitle editor={editor} />
        <br />
      </Card>
      {/* <MenuTasks editor={editor} />  */}
    </View>
  )
}

/**
 * 
 * @param param0 
 * @returns 
 * 
 * https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2723953
 */

export const ActionBar = ({ editor }) => {
  return (<>
  {/* <BubbleMenu className='bubble-menu' tippyOptions={{ duration: 100 }} editor={editor}> */}
      <Button size='mini' type='default' onClick={() => editor.chain().focus().undo().run()}>
        <i className='iconfont icon-editor-undo'></i>
        {/* undo */}
      </Button>
      <Button size='mini' type='default' onClick={() => editor.chain().focus().redo().run()}>
        <i className='iconfont icon-editor-redo'></i>
        {/* redo */}
      </Button>
      <Button size='mini' type='default' onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        <i className='iconfont icon-xiangpi'></i>
        {/* clear marks */}
      </Button>
      <Button size='mini' type='default' onClick={() => editor.chain().focus().clearNodes().run()}>
        <i className='iconfont icon-zu9'></i>
        {/* clear nodes */}
      </Button>
  {/* </BubbleMenu> */}
  </>)
}
export const HeadingMenu = ({ editor }) => {
  return(<>
  {/* <FloatingMenu className='floating-menu' tippyOptions={{ duration: 100 }} editor={editor}> */}
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
    >
      <i className='iconfont icon-h1'></i>
      {/* h1 */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
    >
      <i className='iconfont icon-h2'></i>
      {/* h2 */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
    >
      <i className='iconfont icon-h3'></i>
      {/* h3 */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
      className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
    >
      <i className='iconfont icon-h4'></i>
      {/* h4 */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
      className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
    >
      <i className='iconfont icon-h5'></i>
      {/* h5 */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
      className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
    >
      <i className='iconfont icon-h6'></i>
      {/* h6 */}
    </Button>
  {/* </FloatingMenu> */}
  </>)
}

export const ListMenu = ({ editor }) => {
  return (<>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      className={editor.isActive('codeBlock') ? 'is-active' : ''}
    >
      <i className='iconfont icon-bx-code-block'></i>
      {/* code block */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().toggleBulletList().run()}
      className={editor.isActive('bulletList') ? 'is-active' : ''}
    >
      <i className='iconfont icon-wuxuliebiao'></i>
      {/* bullet list */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().toggleOrderedList().run()}
      className={editor.isActive('orderedList') ? 'is-active' : ''}
    >
      <i className='iconfont icon-youxuliebiao'></i>
      {/* ordered list */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().toggleBlockquote().run()}
      className={editor.isActive('blockquote') ? 'is-active' : ''}
    >
      <i className='iconfont icon-zu'></i>
      {/* blockquote */}
    </Button>
    <Button size='mini' type='default' onClick={() => editor.chain().focus().setHorizontalRule().run()}>
    <i className='iconfont icon-horizontal-rule'></i>
      {/* horizontal rule */}
    </Button>
    <Button size='mini' type='default' onClick={() => editor.chain().focus().setHardBreak().run()}>
      <i className='iconfont icon-break-line-a'></i>
      {/* hard break */}
    </Button>
  </>)
}

export const BaseBar = ({ editor }) => {
  if (!editor) {
    return null
  }
  return (<>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().setParagraph().run()}
      className={editor.isActive('paragraph') ? 'is-active' : ''}
    >
      <i className='iconfont icon-duanlawenben'></i>
      {/* paragraph */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().toggleBold().run()}
      className={editor.isActive('bold') ? 'is-active' : ''}
    >
      <i className='iconfont icon-jiacu'></i>
      {/* Bold */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().toggleItalic().run()}
      className={editor.isActive('italic') ? 'is-active' : ''}
    >
      <i className='iconfont icon-xieti'></i>
      {/* italic */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().toggleStrike().run()}
      className={editor.isActive('strike') ? 'is-active' : ''}
    >
      <i className='iconfont icon-shanchuxian'></i>
      {/* strike */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().toggleCode().run()}
      className={editor.isActive('code') ? 'is-active' : ''}
    >
      <i className='iconfont icon-daima'></i>
      {/* code */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().toggleHighlight().run()}
      className={editor.isActive('highlight') ? 'is-active' : ''}
    >
      <i className='iconfont icon-ic_edit_highlight'></i>
      {/* highlight */}
    </Button>
  </>)
}

export const FontActionBar = ({ editor }) => {
  if (!editor) {
    return null
  }
  return (<>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().setTextAlign('left').run()}
      className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
    >
      <i className='iconfont icon-juzuo'></i>
      {/* left */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().setTextAlign('center').run()}
      className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
    >
      <i className='iconfont icon-juzhong'></i>
      {/* center */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().setTextAlign('right').run()}
      className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
    >
      <i className='iconfont icon-juyou'></i>
      {/* right */}
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().setTextAlign('justify').run()}
      className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
    >
      <i className='iconfont icon-liangduanduiqi'></i>
      {/* justify */}
    </Button>
  </>)
}

export const MediaMenu = ({ editor }) => {
  return <>
      <AddImage editor={editor} />
      <UploadImage editor={editor} />
      <AddLink editor={editor} />
      <AddIframe editor={editor} />
      <AddVideo editor={editor} />
      <UploadVideo editor={editor} />
      <MenuBarTable editor={editor} />
  </>
}
export const AddImage = ({ editor }) => {
  if (!editor) {
    return null
  }
  const addImage = () => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url, alt: '' }).run()
    }
  }
  return (<Button size='mini' type='default' onClick={addImage}>
    <i className='iconfont icon-zu3'></i>
    {/* add image from URL */}
  </Button>)
}
export const UploadImage = ({ editor }) => {
  if (!editor) {
    return null
  }
  const addImage = () => {
    Taro.chooseImage({
      success (ress) {
        const tempFilePaths = ress.tempFilePaths
        console.log('tempFilePaths', tempFilePaths);
        Taro.uploadFile({
          url: 'http://api.yuansheng.com/api/file/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          header: { 
            // 'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${Cookies.get('accessToken') || Taro.getStorageSync('accessToken')}`,
            'X-Api-Key': `APIKey ${Cookies.get('APIKey') || Taro.getStorageSync('APIKey')}`, // `APIKey xxxx`,
          },
          formData: {
            method: 'POST',
            'pathtype': 'weappfile'
          },
          success (res){
            const { data } = JSON.parse(res.data || '{}') || {}
            editor.chain().focus().setImage({
              src: data.url,
              alt: ''
            }).run()
          }
        })
      }
    })
  }
  return (<Button size='mini' type='default' onClick={addImage}>
    <i className='iconfont icon-image-upload'></i>
    {/* add image from URL */}
  </Button>)
}

export const AddLink = ({ editor }) => {
  if (!editor) {
    return null
  }
  const addLink = () => {
    const url = window.prompt('URL')
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
    }
  }
  const removeLink = () => {
    editor.chain().focus().unsetLink().run()
  }
  return (<>
    <Button size='mini' type='default' onClick={addLink}>
      <i className='iconfont icon-insert-link'></i>
    </Button>
    {editor.isActive('link') && <Button size='mini' type='default' onClick={removeLink}>
      <i className='iconfont icon-icons8-delete_link'></i>
    </Button>}
  </>)
}

// https://www.youtube.com/embed/XIMLoLxmTDw
export const AddIframe = ({ editor }) => {
  if (!editor) {
    return null
  }
  const addLink = () => {
    const url = window.prompt('URL')
    if (url) {
      editor.chain().focus().setIframe({ src: url }).run()
    }
  }
  return (<>
    <Button size='mini' type='default' onClick={addLink}>
      <i className='iconfont icon-iframe'></i>
    </Button>
  </>)
}


export const FontSize = ({ editor }) => {
  if (!editor) {
    return null
  }
  const addFontSize = () => {
    const num = window.prompt('FontSize', '12px')

    if (num) {
      editor.chain().focus().setFontSize(num).run()
    }
  }
  return (<Button size='mini' type='default' onClick={addFontSize}>
    <i className='iconfont icon-font-size1'></i>
    {/* add image from URL */}
  </Button>)
}

// https://github.com/ueberdosis/tiptap/blob/6ca7ebde55a2f8f14d54881855d108b994550606/docs/src/demos/Experiments/FontColor/index.vue
export const FontColor = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (<>
    <Button size='mini' type='default'
      style='color:purple;'
      onClick={() => editor.chain().focus().setFontColor('#958DF1').run()}
      className={classnames({ 'is-active': editor.isActive('textStyle', { color: '#958DF1' }) })}
    >
      purple
    </Button>
    <Button size='mini' type='default'
      style='color:red;'
      onClick={() => editor.chain().focus().setFontColor('#F98181').run()}
      className={classnames({ 'is-active': editor.isActive('textStyle', { color: '#F98181' }) })}
    >
      red
    </Button>
    <Button size='mini' type='default'
      style='color:orange;'
      onClick={() => editor.chain().focus().setFontColor('#FBBC88').run()}
      className={classnames({ 'is-active': editor.isActive('textStyle', { color: '#FBBC88' }) })}
    >
      orange
    </Button>
    <Button size='mini' type='default'
      style='color:yellow;'
      onClick={() => editor.chain().focus().setFontColor('#FAF594').run()}
      className={classnames({ 'is-active': editor.isActive('textStyle', { color: '#FAF594' }) })}
    >
      yellow
    </Button>
    <Button size='mini' type='default'
      style='color:blue;'
      onClick={() => editor.chain().focus().setFontColor('#70CFF8').run()}
      className={classnames({ 'is-active': editor.isActive('textStyle', { color: '#70CFF8' }) })}
    >
      blue
    </Button>
    <Button size='mini' type='default'
      style='color:teal;'
      onClick={() => editor.chain().focus().setFontColor('#94FADB').run()}
      className={classnames({ 'is-active': editor.isActive('textStyle', { color: '#94FADB' }) })}
    >
      teal
    </Button>
    <Button size='mini' type='default'
      style='color:green;'
      onClick={() => editor.chain().focus().setFontColor('#B9F18D').run()}
      className={classnames({ 'is-active': editor.isActive('textStyle', { color: '#B9F18D' }) })}
    >
      green
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().unsetFontColor().run()}
    >
      remove color
    </Button>
  </>)
}

export const AddVideo = ({ editor }) => {
  if (!editor) {
    return null
  }
  const addLink = () => {
    const url = window.prompt('URL')
    if (url) {
      editor.chain().focus().addVideo({
        src: url,
        // id: id,
        // type: 'video/' + ext
      }).run()
    }
  }
  return (<>
    <Button size='mini' type='default' onClick={addLink}>
      <i className='iconfont icon-video'></i>
    </Button>
  </>)
}

export const UploadVideo = ({ editor }) => {
  if (!editor) {
    return null
  }
  const addLink = () => {
    Taro.chooseVideo({
      sourceType: ['album','camera'],
      // maxDuration: 60,
      camera: 'back',
      success (re) {
        const tempFilePath = re?.tempFilePath
        console.log('tempFilePath', tempFilePath);
        Taro.uploadFile({
          url: 'http://api.yuansheng.com/api/file/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePath,
          name: 'file',
          header: { 
            // 'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${Cookies.get('accessToken') || Taro.getStorageSync('accessToken')}`,
            'X-Api-Key': `APIKey ${Cookies.get('APIKey') || Taro.getStorageSync('APIKey')}`, // `APIKey xxxx`,
          },
          formData: {
            method: 'POST',
            'pathtype': 'weappfile'
          },
          success (res){
            const { data } = JSON.parse(res.data || '{}') || {}
            editor.chain().focus().addVideo({
              src: data.url
            }).run()
          }
        })
      }
    })
  }
  return (<>
    <Button size='mini' type='default' onClick={addLink}>
      <i className='iconfont icon-icon_video_upload'></i>
    </Button>
  </>)
}

export const AddFile = ({ editor }) => {
  if (!editor) {
    return null
  }
  const addLink = (fileItem) => {
    // const url = window.prompt('URL')
    if (fileItem) {
      editor.chain().focus().addFile({
        name: fileItem.name,
        id: fileItem.id
      }).run()
      editor.chain().focus().setContent(fileItem.name)
    }
  }
  return (<>
    <Button size='mini' type='default' onClick={addLink}>
      File
    </Button>
  </>)
}

export const Increase = ({ editor }) => {
  if (!editor) {
    return null
  }
  const addComponent = () => {
    editor.chain().focus().setIncreaseComponent({

    }).run()
  }
  return (<Button size='mini' type='default' onClick={addComponent}>
    Increase
  </Button>)

}

export const YYTitle = ({ editor }) => {
  if (!editor) {
    return null
  }
  const addComponent = () => {
    editor.chain().focus().setYYTitleComponent({}).run()
  }
  return (<Button size='mini' type='default' onClick={addComponent}>
    YYTitle
  </Button>)
}

export const WebTitle = ({ editor }) => {
  if (!editor) {
    return null
  }
  const addComponent = () => {
    editor.chain().focus().setWebTitle({}).run()
  }
  return (<Button size='mini' type='default' onClick={addComponent}>
    WebTitle
  </Button>)
}

export const WebSwiper = ({ editor }) => {
  if (!editor) {
    return null
  }
  const addComponent = () => {
    editor.chain().focus().setWebSwiper({}).run()
  }
  return (<Button size='mini' type='default' onClick={addComponent}>
    WebSwiper
  </Button>)
}

export const YYSwiper = ({ editor }) => {
  if (!editor) {
    return null
  }
  const addComponent = () => {
    editor.chain().focus().setYYSwiperComponent({}).run()
  }
  return (<Button size='mini' type='default' onClick={addComponent}>
    YYSwiper
  </Button>)
}

export const MenuBarTable = ({ editor }) => {
  return (
    <>
      <Button size='mini' type='default' onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
        <i className='iconfont icon-zu4'></i>
        {/* insertTable */}
      </Button>
      <BubbleMenu
        pluginKey='table-key'
        shouldShow={() => {
          // only show the bubble menu for images and links
          return editor.isActive('table')
        }}
        className='bubble-menu'
        tippyOptions={{ duration: 100 }}
        editor={editor}
      >
        <Button size='mini' type='default' onClick={() => editor.chain().focus().addColumnBefore().run()} disabled={!editor.can().addColumnBefore()}>
          <i className='iconfont icon-editor-border-left'></i>
          {/* addColumnBefore */}
        </Button>
        <Button size='mini' type='default' onClick={() => editor.chain().focus().addColumnAfter().run()} disabled={!editor.can().addColumnAfter()}>
          <i className='iconfont icon-editor-border-right'></i>
          {/* addColumnAfter */}
        </Button>
        <Button size='mini' type='default' onClick={() => editor.chain().focus().deleteColumn().run()} disabled={!editor.can().deleteColumn()}>
          <i className='iconfont icon-editor-column-delete'></i>
          {/* deleteColumn */}
        </Button>
        <Button size='mini' type='default'
          onClick={() => editor.chain().focus().addRowBefore().run()} 
          disabled={!editor.can().addRowBefore()}
        >
          <i className='iconfont icon-editor-border-top'></i>
          {/* addRowBefore */}
        </Button>
        <Button size='mini' type='default' onClick={() => editor.chain().focus().addRowAfter().run()} disabled={!editor.can().addRowAfter()}>
          <i className='iconfont icon-editor-border-bottom'></i>
          {/* addRowAfter */}
        </Button>
        <Button size='mini' type='default' onClick={() => editor.chain().focus().deleteRow().run()} disabled={!editor.can().deleteRow()}>
          <i className='iconfont icon-editor-row-delete'></i>
          {/* deleteRow */}
        </Button>
        <Button size='mini' type='default' onClick={() => editor.chain().focus().mergeCells().run()} disabled={!editor.can().mergeCells()}>
          <i className='iconfont icon-editor-cell-merge'></i>
          {/* mergeCells */}
        </Button>
        <Button size='mini' type='default' onClick={() => editor.chain().focus().splitCell().run()} disabled={!editor.can().splitCell()}>
          <i className='iconfont icon-icon-cellsplit-line'></i>
          {/* splitCell */}
        </Button>
        <Button size='mini' type='default' onClick={() => editor.chain().focus().toggleHeaderColumn().run()} disabled={!editor.can().toggleHeaderColumn()}>
          <i className='iconfont icon-Table'></i>
          {/* toggleHeaderColumn */}
        </Button>
        <Button size='mini' type='default' onClick={() => editor.chain().focus().toggleHeaderRow().run()} disabled={!editor.can().toggleHeaderRow()}>
          <i className='iconfont icon-table'></i>
          {/* toggleHeaderRow */}
        </Button>
        <Button size='mini' type='default' onClick={() => editor.chain().focus().toggleHeaderCell().run()} disabled={!editor.can().toggleHeaderCell()}>
          <i className='iconfont icon-k-i-table-cell'></i>
          {/* toggleHeaderCell */}
        </Button>
        <Button size='mini' type='default' onClick={() => editor.chain().focus().mergeOrSplit().run()} disabled={!editor.can().mergeOrSplit()}>
          <i className='iconfont icon-table-merge'></i>
          {/* mergeOrSplit */}
        </Button>
        {/* <Button size='mini' type='default' onClick={() => editor.chain().focus().setCellAttribute('backgroundColor', 'red').run()} disabled={!editor.can().setCellAttribute('backgroundColor', '#FAF594')}>
          setCellAttribute
        </Button>
        <Button size='mini' type='default' onClick={() => editor.chain().focus().fixTables().run()} disabled={!editor.can().fixTables()}>
          fixTables
        </Button> */}
        <Button size='mini' type='default' onClick={() => editor.chain().focus().goToNextCell().run()} disabled={!editor.can().goToNextCell()}>
          <i className='iconfont icon-qianjin'></i>
          {/* goToNextCell */}
        </Button>
        <Button size='mini' type='default' onClick={() => editor.chain().focus().goToPreviousCell().run()} disabled={!editor.can().goToPreviousCell()}>
          <i className='iconfont icon-houtui'></i>
          {/* goToPreviousCell */}
        </Button>
        <Button size='mini' type='default' onClick={() => editor.chain().focus().deleteTable().run()} disabled={!editor.can().deleteTable()}>
          <i className='iconfont icon-table-delete'></i>
          {/* deleteTable */}
        </Button>
      </BubbleMenu>
    </>
  )
}

export const FontFamily = ({ editor }) => {
  return (<>
    <Button size='mini' type='default'
      style='font-family: Inter;'
      onClick={() => editor.chain().focus().setFontFamily('Inter').run()}
      className={classnames({ 'is-active': editor.isActive('textStyle', { fontFamily: 'Inter' }) })}
    >
      Inter
    </Button>
    <Button size='mini' type='default'
      style='font-family: Comic Sans MS, Comic Sans;'
      onClick={() => editor.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run()}
      className={classnames({ 'is-active': editor.isActive('textStyle', { fontFamily: 'Comic Sans MS, Comic Sans' }) })}
    >
      Comic Sans
    </Button>
    <Button size='mini' type='default'
      style='font-family: serif;'
      onClick={() => editor.chain().focus().setFontFamily('serif').run()}
      className={classnames({ 'is-active': editor.isActive('textStyle', { fontFamily: 'serif' }) })}
    >
      serif
    </Button>
    <Button size='mini' type='default'
      style='font-family: monospace;'
      onClick={() => editor.chain().focus().setFontFamily('monospace').run()}
      className={classnames({ 'is-active': editor.isActive('textStyle', { fontFamily: 'monospace' }) })}
    >
      monospace
    </Button>
    <Button size='mini' type='default' 
      style='font-family: cursive;'
      onClick={() => editor.chain().focus().setFontFamily('cursive').run()}
      className={classnames({ 'is-active': editor.isActive('textStyle', { fontFamily: 'cursive' }) })}
    >
      cursive
    </Button>
    <Button size='mini' type='default'
      onClick={() => editor.chain().focus().unsetFontFamily().run()}
    >
      Remove font-family
    </Button>
    </>)
}

export const MenuTasks = ({ editor }) => {
  return (<>
      <Button size='mini' type='default' onClick={() => editor.chain().focus().toggleTaskList().run()}>
        <i className='iconfont icon-houtui'></i>
        {/* toggleTaskList */}
      </Button>
  </>)
}