import { test, expect } from '@grafana/plugin-e2e';

test('should display qrcode when panel is displayed', async ({
  panelEditPage,
  readProvisionedDataSource,
  page,
}) => {
  await panelEditPage.setVisualization('Qrcode');
  await expect(page.getByTestId('qrcode-code')).toBeVisible();
});
