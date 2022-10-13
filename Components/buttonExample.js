import * as React from 'react';
import { Button } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

export const ButtonExample = () => {
  const { colors } = useTheme();
  return (
    <Button raised 
    mode="contained"
    onPress={() => alert("cool right?")}
    color={colors.accent}
    theme={{
      roundness: 3,
      fonts: { medium: 'Open Sans' }
    }}
    // {...props}
    >
      Press me
    </Button>
  )
}