import { clone, connect, disconnect, isSupported, purge, slice, store } from '../../src/module';

describe('module', () => {
    describe('clone()', () => {
        describe('without a stored arrayBuffer', () => {
            let arrayBufferId;

            beforeEach(() => {
                arrayBufferId = 34;
            });

            it('should throw an error', (done) => {
                clone(arrayBufferId).catch((err) => {
                    expect(err.message).to.equal(`There is no arrayBuffer stored with an id called "${arrayBufferId}".`);

                    done();
                });
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
    });

    describe('connect()', () => {
        it('should connect a port', () => {
            return connect().then((port) => {
                expect(port).to.be.an.instanceOf(MessagePort);
            });
        });
    });

    describe('disconnect()', () => {
        let port;

        beforeEach(() => connect().then((prt) => (port = prt)));

        it('should disconnect a port', () => {
            return disconnect(port);
        });
    });

    describe('isSupported()', () => {
        it('should check the browser support', () => {
            return isSupported();
        });
    });

    describe('purge()', () => {
        describe('without a stored arrayBuffer', () => {
            let arrayBufferId;

            beforeEach(() => {
                arrayBufferId = 34;
            });

            it('should throw an error', (done) => {
                purge(arrayBufferId).catch((err) => {
                    expect(err.message).to.equal(`There is no arrayBuffer stored with an id called "${arrayBufferId}".`);

                    done();
                });
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
    });

    describe('slice()', () => {
        describe('without a stored arrayBuffer', () => {
            let arrayBufferId;

            beforeEach(() => {
                arrayBufferId = 34;
            });

            it('should throw an error', (done) => {
                slice(arrayBufferId, 0).catch((err) => {
                    expect(err.message).to.equal(`There is no arrayBuffer stored with an id called "${arrayBufferId}".`);

                    done();
                });
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
    });

    describe('store()', () => {
        let arrayBuffer;

        beforeEach(() => {
            const uint8Array = new Uint8Array([1, 2, 3, 4]);

            arrayBuffer = uint8Array.buffer;
        });

        it('should store the given arrayBuffer', () => {
            return store(arrayBuffer);
        });
    });
});
