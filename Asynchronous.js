//...task 1
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
        console.log(value);
    }
}
//...task 2
async function awaitCall() {
    // Simulate fetching data from an API
    const fetchData = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("Data from API");
            }, 2000); // Simulating a delay of 2 seconds
        });
    };

    // Wait for the API response using await
    const data = await fetchData();

    // Log the data
    console.log(data);
}
    // Call the async function
    awaitCall();
//...task 3
async function awaitCall() {
    try {
        // Simulate fetching data from an API
        const fetchData = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simulate an error (uncomment the next line to simulate an error)
                    // reject("Error: Failed to fetch data from API");

                    // Simulate successful data retrieval
                    resolve("Data from API");
                }, 2000); // Simulating a delay of 2 seconds
            });
        };

        // Wait for the API response using await
        const data = await fetchData();

        // Log the data
        console.log(data);
    } catch (error) {
        // Log a user-friendly error message
        console.error("An error occurred:", error);
    }
}

// Call the async function
awaitCall();

async function chainedAsyncFunctions() {
    // Define three separate async functions
    const asyncFunction1 = async () => {
        await new Promise(resolve => setTimeout(() => {
            console.log("Async Function 1");
            resolve();
        }, 1000));
    };

    const asyncFunction2 = async () => {
        await new Promise(resolve => setTimeout(() => {
            console.log("Async Function 2");
            resolve();
        }, 1000));
    };

    const asyncFunction3 = async () => {
        await new Promise(resolve => setTimeout(() => {
            console.log("Async Function 3");
            resolve();
        }, 1000));
    };

    // Chain the async functions using await
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}

// Call the chainedAsyncFunctions function
chainedAsyncFunctions();



//...task 4
async function concurrentRequests() {
    try {
        // Make two API calls concurrently using Promise.all()
        const [result1, result2] = await Promise.all([
            fetch('https://api.example.com/endpoint1'),
            fetch('https://api.example.com/endpoint2')
        ]);

        // Extract and log the combined results
        const data1 = await result1.json();
        const data2 = await result2.json();
        console.log("Combined Results:", data1, data2);
    } catch (error) {
        // Handle errors gracefully
        console.error("An error occurred:", error);
    }
}

// Call the concurrentRequests function
concurrentRequests();




//...task 5
async function parallelCalls(urls) {
    try {
        // Make multiple API calls concurrently using Promise.all()
        const responses = await Promise.all(
            urls.map(url => fetch(url))
        );

        // Extract and log the responses
        const responseData = await Promise.all(
            responses.map(response => response.json())
        );
        console.log("Responses:", responseData);
    } catch (error) {
        // Handle errors gracefully
        console.error("An error occurred:", error);
    }
}






