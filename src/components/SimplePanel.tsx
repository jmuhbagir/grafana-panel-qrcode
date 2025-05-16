import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';

import QRCode from "react-qr-code";

interface Props extends PanelProps<SimpleOptions> { }

const getStyles = () => {
  return {
    wrapper: css`
      font-family: Open Sans;
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
};

export const SimplePanel: React.FC<Props> = ({ options, width, height, replaceVariables }) => {

  const styles = useStyles2(getStyles);

  let qrcode_value = replaceVariables(options.value);

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
      width: ${width}px;
      height: ${height}px;
    `
      )}
    >
      return (
      <div style={{ width: '100%', height: '100%' }}>
        <img src="https://api.eziswaf.net/v1/app/logo/qrbackground.png" style={{ width: '100%', height: '100%' }} />
        <QRCode data-testid="qrcode-code" style={{
          width: '70%', height: '70%', position: 'absolute',
          left: '50%',
          top: '60%',
          transform: 'translate(-50%, -50%)'
        }} value={qrcode_value} />
      </div>
      );
    </div>
  );
};
