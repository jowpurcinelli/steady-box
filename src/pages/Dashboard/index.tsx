import React from 'react';
import { Pane, Text } from 'evergreen-ui'


const Dashboard:React.FC = ( ) => {
    return( 
<Pane
  height={120}
  width={240}
  display="flex"
  alignItems="center"
  justifyContent="center"
  border="default"
>
  <Text>Pane</Text>
</Pane>
    )
}


export default Dashboard;