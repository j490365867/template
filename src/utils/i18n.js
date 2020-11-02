import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zh_HK from '@/assets/i18n/zh_HK';
import zh_CN from '@/assets/i18n/zh_CN';
import en_US from '@/assets/i18n/en_US';
import cookies from 'js-cookie';

Vue.use(VueI18n);

function getLocale() {
  let lang = cookies.get('locale');
  if (!lang || lang.length < 2) {
    lang = (navigator.languages && navigator.languages.length > 0) ? navigator.languages[0]
      : (navigator.language || navigator.userLanguage);
    if (lang === 'zh') lang = 'zh_CN';
    if (lang === 'en') lang = 'en_US';
  }
  lang = lang.toLowerCase();
  lang = lang.replace(/-/, '_');
  if (lang.length > 3) {
    lang = lang.substring(0, 3) + lang.substring(3).toUpperCase();
  }
  return lang;
}

const locale = getLocale();

const messages = {
  'zh_CN': zh_CN,
  'zh_HK': zh_HK,
  'en_US': en_US
};

export default new VueI18n({
  locale,
  messages
});
