import React, {useEffect, useState} from 'react';
import {ImageStyle, StyleProp} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IMAGES} from '../../assets/images';

// Placeholder image URL or base64 encoded image data
const placeholderImage = IMAGES.placeholderImage;
const API_CONFIG = 'https://image.tmdb.org/t/p/w1280';
interface ImagePlaceholderProps {
  image: string;
  imgStyle?: StyleProp<ImageStyle>;
  imageWithUrl?: boolean;
  requireImage?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  image,
  imgStyle,
  requireImage,
  ...props
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageKey, setImageKey] = useState(0); // Add imageKey state

  useEffect(() => {
    setLoading(true);
    setError(false);
    setImageKey(prevKey => prevKey + 1); // Increment imageKey when URL changes
  }, [image]);

  const handleImageLoaded = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false);
    props;
    setError(true);
  };

  return (
    <FastImage
      key={imageKey} // Use the imageKey as a key to force re-render when URL changes
      source={{
        uri: props?.imageWithUrl ? image : `${API_CONFIG}${image}`,
        priority: FastImage.priority.normal,
      }}
      style={[styles.image, imgStyle as object]}
      onLoad={handleImageLoaded}
      onError={handleImageError}
      resizeMode="cover"
      {...props}>
      {loading || error ? (
        <FastImage
          source={placeholderImage}
          style={[styles.image, imgStyle as object]}
        />
      ) : null}
    </FastImage>
  );
};

const styles = {
  image: {
    width: '100%',
    height: '100%',
  },
};

export default ImagePlaceholder;
