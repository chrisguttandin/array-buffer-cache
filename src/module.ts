import { load } from 'array-buffer-cache-broker';
import { worker } from './worker/worker';

const blob: Blob = new Blob([worker], { type: 'application/javascript; charset=utf-8' });

const url: string = URL.createObjectURL(blob);

const arrayBufferCache = load(url);

export const clone = arrayBufferCache.clone;

export const connect = arrayBufferCache.connect;

export const disconnect = arrayBufferCache.disconnect;

export const isSupported = arrayBufferCache.isSupported;

export const purge = arrayBufferCache.purge;

export const slice = arrayBufferCache.slice;

export const store = arrayBufferCache.store;

URL.revokeObjectURL(url);
