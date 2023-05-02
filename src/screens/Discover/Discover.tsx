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
import Icon from 'react-native-vector-icons/AntDesign';

import {
  ChevronRight,
  ClockIcon,
  CloseIcon,
  MusicIconActive,
  SearchIcon,
  VibesIcon,
} from '../../../public/icons';
import styles from './Discover.style';
import {COLORS, SIZES} from '../../constants/theme';
import Heading from '../../components/atom/Heading';
import {genresMusic, recentlySearchMusic, vibesMusic} from '../../constants';
import Button from '../../components/atom/Button';
import Figure from '../../components/atom/Figure';

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
          <Icon name="search1" size={30} color={COLORS.dark} />
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
            <Icon name="closesquareo" size={30} color={COLORS.dark} />
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
            <ClockIcon />
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
                <Figure alt={item.title}>{item.image}</Figure>
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
            <MusicIconActive />
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
              }}>
              View all
            </Heading>
            <ChevronRight />
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
            <VibesIcon />
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
              }}>
              View all
            </Heading>
            <ChevronRight />
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
