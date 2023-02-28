export function waitUntilRendered(check) {
  return new Promise((resolve, reject) => {
    const waitUntilElementLoad = (retryTime = 0) => {
      // do not wait longer than 2.5 seconds
      if (retryTime > 100) {
        reject();
        return;
      }

      const result = check();

      // retry selection when not found otherwise resolve it
      if (!result) {
        window.setTimeout(() => waitUntilElementLoad(retryTime + 1), 25)
      } else {
        resolve();
      }
    }

    waitUntilElementLoad();
  })
}