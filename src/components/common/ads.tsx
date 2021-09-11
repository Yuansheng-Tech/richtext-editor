import React from 'react'
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react'

export const AdsWraper = props => {
  return (
    <NodeViewWrapper className='ads-wrapper'>
      <div className='ads-wrapper-title'>广告</div>
      {/* {props.children} */}
      <NodeViewContent className='ads-wrapper-content' />
    </NodeViewWrapper>
  )
}