import {useEffect} from 'react';
import {BackHandler} from 'react-native';

function useBackListener(onBackPress: () => boolean | null | undefined) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, [onBackPress]);
}

export default useBackListener;
