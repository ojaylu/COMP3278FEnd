import { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";

const API = "https://v6.exchangerate-api.com/v6/36f3502ea29f9542981e5263/latest/USD";

function Exchange () {

    const [ currencies, setCurrencies ] = useState({});
    const [ fromCurrency, setFromCurrency ] = useState("");
    const [ toCurrency, setToCurrency ] = useState("");
    const [ exchangeRate, setExchangeRate ] = useState(1);
    const [ fromAmount, setFromAmount ] = useState(0);
    const [ toAmount, setToAmount ] = useState(0);

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                const firstCurrency = Object.keys(data.conversion_rates)[0];
                setCurrencies(data.conversion_rates);
                setFromCurrency(data.base_code);
                setToCurrency(firstCurrency);
                setExchangeRate(data.conversion_rates[firstCurrency]);
            })
    }, []);

    useEffect(() => {
        console.log("from currency: ", fromCurrency);

    }, [fromCurrency]);

    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <NativeSelect
                    onChange={(e) => {setFromCurrency(e.target.value)}}
                    value={fromCurrency}
                >
                    {Object.keys(currencies).map((currency, index) => {
                        return (
                            <option value={currency} key={index}>{currency}</option>
                        )
                    })}
                </NativeSelect>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <NativeSelect
                    onChange={(e) => {setToCurrency(e.target.value)}}
                    value={toCurrency}
                >
                    {Object.keys(currencies).map((currency, index) => {
                        return (
                            <option value={currency} key={index}>{currency}</option>
                        )
                    })}
                </NativeSelect>
            </FormControl>
        </>
    );
}

export default Exchange;