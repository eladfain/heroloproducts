import React from "react";

const UtilContext=React.createContext(
    {
        currency:'USD',
        currencyCheckInterval:10,
        currencyRate:3.5
    }
)

export default UtilContext;