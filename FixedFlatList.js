Instead of using the index, always provide a unique key for each item in your FlatList or SectionList data. This ensures that React Native can correctly identify and update the individual items.  A good way to do this is to assign unique IDs to each object in your data array. This can be done during data fetching or data transformation. 

```javascript
//FixedFlatList.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
];

const FixedFlatList = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <View><Text>{item.text}</Text></View>}
    />
  );
};

export default FixedFlatList;
```