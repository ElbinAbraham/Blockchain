const requestAccountAccess = async () => {
    try {
      // Request account access from the user
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      // User granted permission; you can now access their accounts
      console.log("Account access granted");
    } catch (error) {
      // User denied permission or an error occurred
      console.error("Account access denied or error:", error);
    }
  };

  const contractAddress = '0xb28E8c5678CA227fDff099e10c5959f7CF1dA609';

  const loadData = async () => {
    console.log("window.ethereum:", window.ethereum);
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
        const contract = new ethers.Contract(contractAddress, contractABI.abi, provider);
        const greeting = await contract.hello();
        alert(greeting);
        // Rest of your code
      } catch (error) {
        console.error("Error creating Web3Provider:", error);
      }
    } else {
      console.error("Web3 provider (MetaMask) is not available.");
    }
  };

  useEffect(() => {
    // Define the event listener function
    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        // User has disconnected their account
        console.log("User disconnected their account");
      } else {
        // User switched to a different account
        console.log("User switched to a different account:", accounts[0]);
      }
    };

    // Add the event listener
    window.ethereum.on('accountsChanged', handleAccountsChanged);

    // Clean up the event listener when the component unmounts
    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
    };
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={loadData}>
          Click Me
        </button>
        <p>
          Change <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>)