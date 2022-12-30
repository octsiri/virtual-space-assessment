import * as React from 'react';
import styled from 'styled-components';

import {colors} from '../Colors';
import {Props} from './Image.types';

const ImageWrapper = styled.div<Props>`
  padding-bottom: ${(props) => (props.noPadding ? '0px' : props.height)};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => (props.noPadding ? 'auto' : '0px')};
  position: relative;
  overflow: hidden;
`;

const Image = (props: Props): JSX.Element => {
  const style = React.useMemo(
    () => ({
      background: props.background
        ? `${props.background} center center / ${props.objectFit ? props.objectFit : 'cover'} ${
            props.backgroundRepeat ? props.backgroundRepeat : 'repeat'
          }`
        : 'none',
      ...(props.backgroundColor ? {backgroundColor: colors[props.backgroundColor]} : {}),
      ...props.style,
    }),
    [props.background, props.objectFit, props.backgroundRepeat, props.style, props.backgroundColor],
  );

  return (
    <ImageWrapper {...props} alt={props.alt || 'image-src'} style={style}>
      {props.children}
    </ImageWrapper>
  );
};

Image.defaultProps = {
  width: '100%',
  height: '100%',
};

export default React.memo<Props>(Image);
