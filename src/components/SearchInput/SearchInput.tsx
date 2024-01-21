// Import necessary modules from React Native
import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import {mvs} from '../../shared/theme/metrices';
import {RADIUS} from '../../shared/theme/radius';
import {COLORS} from '../../shared/theme/pallete';
import {fontFamily} from '../../shared/theme/fonts';
import AnySvg from '../AnySvg';

interface RoundedSearchInputProps extends TextInputProps {
  onSearch: (query: string) => void;
}

const RoundedSearchInput: React.FC<RoundedSearchInputProps> = ({
  onSearch,
  ...props
}) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <View style={styles.container}>
      <AnySvg size={22} disabled name="search" />

      <TextInput
        style={styles.input}
        placeholder="TV shows, movies and more"
        value={query}
        onChangeText={text => setQuery(text)}
        onSubmitEditing={handleSearch}
        {...props}
      />

      {query !== '' && <AnySvg size={17} onPress={handleClear} name="cross" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: mvs(1),
    borderRadius: RADIUS.RADIUS_30,
    borderColor: COLORS.WhiteSmoke,
    backgroundColor: COLORS.WhiteSmoke,
    paddingHorizontal: mvs(20),
    height: mvs(52),
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: mvs(14),
    paddingHorizontal: mvs(10),
    color: COLORS.Tangaroa,
    fontFamily: fontFamily.REGULAR,
  },
  clearIconContainer: {
    marginLeft: 10,
  },
});

export default RoundedSearchInput;
