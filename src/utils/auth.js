import Cookies from 'js-cookie';

const SidKey = 'sid_web';

export function getSid() {
  return Cookies.get(SidKey);
}

export function setSid(sid) {
  return Cookies.set(SidKey, sid);
}

export function removeSid() {
  return Cookies.remove(SidKey);
}
