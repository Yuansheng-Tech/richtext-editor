import _mapValues from 'lodash.mapvalues';

import { titleDataSource, swiperDataSource } from '@ysyp/ui/dist/src/data'
import { ITitleProps, YYTitle } from '@ysyp/ui/dist/src/Title/index'
import { ISwiperProps, YYSwiper } from '@ysyp/ui/dist/src/Swiper/index'

import { ComponentWrapper } from './index'
import { CommonExtension } from '../common/Extention'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    YYTitleComponent: {
       setYYTitleComponent: (options: ITitleProps) => ReturnType,
    },
    YYSwiperComponent: {
      setSwiperComponent: (options: ISwiperProps) => ReturnType,
    }
  }
}

export const YYTitleExtension = CommonExtension({
  title: 'yy-title',
  component: (props) => <ComponentWrapper {...props}>
    <YYTitle {...props.node.attrs} />
  </ComponentWrapper>,
  attributes: _mapValues(titleDataSource, (v, k) => {
    return {
      default: v
    }
  }),
  setComponent: 'setYYTitleComponent'
});

export const YYSwiperExtension = CommonExtension({
  title: 'yy-swiper',
  component: (props) => <ComponentWrapper {...props}>
    <YYSwiper {...props.node.attrs} />
  </ComponentWrapper>,
  attributes: _mapValues(swiperDataSource, (v, k) => {
    return {
      default: v
    }
  }),
  setComponent: 'setYYSwiperComponent'
})