(function () {
  const SHOOTREADY_KEY = 'wav-projectflow-shootready-redcat-v1';

  function readJSON(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return null;
    }
  }

  function readShootReady() {
    return readJSON(SHOOTREADY_KEY) || readJSON('wav-shootready-redcat-v4');
  }

  function writeShootReady(data) {
    if (!data) return;
    localStorage.setItem(SHOOTREADY_KEY, JSON.stringify(data));
    localStorage.setItem('wav-shootready-redcat-v4', JSON.stringify(data));
  }

  async function ensureShootReadySeed(url) {
    const existing = readShootReady();
    if (existing) return existing;
    try {
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) throw new Error('Seed request failed');
      const seed = await response.json();
      writeShootReady(seed);
      return seed;
    } catch (error) {
      return null;
    }
  }

  function makeBackup(projectFlowState) {
    return {
      app: 'WAV ProjectFlow Studio',
      format: 'wav-projectflow-complete-backup',
      version: 1,
      exportedAt: new Date().toISOString(),
      projectFlow: projectFlowState,
      modules: {
        shootReady: {
          redcat: readShootReady()
        }
      }
    };
  }

  function restoreBackup(backup) {
    if (backup && backup.modules && backup.modules.shootReady) {
      writeShootReady(backup.modules.shootReady.redcat);
    }
    return backup && backup.projectFlow ? backup.projectFlow : backup;
  }

  window.WAVShared = {
    SHOOTREADY_KEY,
    readShootReady,
    writeShootReady,
    ensureShootReadySeed,
    makeBackup,
    restoreBackup
  };
})();
