/**
 * Gives the default build task for the STM32VScode extension
 */
export function getBuildTask() {
  const buildTask = {
    label: 'Build STM',
    type: 'process',
    // eslint-disable-next-line no-template-curly-in-string
    command: '${command:stm32-for-vscode.build}',
    options: {
      // eslint-disable-next-line no-template-curly-in-string
      cwd: '${workspaceRoot}',
    },
    group: {
      kind: 'build',
      isDefault: true,
    },
    problemMatcher: [
      '$gcc',
    ],
  };
  return buildTask;
}

/**
 * Gives the Clean build task for the STM32VScode extension
 */
export function getCleanBuildTask() {
  const buildTask = {
    label: 'Build Clean STM',
    type: 'process',
    // eslint-disable-next-line no-template-curly-in-string
    command: '${command:stm32-for-vscode.cleanBuild}',
    options: {
      // eslint-disable-next-line no-template-curly-in-string
      cwd: '${workspaceRoot}',
    },
    group: {
      kind: 'build',
      isDefault: true,
    },
    problemMatcher: [
      '$gcc',
    ],
  };
  return buildTask;
}

/**
 * Gives the build and flash task for the STM32VScode extension
 */
export function getFlashTask() {
  const flashTask = {
    label: 'Flash STM',
    type: 'process',
    // eslint-disable-next-line no-template-curly-in-string
    command: '${command:stm32-for-vscode.flash}',
    options: {
      // eslint-disable-next-line no-template-curly-in-string
      cwd: '${workspaceRoot}',
    },
    group: {
      kind: 'build',
      isDefault: true,
    },
    problemMatcher: [
      '$gcc',
    ],
  };
  return flashTask;
}

/**
 * Gives the build and flash dfu task for the STM32VScode extension
 */
export function getFlashDFUTask() {
  const flashDFUTask = {
    label: 'Flash STM using DFU',
    type: 'process',
    // eslint-disable-next-line no-template-curly-in-string
    command: '${command:stm32-for-vscode.flashDFU}',
    options: {
      // eslint-disable-next-line no-template-curly-in-string
      cwd: '${workspaceRoot}',
    },
    group: {
      kind: 'build',
      isDefault: true,
    },
    problemMatcher: [
      '$gcc',
    ],
  };
  return flashDFUTask;
}

export default {
  buildTask: getBuildTask(),
  cleanBuild: getCleanBuildTask(),
  flashTask: getFlashTask(),
  flashDFUTask: getFlashDFUTask(),
}