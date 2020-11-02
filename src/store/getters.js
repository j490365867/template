const getters = {
  sid: state => state.user.sid,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  id: state => state.user.id,
  logo: state => state.user.logo,
  bibiH: state => state.user.bibiH,
  unid: state => state.user.unid,
  certification: state => state.user.certification,
  ossUrl: state => state.user.ossUrl,
  iosDownloadUrl: state => state.user.iosDownloadUrl,
  androidDownloadUrl: state => state.user.androidDownloadUrl
};
export default getters;
