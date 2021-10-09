import { Stack } from '@chakra-ui/react';
import { info } from '../../../types';
import Data from './data';

interface DataContainerProps {
  info: info
}

const DataContainer = ({ info }: DataContainerProps) => {
  return (
    <Stack
      direction='row'
      spacing='4.2rem'
    >  
      <Data 
        title='países'
        estatistic={info.countries}
      />
      <Data 
        title='línguas'
        estatistic={info.languages}
      />
      <Data 
        title='cidade +100'
        estatistic={info['cities+100']}
      />
    </Stack>
  )
}

export default DataContainer;