import { useAppDispatch } from 'redux/hooks';
import { SET_APP_VISIT_ALERT_FLAG } from 'redux/slices/PlayApp';

const useLocalStorage = () => {
  const dispatch = useAppDispatch();

  // localStorage에 저장
  const setItemWithExpireTime = (keyName: string, keyValue: string, tts: number) => {
    const obj = {
      value: keyValue,
      expire: Date.now() + tts,
    };
    const objString = JSON.stringify(obj);
    window.localStorage.setItem(keyName, objString);
  };

  // localStorage 읽고 24시간 지났는지 체크
  const getItemWithExpireTime = (keyName: string) => {
    const objString = window.localStorage.getItem(keyName);
    if (!objString) return dispatch(SET_APP_VISIT_ALERT_FLAG(true));
    const obj = JSON.parse(objString);
    if (Date.now() > obj.expire) {
      window.localStorage.removeItem(keyName);
      return dispatch(SET_APP_VISIT_ALERT_FLAG(true));
    }
    return dispatch(SET_APP_VISIT_ALERT_FLAG(false));
  };

  return { setItemWithExpireTime, getItemWithExpireTime };
};
export default useLocalStorage;
