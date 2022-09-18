import mapValues from 'lodash/mapValues'
import { VanillaInputConfig } from '../Input/Config'

export const VanillaDatetimePickerConfig = VanillaInputConfig

export const VanillaDatetimePickerClassesKeys = Object.keys(VanillaDatetimePickerConfig.classes)

export type VanillaDatetimePickerClassesValidKeys = keyof typeof VanillaDatetimePickerConfig.classes

