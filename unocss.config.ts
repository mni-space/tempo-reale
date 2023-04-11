import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
  ],
  shortcuts: {
    'btn-solid': [
      'bg-#222',
      'text-white',
      'border-1',
      'border-#222',
      'hover:bg-white',
      'hover:text-#222',
      'active:bg-#EAEAEA',
      'active:text-#222',
      'dark:bg-white',
      'dark:text-#222',
      'dark:border-white',
      'dark:hover:bg-#222',
      'dark:hover:text-white',
      'dark:active:bg-#333',
      'dark:active:text-white',
    ],
    'btn-ghost': [
      'bg-white',
      'text-black',
      'border-1',
      'border-#EAEAEA',
      'hover:border-black',
      'active:bg-#EAEAEA',
      'active:border-black',
      'dark:border-#333',
      'dark:text-#888',
      'dark:bg-#222',
      'dark:hover:border-white',
      'dark:hover:text-white',
      'dark:active:bg-#333',
      'dark:active:border-white',
      'dark:active:text-white',
    ],
    'btn-borderless': [
      'bg-white',
      'text-black',
      'hover:bg-#e7e7e7',
      'active:bg-#dbdbdb',
      'dark:bg-#222',
      'dark:text-white',
      'dark:hover:bg-#1a1a1a',
      'dark:active:bg-#1e1e1e',
    ],
    'btn-success': [
      'bg-#ECFDF3',
      'text-#008026',
      'border-1',
      'border-#009A29',
      'hover:bg-#E8FFEA',
      'active:bg-#AFF0B5',
      'dark:bg-#AFF0B5',
      'dark:active:bg-#E8FFEA',
    ],
    'btn-error': [
      'bg-#FFECE8',
      'text-#EE0000',
      'border-1',
      'border-#FF1A1A',
      'hover:bg-#FDCDC5',
      'active:bg-#FBACA3',
      'dark:bg-#FDCDC5',
      'dark:active:bg-#FFECE8',
    ],
  },
});
