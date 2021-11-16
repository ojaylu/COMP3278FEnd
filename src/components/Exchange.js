import { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import NativeSelect from "@mui/material/NativeSelect";
import Input from "@mui/material/Input";

const API = "https://v6.exchangerate-api.com/v6/36f3502ea29f9542981e5263/latest/USD";

function Exchange () {

    const [ currencies, setCurrencies ] = useState({});
    const [ fromCurrency, setFromCurrency ] = useState("");
    const [ toCurrency, setToCurrency ] = useState("");
    const [ fromAmount, setFromAmount ] = useState(0);
    const [ toAmount, setToAmount ] = useState(0);
    const [ error, setError ] = useState("");

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                const firstCurrency = Object.keys(data.conversion_rates)[0];
                setCurrencies(data.conversion_rates);
                setFromCurrency(data.base_code);
                setToCurrency(firstCurrency);
            })
    }, []);

    const handleFromAmount = (event) => {
        setFromAmount(event.target.value);
        const value = Number(event.target.value);
        if (!value) {
            setError("Please enter numbers!");
        } else {
            setToAmount(value * currencies[toCurrency] / currencies[fromCurrency]);
            setError("");
        }
    }

    const handleToAmount = (event) => {
        setToAmount(event.target.value);
        const value = Number(event.target.value);
        if (!value) {
            setError("Please enter numbers!");
        } else {
            setFromAmount(value * currencies[fromCurrency] / currencies[toCurrency]);
            setError("");
        }
    }

    return (
        <>
        <div class="card">
            <div class="card-header" style={{background: "black", color:"white"}}>
                Currency Convertor
            </div>
            <div class="card-body">
                <div style={{display: "flex", alignItems: "center"}}>
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
                <Input value={fromAmount} onChange={(event) => {handleFromAmount(event)}} color="primary" />
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
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
                <Input value={toAmount} onChange={(event) => {handleToAmount(event)}} color="primary" />
                </div>
                {error? <p>{error}</p> : null}
            </div>
        </div>

        </>
    );
}

export default Exchange;