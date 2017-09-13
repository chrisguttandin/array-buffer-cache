import { clone, connect, disconnect, store } from '../../src/module';

describe('module', () => {

    describe('clone()', () => {

        let arrayBufferId;
        let values;

        beforeEach(() => {
            values = [ 1, 2, 3, 4 ];

            const uint8Array = new Uint8Array(values);

            return store(uint8Array.buffer)
                .then((rryBffrD) => arrayBufferId = rryBffrD);
        });

        it('should clone an ArrayBuffer', () => {
            return clone(arrayBufferId)
                .then((arrayBuffer) => {
                    const uint8Array = new Uint8Array(arrayBuffer);

                    expect(Array.from(uint8Array)).to.deep.equal(values);
                });
        });

    });

    describe('connect()', () => {

        let port;

        beforeEach(() => {
            const messageChannel = new MessageChannel();

            port = messageChannel.port1;
        });

        it('should connect a port', () => {
            return connect(port);
        });

    });

    describe('disconnect()', () => {

        let port;

        beforeEach(() => {
            const messageChannel = new MessageChannel();

            port = messageChannel.port1;
        });

        it('should disconnect a port', () => {
            return disconnect(port);
        });

    });

    describe('purge()', () => {

        // @todo

    });

    describe('slice()', () => {

        // @todo

    });

    describe('store()', () => {

        // @todo

    });

});
