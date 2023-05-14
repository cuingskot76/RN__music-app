/* eslint-disable react-native/no-inline-styles */
import {View, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Heading from '../../components/atom/Heading';
import {favoriteMusic} from '../../constants';
import {COLORS, SIZES} from '../../constants/theme';
import Figure from '../../components/atom/Figure';

const Favorite = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: COLORS.dark,
        // backgroundColor: 'salmon',
        paddingHorizontal: SIZES.lg,
        paddingTop: SIZES.xxl,
        paddingBottom: SIZES.xxl,
      }}>
      <Heading
        isMuted={false}
        style={{
          fontSize: SIZES.xl,
          fontWeight: 'bold',
          paddingHorizontal: SIZES.lg,
        }}>
        Favorites
      </Heading>

      <View>
        <FlatList
          data={favoriteMusic}
          scrollEnabled={false}
          contentContainerStyle={{
            marginTop: SIZES.lg,
          }}
          numColumns={2}
          renderItem={({item, index}) => {
            if (index === 0 || index === 1) {
              return (
                <TouchableOpacity
                  style={{
                    display: 'flex',
                    flex: 1,
                    alignContent: 'center',
                    paddingHorizontal: SIZES.lg,
                  }}>
                  <View
                    style={{
                      height: 150,
                      width: 150,
                      borderRadius: 10,
                      overflow: 'hidden',
                    }}>
                    {/* <Figure alt={item.title}>{item.image}</Figure> */}
                  </View>
                  <View
                    style={{
                      marginTop: SIZES.sm,
                    }}>
                    <Heading
                      isMuted={false}
                      style={{
                        fontSize: SIZES.base,
                        fontWeight: 'bold',
                        marginBottom: 5,
                      }}>
                      {item.title.length > 15
                        ? item.title.substring(0, 15) + '...'
                        : item.title}
                    </Heading>
                    <Heading isMuted={true} style={{fontSize: SIZES.sm}}>
                      {item.performedBy.length > 20
                        ? item.performedBy.substring(0, 20) + '...'
                        : item.performedBy}
                    </Heading>
                  </View>
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity
                  style={{
                    display: 'flex',
                    flex: 1,
                    marginTop: SIZES.lg,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 150,
                      width: 150,
                      borderRadius: 10,
                      overflow: 'hidden',
                    }}>
                    {/* <Figure alt={item.title}>{item.image}</Figure> */}
                  </View>
                  <View
                    style={{
                      marginTop: SIZES.sm,
                    }}>
                    <Heading
                      isMuted={false}
                      style={{
                        fontSize: SIZES.base,
                        fontWeight: 'bold',
                        marginBottom: 5,
                      }}>
                      {item.title.length > 15
                        ? item.title.substring(0, 15) + '...'
                        : item.title}
                    </Heading>
                    <Heading isMuted={true} style={{fontSize: SIZES.sm}}>
                      {item.performedBy.length > 20
                        ? item.performedBy.substring(0, 20) + '...'
                        : item.performedBy}
                    </Heading>
                  </View>
                </TouchableOpacity>
              );
            }
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Favorite;
