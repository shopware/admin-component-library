const { toMatchImageSnapshot } = require('jest-image-snapshot');
const fs = require('fs');

const customSnapshotsDir = `${process.cwd()}/__snapshots__`;
const customReceivedDir = `${process.cwd()}/__snapshots__/__received__`;

module.exports = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async preRender(page, context) {
    await page.setViewportSize({ width: 850, height: 650 })

    // use bigger viewport for data-table
    if (context.id.startsWith('interaction-tests-table-and-list')) {
      await page.setViewportSize({ width: 1600, height: 900 })
    }
  },
  async postRender(page, context) {
    // Render screenshots only for interaction tests with Visual Test name
    if (
      !context.id.startsWith('interaction-tests') ||
      !context.name.startsWith('Visual Test')
    ) {
      return;
    }

    const image = await page.screenshot({
      animations: 'disabled',
    });

    expect(image).toMatchImageSnapshot({
      comparisonMethod: 'ssim',
      customDiffConfig: { ssim: 'fast' },
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
      storeReceivedOnFailure: true,
      customReceivedDir: customReceivedDir,
    });
  },
};