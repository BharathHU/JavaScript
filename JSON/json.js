async function fun1() {
    try {
        // fetch the data from the URL
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        // check if response is OK
        if (!response.ok) {
            throw new Error("HTTP error! Status: " + response.status);
        }

        // convert response to JSON
        let jsonData = await response.json();

        // log the data
        console.log(jsonData);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// call the async function
fun1();