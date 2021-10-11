import { Text } from '@chakra-ui/react';

import Image from 'next/image';
import Header from '../header';

import styles from '../../styles/animation.module.css';

const Loading: React.FC = () => {
  return (
    <>
      <div 
        className={styles.animationContainer}
      >
        <Image 
          className={styles.animationLoading}
          src='/assets/loading.svg'
          alt='Svg da animação de loading'
          width='170'
          height='170'
        />
        <Text
          fontSize={['2rem', '2.3rem']}
        >
          Loading...
        </Text>
      </div>
    </>
  );
}

export default Loading;