import React from 'react';
import _mapValues from 'lodash.mapvalues';

import { EditComponent } from '../common/EditComponent';

/**
 * React 组件化编辑
 * web components 渲染
 */
export const ComponentWrapper = props => {
  props.node.attrs = _mapValues(props.node.attrs, v => (typeof v === 'string' && /^(\[|\})/g.test(v)) ? JSON.parse(v) : v)

  return (
    <EditComponent
      {...props}
    >
      {props.children}
    </EditComponent>
  )
}