const axios = require("axios");
const MockAdapter = require('axios-mock-adapter');
const { getDeviceModel, gistUrl } = require('./index');

describe('Mocking Sample', () => {
    let axiosMock;
    const deviceModel =
    {
        uid: '462-1000',
        name: '4900',
        manufacturer: 'OKUMA',
        model: 'MA600',
        building: 'A',
        cell: 'INTBODIES',
        location: 'Fort Worth',
        coords: {},
        businessUnit: 'Pressure Pumping',
        coolantDevice: '4900-Coolant',
    }

    beforeAll(() => {
        // setup the express server with the .mock for app.use
    });

    beforeEach(() => {
        axiosMock = new MockAdapter(axios);
    });

    test('Valid Response', async () => {
        axiosMock.onGet(gistUrl).reply(200, JSON.stringify(deviceModel));
        const spy = jest.spyOn(axios, 'get');
        const response = await getDeviceModel();
        expect(spy).toBeCalled();
        expect(response.success).toEqual(true);
        expect(response.result.uid).toEqual('462-1000');
    });

    test('Invalid Response', async () => {
        axiosMock.onGet(gistUrl).reply(200, JSON.stringify({ ...deviceModel, uid: 'Im not what you want me to be' }));
        const spy = jest.spyOn(axios, 'get');
        const response = await getDeviceModel();
        expect(spy).toBeCalled();
        expect(response.success).toEqual(false);
    });

    test('Invalid Status Code', async () => {
        axiosMock.onGet(gistUrl).reply(500, JSON.stringify(deviceModel));
        await expect(getDeviceModel()).rejects.toThrow();
    });

});