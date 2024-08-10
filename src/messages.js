import enLocale from 'element-plus/dist/locale/en' // English (en)
import deLocale from 'element-plus/dist/locale/de' // German (de)
import zhCnLocale from 'element-plus/dist/locale/zh-cn' // Simplified Chinese (zh-CN)
import jaLocale from 'element-plus/dist/locale/ja' // Japanese (ja)

export default {
    en: {
      el: enLocale.el,
      message: {
        language: 'Language',
        hello: 'hello world',
        nbOfFiles: 'You have less than or equal to 1 file | You have {count} files',
      }
    },
    de: {
      el: deLocale.el,
      message: {
        language: 'Sprache',
        hello: 'Hallo Welt',
        nbOfFiles: 'Sie haben 1 oder weniger Files. | Sie haben {count} Files.',
      },
    },
    zh: {
      el: zhCnLocale.el,
      message: {
        hello: '你好',
      },
    },
    ja: {
      el: jaLocale.el,
      message: {
        hello: 'こ ん に ち は 、 世 界',
      }
    }
  }
