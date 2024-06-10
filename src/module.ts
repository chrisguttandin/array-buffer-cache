import { load } from 'array-buffer-cache-broker';
import { createLoadOrReturnBroker } from './factories/load-or-return-broker';
import { worker } from './worker/worker';

const loadOrReturnBroker = createLoadOrReturnBroker(load, worker);

export const clone: ReturnType<typeof load>['clone'] = (arrayBufferId) => loadOrReturnBroker().clone(arrayBufferId);

export const connect: ReturnType<typeof load>['connect'] = () => loadOrReturnBroker().connect();

export const disconnect: ReturnType<typeof load>['disconnect'] = (port) => loadOrReturnBroker().disconnect(port);

export const isSupported: ReturnType<typeof load>['isSupported'] = () => loadOrReturnBroker().isSupported();

export const purge: ReturnType<typeof load>['purge'] = (arrayBufferId) => loadOrReturnBroker().purge(arrayBufferId);

export const slice: ReturnType<typeof load>['slice'] = (...args) => loadOrReturnBroker().slice(...args);

export const store: ReturnType<typeof load>['store'] = (arrayBuffer) => loadOrReturnBroker().store(arrayBuffer);
