import { Flex } from '@chakra-ui/react';
import Data from './data';

const DataContainer: React.FC = () => {
  return (
    <Flex
      w={['100%', '45%']}
      justify='space-between'
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
    </Flex>
  )
}

export default DataContainer;