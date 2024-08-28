import { test, expect } from '@grafana/plugin-e2e';

test('should display circle when data is passed to the panel', async ({
  panelEditPage,
  readProvisionedDataSource,
  page,
}) => {
  await panelEditPage.setVisualization('Qrcode');
  await expect(page.getByTestId('qrcode-code')).toBeVisible();
});
