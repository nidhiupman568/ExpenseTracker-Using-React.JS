# 💸 Expense Tracker Project Using React.JS💸

🎉 Welcome to the **Expense Tracker** project! 🎉 This web application 🖥️, built with **React** ⚛️, is designed 📝 to help users 👥 keep track 🧾 of their expenses 💵. With this app 🛠️, users 👥 can easily ✨ add ➕ and delete ❌ expenses 💸, view 📊 a summary 📝 of their spending habits 💰, and see 🖥️ the available balance 💵 the user 👤 has left 🏦. Building an Expense Tracker 📊 with React ⚛️ helps users 👥 learn 📚 and practice 🛠️ creating web applications 🌐.

## 📋 Description

The **Expense Tracker** 💵 is a simple yet powerful 🛠️ web application 🖥️ that provides real-time 📊 tracking of expenses 💸. With its user-friendly 🧑‍💻 interface 🖥️, users 👥 can:

- **Add** ➕ transactions 💸
- **Edit** ✏️ transactions 💸
- **Delete** ❌ transactions 💸

The application 🖥️ maintains an updated 💯 list 📋 of expenses 💸 and displays 🖥️ the total expenses 💵 for visibility 👁️. The use of React ⚛️ components 🧩 ensures that the codebase 🖥️ is structured 🏗️ and modular 🧩, making it easy 🔧 to maintain and scale 📈.

## 🛠️ Prerequisites and Technologies Used

- **Node.js** 🖥️: JavaScript runtime 🚀
- **React** ⚛️: JavaScript library 📚 for building user interfaces 🖥️
- **JavaScript** 💻: Programming language 🖥️
- **HTML/CSS** 📝: For structuring 📋 and styling 🎨 the application

## 🚀 Approach and Functionality

To build 💻 the Expense Tracker 📊, the project involves:

1. **Creating** 🛠️ a user interface 🖥️ that allows users 👥 to:
   - **Add** ➕ transactions 💸
   - **Edit** ✏️ transactions 💸
   - **Delete** ❌ transactions 💸

2. **Maintaining** 🗂️ an updated 💯 list 📋 of expenses 💸 within the app’s state 🔄.

3. **Displaying** 🖥️ the total expenses 💵 for visibility 👁️.

4. **Utilizing** 🛠️ React ⚛️ components 🧩 to keep the codebase 🖥️ structured 🏗️ and modular 🧩, promoting maintenance 🔧 and scalability 📈.

## 📋 Steps to Create Expense Tracker in React

1. **Create** 🛠️ a new React JS project 🖥️ using the following command 🖥️:

   ```bash
   npx create-react-app <<Project_Name>> 🎉
   ```

2. **Change** 🚶‍♂️ to the project directory 📂:

   ```bash
   cd <<Project_Name>> 📂
   ```

3. **Install** 📥 the required modules 🛠️:

   ```bash
   npm i styled-components 🎨
   ```

4. **Create** 📂 a folder called `components` 📦 in the `src` directory 📂 and create the following files 📄 inside it:

   - `AddTransaction.js` ✏️
   - `OverviewComponent.js` 🖥️
   - `Tracker.js` 🛠️
   - `TransactionItem.js` 💳
   - `TransactionsContainer.js` 🗂️

   Also, create a file 📝 called `globalStyles.js` in the `src` directory 📂.

   ### Example Code

   - **`App.js`** 🖥️: This component 🧩 is responsible 🔧 for rendering 🖥️ the layout 📋 of the application.
   - **`AddTransaction.js`** ✏️: This component 🧩 allows users 👥 to add ➕ transactions 💸.
   - **`OverviewComponent.js`** 🖥️: This component 🧩 displays 🖥️ the balance 💰 along with an “Add” ➕ button.
   - **`Tracker.js`** 🛠️: The component 🧩 that brings together 🛠️ parts of the application 🖥️ such as overview 🖥️, transaction list 📋, and addition ➕ of transactions 💸.
   - **`TransactionItem.js`** 💳: This component 🧩 displays 🖥️ transaction details 📋 including description 📝, amount 💵, and a button 🖲️ to remove ❌ it from the list 📋.
   - **`TransactionsContainer.js`** 🗂️: This component 🧩 filters 🔍 the list 📋 of transactions 💸, offers a search 🔍 input field 🖥️, and displays 🖥️ only filtered transaction items 📋.

## 🚀 Steps to Run the Project

1. **Start** 🚀 the project by typing 🖥️ the following command 🖥️ in the terminal:

   ```bash
   npm start 🚀
   ```

2. **Open** 🔓 your web browser 🌐 and type 🖥️ the following URL 🌐:

   ```
   http://localhost:3000/ 🌐
   ```

## 🔄 Clone the Repository

To clone 🧩 the repository 🗂️, follow these steps:

1. **Clone** 🧩 the repository 🗂️ using the following command 🖥️:

   ```bash
   git clone https://github.com/nidhiupman568/ExpenseTracker-Using-React.JS.git 🔄
   ```

2. **Navigate** 🚶‍♂️ into the project directory 📂:

   ```bash
   cd your-repository 📂
   ```

3. **Install** 📥 the dependencies 🛠️:

   ```bash
   npm install 📥
   ```

## 📸 Screenshots (Output)

Here’s a sneak peek 🖼️ of the Expense Tracker 📊 in action ⏳:

![expense](https://github.com/user-attachments/assets/6b7d4e9a-ceff-4a69-9a3a-ec3f61878966)

## 🎉 Enjoy using the Expense Tracker! 🎉 Feel free to share 🗣️ your feedback 📝 or contribute 🤝 to the project by making a pull request 🚀. Happy tracking! 🧾💰

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
