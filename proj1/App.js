import React from 'react';
import {
  SafeAreaView,
  TextInput,
  Button,
  Alert 
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob'

let dirs = RNFetchBlob.fs.dirs
function download_test() {
  console.log("first")
  RNFetchBlob
  .config({
    // android only options, these options be a no-op on IOS
    addAndroidDownloads : {
      useDownloadManager : true,
      // Show notification when response data transmitted
      notification : true,
      // Title of download notification
      title : 'Great ! Download Success ! :O ',
      // File description (not notification description)
      description : 'An image file.',
      mime : 'image/png',
      // Make the file scannable  by media scanner
      mediaScannable : true,
    }
  })
  .fetch('GET', 'https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png', {
    //some headers ..
  })
  .then((res) => {
    console.log(res)
    // the temp file path
    console.log('The file saved to ', res.path())
  })
}

const App = () => {
  const [text, onChangeText] = React.useState("Useless Text");


  

  return (
    <SafeAreaView >
       <TextInput
        onChangeText={onChangeText}
        placeholder="useless placeholder"
      />
      <Button
        title="Press me"
        onPress={download_test}
      />
    </SafeAreaView>
  );
};

export default App;
