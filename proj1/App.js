import React from 'react';
import {
  SafeAreaView,
  ToastAndroid,
  Button,
  Alert 
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob'
import Counter from './src/Counter';

let dirs = RNFetchBlob.fs.dirs
console.log('directory',dirs)
function download_test() {
  console.log("Download Started")
  RNFetchBlob
  .config({
    // fileCache: true,
    // appendExt: "mp4",
    addAndroidDownloads : {
        useDownloadManager : true,
        path : dirs.DownloadDir,
        notification : true,
        title : `${parseInt((Math.random()*10000000000000)).toString(16)}.mp4`,
        description : 'A video file.',
        mime : 'video/mp4',
        mediaScannable : true,
      },
    })
    .fetch('GET', 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4')
  .then((res) => {
    Alert.alert('Success!')
    console.log('The file saved to ', res.path());
  })
  // .catch((err) => {
  //   console.log('Download failed', err);
  //   ToastAndroid.showWithGravityAndOffset(
  //     "Something went wrong!",
  //     ToastAndroid.LONG,
  //     ToastAndroid.BOTTOM,
  //     25,
  //     50
  //   );
  //   Alert.alert('Failed!')
  // })
}

const App = () => {
  
  return (
    <SafeAreaView >
      <Button
        title="Download"
        onPress={download_test}
      />
      <Counter />
    </SafeAreaView>
  );
};

export default App;
