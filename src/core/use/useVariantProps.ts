import type { PropType } from 'vue'

import type {
  CSSClass,
  Data,
  Errors,
  VanillaComponentProps,
  Variants,
} from '@/core/types'

import { useDefaultName } from '@/core'

const useVariantProps = <ComponentOptions extends Data>(): VanillaComponentProps => ({
  classes: {
    type: [String, Array, Object] as PropType<CSSClass>,
    default: undefined,
  },
  fixedClasses: {
    type: [String, Array, Object] as PropType<CSSClass>,
    default: undefined,
  },
  variants: {
    type: Object as PropType<Variants<ComponentOptions>>,
    default: undefined,
  },
  errors: {
    type: [String, Array, Object] as PropType<Errors>,
    default: undefined,
  },
  feedback: {
    type: [String] as PropType<string | undefined>,
    default: undefined,
  },
  name: {
    type: [String] as PropType<string>,
    required: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    default(props): string | unknown {
      return useDefaultName(props)
    },
  },
  autocomplete: {
    type: [String, Boolean] as PropType<string | boolean>,
    required: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    default(props): string {
      return props.name || false
    },
  },
  variant: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
  hasItemBellow: {
    type: Boolean as PropType<boolean>,
    default: false,
    required: false,
  },
  hasItemAbove: {
    type: Boolean as PropType<boolean>,
    default: false,
    required: false,
  },
  showErrors: {
    type: Boolean as PropType<boolean>,
    default: true,
    required: false,
  },
  showFeedback: {
    type: Boolean as PropType<boolean>,
    default: true,
    required: false,
  },

})

export default useVariantProps
