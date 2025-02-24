<script setup lang="ts">
import { CurrencyDisplay, CurrencyInputOptions, useCurrencyInput } from 'vue-currency-input';
import { watch } from 'vue';
import { QInputProps } from 'quasar';

type omitProps = 'modelValue' | 'onUpdate:modelValue'

type QInputAndCurrency = Omit<QInputProps, omitProps> & Partial<CurrencyInputOptions>
interface QCurrencyInputProps extends QInputAndCurrency {
  modelValue: number | string
}

const props = withDefaults(defineProps<QCurrencyInputProps>(), {
  currency: 'BRL',
  locale: 'pt-BR',
  currencyDisplay: CurrencyDisplay.symbol,
  hideCurrencySymbolOnFocus: true,
  hideGroupingSeparatorOnFocus: false,
  hideNegligibleDecimalDigitsOnFocus: true,
  autoDecimalDigits: false,
  useGrouping: true,
  accountingSign: false,
  precision: 2
})


const {
  inputRef,
  formattedValue,
  numberValue,
  setValue,
  setOptions,
} = useCurrencyInput(props);


watch(
  () => props.modelValue,
  (newModel) => {
    setValue(Number(newModel));
  }
);


defineExpose({
  inputRef,
  formattedValue,
  numberValue,
  setValue,
  setOptions
})
</script>

<template>
  <q-input
    ref="inputRef"
    v-bind="props"
    v-model="formattedValue"
  />
</template>

