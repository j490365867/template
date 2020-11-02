/**
 * 常用工具方法
 */

export function getPageTitle(pageTitle) {
  const title = 'template';

  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
