import enLocale from 'element-ui/lib/locale/lang/en' // English (en)
import deLocale from 'element-ui/lib/locale/lang/de' // German (de)
import zhCNLocale from 'element-ui/lib/locale/lang/zh-CN' // Simplified Chinese (zh-CN)
import jaLocale from 'element-ui/lib/locale/lang/ja' // Japanese (ja)

export default {
    en: {
      message: {
        hello: 'hello world',
        nbOfFiles: 'You have less than or equal to 1 file',
        enLocale
      }
    },
    de: {
      message: {
        hello: 'Hallo Welt',
        nbOfFiles: 'Sie haben 1 oder weniger Files.',
        deLocale
      }
    },
    ja: {
      message: {
        hello: 'こ ん に ち は 、 世 界',
        nbOfFiles: 'TODO Translate: You have less than or equal to 1 file',
        jaLocale
      }
    },
    zh: {
      message: {
        hello: '你好',
        nbOfFiles: 'TODO Translate: You have less than or equal to 1 file',
        zhCNLocale
      },
    }
  }
