import { Box, Heading } from '@gluestack-ui/themed';
import { BlurView } from 'expo-blur';
import { ReactNode } from 'react';
import { DimensionValue } from 'react-native';

type Props = {
  header?: string;
  blurIntensity?: number;
  boxHeight?: DimensionValue;
  children: ReactNode;
};

const BlurredContainer = ({
  header,
  blurIntensity = 80,
  boxHeight = '50%',
  children,
}: Props) => {
  return (
    <Box paddingLeft={20} paddingRight={20}>
      <Box height={boxHeight} />
      <BlurView
        intensity={blurIntensity}
        tint={'dark'}
        style={{ overflow: 'hidden', borderRadius: 14 }}>
        <Box width={'100%'} rounded={'$xl'} padding={16}>
          {header && (
            <Heading size={'xl'} color={'$white'} marginBottom={16}>
              {header}
            </Heading>
          )}
          <Box gap={14}>{children}</Box>
        </Box>
      </BlurView>
    </Box>
  );
};

export default BlurredContainer;
