import { Button } from '@tarojs/components';
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import { createForm } from 'rc-form';
import _set from 'lodash.set'
import _mapValues from 'lodash.mapvalues'
import { renderObjectMap } from '@ysyp/utils/dist/renderForm';

import { ModalController } from './ModalContainer';

export const ModalForm = createForm()((props) => {
  console.log('createForm props', props);
  const data = _mapValues(props.node.attrs, v => (typeof v === 'string' && /^(\[|\})/g.test(v)) ? JSON.parse(v) : v)
  return renderObjectMap({
    data: data,
    form: props.form,
    onChange: (key, index) => (value) =>  {
      _set(data, key, value);
      props.updateAttributes(data)
      props.form.setFieldsValue({
        [key]: value,
      })
    },
    onUpdateSelect: (key, index, value) => {
      _set(data, key, value);
      props.updateAttributes(data)
    }
  })
})

export const ModalConfig = (props) => {
  const {
    isOpened,
    toggleModal
  } = props;

  return (<ModalController>
    <AtModal isOpened={isOpened} className='edit-modal-config'>
    <AtModalHeader>富文本组件内容编辑</AtModalHeader>
    <AtModalContent>
      <ModalForm {...props} />
    </AtModalContent>
    <AtModalAction>
      <Button type='default' onClick={() => toggleModal(false)}>取消</Button>
      <Button type='primary' onClick={() => toggleModal(false)}>确定</Button>
    </AtModalAction>
  </AtModal>
  </ModalController>)
}

export const YYModal = props => {
  const {
    isOpened,
    // toggleModal,
    title,
    children
  } = props;

  return (<ModalController>
    <AtModal isOpened={isOpened} className='edit-modal-config'>
    <AtModalHeader>{title}</AtModalHeader>
    <AtModalContent>
      {children}
    </AtModalContent>
    {/* <AtModalAction>
      <Button type='default' onClick={() => toggleModal(false)}>取消</Button>
      <Button type='primary' onClick={() => toggleModal(false)}>确定</Button>
    </AtModalAction> */}
  </AtModal>
  </ModalController>) 
}