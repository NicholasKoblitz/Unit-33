# Broken App Issues

- Needed to add app.use(express.json()) so that JSON could be parsed.

- The Array.map method does not work with the async/await keywords. So I needed to change the .map method to a for-of loop to get the async information.
