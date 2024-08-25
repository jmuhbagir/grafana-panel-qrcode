import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2, useTheme2 } from '@grafana/ui';
import { PanelDataErrorView } from '@grafana/runtime';

import ReactDOM from "react-dom";
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

export const SimplePanel: React.FC<Props> = ({ options, width, height, replaceVariables}) => {

  const styles = useStyles2(getStyles);

  let qrcode_value = replaceVariables(options.value);

  // TODO - implement this - probably gonna want to return useful errors we can identify
  // if (data.series.length === 0) {
  //   return <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} needsStringField />;
  // }

  console.log("qrcode_value: ", qrcode_value);
  console.log("options: ", options);

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
      <div style={{ background: 'white', padding: '16px', width: '100%', height: '100%' }}>
        <QRCode style={{ height: "100%", width: "100%" }}
          value={qrcode_value}/>
      </div>
    </div>
  );
};
