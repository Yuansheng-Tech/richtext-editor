import React from 'react'
import { NodeViewWrapper } from '@tiptap/react'

export const Increase = props => {
  const increase = () => {
    props.updateAttributes({
      count: props.node.attrs.count + 1,
    })
  }

  return (
    <NodeViewWrapper className='increase-component'>
      <span className='label'>React Component</span>

      <div className='content'>
        <button onClick={increase}>
          This button has been clicked {props.node.attrs.count} times.
        </button>
      </div>
    </NodeViewWrapper>
  )
}