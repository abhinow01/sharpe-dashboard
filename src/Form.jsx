import React, { useState ,useEffect} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Form() {
  const [walletAddress, setWalletAddress] = useState(localStorage.getItem('walletAddress') || '');
  const [amount, setAmount] = useState(localStorage.getItem('amount')||'');
  const [error, setError] = useState('');

  const isValidAddress = (address) => {
    if (!/^(0x)?[0-9a-fA-F]{40}$/.test(address)) {
      return false;
    } else if (/^(0x)?[0]{40}$|^(0x)?[fF]{40}$/.test(address)) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (walletAddress.trim() === '') {
      setError('Error! Wallet address cannot be empty!');
      return;
    }

    if (!isValidAddress(walletAddress)) {
      setError('Error! Invalid Ethereum address!');
      return;
    }

    console.log('Form submitted with wallet address:', walletAddress);
    console.log('Form submitted with amount:', amount);

    // Clear form fields and error state after successful submission
    setWalletAddress('');
    setAmount('');
    setError('');

    localStorage.removeItem('walletAddress');
    localStorage.removeItem('amount');
  };
    useEffect(()=>{
        localStorage.setItem('walletAddress', walletAddress);
        localStorage.setItem('amount',amount);


    },[walletAddress,amount]);



  return (
    <center>
      <Container maxWidth="sm">
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Transaction Page
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Wallet Address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </center>
  );
}

export default Form;
