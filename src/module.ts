import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'text',
      name: 'Value',
      description: 'Value the QR code will encode',
      defaultValue: 'https://beta.team'
    })

    // TODO - utilize this for something I'm sure we'll want
    // Like implementing all the options here: https://www.npmjs.com/package/react-qr-code
    // .addBooleanSwitch({
    //   path: 'showSeriesCount',
    //   name: 'Show series counter',
    //   defaultValue: false,
    // })
});
