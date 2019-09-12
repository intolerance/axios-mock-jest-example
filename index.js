const axios = require("axios");

const gistUrl = 'https://gist.githubusercontent.com/intolerance/20954dcbb5b23b474e0dfb420bbdfcc6/raw/9bda6266795474f77dc09847250f8e57029bf737/deviceModal.json';

async function getDeviceModel() {
    try {
        const response = await axios.get(gistUrl);

        if (response.data.uid === '462-1000') {
            return { success: true, result: response.data };
        }

        return { success: false, result: 'Invalid response.' };
    } catch (error) {
        throw Error('Invalid response');
    }
}

// (async () => {
//     const response = await getDeviceModel();
//     console.log(response);
// })();

module.exports = { getDeviceModel, gistUrl };