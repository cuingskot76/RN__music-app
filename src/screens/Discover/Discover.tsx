/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Iconicons from 'react-native-vector-icons/Ionicons';

import styles from './Discover.style';
import Heading from '../../components/atom/Heading';
// import {genresMusic, recentlySearchMusic, vibesMusic} from '../../constants';
import Button from '../../components/atom/Button';
import {COLORS, SIZES} from '../../constants/theme';

const Discover = () => {
  const [handleChangeInput, setHandleChangeInput] = useState('');
  const [isInputChanges, setIsInputChanges] = useState(false);

  const onHandleChangeInput = (text: string) => {
    setHandleChangeInput(text);
    if (text.length > 0) {
      setIsInputChanges(true);
    } else {
      setIsInputChanges(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <AntDesign
            name="search1"
            size={20}
            style={{marginRight: 5}}
            color={COLORS.darkWhite}
          />
        </TouchableOpacity>
        <TextInput
          placeholderTextColor={COLORS.darkWhite}
          placeholder="What do you want to listen to?"
          style={styles.searchInput}
          value={handleChangeInput}
          onChangeText={onHandleChangeInput}
        />
        {isInputChanges && (
          <TouchableOpacity
            onPress={() => {
              setHandleChangeInput('');
              setIsInputChanges(false);
            }}>
            <AntDesign name="close" size={30} color={COLORS.darkWhite} />
          </TouchableOpacity>
        )}
      </View>

      {/* recently search */}
      <View>
        <View
          style={{
            marginTop: SIZES.lg,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AntDesign name="clockcircleo" size={20} color={COLORS.darkWhite} />
            <Heading
              isMuted={false}
              style={{
                fontSize: SIZES.lg,
                fontWeight: 'bold',
                marginLeft: SIZES.xs,
              }}>
              Recently searched
            </Heading>
          </View>
        </View>

        <FlatList
          data={recentlySearchMusic}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: SIZES.lg,
            marginTop: SIZES.base,
          }}
          renderItem={({item}) => (
            <TouchableOpacity key={item.id}>
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
          )}
        />
      </View>

      {/* genres */}
      <View>
        <View
          style={{
            marginTop: SIZES.lg,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Iconicons
              name="musical-notes-outline"
              size={20}
              color={COLORS.darkWhite}
            />
            <Heading
              isMuted={false}
              style={{
                fontSize: SIZES.lg,
                fontWeight: 'bold',
                marginLeft: SIZES.xs,
              }}>
              Genres
            </Heading>
          </View>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Heading
              isMuted={true}
              style={{
                fontSize: SIZES.sm,
                marginRight: 5,
              }}>
              View all
            </Heading>
            <AntDesign name="right" size={13} color={COLORS.darkWhite} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={genresMusic}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.base,
          }}
          renderItem={({item}) => (
            <Button
              key={item.id}
              style={{
                backgroundColor: COLORS.darkBlur,
                borderRadius: SIZES.sm,
                padding: SIZES.sm,
                marginRight: SIZES.sm,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                }}>
                {item.title}
              </Text>
            </Button>
          )}
        />
      </View>

      {/* Vibes */}
      <View>
        <View
          style={{
            marginTop: SIZES.lg,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Iconicons
              name="headset-outline"
              size={20}
              color={COLORS.darkWhite}
            />
            <Heading
              isMuted={false}
              style={{
                fontSize: SIZES.lg,
                fontWeight: 'bold',
                marginLeft: SIZES.xs,
              }}>
              Vibes
            </Heading>
          </View>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Heading
              isMuted={true}
              style={{
                fontSize: SIZES.sm,
                marginRight: 5,
              }}>
              View all
            </Heading>
            <AntDesign name="right" size={13} color={COLORS.darkWhite} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={vibesMusic}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.base,
          }}
          renderItem={({item}) => (
            <Button
              key={item.id}
              style={{
                backgroundColor: COLORS.darkBlur,
                borderRadius: SIZES.sm,
                padding: SIZES.sm,
                marginRight: SIZES.sm,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                }}>
                {item.title}
              </Text>
            </Button>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Discover;
