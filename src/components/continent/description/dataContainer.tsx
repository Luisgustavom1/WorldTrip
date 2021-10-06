import { Stack } from '@chakra-ui/react';
import Data from './data';

const DataContainer: React.FC = () => {
  return (
    <Stack
      direction='row'
      spacing='4.2rem'
    >  
      <Data 
        title='países'
        estatistic={50}
      />
      <Data 
        title='línguas'
        estatistic={60}
      />
      <Data 
        title='cidade +100'
        estatistic={27}
      />
    </Stack>
  )
}

export default DataContainer;