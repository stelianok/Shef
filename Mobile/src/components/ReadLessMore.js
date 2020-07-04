import React, {useState, useCallback} from 'react';
import {Text, View} from 'react-native';

export default function ReadLessMore(props) {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"

  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);

  return (
    <View>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : 4}
        style={[props.styles, {lineHeight: 21, marginLeft: 25}]}>
        {props.longText}
      </Text>

      {lengthMore ? (
        <Text
          onPress={toggleNumberOfLines}
          style={[props.styles, {lineHeight: 21, fontSize: 15, color: 'cyan'}]}>
          {textShown ? 'Read less...' : 'Read more...'}
        </Text>
      ) : null}
    </View>
  );
}
