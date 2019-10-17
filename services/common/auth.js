/*
const loginRequestPayload =
    {"username": "posbanker", "password": "116Think@!"};
*/

const mockLoginResponse = {
    "data": {
        "duoMfaEnabled": false,
        "userGuid": "MOCK-USER-GUID-----9e70-096b7c983534",
        "token": "MOCK-LOGIN-TOKEN--d9IupbHKGAHgFmJUWzP-InliUDXSKW_YCh2YLZpYV4t4YefHzhx7VMULE_aV6CS5m_B9U_v4Q7B1_zdO_7t4ih1AUW9O33wllOjMkeoHaxLyw1MC72PYvtw2sW8MYM4nphDXvccWjUkElw5kXakL_5ZLvry16Bawv_e0zBsFqlcjKNEfKTHmhx0fQGv_3H_x4F2GnOD2gVjmOUNLf1VIUJGqjlvME-6U4Budde-I0ybi05qH-VKifdSddkgcjYnnskDXlYi53T-kD08LRMSIZXLGcsW_x2XQC2T4W2V1sjRjQvyw2",
        "expires": "2020-01-04T02:45:46.8900922",
        "expirationSeconds": 10003599
    }, "success": true, "meta": {"requestTraceId": "cb84c8efe9694d1fa7af9c75cf690349"}
};

const mockSSOResponse =
{"data":{
    "token":"MOCK-SSO-AUTH-TOKEN--6IY5Uv3tp32EhVKoUpZP1oUahnhuxPuKjn4SGhKPWtgFBEsWerEHwBzlUyHQir_WmDEaWYcHj0vIWy0GPz4N-h-4Ia1Z7MsfzmCa8RJCuFPnX4knnkzW7fQPXBobTPrJjNhnrtsEbXE9la63HSaaUIw1_P5-fTx_XZTObl22XpetcHzCK2xH3L-iqb1gKaWiiah5A1aa2Qa6zNdvEXLYcX-4RlWcMOGMQzY57clFTuN7F0_5zKiA3ihA7yr1c12R83TztbyR2oxk-VlMBoSbLVIx2j2BDvz86E6eur-lwxzd_aE6myje7QyL5ja7J8ilU1"},
    "success":true,
    "meta":{"requestTraceId":"e01c5271074447ac8e60c22c15862ac1"}
};


const mockSSODataResponse =
    {
        "Token":"MOCK-SSO-AUTH-TOKEN--6IY5Uv3tp32EhVKoUpZP1oUahnhuxPuKjn4SGhKPWtgFBEsWerEHwBzlUyHQir_WmDEaWYcHj0vIWy0GPz4N-h-4Ia1Z7MsfzmCa8RJCuFPnX4knnkzW7fQPXBobTPrJjNhnrtsEbXE9la63HSaaUIw1_P5-fTx_XZTObl22XpetcHzCK2xH3L-iqb1gKaWiiah5A1aa2Qa6zNdvEXLYcX-4RlWcMOGMQzY57clFTuN7F0_5zKiA3ihA7yr1c12R83TztbyR2oxk-VlMBoSbLVIx2j2BDvz86E6eur-lwxzd_aE6myje7QyL5ja7J8ilU1"
    }

const mockAuthLoginResponse =
    {
        "IsAuthenticated": true,
        "Token": "MOCK-LOGIN-TOKEN--d9IupbHKGAHgFmJUWzP-InliUDXSKW_YCh2YLZpYV4t4YefHzhx7VMULE_aV6CS5m_B9U_v4Q7B1_zdO_7t4ih1AUW9O33wllOjMkeoHaxLyw1MC72PYvtw2sW8MYM4nphDXvccWjUkElw5kXakL_5ZLvry16Bawv_e0zBsFqlcjKNEfKTHmhx0fQGv_3H_x4F2GnOD2gVjmOUNLf1VIUJGqjlvME-6U4Budde-I0ybi05qH-VKifdSddkgcjYnnskDXlYi53T-kD08LRMSIZXLGcsW_x2XQC2T4W2V1sjRjQvyw2",
    };

module.exports = {
    getLoginResponse: (req) => {
        return (mockLoginResponse);
    },
    getSSOResponse: (req) => {
        return(mockSSOResponse);
    },
    getSSODataResponse: (req) => {
        return(mockSSODataResponse);
    },
    getAuthLoginResponse: (req) => {
        return mockAuthLoginResponse;
    }
};
