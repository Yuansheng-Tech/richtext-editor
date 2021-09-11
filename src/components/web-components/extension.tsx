import _mapValues from 'lodash.mapvalues';

import { titleDataSource, swiperDataSource } from '@ysyp/ui/dist/src/data'
import { ITitleProps } from '@ysyp/ui/dist/src/Title/index'
import { ISwiperProps } from '@ysyp/ui/dist/src/Swiper/index'


import { WebExtension } from '../common/Extention'

export interface WebTitleOptions {
  inline: boolean,
  HTMLAttributes: Record<string, any>,
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    WebTitle: {
      /**
       * Add an image
       */
      setWebTitle: (options: ITitleProps) => ReturnType,
    },
    WebSwiper: {
      /**
       * Add an image
       */
      setWebSwiper: (options: ISwiperProps) => ReturnType,
    }
  }
}

export const WebTitle = WebExtension({
  title: 'yy-title',
  attributes: _mapValues(titleDataSource, (v, k) => {
    return {
      default: v
    }
  }),
  setComponent: 'setWebTitle'
})

export const WebSwiper = WebExtension({
  title: 'yy-swiper',
  attributes: _mapValues(swiperDataSource, (v, k) => {
    return {
      default: v
    }
  }),
  setComponent: 'setWebSwiper'
})