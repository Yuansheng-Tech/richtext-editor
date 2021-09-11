import React, { useState } from 'react'
import { NodeViewWrapper } from '@tiptap/react'
import { View } from '@tarojs/components';

import { ModalConfig } from './EditModalConfig';

export const EditComponent = props => {
  const [isOpened, setIsOpened] = useState(false)

  const toggleModal = () => {
    setIsOpened(!isOpened)
  }

  return (
    <NodeViewWrapper>
      <View
        onClick={toggleModal} 
        className='yy-components'
      >
        {props.children}
      </View>
      {isOpened && <ModalConfig
        {...props}
        isOpened={isOpened}
        toggleModal={toggleModal}
      />}
    </NodeViewWrapper>
  )
}