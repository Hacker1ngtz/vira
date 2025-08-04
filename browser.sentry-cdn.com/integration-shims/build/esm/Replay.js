import {
    consoleSandbox
} from '@sentry/core';
import {
    FAKE_FUNCTION
} from './common.js';

const REPLAY_INTEGRATION_METHODS = ['start', 'stop', 'flush'];

/**
 * This is a shim for the Replay integration.
 * It is needed in order for the CDN bundles to continue working when users add/remove replay
 * from it, without changing their config. This is necessary for the loader mechanism.
 */
function replayIntegrationShim(_options) {
    consoleSandbox(() => {
        // eslint-disable-next-line no-console
        console.warn('You are using replayIntegration() even though this bundle does not include replay.');
    });

    return {
        name: 'Replay',
        ...(REPLAY_INTEGRATION_METHODS.reduce((acc, method) => {
            acc[method] = FAKE_FUNCTION;
            return acc;
        }, {})),
    };
}

export {
    replayIntegrationShim
};
//# sourceMappingURL=Replay.js.map