
const axios = require('axios')
const authUrl = 'https://authorization.go.com/token';
const urlParms = 'grant_type=assertion&assertion_type=public&client_id=WDPRO-MOBILE.MDX.WDW.ANDROID-PROD';

exports.lambdaHandler = async (event, context) => {
    try {
        const ret = await axios.post(`${authUrl}?${urlParms}`);
        return ret.data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
