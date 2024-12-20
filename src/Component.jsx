import { Image, Text, View } from 'react-native';

export default function Component({ progLang, exp, image, stl }) {
  return (
    <View>
      <Text style={stl.text}>{progLang}</Text>
      <Text style={stl.text}>{exp}</Text>
      <View style={stl.imgContainer}>
        <Image style={stl.logo} source={image}/>
      </View>
    </View>
  )
}