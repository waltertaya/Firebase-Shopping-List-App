# Firebase Shopping List App

This project is a simple web application for managing a shopping list using Firebase Realtime Database. Users can add items to the list, which are then stored in Firebase and displayed on the webpage in real-time. Items can also be removed by clicking on them.

## Usage

1. Open in your web browser or use app on the mobile phone.
2. Type the name of the item you want to add into the input field.
3. Click the "Add" button to add the item to the shopping list.
4. To remove an item, click on it in the list.

## Code Structure

- The Firebase configuration is set up using `initializeApp()` with the provided settings.
- The `shoppingListInDB` constant refers to the database reference for the 'shoppingList' node.
- The application listens for changes in the database using `onValue()` and updates the UI accordingly.
- Functions like `updateList()`, `clearList()`, `clearInput()`, and `noItemsDisplay()` handle UI updates and interactions.
- Event listeners are set up to add items to the database when the "Add" button is clicked and to remove items from the database when they are clicked on the UI.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

- **@waltertaya**
