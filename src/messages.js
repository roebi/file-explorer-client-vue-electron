import enLocale from 'element-ui/lib/locale/lang/en' // English (en)
import deLocale from 'element-ui/lib/locale/lang/de' // German (de)
import zhCNLocale from 'element-ui/lib/locale/lang/zh-CN' // Simplified Chinese (zh-CN)
import jaLocale from 'element-ui/lib/locale/lang/ja' // Japanese (ja)

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
      el: zhCNLocale.el,
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
