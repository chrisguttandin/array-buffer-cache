import { beforeEach, describe, expect, it } from 'vitest';
import { clone, connect, disconnect, isSupported, purge, slice, store } from '../../src/module';

describe('module', () => {
    describe('clone()', () => {
        it('should be a function', () => {
            expect(clone).to.be.a('function');
        });

        if (typeof window !== 'undefined') {
            describe('without a stored arrayBuffer', () => {
                let arrayBufferId;

                beforeEach(() => {
                    arrayBufferId = 34;
                });

                it('should throw an error', () => {
                    const { promise, resolve } = Promise.withResolvers();

                    clone(arrayBufferId).catch((err) => {
                        expect(err.message).to.equal(`There is no arrayBuffer stored with an id called "${arrayBufferId}".`);

                        resolve();
                    });

                    return promise;
                });
            });

            describe('with a stored arrayBuffer', () => {
                let arrayBufferId;
                let values;

                beforeEach(() => {
                    values = [1, 2, 3, 4];

                    const uint8Array = new Uint8Array(values);

                    return store(uint8Array.buffer).then((rryBffrD) => (arrayBufferId = rryBffrD));
                });

                it('should clone the arrayBuffer with the given id', () => {
                    return clone(arrayBufferId).then((arrayBuffer) => {
                        const uint8Array = new Uint8Array(arrayBuffer);

                        expect(Array.from(uint8Array)).to.deep.equal(values);
                    });
                });
            });
        }
    });

    describe('connect()', () => {
        it('should be a function', () => {
            expect(connect).to.be.a('function');
        });

        if (typeof window !== 'undefined') {
            it('should connect a port', () => {
                return connect().then((port) => {
                    expect(port).to.be.an.instanceOf(MessagePort);
                });
            });
        }
    });

    describe('disconnect()', () => {
        it('should be a function', () => {
            expect(disconnect).to.be.a('function');
        });

        if (typeof window !== 'undefined') {
            describe('when running in a browser', () => {
                let port;

                beforeEach(() => connect().then((prt) => (port = prt)));

                it('should disconnect a port', () => {
                    return disconnect(port);
                });
            });
        }
    });

    describe('isSupported()', () => {
        it('should be a function', () => {
            expect(isSupported).to.be.a('function');
        });

        if (typeof window !== 'undefined') {
            it('should check the browser support', () => {
                return isSupported();
            });
        }
    });

    describe('purge()', () => {
        it('should be a function', () => {
            expect(purge).to.be.a('function');
        });

        if (typeof window !== 'undefined') {
            describe('without a stored arrayBuffer', () => {
                let arrayBufferId;

                beforeEach(() => {
                    arrayBufferId = 34;
                });

                it('should throw an error', () => {
                    const { promise, resolve } = Promise.withResolvers();

                    purge(arrayBufferId).catch((err) => {
                        expect(err.message).to.equal(`There is no arrayBuffer stored with an id called "${arrayBufferId}".`);

                        resolve();
                    });

                    return promise;
                });
            });

            describe('with a stored arrayBuffer', () => {
                let arrayBufferId;

                beforeEach(() => {
                    const uint8Array = new Uint8Array([1, 2, 3, 4]);

                    return store(uint8Array.buffer).then((rryBffrD) => (arrayBufferId = rryBffrD));
                });

                it('should purge the arrayBuffer with the given id', () => {
                    return purge(arrayBufferId);
                });
            });
        }
    });

    describe('slice()', () => {
        it('should be a function', () => {
            expect(slice).to.be.a('function');
        });

        if (typeof window !== 'undefined') {
            describe('without a stored arrayBuffer', () => {
                let arrayBufferId;

                beforeEach(() => {
                    arrayBufferId = 34;
                });

                it('should throw an error', () => {
                    const { promise, resolve } = Promise.withResolvers();

                    slice(arrayBufferId, 0).catch((err) => {
                        expect(err.message).to.equal(`There is no arrayBuffer stored with an id called "${arrayBufferId}".`);

                        resolve();
                    });

                    return promise;
                });
            });

            describe('with a stored arrayBuffer', () => {
                let arrayBufferId;
                let values;

                beforeEach(() => {
                    values = [1, 2, 3, 4];

                    const uint8Array = new Uint8Array(values);

                    return store(uint8Array.buffer).then((rryBffrD) => (arrayBufferId = rryBffrD));
                });

                it('should clone the arrayBuffer with the given id', () => {
                    return slice(arrayBufferId, 0).then((arrayBuffer) => {
                        const uint8Array = new Uint8Array(arrayBuffer);

                        expect(Array.from(uint8Array)).to.deep.equal(values);
                    });
                });

                it('should slice the arrayBuffer with the given id', () => {
                    return slice(arrayBufferId, Uint8Array.BYTES_PER_ELEMENT, Uint8Array.BYTES_PER_ELEMENT * 3).then((arrayBuffer) => {
                        const uint8Array = new Uint8Array(arrayBuffer);

                        expect(Array.from(uint8Array)).to.deep.equal(values.slice(1, 3));
                    });
                });
            });
        }
    });

    describe('store()', () => {
        it('should be a function', () => {
            expect(store).to.be.a('function');
        });

        if (typeof window !== 'undefined') {
            describe('when running in a browser', () => {
                let arrayBuffer;

                beforeEach(() => {
                    const uint8Array = new Uint8Array([1, 2, 3, 4]);

                    arrayBuffer = uint8Array.buffer;
                });

                it('should store the given arrayBuffer', () => {
                    return store(arrayBuffer);
                });
            });
        }
    });
});
